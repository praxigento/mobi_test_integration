/**
 * Function to set page size for the browser.
 */
"use strict"

var fn = function setViewport() {

    var dimensions = mobi.test.cfg.viewport;
    casper.page.viewportSize = dimensions;
};

module.exports = fn