interface TitleBreakOptions {
    maxLines?: number;
    targetLength?: number;
}

const asciiLetterOrNumber = /[A-Za-z0-9]/;

const visualLength = (value: string) =>
    Array.from(value).reduce(
        (length, char) => length + (char.charCodeAt(0) > 127 ? 2 : 1),
        0,
    );

const splitSoftHyphens = (line: string) => {
    const parts: string[] = [];
    let current = "";
    const chars = Array.from(line);

    chars.forEach((char, index) => {
        const previous = chars[index - 1] || "";
        const next = chars[index + 1] || "";
        const isDash = char === "-" || char === "–" || char === "—";
        const joinsAscii =
            asciiLetterOrNumber.test(previous) && asciiLetterOrNumber.test(next);

        if (isDash && !joinsAscii) {
            if (current.trim()) {
                parts.push(current.trim());
            }
            current = "";
            return;
        }

        current += char;
    });

    if (current.trim()) {
        parts.push(current.trim());
    }

    return parts.length ? parts : [line.trim()];
};

const splitLine = (line: string) => {
    const dashParts = splitSoftHyphens(line);
    if (dashParts.length > 1) {
        return dashParts;
    }

    return dashParts.flatMap((part) =>
        part
            .split(/\s+/)
            .map((chunk) => chunk.trim())
            .filter(Boolean),
    );
};

const mergeShortChunks = (
    chunks: string[],
    targetLength: number,
    maxLines: number,
) => {
    const lines: string[] = [];

    chunks.forEach((chunk) => {
        const previous = lines[lines.length - 1];
        const candidate = previous ? `${previous} ${chunk}` : chunk;
        const canMerge =
            previous &&
            visualLength(candidate) <= targetLength &&
            lines.length + (chunks.length - lines.length) > maxLines;

        if (canMerge) {
            lines[lines.length - 1] = candidate;
        } else {
            lines.push(chunk);
        }
    });

    return lines;
};

export const getBalancedTitleLines = (
    title: string,
    { maxLines = 3, targetLength = 18 }: TitleBreakOptions = {},
) => {
    const manualLines = title
        .split(/\n+/)
        .map((line) => line.trim())
        .filter(Boolean);

    const chunks = manualLines.flatMap((line) => {
        if (manualLines.length > 1 && visualLength(line) <= targetLength + 4) {
            return [line];
        }

        return splitLine(line);
    });

    const lines = mergeShortChunks(chunks, targetLength, maxLines);

    return lines.length ? lines : [title.trim()];
};
