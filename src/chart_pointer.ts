import * as sym from './symbols';



interface StateInt {
    peek: string;
    index: number;
    line: number;
    column: number;
}

interface Pointer {
    state: StateInt;
    source: string;
    init(): void;
    advance(): void;
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
            peek: this.source.charAt(0),
            index: 0,
            line: 0,
            column: 0
        };
    }

    advance() {
        const char = this.source.charAt(this.state.index);
        if(char === sym.NL) {
            this.state.line++;
            this.state.column = 0;
        } else {
            this.state.column++;
        }
        this.state.index++;
        this.state.peek = this.source.charAt(this.state.index);
        
    }
}

export { ChartPointer }

export type { Pointer }