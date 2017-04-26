"use strict"

/**
 * Construct URL for Magento Admin.
 *
 * All paths started with '/' are real paths (relative to the base URL),
 * paths are started with any other symbol are aliases (aliases map is configured in './etc/cfg.js').
 *
 * @param {string} path path to Magento Admin page (real path started with '/', alias - w/o)
 */
var result = function getUrl(path) {
    /* shortcuts for working variables */
    var mobi = getTestContext()
    var casper = mobi.casper
    var baseUrl = mobi.cfg.url.mage.admin.base
    var aliases = mobi.cfg.url.mage.admin.aliases

    /* functionality */
    casper.echo("  construct Magento Admin URL for path '" + path + "'.", "PARAMETER")
    var isAlias = path.indexOf('/') === -1     // absolute path contains at least one '/' char
    var result, url
    if (isAlias) {
        /* use mapping to get real path for alias */
        url = aliases.path
    } else {
        /* absolute path is used */
        url = path
    }
    /* "http://mage2.local.host.com" + "/url" */
    result = baseUrl + url
    casper.echo("  result Magento Admin URL: " + result, "PARAMETER")
    return result
}

module.exports = result