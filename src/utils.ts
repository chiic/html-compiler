import * as sym from './symbols';

export function isWhiteSpace(code) {
    return code === sym.SPACE || code === sym.TAB || code === sym.LF;
}

export function nameEnd(code) {
    return isWhiteSpace(code) || code === sym.RT || code === sym.EQ;
}

export function isTagNameStart(code) {
    return (code >= sym.$a && code <= sym.$z) || (code >= sym.$A && code <= sym.$Z);
}