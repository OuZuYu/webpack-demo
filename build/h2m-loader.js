const h2m = require('h2m')

module.exports = function(source) {
  const md = h2m(source)
  console.log(md)
  return md
}