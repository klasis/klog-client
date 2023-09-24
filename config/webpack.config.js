const path = require('path');

const isProduction = process.env.NODE_ENV == 'production';



const config = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [],
    module: {
        rules: [
            // {
            //     test: /\.(js|jsx)$/i,
            //     loader: 'babel-loader',
            // },
            {
                test: /\.css$/i,
                use: 'css-loader',
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
    } else {
        config.mode = 'development';
    }
    return config;
};
