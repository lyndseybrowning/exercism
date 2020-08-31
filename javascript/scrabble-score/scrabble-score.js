const values = {
    1: ["a", "e", "i", "o", "u", "l", "n", "r", "s", "t"],
    2: ["d", "g"],
    3: ["b", "c", "m", "p"],
    4: ["f", "h", "v", "w", "y"],
    5: ["k"],
    8: ["j", "x"],
    10: ["q", "z"],
};

const getScore = (letter) => {
    return Number(
        Object.keys(values).find((value) => values[value].includes(letter)),
    );
};

export const score = (word) => {
    const letters = word.toLowerCase().split("");
    const totalScore = letters.reduce(
        (total, letter) => total + getScore(letter),
        0,
    );

    return totalScore;
};
