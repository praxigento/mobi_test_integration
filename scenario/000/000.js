(function (mobi) {
    "use strict"

    var mobi = mobi
    var desc = "Entries checking"


    /* start scenario  */

    casper.test.begin(desc, 3, function suite(test) {

        mobi.test.start(mobi)

        var url = mobi.mage.front.getUrl('/')
        casper.thenOpen(url, function (data) {
            test.assertTrue((data.status >= 200) && (data.status < 400), 'Magento Front is alive.')
        })

        var url = mobi.mage.admin.getUrl('/')
        casper.thenOpen(url, function (data) {
            test.assertTrue((data.status >= 200) && (data.status < 400), 'Magento Admin is alive.')
        })

        var url = mobi.odoo.web.getUrl('/')
        casper.thenOpen(url, function (data) {
            test.assertTrue((data.status >= 200) && (data.status < 400), 'Odoo web is alive.')
        })

        mobi.test.run(test)

    })

})(mobi)