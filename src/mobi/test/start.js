// "use strict"

var fn = function () {
    var mobi = getTestContext()
    var casper = mobi.casper

    casper.start().then(function () {
        mobi.test.setViewPort(mobi);
    });
}

module.exports = fn