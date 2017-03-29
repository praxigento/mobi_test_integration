/* SlimerJS requires isolated scope to run. Put 'mobi' object inside. */
(function (mobi) {

    /* create shortcuts to globals */
    var mobi = mobi
    var casper = mobi.casper

    casper.echo("Inside test scenario")

    /* start scenario  */
    casper.test.begin('Open any web page.', 1, function suite(test) {

        casper.echo("After 'begin' before 'start'.")

        mobi.test.start(mobi)
        // casper.start();

        casper.echo("After 'start' before 'open'.")

        casper.thenOpen('https://drupalize.me/blog/201410/using-remote-debugger-casperjs-and-phantomjs', function () {
            casper.echo("Inside 'open', before 'assert'.")
            test.assertTrue(true, 'Something is executed.');
            casper.echo("After 'assert'.")
        });

        casper.echo("Before 'run'.")
        casper.run();
        casper.echo("After 'run'.")
    });

})(mobi);