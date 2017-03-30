"use strict"
/**
 * Switch Magento front into the given mode. Use default values for missed options.
 *
 * @param {object} opts
 * @param {string} opts.currency
 * @param {string} opts.storeView
 */
var fn = function (opts) {
    /* shortcuts for working variables */
    var mobi = getTestContext()
    var casper = mobi.casper
    var objPath = mobi.util.objPath

    /* parse input opts */
    var opts = opts || {}
    opts.currency = opts.currency || objPath.get(mobi.test.cfg, "mage.front.mode.currency")
    opts.storeView = opts.storeView || objPath.get(mobi.test.cfg, "mage.front.mode.storeView")
    opts.skipPageReload = true  // don't reload page in store view switcher

    /* perform action */
    /* firstly change store view (cookie) */
    mobi.mage.front.mode.switch.storeView(opts)
    /* currency switcher always reloads page (POST request) */
    mobi.mage.front.mode.switch.currency(opts)
}

module.exports = fn