const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: `${__dirname}/public/js`,
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader?presets[]=react,presets[]=es2015',
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
