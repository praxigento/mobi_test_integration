/**
 * Anonymous Sign Up / scene 01: create sale order as guest.
 */

/* libs and includes */
const fs = require('fs');
const mobi = require('../../../../src/mobi');

/**
 * Wrapper for async start of the scenario.
 *
 * @param {mobi} mobi
 * @returns {Promise.<void>}
 */
async function main(mobi) {
    /* get automation engine from app. context */
    const chromy = mobi.chromy;

    try {
        console.log('Go to front.');
        /* start test scenario*/
        await chromy.goto(mobi.cfg.url.mage.front.base);

        console.log('Switch to Russian store (USD is selected by default for Russian store).');
        await chromy.click('#switcher-store-trigger > strong', {waitLoadEvent: false});
        await chromy.click('#switcher-store > div > ul > li > a', {waitLoadEvent: true});

        const cssConfirm = '#maincontent > div.page.messages > div:nth-child(2) > div > div > div';


        console.log('Add BoostIron to cart.');
        await chromy.goto('http://gen.mage.test.mobi.prxgt.com/catalog/product/view/id/1');
        await chromy.click('#product-addtocart-button', {waitLoadEvent: false});
        await chromy.wait(cssConfirm);
        console.log('BoostIron is added.');


        console.log('Add BeeRoyal to cart.');
        await chromy.goto('http://gen.mage.test.mobi.prxgt.com/catalog/product/view/id/4');
        await chromy.evaluate(() => {
            let qty = document.querySelector('#qty');
            qty.value = '10';
        });
        await chromy.click('#product-addtocart-button', {waitLoadEvent: false});
        await chromy.wait(cssConfirm);
        console.log('BeeRoyal is added.');


        console.log('Go to checkout page.');
        await chromy.goto('http://gen.mage.test.mobi.prxgt.com/checkout/');
        console.log('Wait for "Email" field will appear on the form.');
        await chromy.wait('#customer-email');
        await chromy.type('#customer-email', 'mobi.anon@gmail.com');


        console.log('Wait for "First Name" field will appear on the form then fill in form fields.');
        await chromy.wait('input[name=firstname]');
        await chromy.type('input[name=firstname]', 'Anonymous');
        await chromy.type('input[name=lastname]', 'MOBI');
        await chromy.type('input[name=company]', 'Company');
        await chromy.type("input[name='street[0]']", 'Street');
        await chromy.type('input[name=city]', 'Riga');
        await chromy.type('input[name=region]', 'Ādažu novads');
        await chromy.type('input[name=postcode]', '1010');
        await chromy.type('input[name=telephone]', '37167092106');
        await chromy.select('select[name=country_id]', 'LV');
        /* jump to first field to activate knockout validators */
        await chromy.type('input[name=firstname]', '');

        console.log('Click "Next" button to go to the next step.');
        await chromy.wait('button[data-role=opc-continue]');
        await chromy.click('button[data-role=opc-continue]');

        console.log('Wait for "Braintree" payment option then select.');
        const cssBraintree = 'div.payment-method.payment-method-braintree > div.payment-method-title.field.choice > label > span';
        await chromy.wait(cssBraintree);
        await chromy.click(cssBraintree);


        console.log('Wait for Braintree frames then fill in fields.');
        await chromy.wait('iframe#braintree-hosted-field-number');
        await chromy.iframe('iframe#braintree-hosted-field-number', async frame => {
            await frame.wait('input[name=credit-card-number]');
            await frame.type('input[name=credit-card-number]', '4111111111111111');
        });


        await chromy.wait('iframe#braintree-hosted-field-expirationMonth');
        await chromy.iframe('iframe#braintree-hosted-field-expirationMonth', async frame => {
            await frame.type('#expiration-month', '12');
        });


        await chromy.wait('iframe#braintree-hosted-field-expirationYear');
        await chromy.iframe('iframe#braintree-hosted-field-expirationYear', async frame => {
            await frame.type('#expiration-year', '21');
        });


        await chromy.wait('iframe#braintree-hosted-field-cvv');
        await chromy.iframe('iframe#braintree-hosted-field-cvv', async frame => {
            await frame.type('#cvv', '321');
        });

        console.log('Click "Place Order" button.');
        await chromy.wait('#checkout-payment-method-load');
        await chromy.click('#checkout-payment-method-load > div > div > div.payment-method.payment-method-braintree._active > div.payment-method-content > div.actions-toolbar > div > button');

    } catch (e) {
        let png = await chromy.screenshot();
        fs.writeFileSync('out.png', png);
        console.log('there was an error: ', e);
    }
    /* close browser for standalone processing */
    if (!mobi.batch) await chromy.close();
}

/* start scenario if is not in the batch mode */
if (!mobi.batch) main(mobi);

/* export scenario to be used in the suits */
module.exports = main;