//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const step = (number, counter = 1) => {
    const isEven = number % 2 === 0;
    const nextNumber = isEven ? number / 2 : number * 3 + 1;

    if (nextNumber === 1) {
        return counter;
    }

    return step(nextNumber, counter + 1);
};

export const steps = (n) => {
    if (Math.sign(n) < 1) {
        throw new Error("Only positive numbers are allowed");
    }

    if (n === 1) {
        return 0;
    }

    return step(n);
};
