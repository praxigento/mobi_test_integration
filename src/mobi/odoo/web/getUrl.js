"use strict"

/**
 * Construct URL for Odoo Web interface.
 *
 * All paths started with '/' are real paths (relative to the base URL),
 * paths are started with any other symbol are aliases (aliases map is configured in './etc/cfg.js').
 *
 * @param {string} path path to Odoo Web page (real path started with '/', alias - w/o)
 */
var result = function getUrl(path) {
    /* shortcuts for working variables */
    var mobi = getTestContext()
    var casper = mobi.casper
    var baseUrl = mobi.test.cfg.url.odoo.web.base
    var aliases = mobi.test.cfg.url.odoo.web.aliases

    /* functionality */
    casper.echo("  construct Odoo Web URL for path '" + path + "'.", "PARAMETER")
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
    casper.echo("  result Odoo Web URL: " + result, "PARAMETER")
    return result
}

module.exports = result