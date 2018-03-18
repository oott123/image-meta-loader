var sizeOf = require('image-size')

module.exports = function () {
  var size = sizeOf(this.resourcePath)
  var meta = {
    type: size.type,
    size: {
      width: size.width,
      height: size.height
    }
  }
  return 'module.exports = ' + JSON.stringify(meta) + ';'
}
