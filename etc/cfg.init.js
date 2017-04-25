/**
 * Local configuration for integration MOBI tests.
 *
 * JS format is used because JSON does not support comments.
 *
 * Configuration values are mapped to working data tree in 'src/mobi/index.js'.
 *
 * TODO: split project specific configuration and instance specific.
 */
module.exports = {
    url: {
        mage: {
            front: {
                base: "http://m2san.local.host.com",
                aliases: {
                    "catalog": "/catalog/category/view/s/cat-2/id/3/",
                    "prod1": "/catalog/product/view/id/1",
                    "prod2": "/catalog/product/view/id/2",
                    "prod3": "/catalog/product/view/id/3",
                    "prod4": "/catalog/product/view/id/4",
                    "prod5": "/catalog/product/view/id/5"
                }
            },
            admin: {base: "http://m2san.local.host.com/admin"},
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
    account: {
        anonymous: {
            mage: {
                email: 'mobi.anon@gmail.com',
                password: 'UserPassword12'
            },
            gmail: {
                email: 'mobi.anon@gmail.com',
                password: 'F7HVVFxB4ZyhNDbt0yp6'
            },
            address: {
                /* available addresses are: [default|shipping|billing] */
                default: {
                    email: 'mobi.anon@gmail.com',
                    nameFirst: "Anonymous",
                    nameLast: "MOBI",
                    company: "Company",
                    street: "Street",
                    city: "Riga",
                    zip: "1010",
                    country: "LV",
                    phone: "2918180",
                    state: "471" // Ādažu novads
                }
            }
        }
    },
    /* Payment related data (credit cards, etc.) */
    payment: {
        card: {
            braintree: {
                number: '4111111111111111',
                expMonth: '12',
                expYear: '21',
                cvv: '321'
            }
        }
    },
    viewport: {width: 1024, height: 800}
}