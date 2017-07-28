const Chromy = require('chromy');

const WAIT_TIME = 500;

async function main() {
    // let chromy = new Chromy()
    let chromy = new Chromy({visible: true});

    console.log('goto homepage');
    await chromy.goto('http://gen.mage.test.mobi.prxgt.com/');

    console.log('switch to russian store (USD is set by default)');
    await chromy.click('#switcher-store-trigger > strong', {waitLoadEvent: false});
    await chromy.click('#switcher-store > div > ul > li > a', {waitLoadEvent: true});
    await chromy.wait(WAIT_TIME);

    console.log('goto "Cat#2"');
    await chromy.click('#ui-id-3', {waitLoadEvent: true});

    console.log('then click BoostIron');
    await chromy.click('#maincontent > div.columns > div.column.main > div.products.wrapper.grid.products-grid > ol > li:nth-child(1) > div > div > div.product-item-inner > div > div.actions-primary > form > button', {waitLoadEvent: false});

    await chromy.console((text) => console.log(text));

    await chromy.wait(async () => {
        let found;  // buffer for found DOM element
        let procId; // id of the process that find element in DOM

        /**
         * Repeat find process every N msec, resolve promise when element is found.
         *
         * @returns {Promise}
         */
        let getData = (css) => {
            return new Promise(function (resolve) {
                procId = setInterval(() => {
                    let found = document.querySelector(css);
                    if (found === null) {
                        /* TODO check timeout then break the loop */
                        console.log('Found is "' + found + '", still waiting... ');
                    } else {
                        /* element is found, break the loop */
                        console.log('Found is "' + found + '", stop the loop.');
                        clearInterval(procId);
                        resolve(found);
                    }
                }, 300);
            });
        };

        found = await getData('#maincontent > div.page.messages > div:nth-child(2) > div > div > div');
        // console.log(JSON.stringify(found));
        return true;

    });

    // await chromy.result((r) => console.log(r));

    // console.log('then click BeeRoyal');
    // await chromy.click('#maincontent > div.columns > div.column.main > div.products.wrapper.grid.products-grid > ol > li:nth-child(3) > div > div > div.product-item-inner > div > div.actions-primary > form > button', {waitLoadEvent: true});
    // await chromy.wait('#maincontent > div.page.messages > div:nth-child(2) > div > div > div');
    // // await chromy.wait(WAIT_TIME*10);
    //
    // console.log('goto cart review');
    // await chromy.goto('http://gen.mage.test.mobi.prxgt.com/checkout/cart/');

    console.log('finalize scenario');
    await chromy.wait(WAIT_TIME * 4);
    await chromy.close();
}

main();