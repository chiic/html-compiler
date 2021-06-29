import * as sym from './symbols';

const closeSelf = mapObj('area,base,basefont,br,col,frame,hr,img,input,isindex,link,meta,param,embed'); //自关闭标签

function mapObj(str) {
    const arr = str.split(',');
    const obj = {};
    arr.forEach(v => obj[v] = true);
    return obj;
}

export function isCloseSelf(tagName) {
    return closeSelf[tagName];
}

export function isWhiteSpace(code) {
    return code === sym.SPACE || code === sym.TAB || code === sym.LF;
}

export function nameEnd(code) {
    return isWhiteSpace(code) || code === sym.RT || code === sym.EQ;
}

export function isTagNameStart(code) {
    return (code >= sym.$a && code <= sym.$z) || (code >= sym.$A && code <= sym.$Z);
}