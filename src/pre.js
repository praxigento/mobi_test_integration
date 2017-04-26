"use strict"
/** 'Pre' requires 'casper.test.done()' call inside. Executes before whole suite. */

/* Load PhantomJS/SlimerJS lib "fs" and get starting point (there is no PHP's __DIR__ analog in nodejs). */
var fs = require("fs")
var dir = fs.workingDirectory // this is not this script's dir, this is calling script's dir.

/* create test context and function to get it from tests and from MOBI staff */
var mobi
var fnGetTestContext = function () {
    return mobi
}


/* Detect browser is used for tests and place test context function into appropriate env. */
if (typeof require.globals === 'object') {
    console.log("SlimerJS is detected. Test context function is placed into 'require.globals.getTestContext'.");
    /* SlimerJS has no 'global', so we need to put our 'god-object' into SlimerJS globals. */
    require.globals.mobi = mobi
    require.globals.getTestContext = fnGetTestContext
} else {
    console.log("PhantomJS is detected. Test context function is placed into 'global.getTestContext'.");
    global.getTestContext = fnGetTestContext
}


/* include MOBI staff and place 'casper' object into */
mobi = require(dir + "/src/mobi/index")
mobi.casper = casper

/* set default timeout for casper */
casper.options.waitTimeout = 20 * 1000;

/* 'done()' is required for 'pre' function */
casper.test.done()