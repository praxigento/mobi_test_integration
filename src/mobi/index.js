"use strict"
/**
 * Get local configuration (URLs, passwords, etc.)
 */
var cfg = require("../../etc/cfg.js")
var gmail = require("./gmail/index")
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
/* base URLs */
map(cfg, "url.mage.admin.base", test, "cfg.url.mage.admin.base")
map(cfg, "url.mage.front.base", test, "cfg.url.mage.front.base")
map(cfg, "url.mage.api.base", test, "cfg.url.mage.api.base")
map(cfg, "url.odoo.web.base", test, "cfg.url.odoo.web.base")

/* ... and aliases (TODO: should be merged with default values from 'test') */
map(cfg, "url.mage.admin.aliases", test, "cfg.url.mage.admin.aliases")
map(cfg, "url.mage.front.aliases", test, "cfg.url.mage.front.aliases")
map(cfg, "url.mage.api.aliases", test, "cfg.url.mage.api.aliases")
map(cfg, "url.odoo.web.aliases", test, "cfg.url.odoo.web.aliases")

/* defaults */
map(cfg, "mage.front.mode.def.currency", test, "cfg.mage.front.mode.currency")
map(cfg, "mage.front.mode.def.storeView", test, "cfg.mage.front.mode.storeView")
map(cfg, "viewport", test, "cfg.viewport")


/* compose result */
module.exports = {
    cfg: cfg,
    gmail: gmail,
    mage: mage,
    odoo: odoo,
    test: test,
    util: util
}