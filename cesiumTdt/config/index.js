'use strict'

const path = require('path')

module.exports = {
    path:{
        assetsPath: function (_path){
            return path.posix.join(this.assetsSubDirectory, _path);
        },
        libraryPath: function (_path) {
            return path.posix.join(this.librarySubDirectory, _path);
        },
        libraryRoot: path.resolve(__dirname, '../dist'),
        librarySubDirectory:'/',
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
    },
    dev: {
        host: 'localhost', // can be overwritten by process.env.HOST
        port: 8084, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
        autoOpenBrowser: true,
        errorOverlay: true,
        notifyOnErrors: true,
        poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-
        devtool: 'cheap-module-eval-source-map',// https://webpack.js.org/configuration/devtool/#development
        cssSourceMap: true,
        proxyTable: {
            '/userInfo':{
                target: 'http://127.0.0.1:7001/',
                changeOrigin: true,
                pathRewrite: {
                    '^/': ''
                }
            },
            '/login':{
                target: 'http://127.0.0.1:7001/',
                changeOrigin: true,
                pathRewrite: {
                    '^/': ''
                }
            },
            '/logout':{
                target: 'http://127.0.0.1:7001/',
                changeOrigin: true,
                pathRewrite: {
                    '^/': ''
                }
            }
        },
    },
    pro:{
        // Template for index.html
        index: path.resolve(__dirname, '../dist/index.html'),
        /**
         * Source Maps
         */
        productionSourceMap: true,
        // https://webpack.js.org/configuration/devtool/#production
        devtool: '#source-map',
        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],
        // Run the build command with an extra argument to
        // View the bundle analyzer report after build finishes:
        // `npm run build --report`
        // Set to `true` or `false` to always turn it on or off
        bundleAnalyzerReport: process.env.npm_config_report
    }
}
