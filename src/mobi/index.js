"use strict"
/**
 * Get local configuration (URLs, passwords, etc.)
 */
var cfg = require("../../etc/cfg.json")
var mage = require("./mage/index")
var test = require("./test/index")
var util = require("./util/index")

/* place local configuration into the MOBI objects */
var viewport = util.objPath.get(cfg, "viewport")
util.objPath.set(test, "test.cfg.viewport", viewport)


/* compose result */
module.exports = {
    mage: mage,
    test: test,
    util: util
}