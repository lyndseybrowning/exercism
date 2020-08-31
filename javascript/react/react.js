export class InputCell {
    constructor(value) {
        this.value = value;
        this.cells = [];
    }

    setValue(value) {
        this.value = value;
        this.cells.forEach((cell) => cell.update());
    }

    addReactiveCell(cell) {
        this.cells.push(cell);
    }
}

export class ComputeCell {
    constructor(inputs, subscriber) {
        this.inputs = inputs;
        this.subscriber = subscriber;
        this.callbacks = [];

        this.createReactiveCells(this.inputs);
        this.update();
    }

    createReactiveCells(inputs) {
        inputs.forEach((input) => {
            if (input instanceof ComputeCell) {
                this.createReactiveCells(input.inputs);
            } else {
                input.addReactiveCell(this);
            }
        });
    }

    update() {
        const value = this.subscriber(this.inputs);

        if (value !== this.value) {
            this.value = this.subscriber(this.inputs);
            this.callbacks.forEach((callback) =>
                callback.addValue(callback.fn(this)),
            );
        }
    }

    addCallback(cb) {
        this.callbacks.push(cb);
    }

    removeCallback(cb) {
        this.callbacks = this.callbacks.filter((callback) => callback !== cb);
    }
}

export class CallbackCell {
    constructor(fn) {
        this.fn = fn;
        this.values = [];
    }

    addValue(computedCell) {
        this.values.push(computedCell);
    }
}
