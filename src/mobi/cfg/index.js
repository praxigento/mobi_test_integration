"use strict"
/**
 * MOBI Configuration loader.
 *
 * see 'docs/config.md'
 */
var cfgGlobal = require("./global")
var cfgProject = require("../../../etc/cfg/project")
var cfgLocal = require("../../../etc/cfg/local")

/**
 * 'mobi' object that is returned by 'global.getTestContext' is not defined yet. 'require' chain should be done
 * completely to get result. So, load npm lib explicitly.
 */
var objMerge = require("../../../node_modules/deepmerge/index") // see https://www.npmjs.com/package/deepmerge

/**
 * Merge base. project & local configurations into common one.
 */
var merged = objMerge(cfgGlobal, cfgProject)

console.log("CONFIG 00: " + JSON.stringify(merged))

merged = objMerge(merged, cfgLocal)

console.log("CONFIG 01: " + JSON.stringify(merged))

module.exports = merged