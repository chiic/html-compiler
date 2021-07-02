const { Parser, traverser, generatorCode } = require('../../dist');
const { writeFile } = require('fs');
const { resolve } = require('path');


const parser = new Parser(`<section class="btn-auto-list-wrap">
    <ul>
        <li [class.na]="name">name</li>
        <li>age</li>
        <li id="_id">sex</li>
    </ul>
    <div class="btn-icon">
        <i></i>
    </div>
</section>
`);

const ast = parser.parse();

writeFile(resolve(__dirname, './ast.json'), JSON.stringify(ast, null, '\t'), (err) => {
    console.log('parser successfully!');
});

writeFile(resolve(__dirname, './test.html'), generatorCode(ast), (err) => {
    console.log('parser successfully!');
});