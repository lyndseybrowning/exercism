const STRANDS = ["left", "right"];
const ERROR_MESSAGES = {
    empty: "strand must not be empty",
    invalidLength: "left and right strands must be of equal length",
};

export const compute = (...strands) => {
    const hasAllEmptyStrands = strands.every((strand) => strand === "");
    const firstEmptyStrand = STRANDS.find((_, i) => strands[i] === "");
    const hasInvalidLength = strands[0].length !== strands[1].length;

    if (hasAllEmptyStrands) {
        return 0;
    }

    if (firstEmptyStrand) {
        throw new Error(`${firstEmptyStrand} ${ERROR_MESSAGES.empty}`);
    }

    if (hasInvalidLength) {
        throw new Error(ERROR_MESSAGES.invalidLength);
    }

    const [strand1, strand2] = strands;

    return [...strand1].reduce((distance, piece, index) => {
        if (piece !== strand2[index]) {
            distance += 1;
        }
        return distance;
    }, 0);
};
