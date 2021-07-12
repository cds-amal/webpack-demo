// try {
//   NodeRequire = __non_webpack_require__;
// } catch (_) {
//   NodeRequire = require;
// }
//
// Sindresorhus' option
// https://github.com/sindresorhus/require-fool-webpack/blob/main/index.js
//
// module.exports = typeof __webpack_require__ !== 'undefined' ? __webpack_require__ : eval('require');

const DynamicRequire = typeof __webpack_require__ === "function" 
  ? __non_webpack_require__   // env is webpack
  : require;                  // env is not webpack and presumably node

// This module will be bundled and can be observed in
// dist/main.js
const webPacked = require("./bungled/index.js");

// Don't webpack this module. It will be resolved via node's require mechanism
// (this file is placed in node_modules)
// this should work for both bundled and unbundled
const notWebPacked = DynamicRequire("faked");

// Simulate a true dynamic require grab module path at compiletime
// this should work for both bundled and unbundled
const dynamicPath = `${__dirname}/dynamic`.replace('dist','src');
const dynamic = DynamicRequire(dynamicPath);

console.log(webPacked);
console.log(notWebPacked);
console.log(dynamic);
