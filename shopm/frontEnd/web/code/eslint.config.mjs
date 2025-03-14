import globals from 'globals';
import js from '@eslint/js';
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default [
    { languageOptions: { globals: globals.browser } },
    js.configs.recommended,
    {
        ignores: ['dist/**', 'node_modules/**', 'rollup.config.mjs'],
    },
    {
        // files: ['**/*.ts', '**/*.tsx'],
        languageOptions: {
            parser: tsParser,
            sourceType: 'module',
            ecmaVersion: 'latest',
            parserOptions: {
                ecmaFeatures: {
                    jsx: true, // Đặt hỗ trợ JSX ở đây
                },
            },
        },
        plugins: {
            '@typescript-eslint': ts,
            react,
            'react-hooks': reactHooks,
            'jsx-a11y': jsxA11y,
        },
        files: ['src/**/*.tsx'],
        rules: {
            // TypeScript rules
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': 'warn',

            // React rules
            'react/jsx-uses-react': 'off',
            'react/react-in-jsx-scope': 'off',
            'react/jsx-uses-vars': 'error',

            // Hooks rules
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',

            // JSX Accessibility
            'jsx-a11y/anchor-is-valid': 'warn',
        },
    },
];
