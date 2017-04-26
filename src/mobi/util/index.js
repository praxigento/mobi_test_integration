"use strict"
/**
 * MOBI common utils (test related utils are placed in 'mobi.test.util')
 */
var objMerge = require("../../../node_modules/deepmerge/index") // see https://www.npmjs.com/package/deepmerge
var objPath = require("../../../node_modules/object-path/index") // see https://github.com/mariocasciaro/object-path

module.exports = {
    objMerge: objMerge,
    objPath: objPath
}