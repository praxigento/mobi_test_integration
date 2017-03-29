"use strict"
/**
 * Define structure of the configuration for MOBI tests and default values.
 */
module.exports = {
    url: {
        mage: {
            admin: "set value in './etc/cfg.js:url.mage.admin'",
            front: "set value in './etc/cfg.js:url.mage.front'",
            api: "set value in './etc/cfg.js:url.mage.api'",
        },
        odoo: {
            web: "set value in './etc/cfg.js:odoo.web'"
        }
    },
    viewport: {"width": 1024, "height": 768} // browser dimensions (can be overridden in './etc/cfg.json')
}