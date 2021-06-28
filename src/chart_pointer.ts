import * as sym from './symbols';

interface StateInt {
    peek: number;
    index: number;
    line: number;
    column: number;
}

interface Pointer {
    state: StateInt;
    source: string;
    init(): void;
    advance(): void;
    get peek(): number;
}


class ChartPointer implements Pointer {
    state: StateInt;
    source: string;
    constructor(source: string) {
        this.source = source;
        this.init();
    }
    init() {
        this.state = {
            peek: this.getChart(0),
            index: 0,
            line: 0,
            column: 0
        };
    }

    advance() {
        const char = this.getChart(this.state.index);
        if(char === sym.LF) {
            this.state.line++;
            this.state.column = 0;
        } else {
            this.state.column++;
        }
        this.state.index++;
        this.state.peek = this.getChart(this.state.index);
        
    }

    get peek() {
        return this.state.peek;
    }

    getChart(index) {
        return this.source.charCodeAt(index);
    }
}

export { ChartPointer }

export type { Pointer, StateInt }