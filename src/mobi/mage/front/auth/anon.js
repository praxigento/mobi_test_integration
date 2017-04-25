"use strict"
/**
 * Clean up referral cookies for anonymous visitors.
 */
var fn = function mageFrontAuthAnon() {
    /* shortcuts for working variables */
    var mobi = getTestContext()
    var casper = mobi.casper

    /* functionality */

    casper.then(function () {
        // casper.page.deleteCookie("PHPSESSID")           // clean up session cookie
        // casper.page.deleteCookie("prxgtDwnlReferral")   // \Praxigento\Downline\Tool\Def\Referral::COOKIE_REFERRAL_CODE
        var cookies = casper.page.cookies
        cookies.forEach(function (item) {
            casper.page.deleteCookie(item.name)
        })
    })

}

module.exports = fn