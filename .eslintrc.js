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
    'rules': {
        'import/prefer-default-export': 'off',
        'import/no-unresolved': 'off',
        'no-undef': 'off',
        'no-useless-constructor': 'off',
        'class-methods-use-this': 'off',
        'no-console': 'off',
        'no-useless-catch': 'off',
        'lines-between-class-members': 'off',
        'dot-notation': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
    },
};
