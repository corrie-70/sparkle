const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const _resolve = (relativePath) => path.resolve(appDirectory, relativePath);
const mode = process.env.NODE_ENV ? 'development' : 'production';

module.exports = {
    mode,
    entry: './src/main/main',
    output: {
        path: _resolve('build'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.ts', '.json']
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: require.resolve('ts-loader'),
                        options: {
                            // disable type checker - we will use it in fork plugin
                            transpileOnly: true
                        }
                    }
                ]
            }
        ]
    },
    node: {
        __dirname: false,
        __filename: false
    },
    target: 'electron-main'
}