//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
    constructor(...sides) {
        this.sides = sides;
    }

    getRemainingSides = (index) => this.sides.filter((side, i) => i !== index);

    getSumOfSides = (sides) => sides.reduce((sum, side) => sum + side, 0);

    hasTriangleInequality() {
        return this.sides.every((side, index) => {
            const remainingSides = this.getRemainingSides(index);
            const sumOfRemainingSides = this.getSumOfSides(remainingSides);

            return sumOfRemainingSides >= side;
        });
    }

    isDegenerate() {
        return this.sides.some((side, index) => {
            const remainingSides = this.getRemainingSides(index);
            const sumOfRemainingSides = this.getSumOfSides(remainingSides);

            return sumOfRemainingSides === side;
        });
    }

    isTriangle() {
        const allSidesGreaterThan0 = this.sides.every((side) => side > 0);

        return allSidesGreaterThan0;
    }

    isEquilateral() {
        const [side1, side2, side3] = this.sides;
        const allSidesAreEqual = side1 === side2 && side2 === side3;

        return this.isTriangle() && allSidesAreEqual;
    }

    isIsosceles() {
        const twoSidesAreEqual = this.sides.some((side) => {
            const numberOfSameSides = this.sides.filter((s) => s === side);

            return numberOfSameSides.length >= 2;
        });

        return (
            this.isTriangle() &&
            this.hasTriangleInequality() &&
            twoSidesAreEqual
        );
    }

    isScalene() {
        const allSidesAreDifferent = this.sides.every(
            (side, index) => side !== this.sides[index + 1],
        );
        return (
            this.isTriangle() &&
            this.hasTriangleInequality() &&
            allSidesAreDifferent
        );
    }
}
