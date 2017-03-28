# MOBI related staff (functions, objects)

Global objects are explicitly injected into the scenario's context:

```javascript
(function (casper, mobi) {
    "use strict"

    var cfg = mobi.cfg
    // ...
})(casper, mobi)
```