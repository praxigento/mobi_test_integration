// "use strict"

var fnStart = function (mobi) {
    var mobi = mobi
    var casper = mobi.casper

    casper.echo("Inside start...");

    casper.start().then(function () {
        casper.echo("Before set viewport.");
        casper.echo("mobi: " + JSON.stringify(Object.keys(mobi)));
        casper.echo("mobi.test: " + JSON.stringify(Object.keys(mobi.test)));
        mobi.test.setViewPort(mobi);
        casper.echo("After set viewport...");
    });
}

module.exports = fnStart