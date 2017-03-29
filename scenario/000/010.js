(function (mobi) {
    "use strict"

    var mobi = mobi
    var casper = mobi.casper

    var desc = "Magento Front checking"


    /* start scenario  */

    casper.test.begin(desc, 3, function suite(test) {

        mobi.test.start(mobi)

        var url = mobi.mage.front.getUrl('/')
        casper.thenOpen(url, function (resp) {
            test.assertTrue((resp.status >= 200) && (resp.status < 400), 'Magento Front homepage is opened.')

        })

        casper.then(function (resp) {
            mobi.mage.front.mode.switch.all()
        })


        mobi.test.run(test)

    })

})(mobi)