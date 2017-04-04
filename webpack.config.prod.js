var path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        path.join(__dirname, 'src', 'index.js')
    ],
    output: {
        path: path.join(__dirname, 'assets'),
        filename: 'bundle.js',
        publicPath: '/assets/'
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            postcss: {
                plugins: () => [autoprefixer],
            }
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        }),
        new ExtractTextPlugin("styles.css")
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                include: path.join(__dirname, 'src')
            }, {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                        fallback: "style-loader", 
                        use: "css-loader!postcss-loader"
                    })       
            }, {
                test:   /\.styl$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader", 
                    use: "css-loader!postcss-loader!stylus-loader"
                })
            }, {
                test: /\.(png|jpg?g|gif|svg|ttf|eot|woff|woff2)$/,
                use: 'file-loader?name=[path][name].[ext]?[hash]'
            }
        ]
    }
};