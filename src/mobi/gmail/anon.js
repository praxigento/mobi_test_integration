"use strict"
/**
 * Clean up all cookies for Gmail.
 *
 * TODO: this function is universal. Should we move it to other namespace?
 */
var fn = function gmailAnon() {
    /* shortcuts for working variables */
    var mobi = getTestContext()
    var casper = mobi.casper

    /* functionality */

    /* delete all cookies */
    casper.then(function () {
        var cookies = casper.page.cookies
        cookies.forEach(function (item) {
            casper.page.deleteCookie(item.name)
            // casper.echo("Cookie '" + item.name + "' is deleted.")
        })
    })

    /* then reload page */
    casper.then(function () {
        casper.reload()
    })

}

module.exports = fn