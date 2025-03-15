import dotenv from 'dotenv';

dotenv.config(); // Load biến môi trường từ file .env

const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';

import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import external from 'rollup-plugin-peer-deps-external';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import alias from '@rollup/plugin-alias';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import copy from 'rollup-plugin-copy';
import json from '@rollup/plugin-json';
import replace from '@rollup/plugin-replace';
// import html from '@rollup/plugin-html';
import os from 'os';
import postcss from 'rollup-plugin-postcss';
import postcssPresetEnv from 'postcss-preset-env';
import autoprefixer from 'autoprefixer';

const getLocalIp = () => {
    const interfaces = os.networkInterfaces();
    for (const name in interfaces) {
        for (const net of interfaces[name] || []) {
            if (net.family === 'IPv4' && !net.internal) {
                return net.address;
            }
        }
    }
    return 'localhost';
};

const PORT = 3000;
const HOST = getLocalIp();

const entries = [{ find: 'src', replacement: './src' }];
const customResolver = resolve({
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
});

const rollup_dev = isDev && [
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
                sourcemap: true,
            },
        ],
        plugins: [
            peerDepsExternal(),
            external(),
            resolve(),
            commonjs(),
            postcss({
                plugins: [postcssPresetEnv(), autoprefixer()],
                minimize: true, // Nén CSS
                modules: true, // Hỗ trợ CSS Modules
                extract: true, // Xuất CSS ra file riêng
            }),
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
                host: HOST,
                port: PORT, // Cổng chạy server
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
        ],
        // external: ['react', 'react-dom'], // chỉ dùng khi build thư viện
        treeshake: false,
    },
];

const rollup_prod = isProd && [
    {
        input: 'src/index.tsx',
        output: [
            // {
            //     file: 'dist/index.cjs',
            //     format: 'cjs',
            //     sourcemap: false,
            // },
            {
                file: 'dist/index.mjs',
                format: 'es',
                sourcemap: false,
            },
        ],
        plugins: [
            peerDepsExternal(),
            external(),
            resolve(),
            commonjs(),
            postcss({
                plugins: [postcssPresetEnv(), autoprefixer()],
                minimize: true, // Nén CSS
                modules: true, // Hỗ trợ CSS Modules
                extract: true, // Xuất CSS ra file riêng
            }),
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
            copy({
                targets: [{ src: 'public/index.html', dest: 'dist' }],
            }),
            json(),
            replace({
                'process.env.NODE_ENV': JSON.stringify('production'),
                preventAssignment: true, // Cần thiết cho Rollup 3+
            }),
            // html({
            //     fileName: 'index.html',
            // }),
            terser(), // Chỉ nén code khi ở production
        ],
        // external: ['react', 'react-dom'], // chỉ dùng khi build thư viện
        treeshake: {
            pureExternalModules: true, // Xử lý các module ngoài có annotation __PURE__
            annotations: true, // Bật tính năng nhận diện annotation
        },
    },
];

let rollup_final;

switch (process.env.NODE_ENV) {
    case 'development':
        setTimeout(() => {
            console.log(`🚀 (rollup) Dev server running at: http://${HOST}:${PORT}`);
            console.log(process.env.NODE_ENV !== 'production', process.env.NODE_ENV);
        }, [5000]);
        rollup_final = rollup_dev;
        break;
    case 'production':
        console.log('..........🚀 (rollup) You are building production !');
        rollup_final = rollup_prod;
        setTimeout(() => {
            console.log(
                '🚀 Rollup Plugins in Production:',
                rollup_prod[0].plugins.map((p) => p.name)
            );
            // exec('tasklist | findstr node', (err, stdout, stderr) => {
            //     if (err) {
            //         console.error(`Error: ${err.message}`);
            //         return;
            //     }
            //     if (stderr) {
            //         console.error(`Stderr: ${stderr}`);
            //         return;
            //     }
            //     console.log('🔥 Các tiến trình Node.js đang chạy:');
            //     console.log(stdout, stderr, `🚀 Rollup đang chạy với PID: ${process.pid}`);
            // });
        }, 5000);
        break;
    default:
        setTimeout(() => {
            console.log(`............You are running mod (${process.env.NODE_ENV}). This mod is NOT set-up !`);
        }, 5000);
}

export default rollup_final;

// export default [
//     {
//         input: 'src/index.tsx',
//         output: [
//             // {
//             //     file: 'dist/index.cjs',
//             //     format: 'cjs',
//             //     sourcemap: isDev,
//             // },
//             {
//                 file: 'dist/index.mjs',
//                 format: 'es',
//                 sourcemap: isDev,
//             },
//         ],
//         plugins: [
//             peerDepsExternal(),
//             external(),
//             resolve(),
//             commonjs(),
//             postcss(),
//             typescript({
//                 tsconfig: './tsconfig.json',
//                 // declarationDir: 'dist/types',
//             }),
//             babel({
//                 babelHelpers: 'bundled',
//                 extensions: ['.js', '.jsx', '.ts', '.tsx'],
//                 exclude: 'node_modules/**',
//             }),
//             alias({
//                 entries: entries,
//                 customResolver,
//             }),
//             isDev &&
//                 serve({
//                     open: true, // Tự động mở trình duyệt
//                     contentBase: 'dist', // Thư mục chứa file được phục vụ
//                     host: HOST,
//                     port: PORT, // Cổng chạy server
//                 }),
//             isDev && livereload('dist'), // Theo dõi thư mục "dist" và reload khi có thay đổi
//             copy({
//                 targets: [{ src: 'public/index.html', dest: 'dist' }],
//             }),
//             json(),
//             replace({
//                 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
//                 preventAssignment: true, // Cần thiết cho Rollup 3+
//             }),
//             // html({
//             //     fileName: 'index.html',
//             // }),
//             isDev && terser(), // Chỉ nén code khi ở production
//         ],
//         // external: ['react', 'react-dom'], // chỉ dùng khi build thư viện
//         treeshake: true,
//     },
// ];
