module.exports = {
    env: {
        'browser': true,
        'es6': true,
        'node': true,
    },
    extends: [
        'airbnb-base',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'prettier/@typescript-eslint',
    ],
    plugins: ['@typescript-eslint', 'prettier'],
    parser: '@typescript-eslint/parser',
    globals: {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly',
    },
    parserOptions: {
        'ecmaVersion': 2018,
        'sourceType': 'module',
    },
    'rules': {},
};
