const { Tokenizer } = require('../../dist/tokenizer');
const { writeFile, readFileSync } = require('fs');
const path = require('path');

const content = readFileSync(path.resolve(__dirname, 'test.html'), 'utf8')
const izer = new Tokenizer(content);

izer.tokenize();

writeFile(path.resolve(__dirname, 'test.json'), JSON.stringify(izer.tokens), (err) => {});