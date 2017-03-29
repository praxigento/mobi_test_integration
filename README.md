# Integration tests for MOBI projects

## Run tests

Directly:
```bash
$ ./node_modules/casperjs/bin/casperjs test ./scenario/020/010/010.js --pre=./src/pre.js
$ ./node_modules/casperjs/bin/casperjs test ./scenario/020/010/010.js --pre=./src/pre.js --engine=slimerjs

```

Using 'npm' shortcuts:
```bash
$ npm run-script phantom ./scenario/020/010/010.js
$ npm run-script slimer ./scenario/020/010/010.js
```