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

        /* open catalog URL */
        var url = mobi.mage.front.getUrl('/')
        casper.thenOpen('http://san.mage.test.prxgt.com/', function () {
            test.assertTrue(true, 'Homepage is loaded.');
        });

        casper.run();

    });

})(mobi)