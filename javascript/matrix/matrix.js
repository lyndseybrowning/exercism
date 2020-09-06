export class Matrix {
    constructor(str) {
        this.grid = str.split(`\n`);
        this._rows = this.createRows();
        this._cols = this.createColumns();
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
        const rows = this._rows;
        const cols = rows[0].map((_, index) => {
            return rows.map((row) => {
                return row[index];
            });
        });

        return cols;
    }

    get rows() {
        return this._rows;
    }

    get columns() {
        return this._cols;
    }
}
