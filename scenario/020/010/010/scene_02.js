(function (mobi) {
    "use strict"

    /* extract working variables from execution context */
    var mobi = mobi
    var casper = mobi.casper
    var accAnon = mobi.cfg.account.anonymous

    /* setup this module environment */
    var desc = "Anonymous Sign Up / scene 02: Get sign up link from email."


    /* start test scene  */
    casper.test.begin(desc, function (test) {
        /* pin 'test' to the test scene context */
        var test = test

        /* start test scenario definition */
        mobi.test.start()


        /**
         * Switch to the working mode.
         */
        {
            var url = mobi.test.cfg.url.gmail.base
            casper.thenOpen(url)
            /* clean up authentication and referral cookies */
            mobi.gmail.anon()
            casper.wait(4000)
        }


        /**
         * Login to Gmail.
         */
        {
            /* Fill login & password */
            casper.then(function () {
                var cssBtnNext = "input#next"
                casper.waitForSelector(cssBtnNext, function () {
                    test.assert(true, 'Gmail login form is loaded.')
                    casper.fillSelectors("#identifier-shown", {
                        "#Email": accAnon.gmail.email
                    }, false)
                    casper.click(cssBtnNext, "50%", "50%")

                    /** fill in passwd */
                    var cssFldPasswd = '#Passwd'
                    casper.waitFor(function check() {
                        var result = casper.visible(cssFldPasswd)
                        return result
                    }, function then() {
                        casper.fillSelectors("#password-shown", {
                            "#Passwd": accAnon.gmail.password
                        }, false)
                        var cssBtnSignIn = "input#signIn"
                        casper.click(cssBtnSignIn, "50%", "50%")
                    })
                })
            })

            /* User is logged in to Gmail. */
            casper.then(function () {
                var cssEmail = "#guser > nobr > b"
                casper.waitForSelector(cssEmail, function () {
                    var email = casper.fetchText(cssEmail)
                    test.assertEquals(email, accAnon.gmail.email, "User is logged into Gmail.")
                })
            })
        }


        /**
         * Go to Inbox and find first sign up email.
         */
        {
            /* Sign Up email is found */
            casper.then(function () {
                var cssInboxItems = "table.th"
                casper.waitForSelector(cssInboxItems, function () {
                    /* get all Inbox items from the first page  */
                    var elements = casper.getElementsInfo(cssInboxItems + " tr td a");
                    var href
                    elements.forEach(function (element) {
                        /* save first link to Sign Up email */
                        var text = element.text
                        var isSignupEmail = (text.indexOf("Welcome to MOBI Test Store") !== -1)
                        if (isSignupEmail && !href) {
                            href = element.attributes.href
                        }
                    });
                    /* click on link and go to the details of the first Sign Up email */
                    casper.click("a[href='" + href + "']")
                    test.assert(href != undefined, "Signup email is found."
                    )
                })
            })
        }


        /**
         * Open first Sign Up email and save it into persistent context.
         */
        {
            casper.then(function () {
                /* CSS selector for the link */
                var cssLink = "table > tbody > tr:nth-child(2) > td > p:nth-child(3) > a"
                var href = casper.getElementAttribute(cssLink, "href")
                var replaced = href.replace("http://www.google.com/url?q=", "")
                var decoded = decodeURIComponent(replaced)
                casper.echo("Decoded Sign Up URL: " + decoded)
                mobi.test.util.context.put('mobi.020.010.010.signupLink', decoded)
                test.assert(true, '"Set password" link is extracted.')
            })

        }


        /**
         * Return to Inbox & delete all emails.
         */
        {
            /* go to Inbox */
            casper.then(function () {
                /* CSS selector for the link */
                var cssInboxLink = "a[href=\\?\\&]"
                casper.click(cssInboxLink)
            })

            /* Mark all emails */
            casper.then(function () {
                var cssAllCheckboxes = "table.th input[type=checkbox]"
                var elements = casper.getElementsInfo(cssAllCheckboxes);
                elements.forEach(function (element) {
                    casper.echo(JSON.stringify(element))
                    var value = element.attributes.value
                    var css = "input[name='t'][value='" + value + "']"
                    casper.click(css)
                });
            })

            /* Press 'Delete' button */
            casper.then(function () {
                var cssBtn = "input[value='Delete']"
                casper.click(cssBtn)
            })
        }


        /* run steps of the defined scene */
        casper.then(function (resp) {
            casper.capture("020_010_010_02.jpg")
        })
        mobi.test.run(test)
    });

})(mobi)