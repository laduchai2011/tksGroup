export default [
    {
        ignores: ['node_modules/', 'dist/', 'build/'],
    },
    {
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        plugins: {
            react: require('eslint-plugin-react'),
            'react-hooks': require('eslint-plugin-react-hooks'),
            'jsx-a11y': require('eslint-plugin-jsx-a11y'),
        },
        rules: {
            // React
            'react/jsx-uses-react': 'off',
            'react/react-in-jsx-scope': 'off', // Không cần import React trong React 17+
            'react/prop-types': 'off', // Không bắt buộc dùng prop-types nếu có TypeScript
            'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.tsx'] }],

            // React Hooks
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',

            // Accessibility (JSX a11y)
            'jsx-a11y/anchor-is-valid': 'warn',
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
];
