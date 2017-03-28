"use strict"
/** 'Pre' requires 'casper.test.done()' call inside. Executes before whole suite. */

// Load PhantomJS lib "fs" and get starting point (there is no PHP's __DIR__ analog in nodejs).
var fs = require("fs")
var dir = fs.workingDirectory // this is not this script's dir, this is calling script's dir.

/* define global object 'mobi' */
global.mobi = require(dir + "/src/mobi/index")

casper.test.done()