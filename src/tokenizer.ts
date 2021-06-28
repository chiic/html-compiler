import { ChartPointer } from './chart_pointer';

import type { Pointer, StateInt } from './chart_pointer';

import { isWhiteSpace } from './utils';

import * as sym from './symbols';

export enum TokenType {
    TAG_START,
    TAG_END,
    ATTR_NAME,
    ATTR_VALUE,
    COMMENT,
    QUOTA,
    TEXT,
    CDATA
}

export interface Parts {
    name?: string;
    value?: string;
    start: StateInt,
    end: StateInt
}

export class Token {
    type: TokenType;
    parts: Parts;
    constructor(type, parts) {
        this.type = type;
        this.parts = parts;
    }
}

export class Tokenizer {

    pointer: Pointer;
    tokens = [];

    constructor(source: string, options?: any) {
        this.pointer = new ChartPointer(source);
    }

    tokenize() {
        while (this.pointer.peek !== sym.EOF) {
            if (this.captureCharWith(sym.LT)) {
                if (this.captureCharWith(sym.DL)) {
                    this.captureEndTag();
                } else {
                    this.captureStartTag();
                }
            }
        }
    }

    captureCharWith(code) {
        if (this.pointer.peek === code) {
            this.pointer.advance();
            return true;
        }
        return false;
    }

    // end tag
    captureEndTag() {
        this.skipWhiteSpace();
        const parts = this.captureTagOrAttr();
        const token = new Token(TokenType.TAG_END, parts);
        this.tokens.push(token);
        this.skipWhiteSpace();
        this.requireChar(sym.RT)
    }
    // start tag
    captureStartTag() {
        this.skipWhiteSpace();
        const parts = this.captureTagOrAttr();
        const token = new Token(TokenType.TAG_START, parts);
        this.tokens.push(token);
        while(this.pointer.peek !== sym.DL && this.pointer.peek !== sym.RT) {
            this.skipWhiteSpace();
            this.captureAttrName()
            this.skipWhiteSpace();
            if(this.captureCharWith(sym.EQ)) {
                this.skipWhiteSpace();
                this.captureAttrValue();
            }
        }
        if(this.pointer.peek === sym.DL) {
            this.pointer.advance();
        }
        this.skipWhiteSpace();
        this.requireChar(sym.RT);
    }

    // attr name
    captureAttrName() {
        const parts = this.captureTagOrAttr();
        const token = new Token(TokenType.ATTR_NAME, parts);
        this.tokens.push(token);
    }

    // attr value
    captureAttrValue() {
        const quota = this.pointer.peek;
        const start = this._cloneState();
        this.pointer.advance();
        const end = this._cloneState();
        this.tokens.push(new Token(TokenType.QUOTA, { start, end }))
        let str = '';
        while(this.pointer.peek !== quota) {
            str += String.fromCharCode(this.pointer.peek);
            this.pointer.advance();
        }
        const token = new Token(TokenType.ATTR_VALUE, {value: str, start: end, end: this.pointer.state});
        this.tokens.push(token);
        const _start = this._cloneState();
        this.pointer.advance();
        const _end = this._cloneState();
        const quotaToken = new Token(TokenType.QUOTA, { start: _start, end: _end })
        this.tokens.push(quotaToken);
    }


    // 获取标签和attr的属性
    captureTagOrAttr() {
        const start = this._cloneState();
        while (!isWhiteSpace(this.pointer.peek) && this.pointer.peek !== sym.EQ) {
            this.pointer.advance();
        }
        const name = this.getCharsName(start, this.pointer.state);
        return {
            name,
            start: start,
            end: this.pointer.state
        }
    }

    _cloneState() {
        const state = {} as StateInt;
        state.peek = this.pointer.state.peek;
        state.column = this.pointer.state.column;
        state.index = this.pointer.state.index;
        state.line = this.pointer.state.line;
        return state;
    }


    getCharsName(start, end) {
        return this.pointer.source.substring(start.index, end.index);
    }

    requireChar(code) {
        if (this.pointer.peek !== code) {
            throw 'parser error at' + this.pointer.source.slice(this.pointer.state.index);
        }
        this.pointer.advance();
    }

    skipWhiteSpace() {
        while (isWhiteSpace(this.pointer.peek)) {
            this.pointer.advance();
        }
    }
}
