module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    'parser': 'babel-eslint',
    parserOptions: { 
        ecmaVersion: 8,
        'sourceType': 'module',
        'allowImportExportEverywhere': true
    }, // to enable features such as async/await
    ignorePatterns: ['node_modules/*', '.next/*', '.out/*', '!.prettierrc.js'], // We don't want to lint generated files nor node_modules, but we want to lint .prettierrc.js (ignored by default by eslint)
    extends: [
        "plugin:react/recommended",
        "eslint:recommended",
    ],
    settings: {
    },
    plugins: [
        'react',
        'import'
    ],
    overrides: [
        {
            files: ['**/*.tsx'],
        },
    ],
    rules: {
        indent: ['error', 4],
        semi: ['error', 'always'],
        'one-var': ['error', 'never'],
        'require-jsdoc': 'off',
        'valid-jsdoc': 'off',
        camelcase: ['error'],
        'no-var': ['error'],
        'max-len': 'off',
        curly: ['error', 'multi-or-nest'],
        'arrow-parens': 'off',
        'comma-dangle': 'off',
        'linebreak-style': 'off',
        yoda: 'error',
        'no-return-await': 'off',
        'space-infix-ops': 'error',
        'eol-last': ['error', 'always'],
        'no-useless-constructor': 'off',
        'switch-colon-spacing': ['error', { before: false, after: true }],
        'key-spacing': ['error', { beforeColon: false, afterColon: true }],
        eqeqeq: ['error', 'always', { null: 'ignore' }],
        'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
        'keyword-spacing': ['error', { before: true, after: true }],
        'brace-style': ['error', 'stroustrup'],
        'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
        'space-before-function-paren': ['error', {
            anonymous: 'never',
            named: 'never',
            asyncArrow: 'always'
        }],
        "sort-imports": ["error", {
            "ignoreCase": true,
            "ignoreDeclarationSort": true,
            "ignoreMemberSort": false,
            "memberSyntaxSortOrder": ["none", "all", "multiple", "single"],
        }],
        'import/order': [
            'error',
            {
                'newlines-between': 'never',
                alphabetize: { order: 'asc', caseInsensitive: true },
                groups: ['builtin', 'external', 'internal', 'index', 'sibling', 'parent', 'object']
            }
        ],
    }
};
