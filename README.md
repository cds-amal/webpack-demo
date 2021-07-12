webpack creates bundles from walking the dependency tree starting at a specified entry point.

On finding a module that was required, it will (recursively?) load the contents of the module into its bundle and reference it in the webpacked code. That is 
```javascipt
const foo = require('./module-foo');
```

becomes something like
```javascipt
var __webpack_modules__ = {
  "./module-foo": __loaded_src_of__module-foo
}

// sometime later

const foo = __webpack_require__("resolved/path/to/module-foo")

```

where `__webpack_require__` will reference `__webpack_modules__` to get the goods.


Sometimes there are edge cases, like when you want the bundled and nonbundled code to behave the same (like truffle). Let's figure it out.


