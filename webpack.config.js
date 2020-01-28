const pkg = require("./package.json");
const {rules, aliases} = require("./configs/shared.config");

module.exports = {
    module: {
        rules: rules
    },
    entry: "./src/index.js",
    output: {
        filename: pkg.main,
        library: "",
        libraryTarget: "commonjs2"
    },
    resolve: {
        alias: aliases,
        extensions: [".js", ".jsx", ".json"],
        modules: ["node_modules"]
    }
};