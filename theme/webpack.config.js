const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const jsConfig = {
    entry: {
        main: ['./assets/js/script.js'],
    },
    output: {
        path: path.resolve(__dirname, 'assets/public/dist/js'),
        filename: 'script.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/transform-runtime']
                    }
                }
            },
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'assets'),
        publicPath: '/public/dist/js/'
    }
}

const scssConfig = {
    entry: {
        style: ['./assets/sass/style.scss'],
    },
    output: {
        path: path.resolve(__dirname, 'assets/public/dist/css'),
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'images',
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            sourceMap: true,
                            plugins: [
                                require('autoprefixer'),
                            ]
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                            implementation: require('dart-sass'),
                            sassOptions: {
                                fiber: false,
                                sourceMap: true,
                            },
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
    ],
}

module.exports = [jsConfig, scssConfig];