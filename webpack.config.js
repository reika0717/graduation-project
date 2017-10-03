const path = require('path');

module.exports = {
  entry: './src/script/top.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
