/**
 * Customer related scenarios.
 */

/* libs & includes */
const mobi = require('../../src/mobi');

/* set batch processing flags for standalone mode */
if (!mobi.batch) {
    mobi.batch = true;
    mobi.batchFile = __filename;
}

/**
 * Wrapper for async start of the suit.
 *
 * @param {mobi} mobi
 * @returns {Promise.<void>}
 */
async function main(mobi) {
    /* run suite's scenarios */
    await require('./010')(mobi);

    /* close browser for standalone mode */
    if (mobi.batchFile === __filename) await mobi.chromy.close();
}

/* start this suit if it is not launched from the other suite */
if (mobi.batchFile === __filename) main(mobi);

/* export this suite to be used in the other suits */
module.exports = main;