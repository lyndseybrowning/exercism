const values = {
    1: "AEIOULNRST",
    2: "DG",
    3: "BCMP",
    4: "FHVWY",
    5: "K",
    8: "JX",
    10: "QZ",
};

const getScore = (letter) => {
    return Number(
        Object.keys(values).find((value) => values[value].includes(letter)),
    );
};

export const score = (word) => {
    const letters = word.toUpperCase().split("");
    const totalScore = letters.reduce(
        (total, letter) => total + getScore(letter),
        0,
    );

    return totalScore;
};
