"use strict"

/**
 * Construct URL for Magento Front.
 *
 * All paths started with '/' are real paths (relative to the base URL),
 * paths are started with any other symbol are aliases (aliases map is configured in './etc/cfg.js').
 *
 * @param {string} path path to Magento page (real path started with '/', alias - w/o)
 */
var fn = function getUrl(path) {
    /* shortcuts for working variables */
    var mobi = getTestContext()
    var casper = mobi.casper
    var baseUrl = mobi.cfg.url.mage.front.base
    var aliases = mobi.cfg.url.mage.front.aliases

    /* functionality */
    casper.echo("  construct Magento Front URL for path '" + path + "'.", "PARAMETER")
    var isAlias = path.indexOf('/') === -1     // absolute path contains at least one '/' char
    var result, url
    if (isAlias) {
        /* use mapping to get real path for alias */
        url = aliases.path
    } else {
        /* real path is used */
        url = path
    }
    /* "http://mage2.local.host.com" + "/url" */
    result = baseUrl + url
    casper.echo("  result Magento Front URL: " + result, "PARAMETER")
    return result
}

module.exports = fn