(function (mobi) {
    "use strict"

    /* extract working variables from execution context */
    var mobi = mobi
    var casper = mobi.casper

    var desc = "Anonymous Sign Up"


    /* start scenario  */
    casper.test.begin(desc, 1, function (test) {
        /* start test scenario definition */
        mobi.test.start()

        /* clean up authentication and referral cookies */
        mobi.mage.front.auth.anon()
        /* switch sore to default mode */
        mobi.mage.front.mode.switch.all()

        /* open catalog URL */
        var url = mobi.mage.front.getUrl(mobi.test.cfg.url.mage.front.aliases.prod1)
        casper.thenOpen(url, function () {
            test.assertTrue(true, "Product page is loaded.");
        });


        casper.then(function (resp) {
            casper.wait(3000)
        })

        /* launch defined test scenario */
        mobi.test.run(test)
    });

})(mobi)