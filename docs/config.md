# Tests Configuration

## Configuration levels

* global (all MOBI projects): `src/mobi/cfg/global.js`
* project (all instances of the specific MOBI project): `etc/cfg/project.js` 
* local (concrete instance of the specific MOBI project): `etc/cfg/local.js`


### Global

Define common structure of the configuration tree for all MOBI projects. This is base file for configuration bundle
and it is placed under version control. All other configuration parameters are merged into this base tree.


### Project

Project specific structure of the configuration tree. One file for all instances of the specific MOBI project.
All projects configuration are placed under version control (see `src/mobi/cfg/prj/`) and appropriate 
configuration file should be copied into `etc/cfg/project.js` before tests running.


### Local

Instance specific parameters of the configuration tree (URLs, passwords, emails, etc.).
All instance configuration parameters has the same structure. Common template is placed under version control 
(see `etc/cfg/local.init.js`) and should be copied into `etc/cfg/local.js` before tests running.   



## Configuration merge
 
All three configuration files (`src/mobi/cfg/global.js`, `etc/cfg/project.js`, `etc/cfg/local.js`) are merged 
into one JS object `mobi.cfg` in `src/mobi/cfg/index.js`.