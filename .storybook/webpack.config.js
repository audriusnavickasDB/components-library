const rules = require("../configs/rules.config");
const {aliases} = require("../configs/aliases.config");

module.exports = baseConfig => {
    baseConfig.config.module.rules = rules;
    baseConfig.config.resolve.alias = aliases;

    return baseConfig.config;
};