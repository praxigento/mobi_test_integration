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
    opts.store = opts.store || objPath.get(mobi.test.cfg, "mage.front.mode.store")

    /* perform action */
    casper.echo(JSON.stringify(opts))
}

module.exports = fn