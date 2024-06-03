const path = require('path')

module.exports = {
  // src files
  src: path.resolve(__dirname, '../src'),

  // production base files
  build: path.resolve(__dirname, '../dist'),

  //static past
  public: path.resolve(__dirname, '../public'),
}
