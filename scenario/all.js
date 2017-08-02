/**
 * Run all scenarios one-by-one.
 */

/* libs & includes */
const mobi = require('../src/mobi');

/* set batch processing flags */
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
    await require('./000/')(mobi);
    await require('./020/')(mobi);

    /* ... then close browser */
    await mobi.chromy.close();
}

/* this is top level suite, it always should be launched */
main(mobi);
