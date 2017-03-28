(function (casper, mobi) {

    mobi.casper = casper


    casper.test.begin('Library page accessible for anon. users.', 1, function suite(test) {
        // mobi.test.start(mobi)
        casper.start();

        casper.thenOpen('https://drupalize.me/blog/201410/using-remote-debugger-casperjs-and-phantomjs', function () {
            test.assertExists('.videos-list li', 'There is at least one video listed.');
        });

        casper.run();
    });
})(casper, mobi);