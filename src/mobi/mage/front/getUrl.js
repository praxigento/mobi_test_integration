"use strict"

/**
 * Construct URL for Magento Front.
 *
 * @param {string} path path to Magento page (absolute path started with '/', alias - w/o)
 */
var result = function getUrl(path) {
    /* shortcuts for working variables */
    var mobi = getTestContext()
    var casper = mobi.casper
    var baseUrl = mobi.test.cfg.url.mage.front

    /* functionality */
    casper.echo("  construct Magento Front URL for path '" + path + "'.", "PARAMETER")
    var isAlias = path.indexOf('/') === -1     // absolute path contains at least one '/' char
    var result, url
    if (isAlias) {
        /* TODO: should we use aliases for URLs? */
    } else {
        /* absolute path is used */
        url = path
    }
    /* "http://mage2.local.host.com" + "/url" */
    result = baseUrl + url
    casper.echo("  result URL: " + result, "PARAMETER")
    return result
}

module.exports = result