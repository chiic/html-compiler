const { Tokenizer } = require('../../dist/tokenizer');

const izer = new Tokenizer('<p class="b"></p>');

izer.tokenize();

console.log(izer.tokens);