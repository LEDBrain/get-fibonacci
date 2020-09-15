module.exports = {
    env: {
        node: true,
        es6: true,
    },
    plugins: ['prettier'],
    extends: ['eslint:recommended'],
    parseroptions: {
        ecmaVersion: 2020,
    },
    rules: {
        'guard-for-in': 2,
        'no-prototype-builtins': 0,
        'prettier/prettier': 'error',
        'semi': ['error', 'always'],
    },
};
