"use strict"
/**
 * Get local configuration (URLs, passwords, etc.)
 */
var cfg = require("../../etc/cfg.js")
var mage = require("./mage/index")
var odoo = require("./odoo/index")
var test = require("./test/index")
var util = require("./util/index")

/**
 * Function to map one object's properties to other object's properties.
 *
 * @param {object} objFrom
 * @param {string} pathFrom
 * @param {object} objTo
 * @param {string} pathTo
 */
var map = function (objFrom, pathFrom, objTo, pathTo) {
    var item = util.objPath.get(objFrom, pathFrom)
    util.objPath.set(objTo, pathTo, item)
}

/* map local configuration into the MOBI objects */
map(cfg, "url.mage.admin", test, "cfg.url.mage.admin")
map(cfg, "url.mage.front", test, "cfg.url.mage.front")
map(cfg, "url.mage.api", test, "cfg.url.mage.api")
map(cfg, "url.odoo.web", test, "cfg.url.odoo.web")
map(cfg, "mage.front.mode.def.currency", test, "cfg.mage.front.mode.currency")
map(cfg, "mage.front.mode.def.storeView", test, "cfg.mage.front.mode.storeView")
map(cfg, "viewport", test, "cfg.viewport")


/* compose result */
module.exports = {
    cfg: cfg,
    mage: mage,
    odoo: odoo,
    test: test,
    util: util
}