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
    getCharCode(index: number): number;
    searchStr(str: string): boolean;
    getChars(a: StateInt, b: StateInt): string;
    getPreState(): StateInt;
    _cloneState(): StateInt;
}


class ChartPointer implements Pointer {
    state: StateInt;
    source: string;
    preState: StateInt;
    end: number;
    constructor(source: string) {
        this.source = source;
        this.init();
    }
    init() {
        this.end = this.source.length - 1;
        this.state = {
            peek: this.getCharCode(0),
            index: 0,
            line: 1,
            column: 1
        };
    }

    advance() {
        this.preState = this._cloneState();
        const char = this.getCharCode(this.state.index);
        if(char === sym.LF) {
            this.state.line++;
            this.state.column = 0;
        } else {
            this.state.column++;
        }
        this.state.index++;
        this.state.peek = this.state.index > this.end ? 0 : this.getCharCode(this.state.index);
        
    }

    _cloneState() {
        const state = {} as StateInt;
        state.peek = this.state.peek;
        state.column = this.state.column;
        state.index = this.state.index;
        state.line = this.state.line;
        return state;
    }

    get peek() {
        return this.state.peek;
    }

    get index() {
        return this.state.index;
    }

    getCharCode(index) {
        return this.source.charCodeAt(index);
    }

    // search str
    searchStr(str) {
        const len = str.length;
        let _index = this.state.index;
        for(let i = 0; i < len; i++) {
            if(this.getCharCode(_index) !== str.charCodeAt(i)) {
                return false;
            }
            _index++;
        }
        return true;
        
    }

    getChars(start, end) {
        return this.source.substring(start.index, end.index);
    }

    getPreState() {
        return this.preState;
    }
}

export { ChartPointer }

export type { Pointer, StateInt }