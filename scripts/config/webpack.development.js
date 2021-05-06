const path = require('path');
const { merge } = require('webpack-merge');
const { SERVER_PORT, PROJECT_PATH } = require('../constant');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    port: SERVER_PORT, // 指定端口，默认是8080
    stats: 'errors-only', // 终端仅打印 error
    clientLogLevel: 'silent', // 日志等级
    compress: true, // 是否启用 gzip 压缩
    open: false, // 打开默认浏览器
    hot: true, // 热更新
  },
  devtool: 'eval-source-map',
});
