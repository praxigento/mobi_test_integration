"use strict"
/**
 * Define structure of the configuration for MOBI tests and default values.
 */
module.exports = {
    url: {
        mage: { // "set value in './etc/cfg.js:url.mage.*'"
            admin: {
                base: "[confugured]",
                aliases: {}
            },
            api: {
                base: "[confugured]",
                aliases: {}
            },
            front: {
                base: "[confugured]",
                aliases: {}
            }
        },
        odoo: { // "set value in './etc/cfg.js:odoo.web.*'"
            web: {
                base: "[confugured]",
                aliases: {}
            }
        }
    },
    mage: {
        front: {
            mode: {
                currency: "USD",
                storeView: "default"
            }
        }
    },
    viewport: {"width": 1024, "height": 768} // browser dimensions (can be overridden in './etc/cfg.json')
}