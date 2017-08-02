/**
 * Initialization script for MOBI tests.
 */

/* libs */
const fs = require('fs');

/* load configuration (application defaults, project defaults, local instance defaults) */
/** @type {mobi.cfg} */
const cfg = require('./cfg');

if (fs.existsSync(__dirname + '/../etc/cfg/project.js')) {
    const cfgPrj = require('../etc/cfg/project');
    Object.assign(cfg, cfgPrj);
}
if (fs.existsSync(__dirname + '/../etc/cfg/local.js')) {
    const cfgLocal = require('../etc/cfg/local');
    Object.assign(cfg, cfgLocal);
}

/* init Chromy */
function initChromy() {
    const Chromy = require('chromy');
    const result = new Chromy(cfg.chromy);
    return result;
}

const chromy = initChromy();
/**
 * Export MOBI staff to be used in scenarios.
 *
 * @namespace mobi
 */
module.exports = {
    cfg: cfg,   // application configuration
    chromy: chromy,  // test scenarios automation engine
};