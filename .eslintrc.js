/*
👋 Hi! This file was autogenerated by tslint-to-eslint-config.
https://github.com/typescript-eslint/tslint-to-eslint-config

It represents the closest reasonable ESLint configuration to this
project's original TSLint configuration.

We recommend eventually switching this configuration to extend from
the recommended rulesets in typescript-eslint. 
https://github.com/typescript-eslint/tslint-to-eslint-config/blob/master/docs/FAQs.md

Happy linting! 💖
*/
const path = require('path');

module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "prettier",
        "react-app"
    ],
    settings: {
        react: {
            version: '17.0.2', // To override "detect" setting in CRA's eslint-config-react-app/base.js
        },
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        // "debugLevel": true,
        "project": path.resolve(__dirname, "tsconfig.json"),
        "sourceType": "module"
    },
    "plugins": [
        "eslint-plugin-jsdoc",
        "eslint-plugin-import",
        "eslint-plugin-prefer-arrow",
        "@typescript-eslint",
        "@typescript-eslint/tslint"
    ],
    "ignorePatterns": [
        "**/dist/**/*",
        "**/*.d.ts"
    ],
    "rules": {
        "@typescript-eslint/tslint/config": ["warn", {
            "rules": {
                "whitespace": [true,
                    "check-branch",
                    "check-decl",
                    "check-operator",
                    // "check-module",
                    "check-separator",
                    "check-rest-spread",
                    "check-type",
                    "check-typecast",
                    "check-type-operator",
                    // "check-preblock",
                    // "check-postbrace"
                ]
            }
        }],
        "@typescript-eslint/adjacent-overload-signatures": "error",
        "@typescript-eslint/array-type": "off",
        "@typescript-eslint/await-thenable": "error",
        "@typescript-eslint/ban-ts-comment": "error",
        "@typescript-eslint/ban-types": [
            "error",
            {
                "types": {
                    "Object": {
                        "message": "Avoid using the `Object` type. Did you mean `object`?"
                    },
                    "Function": {
                        "message": "Avoid using the `Function` type. Prefer a specific function type, like `() => void`."
                    },
                    "Boolean": {
                        "message": "Avoid using the `Boolean` type. Did you mean `boolean`?"
                    },
                    "Number": {
                        "message": "Avoid using the `Number` type. Did you mean `number`?"
                    },
                    "String": {
                        "message": "Avoid using the `String` type. Did you mean `string`?"
                    },
                    "Symbol": {
                        "message": "Avoid using the `Symbol` type. Did you mean `symbol`?"
                    }
                }
            }
        ],
        "@typescript-eslint/consistent-type-assertions": "error",
        "@typescript-eslint/dot-notation": "error",
        "@typescript-eslint/explicit-member-accessibility": [
            "error",
            {
                "accessibility": "no-public"
            }
        ],
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/indent": [
            "off",
            2
        ],
        "@typescript-eslint/member-delimiter-style": [
            "warn",
            {
                "multiline": {
                    "delimiter": "semi",
                    "requireLast": true
                },
                "singleline": {
                    "delimiter": "semi",
                    "requireLast": false
                }
            }
        ],
        "@typescript-eslint/naming-convention": "off",
        "@typescript-eslint/no-array-constructor": "error",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-empty-interface": "error",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-extra-non-null-assertion": "error",
        "@typescript-eslint/no-floating-promises": "error",
        "@typescript-eslint/no-for-in-array": "error",
        "@typescript-eslint/no-implied-eval": "error",
        "@typescript-eslint/no-inferrable-types": "error",
        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/no-misused-promises": "error",
        "@typescript-eslint/no-namespace": "off",
        "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-parameter-properties": "off",
        "@typescript-eslint/no-shadow": [
            "off",
            {
                "hoist": "all"
            }
        ],
        "@typescript-eslint/no-this-alias": "warn",
        "@typescript-eslint/no-unnecessary-type-assertion": "error",
        "@typescript-eslint/no-unsafe-assignment": "warn",
        "@typescript-eslint/no-unsafe-call": "warn",
        "@typescript-eslint/no-unsafe-member-access": "warn",
        "@typescript-eslint/no-unsafe-return": "warn",
        "@typescript-eslint/no-unused-expressions": [
            "error",
            {
                "allowShortCircuit": true
            }
        ],
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/prefer-as-const": "error",
        "@typescript-eslint/prefer-for-of": "error",
        "@typescript-eslint/prefer-function-type": "error",
        "@typescript-eslint/prefer-namespace-keyword": "error",
        "@typescript-eslint/prefer-regexp-exec": "error",
        "@typescript-eslint/quotes": [
            "error",
            "single"
        ],
        "@typescript-eslint/require-await": "error",
        "@typescript-eslint/restrict-plus-operands": "off",
        "@typescript-eslint/restrict-template-expressions": ["error", {allowNumber: true, allowBoolean: true}],
        "@typescript-eslint/semi": [
            "error",
            "always"
        ],
        "@typescript-eslint/triple-slash-reference": [
            "off",
            {
                "path": "always",
                "types": "prefer-import",
                "lib": "always"
            }
        ],
        "brace-style": ["error", "1tbs", {
            "allowSingleLine": true
        }],
        "no-extra-semi": "off",
        "@typescript-eslint/no-extra-semi": "error",
        "@typescript-eslint/unbound-method": ["off", { ignoreStatic: true }],
        "@typescript-eslint/unified-signatures": "error",
        "prefer-rest-params": "off",
        "arrow-parens": [
            "off",
            "always"
        ],
        "comma-dangle": "error",
        "complexity": "off",
        "constructor-super": "error",
        "curly": [
            "off",
            "multi-line"
        ],
        "default-case": "error",
        "dot-notation": "error",
        "eol-last": "error",
        "eqeqeq": [
            "error",
            "smart"
        ],
        "guard-for-in": "error",
        "id-blacklist": "off",
        "id-match": "off",
        "import/order": "off",
        "jsdoc/check-alignment": "off",
        "jsdoc/check-indentation": "off",
        "jsdoc/newline-after-description": "off",
        "linebreak-style": [
            "error",
            "unix"
        ],
        "max-classes-per-file": "off",
        "new-parens": "error",
        "no-array-constructor": "off",
        "no-bitwise": "off",
        "no-caller": "error",
        "no-cond-assign": "off",
        "no-console": [
            "error",
            {
                "allow": [
                    "warn",
                    "dir",
                    "time",
                    "timeEnd",
                    "timeLog",
                    "trace",
                    "assert",
                    "clear",
                    "count",
                    "countReset",
                    "group",
                    "groupEnd",
                    "table",
                    "debug",
                    "info",
                    "dirxml",
                    "error",
                    "groupCollapsed",
                    "Console",
                    "profile",
                    "profileEnd",
                    "timeStamp",
                    "context"
                ]
            }
        ],
        "no-constant-condition": "off",
        "no-debugger": "error",
        "no-empty": "off",
        "no-empty-function": "off",
        "no-eval": "error",
        "no-fallthrough": "off",
        "no-implied-eval": "off",
        "no-invalid-this": "off",
        "no-new-wrappers": "off",
        "no-shadow": "off",
        "no-throw-literal": "error",
        "no-trailing-spaces": [
            "error",
            {
                "ignoreComments": true
            }
        ],
        "no-undef-init": "error",
        "no-underscore-dangle": "off",
        "no-unsafe-finally": "error",
        "no-unused-expressions": "error",
        "no-unused-labels": "error",
        "no-unused-vars": "off",
        "no-use-before-define": "off",
        "no-var": "off",
        "object-shorthand": "error",
        "one-var": [
            "off",
            "never"
        ],
        "prefer-arrow/prefer-arrow-functions": "off",
        "prefer-const": "off",
        "quote-props": [
            "error",
            "as-needed"
        ],
        "quotes": ["warn", "single"],
        "radix": "error",
        "require-await": "off",
        "semi": "error",
        "space-before-function-paren": [
            "error",
            {
                "anonymous": "never",
                "named": "never"
            }
        ],
        "spaced-comment": [
            "error",
            "always",
            {
                "markers": [
                    "/"
                ]
            }
        ],
        "use-isnan": "error",
        "valid-typeof": "off",
        'no-loop-func': 'warn',
        'import/no-anonymous-default-export': 'off', // override rules from eslint-config-react-app
        'array-callback-return': 'off',
        'import/no-webpack-loader-syntax': 'off', // override rules from eslint-config-react-app
    }
};
