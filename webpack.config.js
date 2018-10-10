const path = require('path');

module.exports = {
    entry: [
        path.join(__dirname, './script/main.js'),
    ],
    output: {
        path: path.join(__dirname, 'static'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    devtool: 'source-map',
    mode: 'development'
}