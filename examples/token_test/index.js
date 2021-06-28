const { Tokenizer } = require('../../dist/tokenizer');

const izer = new Tokenizer(`<!-- pppp --><p class="a"></p>`);

izer.tokenize();

console.log(izer.tokens);