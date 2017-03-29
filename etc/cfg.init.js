/**
 * Local configuration for integration MOBI tests.
 */
module.export = {   // JS format is used cause JSON does not support comments
    url: {
        mage: {
            front: "http://mage.mobi.com",
            admin: "http://mage.mobi.com/admin"
        },
        odoo: {
            web: "http://odoo.mobi.com"
        }
    },
    account: "some accounts here ...",
    viewport: {width: 1024, height: 800}
}

