
export class Stack {
    private stack = [];
    constructor(item) {
        this.stack.push(item);
    }

    last() {
        return this.stack[this.stack.length - 1];
    }

    push(item) {
        this.stack.push(item);
    }

    pop() {
        return this.stack.pop();
    }

    getStack() {
        return this.stack;
    }
}