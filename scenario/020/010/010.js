(function (mobi) {
    "use strict"

    /* extract working variables from execution context */
    var mobi = mobi
    var casper = mobi.casper

    var desc = "Anonymous Sign Up"


    /* start scenario  */
    casper.test.begin(desc, function (test) {
        /* pin 'test' to local scope */
        var test = test
        /* start test scenario definition */
        mobi.test.start()

        /* clean up authentication and referral cookies */
        mobi.mage.front.auth.anon()
        /* switch store & currency to defaults */
        mobi.mage.front.mode.switch.all()

        /* open catalog URL & switch sore to default mode */
        var url = mobi.mage.front.getUrl(mobi.test.cfg.url.mage.front.aliases.prod1)
        casper.thenOpen(url, function (resp) {
            test.assertTrue((resp.status >= 200) && (resp.status < 400), "Product page is loaded.");
        });


        /** "Add to Cart" button is clicked */
        casper.then(function () {
            casper.waitForSelector("#product_addtocart_form", function (resp) {
                casper.fillSelectors("#product_addtocart_form", {
                    "#qty": 2
                }, false)
                casper.click("#product-addtocart-button > span")
                test.assert(true, "'Add to Cart' button is clicked.")
                casper.waitForSelector("div[data-ui-id=message-success]", function () {
                    test.assert(true, "Product is added to the shopping cart.")
                })
            })
        })

        /** Checkout "Shipping" step is loaded */
        url = mobi.mage.front.getUrl("/checkout/")
        casper.thenOpen(url, function (resp) {
            test.assertTrue((resp.status >= 200) && (resp.status < 400), "Checkout 'Shipping' step is loaded.")
        })

        casper.then(function () {
            casper.waitForSelector("#label_method_flatrate_flatrate", function () {
                casper.echo("... shipping method is loaded.")
            })
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

        casper.then(function () {
            casper.waitForSelector("input[name=telephone]", function () {
                casper.fillSelectors("#co-shipping-form", {
                    "input[name=firstname]": "address.nameFirst",
                    "input[name=lastname]": "address.nameLast",
                    "input[name=company]": "address.company",
                    "input[name='street[0]']": "address.street",
                    "input[name=city]": "address.city",
                    "input[name=postcode]": "1010",
                    "input[name=telephone]": "1234567890",
                    "select[name=country_id]": "LV"
                }, false)
                casper.echo("... checkout address is filled (w/o state/province).")
            })
        })

        casper.then(function () {
            casper.waitForSelector("select[name=region_id]", function () {
                casper.fillSelectors("#co-shipping-form", {
                    "select[name=region_id]": "471"
                }, false)
                casper.echo("... state/province field is filled.")
            })
        })


        // CSS selectors for checkout page
        var cssRadio = "div.payment-method.payment-method-braintree > div.payment-method-title.field.choice > label > span"

        casper.then(function (resp) {
            var css = "button[data-role=opc-continue]"
            casper.waitForSelector(css, function then() {
                test.assertSelectorHasText(css, "Next", "... 'Next' button is appeared.")
                casper.click(css)
                test.assert(true, "'Next' button is clicked.")
                casper.waitFor(function check() {
                    var result = casper.visible(cssRadio)
                    return result
                }, function then() {
                    test.assert(casper.visible(cssRadio), '... payment step is loaded')
                })
            })
        })

        /**
         * Checkout Payment
         */
        {
            casper.then(function (resp) {
                /** Credit card payment method is selected */
                casper.waitForSelector(cssRadio, function () {
                    casper.click(cssRadio)
                    test.assert(true, "Credit card payment method is selected.")
                })

                /** Payment data is filled in */
                casper.waitWhileVisible("body > div.loading-mask", function () {
                    // wait until braintree form will be loaded
                    /* switch to the child frames one by one and fill braintree payment form fields */
                    /* (each field on the separate iframe) */
                    casper.waitForSelector("iframe#braintree-hosted-field-number", function () {

                        /** ... credit card number is filled */
                        var page = casper.page
                        page.switchToChildFrame("braintree-hosted-field-number")
                        casper.waitForSelector("input#credit-card-number", function () {
                            casper.fillSelectors("body", {"input#credit-card-number": "4111111111111111"}, false)
                            test.assert(true, "... credit card number is filled")
                            page.switchToParentFrame()
                            /** ... expiration month is filled */
                            page.switchToChildFrame("braintree-hosted-field-expirationMonth")
                            casper.waitForSelector('input#expiration-month', function () {
                                casper.fillSelectors('body', {'input#expiration-month': '12'}, false)
                                test.assert(true, "... expiration month is filled")
                                page.switchToParentFrame()

                                /** ... expiration year is filled */
                                page.switchToChildFrame('braintree-hosted-field-expirationYear')
                                casper.waitForSelector('input#expiration-year', function () {
                                    casper.fillSelectors('body', {'input#expiration-year': '21'}, false)
                                    test.assert(true, "... expiration year is filled")
                                    page.switchToParentFrame()

                                    /** ... CVV code is filled */
                                    page.switchToChildFrame('braintree-hosted-field-cvv')
                                    casper.waitForSelector('input#cvv', function () {
                                        casper.fillSelectors('body', {'input#cvv': '321'}, false)
                                        test.assert(true, "... CVV code is filled")
                                        page.switchToParentFrame()
                                    })
                                })
                            })
                        })
                    })

                })

            })

            /** Click on "Place Order" button */
            casper.then(function () {
                casper.waitForSelector('#checkout-payment-method-load', function () {
                    var css = "#checkout-payment-method-load > div > div > div.payment-method._active > div.payment-method-content > div.actions-toolbar > div > button > span"
                    casper.click(css)
                    test.assert(true, '"Place Order" button is clicked.')
                })
            })

            /** Order placement is completed */
            casper.then(function () {
                casper.waitForSelector('.checkout-success', function () {
                    test.assert(true, 'Order placement is completed.')
                }, null, 30000)
            })
        }

        /**
         * Create an Account in Magento
         */
        {
            /** "Create an Account" button is clicked */
            casper.then(function () {
                var cssBtnCreate = "input[type=submit]"
                casper.waitForSelector(cssBtnCreate, function () {
                    test.assert(true, '... "Create an Account" button is visible.')
                    casper.click(cssBtnCreate)
                    test.assert(true, '"Create an Account" button is clicked.')
                })
            })
        }


        /**
         * Go to GMail and extract sign up link.
         */
        {
            // casper.wait(5000) // MOBI-595 TODO: remove "email in the road" delay and add Refresh for the Inbox page

            // /** Gmail login form is loaded */
            // casper.then(function () {
            //     var url = "https://mail.google.com/mail/u/0/h/1pq68r75kzvdr/?v%3Dlui"
            //     casper.open(url).then(function () {
            //         var cssBtnNext = "input#next"
            //         casper.waitForSelector(cssBtnNext, function () {
            //             test.assert(true, 'Gmail login form is loaded.')
            //             casper.fillSelectors("#identifier-shown", {
            //                 "#Email": authGmailCustomer.email
            //             }, false)
            //             casper.click(cssBtnNext, "50%", "50%")
            //
            //             /** fill in passwd */
            //             var cssFldPasswd = '#Passwd'
            //             casper.waitFor(function check() {
            //                 var result = casper.visible(cssFldPasswd)
            //                 return result
            //             }, function then() {
            //                 casper.fillSelectors("#password-shown", {
            //                     "#Passwd": authGmailCustomer.password
            //                 }, false)
            //                 casper.click(cssBtnNext, "50%", "50%")
            //             })
            //         })
            //     })
            // })
            //
            // /** User is logged into Gmail. */
            // casper.then(function () {
            //     var cssEmail = "#guser > nobr > b"
            //     casper.waitForSelector(cssEmail, function () {
            //         var email = casper.fetchText(cssEmail)
            //         test.assertEquals(email, authGmailCustomer.email, "User is logged into Gmail.")
            //     })
            // })
        }


        /* launch defined test scenario */
        casper.then(function (resp) {
            casper.capture("screenshot.jpg")
        })
        mobi.test.run(test)
    });

})(mobi)