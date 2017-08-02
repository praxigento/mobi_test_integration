/**
 * Application configuration
 *
 * @namespace mobi.cfg
 */
module.exports = {
    batch: false, // 'true': scenes are launched in suit.
    batchFile: '', // filename of the suit that is launched (to close browser at the end).
    url: require('./cfg/url'), // base URLS (http://.../) and relative addresses (/...).
    WAIT_TIME: 500, // default wait time for scenarios.
}