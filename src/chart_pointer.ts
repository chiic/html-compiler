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
    end: number;
    init(): void;
    advance(): void;
    get peek(): number;
    get index(): number;
    searchStr(str: string): boolean;
    getCharsName(a: StateInt, b: StateInt): string;
}


class ChartPointer implements Pointer {
    state: StateInt;
    source: string;
    end: number;
    constructor(source: string) {
        this.source = source;
        this.init();
    }
    init() {
        this.end = this.source.length - 1;
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
        this.state.peek = this.state.index > this.end ? 0 : this.getChart(this.state.index);
        
    }

    get peek() {
        return this.state.peek;
    }

    get index() {
        return this.state.index;
    }

    getChart(index) {
        return this.source.charCodeAt(index);
    }

    // search str
    searchStr(str) {
        const len = str.length;
        let _index = this.state.index;
        for(let i = 0; i < len; i++) {
            if(this.getChart(_index) !== str.charCodeAt(i)) {
                return false;
            }
            _index++;
        }
        return true;
        
    }

    getCharsName(start, end) {
        return this.source.substring(start.index, end.index);
    }
}

export { ChartPointer }

export type { Pointer, StateInt }