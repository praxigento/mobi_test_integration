"use strict"

var fnRun = function mobiTestRun(test) {
    var casper = global.casper
    casper.run(function () {
        test.done()
    })
}

module.exports = fnRun