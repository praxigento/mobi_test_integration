# Integration tests for MOBI projects

<https://github.com/praxigento/mobi_test_integration>

## Installation


### Application 

```bash
$ npm install
```


### Chrome

Ubuntu:
```bash
# wget  https://dl-ssl.google.com/linux/linux_signing_key.pub
# apt-key add linux_signing_key.pub
# sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list'
# apt-get update
# apt-get install google-chrome-stable
```



## Configuration 

Setup local configuration in `./etc/cfg.js` (see `./etc/cfg.init.js`).

###  Chromy available options

<https://github.com/OnetapInc/chromy#chromyoptions>

## Run tests

```bash
$ node ./scenario/all.js
```



## Project structure

* **./etc/**: local configuration (URLs. accounts, etc.);
* **./scenario/**: test scenarios;
* **./src/**: functions and data structures are used in test scenarios;