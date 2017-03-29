"use strict"
/** Include doesn't require 'casper.test.done()' call inside. Executes before each test in the suite (after 'pre'). */

if (typeof require.globals === 'object') {
    console.log("SlimerJS is detected.");
    /* include MOBI staff if not included yet and place 'casper' object inside */
    var mobi = mobi || require("./mobi/index")
    mobi.casper = mobi.casper || casper
    require.globals.mobi = mobi
} else {
    console.log("PhantomJS is detected.");
    /* include MOBI staff if not included yet and place 'casper' object inside */
    var mobi = mobi || require("./mobi/index")
    mobi.casper = mobi.casper || casper
}
