/**
 * Just check MOBI components (Magento/Odoo web sites).
 */

/* libs and includes */
const mobi = require('../../src/mobi');

/**
 * Wrapper for async start of the scenario.
 *
 * @param {mobi} mobi
 * @returns {Promise.<void>}
 */
async function main(mobi) {
    /* get automation engine from app. context */
    const chromy = mobi.chromy;

    /* start test scenario*/
    await chromy.goto(mobi.cfg.url.mage.admin.base);

    /* close browser for standalone processing */
    if (!mobi.batch) await chromy.close();
}

/* start scenario if is not in the batch mode */
if (!mobi.batch) main(mobi);

/* export scenario to be used in the suits */
module.exports = main;