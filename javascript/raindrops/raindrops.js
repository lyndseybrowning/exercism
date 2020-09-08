const FACTORS = {
    3: "Pling",
    5: "Plang",
    7: "Plong",
};

const getRaindropSpeakOf = (number) => {
    const string = Array(number)
        .fill(number)
        .reduce((speak, _, i) => {
            const currentNumber = i + 1;
            const isFactor = number % currentNumber === 0;

            return isFactor ? `${speak}${FACTORS[currentNumber] || ""}` : speak;
        }, "");

    return string || number.toString();
};

export const convert = (number) => getRaindropSpeakOf(number);
