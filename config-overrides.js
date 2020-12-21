const { override, fixBabelImports, addLessLoader } = require('customize-cra');
const path = require('path');

module.exports = {
    webpack: override(
        fixBabelImports('import', {
            libraryName: 'antd',
            libraryDirectory: 'es',
            style: true
        }),
        addLessLoader({
            lessOptions: {
                javascriptEnabled: true
            }
        }),
        (config) => {
            config.target = 'electron-renderer';
            return config;
        }
    ),
    paths: (paths) => {
        paths.appIndexJs = path.resolve(__dirname, 'src/renderer/index.tsx');
        return paths;
    }
};