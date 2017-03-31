(function (mobi) {
    "use strict"

    /* extract working variables from execution context */
    var mobi = mobi
    var casper = mobi.casper

    var desc = "Anonymous Sign Up"


    /* start scenario  */
    casper.test.begin(desc, 3, function (test) {
        /* start test scenario definition */
        mobi.test.start()

        /* clean up authentication and referral cookies */
        mobi.mage.front.auth.anon()
        /* switch sore to default mode */
        mobi.mage.front.mode.switch.all()

        /* open catalog URL */
        var url = mobi.mage.front.getUrl(mobi.test.cfg.url.mage.front.aliases.prod1)
        casper.thenOpen(url, function (resp) {
            test.assertTrue((resp.status >= 200) && (resp.status < 400), "Product page is loaded.");
        });

        /** "Add to Cart" button is clicked */
        // casper.waitForSelector('#product-addtocart-button', function (resp) {
        //     casper.click('#product-addtocart-button > span')
        //     test.assert(true, '"Add to Cart" button is clicked.')
        //
        //     /** product is placed in the cart */
        //     var css = 'span.counter-number'
        //     casper.waitFor(function check() {
        //         var text = casper.fetchText(css)
        //         var result = ('' != text.trim()) // we don't know initial value of the products in the cart
        //         return result
        //     }, function then() {
        //         test.assert(true, '... product is added to the shopping cart.')
        //     })
        // })

        casper.then(function (resp) {
            casper.wait(3000)
        })

        /* launch defined test scenario */
        mobi.test.run(test)
    });

})(mobi)