const path = require('path');

module.exports = {
  entry: './dist/assets/script/top.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/assets/script')
  }
};
