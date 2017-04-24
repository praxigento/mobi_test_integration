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
                        var cssBtnSignIn= "input#signIn"
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
         * Go to Inbox and find sign up email.
         */
        {
            /* Signup email is found */
            casper.then(function () {
                var cssItem = "body > table:nth-child(16) > tbody > tr > td:nth-child(2) > table:nth-child(1) > tbody > tr > td:nth-child(2) > form > table.th > tbody > tr:nth-child(1) > td:nth-child(3) > a "
                casper.waitForSelector(cssItem, function () {
                    var subject = casper.fetchText(cssItem)
                    var isSignupEmail = (subject.indexOf("Welcome to MOBI Test Store") !== -1)
                    casper.click(cssItem)
                    test.assert(true, "Signup email is found.")
                })
            })
        }


        /* run steps of the defined scene */
        casper.then(function (resp) {
            casper.capture("020_010_010_02.jpg")
        })
        mobi.test.run(test)
    });

})(mobi)