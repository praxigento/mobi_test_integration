(function (mobi) {
    "use strict"

    /* extract working variables from execution context */
    var mobi = mobi
    var casper = mobi.casper


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
            var toCtx = "http://link.to.com"
            mobi.test.util.context.put('mobi.020.010.010.signupLink', toCtx)
            var fromCtx = mobi.test.util.context.get('mobi.020.010.010.signupLink')
            test.assert(fromCtx == toCtx, "Done.")
        }


        /* run steps of the defined scene */
        casper.then(function (resp) {
            casper.capture("020_010_010_03.jpg")
        })
        mobi.test.run(test)
    });

})(mobi)