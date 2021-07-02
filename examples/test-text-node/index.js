const { Parser, traverser, generatorCode } = require('../../dist');
const { writeFile } = require('fs');
const { resolve } = require('path');


const parser = new Parser(`<div>测试中文text节点</div>`);

const ast = parser.parse();

traverser(ast, {
    Text(node) {
        if(/[\u4e00-\u9fa5]/.test(node.value)) {
            node.value = `{{'a.v' | translate}}`;
        }
    }
})

writeFile(resolve(__dirname, './ast.json'), JSON.stringify(ast, null, '\t'), (err) => {
    console.log('parser successfully!');
});

writeFile(resolve(__dirname, './test.html'), generatorCode(ast), (err) => {
    console.log('parser successfully!');
});


