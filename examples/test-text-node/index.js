const { Parser, traverser, generatorCode } = require('../../dist');
const { writeFile } = require('fs');
const { resolve } = require('path');


const parser = new Parser(`
<img src="/img/1.png" /><p class="tets">33</p>额31231兴趣全无
额31231兴趣全无  <img src="/img/1.png" />额31231兴趣全无<p class="tets">23123</p>
额31231兴趣全无   <img src="/img/1.png" /><p class="tets">3123</p>
<img src="/img/1.png" />额31231兴趣全无<p class="tets">33</p>
<img src="/img/1.png" />额31231兴趣全无<p class="tets">33</p>
`);

const ast = parser.parse();

traverser(ast, {
    // Text(node) {
    //     if(/[\u4e00-\u9fa5]/.test(node.value)) {
    //         node.value = `{{'a.v' | translate}}`;
    //     }
    // },
    Attr(node) {
        if (node.name === 'src') {
            node.value = `https://baidu.com${node.value}`;
        }
    }
})

writeFile(resolve(__dirname, './ast.json'), JSON.stringify(ast, null, '\t'), (err) => {
    console.log('parser successfully!');
});

writeFile(resolve(__dirname, './test.html'), generatorCode(ast), (err) => {
    console.log('parser successfully!');
});


