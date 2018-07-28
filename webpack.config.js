'use strict';

const webpack = require('webpack');
const path = require('path');

module.exports = {

    entry: [
        'babel-polyfill',
        './src/index.js'
    ],

    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/build/',
        filename: 'project.bundle.js'
    },

    module: {
        rules: [
            {
                test: [ /\.vert$/, /\.frag$/ ],
                use: 'raw-loader'
            },
            {
                test:  /\.js$/,
                use: 'babel-loader',
                include: path.join(__dirname, 'src')
            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'CANVAS_RENDERER': JSON.stringify(true),
            'WEBGL_RENDERER': JSON.stringify(true)
        })
    ]

};
