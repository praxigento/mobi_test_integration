(function (mobi) {
    "use strict"

    /* extract working variables from execution context */
    var mobi = mobi
    var casper = mobi.casper
    var accAnon = mobi.cfg.account.anonymous

    /* setup this module environment */
    var desc = "Anonymous Sign Up / scene 03: use Sign Up link."


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
            var url = mobi.mage.front.getUrl("/")
            casper.thenOpen(url, function (resp) {
                test.assertTrue((resp.status >= 200) && (resp.status < 400), "Home page is loaded.");
            });
            /* clean up authentication and referral cookies */
            mobi.mage.front.auth.anon()
            /* switch store & currency to defaults */
            mobi.mage.front.mode.switch.all()
        }


        /**
         * Get Sign Up link from persistent context and load page.
         */
        {
            casper.then(function () {
                /* see 'scenario/020/010/010/scene_02.js' */
                var url = mobi.test.util.context.get('mobi.020.010.010.signupLink')
                casper.echo("Loaded URL: " + url)
                casper.open(url)
            })

            casper.then(function () {
                casper.waitForSelector("#form-validate > div > div > button", function () {
                    test.assert(true, '"Set a New Password" page is loaded.')
                })
            })
        }


        /**
         * Fill in the 'Set a New Password' form then login into the account
         */
        {
            /** Password value is filled in and submitted */
            casper.then(function () {
                casper.fillSelectors("#form-validate", {"#password": accAnon.mage.password}, false)
                casper.fillSelectors("#form-validate", {"#password-confirmation": accAnon.mage.password}, true)
                test.assert(true, "Password value is filled in and submitted.")
            })


            /** Login form is filled in and submitted */
            casper.then(function () {
                casper.waitForSelector("#send2", function () {
                    casper.fillSelectors("#login-form", {"#email": accAnon.mage.email}, false)
                    casper.fillSelectors("#login-form", {"#pass": accAnon.mage.password}, true)
                    test.assert(true, "Login form is filled in and submitted.")
                })
            })

            /** Customer Dashboard is loaded */
            casper.then(function () {
                casper.waitForSelector("h1.page-title", function () {
                    test.assert(true, "Customer Dashboard is loaded.")
                })
            })
        }
        /* run steps of the defined scene */
        casper.then(function (resp) {
            casper.capture("020_010_010_03.jpg")
        })
        mobi.test.run(test)
    });

})(mobi)