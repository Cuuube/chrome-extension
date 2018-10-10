const path = require('path');

module.exports = {
    entry: [
        path.join(__dirname, './src/main.jsx'),
    ],
    output: {
        path: path.join(__dirname, 'static'),
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            'Img': path.resolve(__dirname, 'img'),
            '@C': path.resolve(__dirname, 'src', 'components'),
        },
        // modules: [path.resolve(__dirname, 'src'), 'node_modules'], // 自定义模块目录
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.jsx$/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            // name: '[hash].[ext]', // 可以用hash
                            outputPath: 'img/'
                        }
                    }
                ]
            }
        ]
    },
    devtool: 'source-map',
    mode: 'development'
}