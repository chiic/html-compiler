const { Parser, traverser, generatorCode } = require('../../dist');
const { writeFile } = require('fs');
const { resolve } = require('path');


const parser = new Parser(`<div title="测试">测试中文text节点</div>`);

const ast = parser.parse();

traverser(ast, {
    Text(node) {
        const {start, end} = node.parts;
        console.log('text start');
        console.log('line: ' + start.line + ' column: ' + start.column);
        console.log('text end');
        console.log('line: ' + end.line + ' column: ' + end.column);
        return node;
    },
    Attr(node) {
        if(/[\u4e00-\u9fa5]/.test(node.value)) {
            node.name = `[${node.name}]`;
            node.value = `a.v | translate`;
        }
        return node;
    }
})

writeFile(resolve(__dirname, './ast.json'), JSON.stringify(ast, null, '\t'), (err) => {
    console.log('parser successfully!');
});

writeFile(resolve(__dirname, './test.html'), generatorCode(ast), (err) => {
    console.log('parser successfully!');
});
