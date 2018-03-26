'use strict'
// Template version: 1.2.5
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {
    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/welcome':{
        target:'http://127.0.0.1:8060',
        changeOrigin:true,
        pathRewrite:{
            '^/welcome':'/welcome',
        }
      },
      '/user':{
        target:'http://127.0.0.1:8060',
        changeOrigin:true,
        pathRewrite:{
            '^/user':'/user',
        }
      },
      '/recruit':{
        target:'http://127.0.0.1:8060',
        changeOrigin:true,
        pathRewrite:{
            '^/recruit':'/recruit',
        }
      },
      'test':{
        target:'http://api.map.baidu.com/geocoder/v2/?ak=oH71EWAMyG50Ih83R0aTqOi5cib0IAUC&callback=renderReverse&location=39.983424,116.322987&output=json&pois=1',
        changeOrigin:true,
        pathRewrite:{
            '^/test':'/test',
        }
      }
    },

    host: 'localhost', // can be overwritten by process.env.HOST
    port: 7080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false,
    useEslint: true,
    showEslintErrorsInOverlay: false,
    devtool: 'eval-source-map',
    cacheBusting: true,
    cssSourceMap: false,
  },

  build: {
    index: path.resolve(__dirname, '../dist/index.html'),
    register: path.resolve(__dirname, '../dist/register.html'),
    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',

    productionSourceMap: true,
    devtool: '#source-map',
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
