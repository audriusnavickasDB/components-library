const path = require('path');

// __dirname gives exact path where the file is, in this case: PROJECT/configs. It is needed to add ../ at the beginning of the aliases to solve correct path.

const aliases = {
    '@audnavlib/button': path.resolve(__dirname, '../src/Button/src/index'),
    '@audnavlib/button-group': path.resolve(__dirname, '../src/ButtonGroup/src/index'),
};

module.exports = { aliases };
