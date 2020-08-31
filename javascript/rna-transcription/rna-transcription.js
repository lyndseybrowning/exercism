const complements = {
    G: "C",
    C: "G",
    T: "A",
    A: "U",
};

export const toRna = (sequence) => {
    return sequence
        .split("")
        .map((strand) => complements[strand])
        .join("");
};
