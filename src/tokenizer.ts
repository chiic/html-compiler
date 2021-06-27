import { ChartPointer } from './chart_pointer';

import type { Pointer } from './chart_pointer';


class Tokenizer {

    pointer: Pointer;

    constructor(source: string, options?: any) {
        this.pointer = new ChartPointer(source);
    }

    tokenize() {}
}

export { Tokenizer }