/**
 * Just check MOBI components (Magento/Odoo web sites).
 */
const mobi = require('../../src/mobi');

/**
 * @param {mobi} mobi
 * @returns {Promise.<void>}
 */
async function main(mobi) {
    const chromy = mobi.chromy;

    await chromy.goto(mobi.cfg.url.mage.front.base);

    if (!mobi.batch) {
        await chromy.close();
    }
}

if (!mobi.batch) {
    main(mobi);
}

module.exports = main;