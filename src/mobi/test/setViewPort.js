/**
 * Function to set page size for the browser.
 */
"use strict"

var fn = function setViewport() {
    var mobi = getTestContext()
    var dimensions = mobi.test.cfg.viewport
    mobi.casper.page.viewportSize = dimensions
};

module.exports = fn