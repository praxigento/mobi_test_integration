"use strict"
/**
 * Switch store into the given mode. Use default values for missed options.
 *
 * @param {object} opts
 * @param {string} opts.store
 */
var fn = function (opts) {
    /* shortcuts for working variables */
    var mobi = getTestContext()
    var casper = mobi.casper
    var objPath = mobi.util.objPath

    /* parse input opts */
    var opts = opts || {}
    opts.currency = opts.currency || objPath.get(mobi.test.cfg, "mage.front.mode.currency")

    /* perform action */
    var currency = opts.currency
    casper.echo("  switch to currency: " + currency, "PARAMETER")

    /* get data to post switch currency form */
    var uenc = casper.fetchText("input[name=uenc]")
    var formKey = casper.fetchText("input[name=form_key]")
    var url = mobi.mage.front.getUrl("/directory/currency/switch/")

    casper.open(url, {
        method: "post",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        data: {
            "currency": currency,
            "uenc": uenc,
            "form_key": formKey
        }
    })

}

module.exports = fn