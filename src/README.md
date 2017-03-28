Contains sources for subs (common parts of the scenarios, lib functions).

https://gist.github.com/n1k0/3813361

```bash
$ casperjs test tests/ --pre=pre.js --includes=inc.js --post=post.js
```
* **mobi/**: MOBI related staff (functions, objects), is placed into the 'global'; 
* **pre.js**: before whole suite;
* **post.js**: after whole suite;
* **include.js**: before each test in suite;

```bash
Test file: /Users/nperriault/tmp/pre-inc/pre.js                                 
Hey, I'm executed before the suite.
Test file: /Users/nperriault/tmp/pre-inc/tests/test1.js                         
# this is test 1
Hi, I've been included.
PASS Subject is strictly true
Test file: /Users/nperriault/tmp/pre-inc/tests/test2.js                         
# this is test 2
Hi, I've been included.
PASS Subject is strictly true
Test file: /Users/nperriault/tmp/pre-inc/post.js                                
Hey, I'm executed after the suite.
PASS 2 tests executed, 2 passed, 0 failed.       
```