# Integration tests for MOBI projects

## Run tests

Run one test script directly:
```bash
$ ./node_modules/casperjs/bin/casperjs test ./scenario/020/010/010.js --pre=./src/pre.js
$ ./node_modules/casperjs/bin/casperjs test ./scenario/020/010/010.js --pre=./src/pre.js --engine=slimerjs

```

Run one test script using 'npm' shortcuts:
```bash
$ npm run-script phantom ./scenario/020/010/010.js
$ npm run-script slimer ./scenario/020/010/010.js
```

Run all scenarios:
```bash
$ npm test
$ npm run-script test-phantom
$ npm run-script test-slimer
```