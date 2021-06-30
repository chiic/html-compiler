import { Stack } from './stack';
import { Parts, Token, Tokenizer, TokenType } from './tokenizer';
import { isCloseSelf } from './utils';
import type { StateInt } from './chart_pointer';

export enum NodeType {
    Comment = 'Comment',
    Element = 'Element',
    Text = 'Text',
    Attr = 'Attr'
}

interface Location {
    line: number;
    column: number;
}

class Span implements Location {
    line: number;
    column: number;
    constructor(state: StateInt) {
        this.line = state.line;
        this.column = state.column;
    }
}

class PartsSpan {
    start: Location;
    end: Location;
    constructor(parts: Parts) {
        this.start = new Span(parts.start);
        this.end = new Span(parts.end);
    }
} 


export class Parser {
    source: string;
    offset = 0;
    maxLen = 0;
    tokens = [];
    stack = new Stack({
        type: 'Body',
        parent: null,
        children: []
    });
    constructor(source: string) {
        this.source = source;
        const instance = new Tokenizer(this.source);
        instance.tokenize();
        this.tokens = instance.tokens;
        this.offset = 0;
        this.maxLen = this.tokens.length;
    }
    parse() {
        while(this.offset < this.maxLen) {
            const token = this.getOffsetToken;
            if (token.type === TokenType.COMMENT) {
                this.eatComment();
            } else if(token.type === TokenType.TAG_START) {
                this.eatStartTag();
            } else if(token.type === TokenType.TAG_END) {
                this.eatEndTag();
            } else if(token.type === TokenType.TEXT) {
                this.eatUntilNotText();
            }
        }
        return this.stack.getStack();
    }

    eatComment() {
        const last = this.stack.last();
        last.children.push({
            type: NodeType.Comment,
            value: this.getOffsetToken.parts.value,
            parts: new PartsSpan(this.getOffsetToken.parts)
        });
        this.offset++;
    }

    eatStartTag() {
        const node = {
            type: NodeType.Element,
            attrs: [],
            tag: this.getOffsetToken.parts.name,
            parts: new PartsSpan(this.getOffsetToken.parts),
            children: []
        }
        this.offset++;
        const attrs = [];
        while(this.getOffsetToken &&
              this.getOffsetToken.type !== TokenType.TEXT &&
              this.getOffsetToken.type !== TokenType.TAG_START &&
              this.getOffsetToken.type !== TokenType.TAG_END &&
              this.getOffsetToken.type !== TokenType.COMMENT     
        ) {
            const attr = {
                type: NodeType.Attr,
                name: this.getOffsetToken.parts.name,
                parts: new PartsSpan(this.getOffsetToken.parts),
                value: null
            };
            this.offset++;
            if(this.getOffsetToken.type === TokenType.QUOTA) {
                this.offset++;
                attr.value = this.getOffsetToken.parts.value;
                attr.parts.end = new Span(this.getOffsetToken.parts.end);
                this.offset++;
                if(this.getOffsetToken.type === TokenType.QUOTA) {
                    this.offset++;
                } else {
                    throw 'parser error!'
                }
            }
            attrs.push(attr);
        }
        node.attrs = attrs;
        if(isCloseSelf(node.tag)) {
            const last = this.stack.last();
            last.children.push(node);
        } else {
            this.stack.push(node);
        }
    }

    eatEndTag() {
        const last = this.stack.last();
        if(last.type === NodeType.Element &&
            last.tag === this.getOffsetToken.parts.name) {
            const node = this.stack.pop();
            node.parts.end = new Span(this.getOffsetToken.parts.end);
            const _last = this.stack.last();
            _last.children.push(node);
            this.offset++;
        } else {
            throw 'parser error!'
        }
    }

    eatUntilNotText() {
        const node = {
            type: NodeType.Text,
            value: this.getOffsetToken.parts.value,
            parts: new PartsSpan(this.getOffsetToken.parts)
        }
        this.offset++;
        while (this.getOffsetToken && this.getOffsetToken.type === TokenType.TEXT) {
            node.value += this.getOffsetToken.parts.value;
            node.parts.end = new Span(this.getOffsetToken.parts.end);
            this.offset++;
        }
        const last = this.stack.last();
        last.children.push(node);
    }

    get getOffsetToken() {
        return this.tokens[this.offset];
    }
}