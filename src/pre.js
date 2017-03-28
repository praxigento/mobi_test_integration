"use strict"
/** 'Pre' requires 'casper.test.done()' call inside. Executes before whole suite. */

// Load PhantomJS lib "fs" and get starting point (there is no PHP's __DIR__ analog in nodejs).
var fs = require("fs")
var dir = fs.workingDirectory // this is not this script's dir, this is calling script's dir.

/* load MOBI staff and define global object 'mobi' */
var mobi = mobi || require(dir + "/src/mobi/index")

/* */
// var mobi = mobi || require("./mobi/index")
mobi.casper = mobi.casper || casper

/* 'done()' is required for 'pre' function */
casper.test.done()