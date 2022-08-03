const webpack = require('webpack')

module.exports = {
    mode: 'development',
    entry: './src/Principal.js',
    output:{
        filename: 'principal.js',
        path: __dirname + '/public'
    }
}