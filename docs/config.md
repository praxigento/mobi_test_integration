# Tests Configuration

## Configuration levels

* global (all MOBI projects): `src/mobi/test/cfg.js`
* project (all instances of the specific MOBI project): `src/mobi/test/cfg/cfg.<project>.js` 
* local (concrete instance of the specific MOBI project): `etc/cfg.js`


## Configuration merge
 
All three configuration files are merged into one JS object `mobi.cfg` in `src/mobi/index.js`