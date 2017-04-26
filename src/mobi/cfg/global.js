"use strict"
/**
 * Define global structure of the configuration for MOBI tests and default values.
 *
 * All nodes can be overridden in project or instance configuration files (./etc/cfg/...)
 */
module.exports = {
    url: {
        mage: {
            admin: {
                base: "",
                aliases: {}
            },
            api: {
                base: "",
                aliases: {}
            },
            front: {
                base: "",
                aliases: {}
            }
        },
        odoo: {
            web: {
                base: "[confugured]",
                aliases: {}
            }
        },
        gmail: {
            base: "https://mail.google.com/mail/u/0/h/1pq68r75kzvdr/?v%3Dlui"
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
    viewport: {"width": 1024, "height": 768} // browser dimensions
}