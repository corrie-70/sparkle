const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const _resolve = (relativePath) => path.resolve(appDirectory, relativePath);

module.exports = {
    mode: 'development',
    entry: './src/main/main',
    output: {
        path: _resolve('app'),
        filename: '[name].js'
    }
}