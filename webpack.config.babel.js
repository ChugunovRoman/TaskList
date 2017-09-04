const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: `${__dirname}/public/js`,
        filename: 'bundle.js'
    },

    devServer: {
        hot: true,
        inline: true,
        port: 3000,
        historyApiFallback: true
    },

    externals: {
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-3',
                exclude: /node_modules/,

            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: true
            }
        })
    ]
};
