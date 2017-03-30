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
    opts.storeView = opts.storeView || objPath.get(mobi.test.cfg, "mage.front.mode.storeView")
    opts.skipPageReload = opts.skipPageReload || false // force page reload if option is missed

    /* perform action */
    var doReload = !opts.skipPageReload
    var storeViewCode = opts.storeView
    casper.echo("We need to switch to store view: " + storeViewCode)

    /* setup 'store' cookie with store view code */
    casper.page.addCookie({
        'name': 'store',
        'value': storeViewCode,
        'path': '/'
    });

    /* reload page this function is used as standalone (w/o currency switcher)*/
    if (doReload) {
        var url = casper.page.url
        casper.thenOpen(url)
    }

}

module.exports = fn