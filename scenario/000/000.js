(function (mobi) {
    "use strict"

    var mobi = mobi
    var desc = "Entries checking"


    /* start scenario  */
    casper.test.begin(desc, 1, function suite(test) {
        mobi.test.start(mobi)

        var url = mobi.mage.front.getUrl('/')
        casper.thenOpen(url, function () {
            test.assertTrue(true, 'Homepage is loaded.');
        });

        casper.run();

    });

})(mobi)