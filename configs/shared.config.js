const path = require("path");
const autoprefixer = require("autoprefixer");

const rules = [
    {
        exclude: /node_modules/,
        test: /\.(scss)$/,
        use: [
            "style-loader",
            "css-loader",
            {
                loader: "postcss-loader",
                options: {
                    plugins: [
                        autoprefixer({
                            grid: "autoplace"
                        })
                    ]
                }
            },
            "sass-loader"
        ]
    },
    {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: [
                    "@babel/preset-env",
                    "@babel/react"
                ]
            }
        }
    }
];

// __dirname gives exact path where the file is, in this case: PROJECT/configs. It is needed to add ../ at the beginning of the aliases to solve correct path.

const aliases = {
    "@audnavlib/button": path.resolve(__dirname, "../src/Button/src/index"),
    "@audnavlib/button-group": path.resolve(__dirname, "../src/ButtonGroup/src/index")
};

module.exports = {rules, aliases};
