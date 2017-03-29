(function (mobi) {
    "use strict"

    var mobi = mobi
    var desc = "Simple MOBI test"


    /* start scenario  */
    casper.test.begin(desc, 1, function suite(test) {
        mobi.test.start(mobi)


        casper.thenOpen('http://san.mage.test.prxgt.com/', function () {
            test.assertTrue(true, 'Homepage is loaded.');
        });

        casper.run();

    });

})(mobi)