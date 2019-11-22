const {
    override,
    fixBabelImports,
    addWebpackAlias
} = require('customize-cra');
const path = require('path')

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        style: 'css',
    }),
    addWebpackAlias({
        "@components": path.resolve(__dirname, './src/components/'),
        "@pages": path.resolve(__dirname, './src/pages/'),
        "@assets": path.resolve(__dirname, './src/assets/'),
        "@util": path.resolve(__dirname, './src/util/')
    }),
);