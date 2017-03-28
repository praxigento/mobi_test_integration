// "use strict"

var fnStart = function (mobi) {
    var casper = mobi.casper
    casper.start().then(function () {
        mobi.test.setViewPort();
    });
}

module.exports = fnStart