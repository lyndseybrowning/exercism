export class Matrix {
    constructor(str) {
        this.grid = str.split(`\n`);
        this.gridRows = this.createRows();
    }

    createRows() {
        const rows = this.grid.map((row) => {
            return row
                .split(" ")
                .filter((item) => item)
                .map(Number);
        });

        return rows;
    }

    createColumns() {
        return this.gridRows[0].map((_, index) =>
            this.gridRows.map((row) => row[index]),
        );
    }

    get rows() {
        return this.gridRows;
    }

    get columns() {
        return this.createColumns();
    }
}
