const rules = require('../configs/rules.config');
const { aliases } = require('../configs/aliases.config');

module.exports = (baseConfig, env, defaultConfig) => {
    defaultConfig.module.rules = rules;
    defaultConfig.resolve.alias = aliases;

    return defaultConfig;
};
