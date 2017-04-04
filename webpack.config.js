var path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        path.join(__dirname, 'src', 'index.js')
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/assets/'
    },
    devServer: {
        host: 'localhost',
        port: 3000,
        historyApiFallback: true
    },
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
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            postcss: {
                plugins: () => [autoprefixer],
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new ExtractTextPlugin("styles.css")
    ]
};