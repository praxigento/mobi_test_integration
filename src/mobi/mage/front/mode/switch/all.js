"use strict"
/**
 * Switch Magento front into the given mode. Use default values for missed options.
 *
 * @param {object} opts
 * @param {string} opts.currency
 * @param {string} opts.lang
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
    opts.lang = opts.lang || objPath.get(mobi.test.cfg, "mage.front.mode.lang")
    opts.store = opts.store || objPath.get(mobi.test.cfg, "mage.front.mode.store")

    /* perform action */
    // mobi.mage.front.mode.switch.currency(opts)
    // mobi.mage.front.mode.switch.lang(opts)
    mobi.mage.front.mode.switch.store(opts)
}

module.exports = fn