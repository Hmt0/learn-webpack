const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const HappyPack = require('happypack');
// 根据cpu数量创建线程池
const os = require('os');
const happyThreadPool = HappyPack.ThreadPool({size: os.cpus().length})

module.exports = {
    optimization: {
        minimizer: [new TerserPlugin({
            parallel: true,
            // 打包多线程
            terserOptions: {
                compress: {
                    // 移除无用代码
                    unused: true,
                    drop_debugger: true,
                    drop_console: true,
                    dead_code: true
                }
            }
        })]
    },
    resolve: {
        extensions: ['.wasm', '.mjs', '.js', '.jsx', 'json']
    },
    entry: path.resolve(__dirname, 'src/index.jsx'),
    module: {
        noParse: /node_modules\/(jquery\.js)/,
        rules: [
            {
                test: /\.js$/,
                include: path.resolve('src'),
                use: {
                    loader: 'thread-loader'
                }
            },
            {
                test: /\.jsx?/,
                include: path.resolve('src'),
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        babelrc: false,
                        presets: [
                            require.resolve('@babel/preset-react'), // 转义jsx
                            [require.resolve('@babel/preset-env', {modules: false})]
                            // 转义ES6，webpack可以识别import语法
                        ],
                        cacheDirectory: true, // 是否对编译结果做缓存
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            // 需要被处理的文件的路径
            filename: 'index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new BundleAnalyzerPlugin(),
        new HappyPack({
            id: 'jsx',
            threadPool: happyThreadPool,
            // url-loader, file-loader不支持HappyPack
            loaders: ['babel-loader']
        })
    ]
}