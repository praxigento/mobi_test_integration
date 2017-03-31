/**
 * Local configuration for integration MOBI tests.
 *
 * JS format is used because JSON does not support comments.
 *
 * Configuration values are mapped to working data tree in 'src/mobi/index.js'.
 *
 * TODO: split project spesific configuration and instance specific.
 */
module.exports = {
    url: {
        mage: {
            front: {
                base: "http://san.mage.test.prxgt.com",
                aliases: {
                    "catalog": "/catalog/category/view/s/cat-2/id/3/",
                    "prod1": "/catalog/product/view/id/1",
                    "prod2": "/catalog/product/view/id/2",
                    "prod3": "/catalog/product/view/id/3",
                    "prod4": "/catalog/product/view/id/4",
                    "prod5": "/catalog/product/view/id/5"
                }
            },
            admin: {base: "http://san.mage.test.prxgt.com/EDB5"},
            api: {}
        },
        odoo: {
            web: {
                base: "http://san.odoo.test.prxgt.com",
                aliases: {}
            }
        }
    },
    mage: {
        front: {
            mode: {
                def: {
                    currency: "USD",
                    storeView: "default"
                },
                /* currency codes & store view codes to switch to */
                currencies: ["EUR", "USD"],
                storeViews: ["default", "euc_ru", "euw_en", "euw_ru", "euw_de", "ru_ru", "ua_ru", "kz_ru"]
            },
        }
    },
    account: "some accounts here ...",
    viewport: {width: 1024, height: 800}
}