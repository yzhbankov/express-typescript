module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": "airbnb",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "eslint-plugin-react"
    ],
    "globals": {
        "describe": false,
        "xdescribe": false,
        "it": false,
        "xit": false,
        "after": false,
        "before": false
    },
    "rules": {
        "prefer-destructuring": 'off',
        "linebreak-style": 'off',
        "camelcase": 'off',
        "import/no-extraneous-dependencies": 'warn',
        "react/no-array-index-key": "off",
        "react/prefer-stateless-function": "warn",
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "react/forbid-prop-types": "warn",
        "react/no-typos": "warn",
        "react/jsx-no-bind": "warn",
        "react/prop-types": 'warn',
        "no-param-reassign": "warn",
        "no-extend-native": "warn",
        "no-bitwise": 'off',
        "no-restricted-globals": 'warn',
        "no-lone-blocks": 'off',
        "no-fallthrough": "warn",
        "no-trailing-spaces": "off",
        "no-underscore-dangle": "off",
        "no-undef": "warn",
        "no-unused-expressions": "warn",
        "operator-assignment": "warn",
        "max-len": [1, 170],
        "indent": ["error", 4, { "SwitchCase": 1 }],
        "jsx-a11y/click-events-have-key-events": "warn",
        "jsx-a11y/no-static-element-interactions": "warn",
        "jsx-a11y/mouse-events-have-key-events": "warn",
        "jsx-a11y/no-noninteractive-element-interactions": "warn",
        "jsx-a11y/anchor-is-valid": "warn",
        "radix": ["error", "as-needed"],
        "jsx-a11y/label-has-for": "warn",
    }
};
