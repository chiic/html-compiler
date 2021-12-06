## Tiny (x?)html compiler

:zero: means "0"&nbsp;&nbsp;&nbsp;&nbsp;:green_apple: means "α"&nbsp;&nbsp;&nbsp;&nbsp;🍍 means "β"&nbsp;&nbsp;&nbsp;&nbsp;:rocket: means "GA"

## modules

🍍 lexer token

🍍 parser

🍍 transform

🍍 generator code

## ⚠️⚠️⚠️
Dont used it in your prod environment.This is a limited project now.

## used

```
npm run build
```

```
const { Parser, traverser, generatorCode } = require('../../dist');
const str = '<div>test dom</div>'

// parser
const parser = new Parser(str);
const ast = parser.parse();
// traverse
traverser(ast, {
     Text(node) {
         if(/[\u4e00-\u9fa5]/.test(node.value)) {
             node.value = `{{'a.v' | translate}}`;
         }
    },
    Attr(node) {
        if (node.name === 'src') {
            node.value = `https://baidu.com${node.value}`;
        }
    }
});
// generator
const code = generatorCode(ast);

```

## mores
has more examples in [here](https://github.com/chiic/html-compiler/tree/master/examples)

