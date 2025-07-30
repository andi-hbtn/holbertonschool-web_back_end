
module.exports = {
    env: {
        browser: false,
        es6: true,
        jest: true,
    },
    extends: [
        'airbnb-base',
        'plugin:jest/recommended',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['jest'],
    rules: {
        'no-console': 'off',
        'no-shadow': 'off',
        "padded-blocks": "off",
        'no-restricted-syntax': [
            'error',
            'LabeledStatement',
            'WithStatement',
        ],
        'jest/no-large-snapshots': 'off'
    },
    overrides: [
        {
            files: ['*.js'],
            excludedFiles: 'babel.config.js',
        }
    ]
};