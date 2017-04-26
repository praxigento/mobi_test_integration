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
var objMerge = require("../../../node_modules/merge-recursive/lib/index") // see https://github.com/UmbraEngineering/node-merge-recursive

/**
 * Merge base. project & local configurations into common one.
 */
var merged = objMerge(cfgGlobal, cfgProject)
merged = objMerge(merged, cfgLocal)

module.exports = merged