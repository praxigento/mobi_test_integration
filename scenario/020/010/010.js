(function (casper, mobi) {
    "use strict"


    var desc = "Simple MOBI test"


    // test scenario itself
    casper.test.begin(desc, function scene_020_010_010(test) {
        mobi.test.start()



        mobi.mage.front.auth.anon()

        var url = "http://san.mage.test.prxgt.com/"
        casper.open(url).then(function () {
            // optsSubs.store = conf.app.store.baltic
            // optsSubs.currency = conf.app.currency.eur
            // subFront.switch.store(optsSubs)
            // subFront.switch.currency(optsSubs)
            test.assert(true, url + " is loaded.")
        })


        mobi.test.run(test)
    })

})(casper, mobi)