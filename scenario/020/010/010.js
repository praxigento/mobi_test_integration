(function (mobi) {
    "use strict"

    /* extract working variables from execution context */
    var mobi = mobi
    var casper = mobi.casper

    var desc = "Anonymous Sign Up"


    /* start scenario  */
    casper.test.begin(desc, 4, function (test) {
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
        casper.then(function () {
            casper.waitForSelector("#product-addtocart-button", function (resp) {
                casper.fillSelectors("#product_addtocart_form", {
                    "#qty": 10
                }, false)
                casper.click("#product-addtocart-button > span")
                test.assert(true, "'Add to Cart' button is clicked.")
            })
        })


        casper.then(function () {
            casper.waitForSelector("div[data-ui-id=message-success]", function () {
                test.assert(true, "Product is added to the shopping cart.")
            })
        })

        /** Checkout "Shipping" step is loaded */
        url = mobi.mage.front.getUrl("/checkout/")
        casper.thenOpen(url, function (resp) {
            test.assertTrue((resp.status >= 200) && (resp.status < 400), "Checkout 'Shipping' step is loaded.")

        })

        /* Fill in "email" field and wait until email will be checked */
        casper.then(function () {
            casper.waitForSelector("#customer-email", function () {
                casper.fillSelectors("form.form-login", {
                    "#customer-email": "email.in.domain@that.does.not.exist.com"
                }, false)
                casper.echo("... email is filled.")
                var cookies = casper.page.cookies
                casper.echo(JSON.stringify(cookies))
            })
        })

        // casper.then(function () {
        //     casper.waitForSelector("input[name=telephone]", function () {
        //         casper.fillSelectors("#co-shipping-form", {
        //             "input[name=firstname]": "address.nameFirst",
        //             "input[name=lastname]": "address.nameLast",
        //             "input[name=company]": "address.company",
        //             "input[name='street[0]']": "address.street",
        //             "input[name=city]": "address.city",
        //             "input[name=postcode]": "1010",
        //             "input[name=telephone]": "1234567890",
        //             "select[name=country_id]": "LV"
        //         }, false)
        //         casper.echo("... checkout address is filled (w/o state/province).")
        //     })
        // })

        // casper.then(function () {
        //     casper.waitForSelector("select[name=region_id]", function () {
        //         casper.fillSelectors("#co-shipping-form", {
        //             "select[name=region_id]": "471"
        //         }, false)
        //         casper.echo("... state/province field is filled.")
        //     })
        // })

        // var css = "button[data-role=opc-continue]"
        // casper.waitForSelector(css, function then() {
        //     test.assertSelectorHasText(css, "Next", "... 'Next' button is appeared.")
        //     casper.capture("capture-next.jpg");
        // }, function onTimeout() {
        //     casper.capture("capture.jpg");
        // })

        casper.then(function (resp) {
            casper.wait(5000)
        })

        casper.then(function (resp) {
            casper.capture("screenshot.jpg")
        })

        /* launch defined test scenario */
        mobi.test.run(test)
    });

})(mobi)