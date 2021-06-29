const { Tokenizer, Parser } = require('../../dist');
const { writeFile, readFileSync } = require('fs');
const path = require('path');

const content = readFileSync(path.resolve(__dirname, 'test.html'), 'utf8')
const izer = new Tokenizer(content);
const parser = new Parser(content);

izer.tokenize();
parser.parse();

writeFile(path.resolve(__dirname, 'token.json'), JSON.stringify(izer.tokens), (err) => {});

writeFile(path.resolve(__dirname, 'ast.json'), JSON.stringify(parser.stack), (err) => {});