/**
 * Just check MOBI components (Magento/Odoo web sites).
 */
const mobi = require('../../src/mobi');
const desc = 'MOBI components checking';
/**
 * @param {mobi} mobi
 * @returns {Promise.<void>}
 */
async function main(mobi) {
    const chromy = mobi.chromy;

    console.log('Start scenario: "%s".', desc);

    const front = mobi.cfg.url.mage.front.base;
    console.log('Check Magento front (%s).', front);
    await chromy.goto(front);

    const back = mobi.cfg.url.mage.admin.base;
    console.log('Check Magento backend (%s).', back);
    await chromy.goto(back);

    console.log('End scenario: "%s".', desc);

    if (!mobi.batch) {
        await chromy.close();
    }
}

if (!mobi.batch) {
    main(mobi);
}

module.exports = main;