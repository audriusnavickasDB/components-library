const {rules, aliases} = require("../configs/shared.config");

module.exports = baseConfig => {
    baseConfig.config.module.rules = rules;
    baseConfig.config.resolve.alias = aliases;

    return baseConfig.config;
};