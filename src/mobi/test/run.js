"use strict"

var fn = function (test) {
    var mobi = getTestContext()
    var casper = mobi.casper

    casper.run(function () {
        test.done()
    })
}

module.exports = fn