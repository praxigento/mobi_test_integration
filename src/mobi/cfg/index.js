"use strict"
/**
 * MOBI Configuration loader.
 *
 * see 'docs/config.md'
 */
var cfgGlobal = require("./global") // don't use 'global' name
var cfgProject = require("../../../etc/cfg/project")
var cfgLocal = require("../../../etc/cfg/local")

/**
 * 'mobi' object that is returned by 'global.getTestContext' is not defined yet. 'require' chain should be done
 * completely to get result. So, load npm lib explicitly.
 */
var merge = require("../../../node_modules/deepmerge/index") // see https://www.npmjs.com/package/deepmerge

/**
 * Merge base. project & local configurations into common one.
 */
var cfg = merge(cfgGlobal, cfgProject)
cfg = merge(cfg, cfgLocal)

module.exports = cfg