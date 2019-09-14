module.exports = {
    root: true,
    env: {
        node: true,
    },
    "extends": [
        "plugin:vue/essential",
        "eslint:recommended",
    ],
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-empty": "error",
        "no-extra-parens": "error",
        "no-extra-semi": "error",
        "curly": "error",
        "eqeqeq": "error",
        "no-empty-function": "error",
        "no-multi-spaces": "error",
        "no-self-compare": "error",
        "no-useless-escape": "error",
        "no-useless-return": "error",
        "brace-style": "error",
        "camelcase": "error",
        "array-bracket-spacing": ["error", "never"],
        "comma-dangle": ["error", "always-multiline"],
        "comma-spacing": ["error", {"before": false, "after": true}],
        "eol-last": ["error", "never"],
        "func-call-spacing": ["error", "never"],
        "indent": ["error"],
        "jsx-quotes": ["error", "prefer-double"],
        "key-spacing": ["error", {"mode": "strict"}],
        "keyword-spacing": ["error"],
        "multiline-ternary": ["error", "never"],
        "no-lonely-if": "error",
        // "max-lines-per-function": ["error", {"max": 25, "skipComments": true}],
        "no-multiple-empty-lines": ["error", {"max": 1}],
        "no-trailing-spaces": ["error", {"skipBlankLines": true}],
        "no-unneeded-ternary": "error",
        "no-whitespace-before-property": "error",
        "quotes": ["error", "double", {"allowTemplateLiterals": true}],
        "semi": ["error", "always"],
        "semi-style": ["error", "last"],
        "space-before-function-paren": ["error", "never"],
        "space-in-parens": ["error", "never"],
        "spaced-comment": ["error", "always"],
        // ES6
        "arrow-body-style": ["error", "as-needed"],
        "arrow-parens": ["error", "as-needed"],
        "arrow-spacing": "error",
        "no-duplicate-imports": "error",
        "no-var": "error",
        "prefer-const": "error",
        "prefer-template": "error",
        "template-curly-spacing": "error",
        // WARNS
        "no-unreachable": "warn",
        "no-alert": "warn",
        "operator-assignment": ["warn", "always"],
    },
    parserOptions: {
        parser: "babel-eslint",
        sourceType: "module",
    },
    plugins: [
        "vue",
    ],
};