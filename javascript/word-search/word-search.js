class WordSearch {
    constructor(grid) {
        this.directions = [
            [-1, -1],
            [-1, 0],
            [-1, 1],
            [0, -1],
            [0, 1],
            [1, -1],
            [1, 0],
            [1, 1],
        ];
        this.grid = grid.map((row) => [...row]);
        this.trie = {};
    }

    createPrefixTree(words) {
        const { trie: root } = this;

        words.forEach(([...letters]) => {
            let current = root;

            letters.forEach((letter, index) => {
                const isEndLetter = index === letters.length - 1;

                if (!current[letter]) {
                    current[letter] = current[letter] || {};
                }
                current = current[letter];

                if (isEndLetter) {
                    current.$ = 1;
                }
            });
        });
    }

    getPrefix(prefix) {
        let current = this.trie;

        const isPrefix = [...prefix].every((letter) => {
            if (current[letter]) {
                return (current = current[letter]);
            }
            return false;
        });

        return {
            isPrefix,
            isEndWord: current.$ === 1,
        };
    }

    getStartPositions(firstLetter) {
        const { grid } = this;
        const startPositions = grid.reduce((positions, row, rowIndex) => {
            row.forEach((column, columnIndex) => {
                if (column === firstLetter) {
                    positions.push([rowIndex, columnIndex]);
                }
            });

            return positions;
        }, []);

        return startPositions;
    }

    getValidDirections(rowIndex, colIndex) {
        return this.directions.filter((direction) => {
            return this.isValidPosition([rowIndex, colIndex], direction);
        });
    }

    getPosition(word) {
        const [firstLetter] = word;
        const positions = this.getStartPositions(firstLetter);
        const foundPositions = [];

        positions.forEach(([rowIndex, colIndex]) => {
            const validDirections = this.getValidDirections(rowIndex, colIndex);
            const position = {
                start: [rowIndex + 1, colIndex + 1],
            };

            validDirections.forEach((direction) => {
                const end = this.solve(
                    firstLetter,
                    [rowIndex, colIndex],
                    direction,
                    word,
                );

                if (end) {
                    position.end = end;
                    foundPositions.push(position);
                }
            });
        });

        return foundPositions[foundPositions.length - 1];
    }

    find(words) {
        this.createPrefixTree(words);

        return words.reduce(
            (found, word) => ({
                ...found,
                [word]: this.getPosition(word),
            }),
            {},
        );
    }

    isValidPosition(currentPosition, nextPosition) {
        const [rowIndex, colIndex] = currentPosition;
        const [x, y] = nextPosition;
        const rowSum = x < 0 ? rowIndex - Math.abs(x) : rowIndex + x;
        const colSum = y < 0 ? colIndex - Math.abs(y) : colIndex + y;

        return rowSum >= 0 && colSum >= 0 && rowSum < this.grid.length;
    }

    solve(prefix, [rowIndex, colIndex], direction, word) {
        const { isPrefix, isEndWord } = this.getPrefix(prefix);
        const [row, col] = direction;
        const nextRow = row < 0 ? rowIndex - Math.abs(row) : rowIndex + row;
        const nextCol = col < 0 ? colIndex - Math.abs(col) : colIndex + col;

        if (!isPrefix) {
            return;
        }

        if (isEndWord && prefix === word) {
            return [rowIndex + 1, colIndex + 1];
        }

        if (nextRow < 0 || nextCol < 0 || nextRow >= this.grid.length) {
            return;
        }

        return this.solve(
            prefix + this.grid[nextRow][nextCol],
            [nextRow, nextCol],
            direction,
            word,
        );
    }
}

export default WordSearch;
