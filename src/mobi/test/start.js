"use strict"

var fnStart = function () {
    var casper = global.casper
    var mobi = global.mobi
    casper.start().then(function () {
        mobi.test.setViewPort();
    });
}


module.exports = fnStart