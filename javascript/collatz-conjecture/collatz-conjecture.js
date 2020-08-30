//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const step = (number, counter = 0) => {
    if (number === 1) return counter;

    const isEven = number % 2 === 0;
    const nextNumber = isEven ? number / 2 : number * 3 + 1;

    return step(nextNumber, counter + 1);
};

export const steps = (number) => {
    if (number <= 0) {
        throw new Error("Only positive numbers are allowed");
    }

    return step(number);
};
