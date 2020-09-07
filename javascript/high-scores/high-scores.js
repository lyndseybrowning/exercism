export class HighScores {
    constructor(scores) {
        this._scores = scores;
    }

    get scores() {
        return this._scores;
    }

    get latest() {
        return [...this._scores].pop();
    }

    get personalBest() {
        return Math.max.apply(this, this._scores);
    }

    get personalTopThree() {
        const scores = [...this._scores].sort((a, b) => b - a);
        const topThree = scores.slice(0, 3);

        return topThree;
    }
}
