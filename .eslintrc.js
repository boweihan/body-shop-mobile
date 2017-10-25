module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "parser": "babel-eslint",
    "rules": {
        "indent": [2, 4],
        "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }],
        "react/jsx-indent": [2, 4],
        "max-len": ["error", 100],
        "react/forbid-prop-types": ["error", { "forbid": [] }],
        "no-underscore-dangle": 0,
        "function-paren-newline": 0,
        "no-unused-expressions": 0,
        "react/prefer-stateless-function": 0,
        "react/jsx-indent-props": [2, 4],
    }
};