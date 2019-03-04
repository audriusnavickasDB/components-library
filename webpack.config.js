const pkg = require('./package.json');
const rules = require('./configs/rules.config');
const { aliases } = require('./configs/aliases.config');

module.exports = {
    module: {
        rules: rules
    },
    entry: './src/index.js',
    output: {
        filename: pkg.main,
        library: '',
        libraryTarget: 'commonjs'
    },
    resolve: {
        alias: aliases,
        extensions: ['.js', '.jsx', '.json' ],
        modules: ['node_modules']
    },
};
