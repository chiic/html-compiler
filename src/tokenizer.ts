import { ChartPointer } from './chart_pointer';

import type { Pointer, StateInt } from './chart_pointer';

import { isTagNameStart, isWhiteSpace, nameEnd } from './utils';

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
                if(this.captureCharWith(sym.EM)) {
                    if(this.captureCharWith(sym.LINE)) {
                        this.captureComment();
                    } else if(this.captureCharWith(sym.BRACKETS)) {
                        this.captureCdata();
                    }
                } else if (this.captureCharWith(sym.DL)) {
                    this.captureEndTag();
                } else {
                    this.captureStartTag();
                }
            } else {
                this.textHandler();
            }
        }
    }
    // comment
    captureComment() {
        this.requireChar(sym.LINE);
        const _start = this.pointer._cloneState();
        this.getCommentContent();
        const token = new Token(
            TokenType.COMMENT,
            {
                value: this.pointer.getChars(_start, this.pointer.state),
                start: _start,
                end: this.pointer._cloneState()
            }
        );
        this.tokens.push(token);
        this.skipUntilNotStr('-->');
    }

    skipUntilNotStr(str) {
        for (let i = 0; i < str.length; i++) {
            if(!this.captureCharWith(str.charCodeAt(i))) {
                throw 'error';
            } 
        }
    }


    getCommentContent() {
        while(this.pointer) {
            if(!this.pointer.searchStr('-->')) {
                this.pointer.advance();
            } else {
                break;
            }
        }
    }

    textHandler() {
        let text = '';
        const start = this.pointer._cloneState();
        while(!(this.pointer.peek === sym.LT || this.pointer.peek === sym.EOF)) {
            text += String.fromCharCode(this.pointer.peek);
            this.pointer.advance();
        }
        const token = new Token(TokenType.TEXT, {value: text, start, end: this.pointer._cloneState()});
        this.tokens.push(token);
    }

    captureCdata() {}

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
        // <p><</p> < is a text token
        const first = this.pointer.peek;
        if(!isTagNameStart(first)) {
            const end = this.pointer._cloneState();
            const start = this.pointer.getPreState();
            const _token = new Token(TokenType.TEXT, { value: '<', start, end });
            this.tokens.push(_token);
            return;
        }
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
        const start = this.pointer._cloneState();
        this.pointer.advance();
        const end = this.pointer._cloneState();
        this.tokens.push(new Token(TokenType.QUOTA, { start, end }))
        let str = '';
        while(this.pointer.peek !== quota) {
            str += String.fromCharCode(this.pointer.peek);
            this.pointer.advance();
        }
        const token = new Token(TokenType.ATTR_VALUE, {value: str, start: end, end: this.pointer._cloneState()});
        this.tokens.push(token);
        const _start = this.pointer._cloneState();
        this.pointer.advance();
        const _end = this.pointer._cloneState();
        const quotaToken = new Token(TokenType.QUOTA, { start: _start, end: _end })
        this.tokens.push(quotaToken); 
    }


    // 获取标签和attr的属性
    captureTagOrAttr() {
        const start = this.pointer._cloneState();
        while (!nameEnd(this.pointer.peek)) {
            this.pointer.advance();
        }
        const name = this.pointer.getChars(start, this.pointer.state);
        return {
            name,
            start: start,
            end: this.pointer._cloneState()
        }
    }

    requireChar(code) {
        if (this.pointer.peek !== code) {
            throw 'parser error at' + this.pointer.source.slice(this.pointer.index);
        }
        this.pointer.advance();
    }

    skipWhiteSpace() {
        while (isWhiteSpace(this.pointer.peek)) {
            this.pointer.advance();
        }
    }
}
