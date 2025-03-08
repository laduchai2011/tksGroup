import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';

/** @type {import('eslint').Linter.Config[]} */
export default [
    { files: ['**/*.{js,mjs,cjs,ts}'] },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    {
        ignores: ['dist/**', 'node_modules/**'],
    },
    {
        plugins: {
            import: importPlugin,
        },
        ignores: ['dist/**', 'node_modules/**'],
        files: ['src/**/*.ts'],
        rules: {
            '@typescript-eslint/no-unused-vars': 'warn',
            // 'no-console': 'warn',
            'import/no-unused-modules': [
                'warn',
                {
                    unusedExports: true, // Cảnh báo nếu có export không được sử dụng
                    missingExports: true, // Cảnh báo nếu import từ module không export gì cả
                    src: ['src/**/*.ts'], // Chỉ áp dụng cho thư mục src
                    // ignoreExports: ['node_modules/**'], // Bỏ qua index files
                },
            ],
        },
    },
];
