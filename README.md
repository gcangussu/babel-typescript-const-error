# The bug
Typescript babel transform plugin doesn't support `as const` with arrays if those have variables or `objects` into them.

For example:
```
{ SyntaxError: /home/gabriel/Repos/babel-typescript-const/index.ts: Only literal values are allowed in constant contexts (14:10)

  12 |   const a = 'oi';
  13 |   const b = 42;
> 14 |   return [a, b] as const;
     |           ^
  15 | }
  16 | 
  17 | function notOkEither() {
    at Object.raise (/home/gabriel/Repos/babel-typescript-const/node_modules/@babel/parser/lib/index.js:3851:17)
    at Object.tsCheckLiteralForConstantContext (/home/gabriel/Repos/babel-typescript-const/node_modules/@babel/parser/lib/index.js:9181:14)
    at node.elements.forEach.element (/home/gabriel/Repos/babel-typescript-const/node_modules/@babel/parser/lib/index.js:9170:18)
    at Array.forEach (<anonymous>)
    at Object.tsCheckLiteralForConstantContext (/home/gabriel/Repos/babel-typescript-const/node_modules/@babel/parser/lib/index.js:9168:30)
    at Object.parseExprOp (/home/gabriel/Repos/babel-typescript-const/node_modules/@babel/parser/lib/index.js:10325:14)
    at Object.parseExprOps (/home/gabriel/Repos/babel-typescript-const/node_modules/@babel/parser/lib/index.js:5791:17)
    at Object.parseMaybeConditional (/home/gabriel/Repos/babel-typescript-const/node_modules/@babel/parser/lib/index.js:5754:23)
    at Object.parseMaybeAssign (/home/gabriel/Repos/babel-typescript-const/node_modules/@babel/parser/lib/index.js:5701:21)
    at Object.parseMaybeAssign (/home/gabriel/Repos/babel-typescript-const/node_modules/@babel/parser/lib/index.js:10638:20)
  pos: 235,
  loc: Position { line: 14, column: 10 },
  code: 'BABEL_PARSE_ERROR' }
  ```

# Reproduce
```
yarn install
yarn start
```

You can comment examples on the top to see the bottom examples failing on `index.ts`.
