"use strict"

/**
 * Persistent context to save working data between scenes.
 *
 * @type {string}
 */
var ctxFile = "/tmp/mobi.integration.tests.context.json"

/**
 * Get some object from persistent context by path.
 * @param path
 */
var fnGet = function (path) {
    var mobi = getTestContext()
    /* this is not nodejs 'fs' this is phantom's 'fs' (http://phantomjs.org/api/fs/) */
    var fs = require('fs');
    var objPath = mobi.util.objPath

    if (!fs.exists(ctxFile)) {
        /* initialize context */
        var data = JSON.stringify({})
        fs.write(ctxFile, data, 'w')
    }
    /* load context */
    var json = fs.read(ctxFile);
    var data = JSON.parse(json)
    /* get object from context by path */
    var result = objPath.get(data, path)
    return result;
}

/**
 * Put some object into persistent context by path.
 *
 * @param path
 * @param object
 */
var fnPut = function (path, object) {

    var mobi = getTestContext()
    /* this is not nodejs 'fs' this is phantom's 'fs' (http://phantomjs.org/api/fs/) */
    var fs = require('fs');
    var objPath = mobi.util.objPath

    if (!fs.exists(ctxFile)) {
        /* initialize context */
        var data = JSON.stringify({})
        fs.write(ctxFile, data, 'w')
    }
    /* load context */
    var json = fs.read(ctxFile)
    var data = JSON.parse(json)
    /* put object into context by path */
    objPath.set(data, path, object)
    /* then save context */
    json = JSON.stringify(data)
    fs.write(ctxFile, json, 'w')
}


module.exports = {
    get: fnGet,
    put: fnPut
}