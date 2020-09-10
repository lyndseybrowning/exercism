const NUMERALS = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1e3: "M",
};

const convert = (number, numeral = "") => {
    const numerals = Object.keys(NUMERALS).reverse();
    const highestDecimalValue = numerals.find((n) => n <= number);
    const nextNumber = number - highestDecimalValue;

    if (number === 0) {
        return numeral;
    }

    return convert(nextNumber, numeral + NUMERALS[highestDecimalValue]);
};

export const toRoman = (number) => convert(number);
