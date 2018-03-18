var path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'output.js'
  },
  module: {
    rules: [
      {
        test: /\.png$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  resolveLoader: {
    modules: [
      'node_modules',
      path.resolve(__dirname, '..', 'src')
    ]
  }
}
