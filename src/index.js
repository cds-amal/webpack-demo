let NodeRequire;
try {
  NodeRequire = __non_webpack_require__;
} catch (_) {
  NodeRequire = require;
}
const webPacked = require("./bungled/index.js");
const notWebPacked = NodeRequire("faked");

const dynamicPath = `${__dirname}/dynamic`.replace('dist','src');
const dynamic = NodeRequire(dynamicPath);

console.log(webPacked);
console.log(notWebPacked);
console.log(dynamic);
