const STRAND_POSITIONS = ["left", "right"];
const ERROR_MESSAGES = {
    empty: "strand must not be empty",
    invalidLength: "left and right strands must be of equal length",
};

export const compute = (strand1, strand2) => {
    const strands = [strand1, strand2];
    const hasAllEmptyStrands = strands.every((strand) => strand === "");
    const firstEmptyStrand = STRAND_POSITIONS.find((_, i) => strands[i] === "");
    const hasInvalidLength = strand1.length !== strand2.length;

    if (hasAllEmptyStrands) {
        return 0;
    }

    if (firstEmptyStrand) {
        throw new Error(`${firstEmptyStrand} ${ERROR_MESSAGES.empty}`);
    }

    if (hasInvalidLength) {
        throw new Error(ERROR_MESSAGES.invalidLength);
    }

    return [...strand1].filter((strand, i) => strand !== strand2[i]).length;
};
