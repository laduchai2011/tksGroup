import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import external from 'rollup-plugin-peer-deps-external';
import babel from '@rollup/plugin-babel';
// import { terser } from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import alias from '@rollup/plugin-alias';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import copy from 'rollup-plugin-copy';
import json from '@rollup/plugin-json';
import replace from '@rollup/plugin-replace';
// import html from '@rollup/plugin-html';

const isDev = process.env.NODE_ENV !== 'production';

const entries = [{ find: 'src', replacement: './src' }];
const customResolver = resolve({
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
});

export default [
    {
        input: 'src/index.tsx',
        output: [
            // {
            //     file: 'dist/index.cjs',
            //     format: 'cjs',
            //     sourcemap: isDev,
            // },
            {
                file: 'dist/index.mjs',
                format: 'es',
                sourcemap: isDev,
            },
        ],
        plugins: [
            peerDepsExternal(),
            external(),
            resolve(),
            commonjs(),
            postcss(),
            typescript({
                tsconfig: './tsconfig.json',
                // declarationDir: 'dist/types',
            }),
            babel({
                babelHelpers: 'bundled',
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
                exclude: 'node_modules/**',
            }),
            alias({
                entries: entries,
                customResolver,
            }),
            serve({
                open: true, // Tự động mở trình duyệt
                contentBase: 'dist', // Thư mục chứa file được phục vụ
                port: 3000, // Cổng chạy server
            }),
            livereload('dist'), // Theo dõi thư mục "dist" và reload khi có thay đổi
            copy({
                targets: [{ src: 'public/index.html', dest: 'dist' }],
            }),
            json(),
            replace({
                'process.env.NODE_ENV': JSON.stringify('development'),
                preventAssignment: true, // Cần thiết cho Rollup 3+
            }),
            // html({
            //     fileName: 'index.html',
            // }),
            // terser(), // Chỉ nén code khi ở production
        ],
        // external: ['react', 'react-dom'],
        treeshake: false,
    },
];
