import { promises as fs } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const publicDir = path.join(root, "public");
const optimizedDir = path.join(publicDir, "optimized");
const manifestPath = path.join(root, "src", "lib", "generated", "image-manifest.ts");
const widths = [480, 800, 1200, 1600];
const imagePattern = /["'(]((?:\/)(?!optimized\/)[^"')\s]+\.(?:png|jpe?g))["')]/gi;

const toPosix = (value) => value.replaceAll(path.sep, "/");
const sortByWidth = (items) => [...items].sort((a, b) => a.width - b.width);

async function readTextFiles(dir) {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    const files = [];

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            files.push(...(await readTextFiles(fullPath)));
            continue;
        }

        if (/\.(astro|mdx|tsx?|jsx?)$/i.test(entry.name)) {
            files.push(fullPath);
        }
    }

    return files;
}

function safeOutputName(src, width) {
    const parsed = path.posix.parse(src);
    const safeBase = parsed.name
        .normalize("NFKD")
        .replace(/[^\w.-]+/g, "-")
        .replace(/^-+|-+$/g, "")
        .toLowerCase();

    return `${safeBase || "image"}-${width}.webp`;
}

async function collectReferencedImages() {
    const files = await readTextFiles(path.join(root, "src"));
    const refs = new Set();

    for (const file of files) {
        const text = await fs.readFile(file, "utf8");
        for (const match of text.matchAll(imagePattern)) {
            refs.add(decodeURI(match[1]));
        }
    }

    return [...refs].sort();
}

async function optimizeImage(src) {
    const inputPath = path.join(publicDir, src.slice(1));
    const stat = await fs.stat(inputPath).catch(() => null);
    if (!stat?.isFile()) return null;

    const image = sharp(inputPath, { limitInputPixels: false });
    const metadata = await image.metadata();
    if (!metadata.width || !metadata.height) return null;

    const targetWidths = widths
        .filter((width) => width < metadata.width)
        .concat(metadata.width <= widths[0] ? [metadata.width] : [])
        .filter((width, index, array) => array.indexOf(width) === index);

    const variants = [];
    await fs.mkdir(optimizedDir, { recursive: true });

    for (const width of targetWidths) {
        const filename = safeOutputName(src, width);
        const outputPath = path.join(optimizedDir, filename);

        await sharp(inputPath, { limitInputPixels: false })
            .resize({ width, withoutEnlargement: true })
            .webp({
                quality: 76,
                effort: 5,
                smartSubsample: true,
            })
            .toFile(outputPath);

        const outputStat = await fs.stat(outputPath);
        variants.push({
            src: `/optimized/${filename}`,
            width,
            size: outputStat.size,
            type: "image/webp",
        });
    }

    return {
        src,
        width: metadata.width,
        height: metadata.height,
        aspectRatio: Number((metadata.width / metadata.height).toFixed(5)),
        originalSize: stat.size,
        variants: sortByWidth(variants),
    };
}

async function writeManifest(entries) {
    await fs.mkdir(path.dirname(manifestPath), { recursive: true });
    const serializable = Object.fromEntries(entries.map((entry) => [entry.src, entry]));
    const body = JSON.stringify(serializable, null, 4);
    const source = `export type ImageVariant = {
    src: string;
    width: number;
    size: number;
    type: "image/webp";
};

export type ImageManifestEntry = {
    src: string;
    width: number;
    height: number;
    aspectRatio: number;
    originalSize: number;
    variants: ImageVariant[];
};

export const imageManifest = ${body} as const satisfies Record<string, ImageManifestEntry>;

export function getImageEntry(src?: string) {
    if (!src) return undefined;
    return imageManifest[src as keyof typeof imageManifest];
}

export function getLargestVariant(src?: string) {
    const entry = getImageEntry(src);
    return entry?.variants.at(-1)?.src || src || "";
}
`;

    await fs.writeFile(manifestPath, source);
}

const refs = await collectReferencedImages();
const optimized = [];
let savedBytes = 0;

for (const src of refs) {
    const entry = await optimizeImage(src);
    if (!entry) continue;
    optimized.push(entry);

    const largest = entry.variants.at(-1);
    if (largest) {
        savedBytes += Math.max(0, entry.originalSize - largest.size);
    }
}

await writeManifest(optimized);

const originalMB = optimized.reduce((sum, entry) => sum + entry.originalSize, 0) / 1024 / 1024;
const largestVariantMB =
    optimized.reduce((sum, entry) => sum + (entry.variants.at(-1)?.size || 0), 0) /
    1024 /
    1024;

console.log(
    `Optimized ${optimized.length} referenced images. Largest responsive set: ${largestVariantMB.toFixed(
        2,
    )} MB vs ${originalMB.toFixed(2)} MB originals. Saved about ${(
        savedBytes /
        1024 /
        1024
    ).toFixed(2)} MB on largest variants.`,
);
