(function (mobi) {
    "use strict"

    var mobi = mobi
    var casper = mobi.casper

    var desc = "Magento Front checking"


    /* start scenario  */

    /* switch to the second lang & store view (from available) */
    var currency = mobi.cfg.mage.front.mode.currencies[1]
    var storeView = mobi.cfg.mage.front.mode.storeViews[1]

    casper.test.begin(desc, 3, function suite(test) {

        mobi.test.start(mobi)

        var url = mobi.mage.front.getUrl('/')
        casper.thenOpen(url, function (resp) {
            test.assertTrue((resp.status >= 200) && (resp.status < 400), 'Magento Front homepage is opened.')

        })

        /* setup front mode (store view & language) */
        casper.then(function (resp) {
            mobi.mage.front.mode.switch.all({
                currency: currency,
                storeView: storeView
            })
        })

        /* after page reload test result */
        casper.then(function (resp) {
            var cssPath = "#switcher-currency-trigger > strong.language-" + currency
            test.assertExists(cssPath, "Selected currency is applied.")
            var storeViewActual;
            casper.page.cookies.forEach(function (item) {
                if (item.name == 'store') {
                    storeViewActual = item.value
                }
            })
            test.assertEquals(storeViewActual, storeView, "Selected store view is applied.")
        })


        mobi.test.run(test)

    })

})(mobi)