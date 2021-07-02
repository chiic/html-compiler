import { isCloseSelf } from './utils';
import { NodeType } from "./parser";

export function generatorCode(ast) {
    return generatorArrayEle(ast[0]);
}

function generatorArrayEle(nodes) {
    const _arr = [];
    nodes.children.forEach(node => {
        _arr.push(generatorItem(node));
    });
    return _arr.join('');
}

function generatorAttr(attrs) {
    if(!attrs || !attrs.length) {
        return '';
    }
    const output = attrs.map(v => {
        return v.value ? `${v.name}="${v.value}"` : v.name;
    })
    return output.join(' ')
}

function generatorItem(node) {
    if (node.type === NodeType.Comment) {
        return '<!--' + node.value + '-->';
    }
    if(node.type === NodeType.Element) {
        if(isCloseSelf(node.tag)) {
            return `<${node.tag} ${generatorAttr(node.attrs)} />`;
        }
        return `<${node.tag} ${generatorAttr(node.attrs)}>` +
                   generatorArrayEle(node) +
                `</${node.tag}>`;
    }
    return node.value;
}