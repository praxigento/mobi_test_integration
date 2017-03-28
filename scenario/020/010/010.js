(function (casper, mobi) {
    "use strict"


    var desc = "Simple MOBI test"


    // test scenario itself
    casper.test.begin(desc, function scene_020_010_010(test) {
        mobi.test.start()

        test.assert(true, 'Gmail login form is loaded.')

        mobi.test.run(test)
    })

})(casper, mobi)