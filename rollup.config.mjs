
import resolve from '@rollup/plugin-node-resolve'
import external from 'rollup-plugin-peer-deps-external'
import terser from '@rollup/plugin-terser'
// import scss from 'rollup-plugin-scss'
import postcss from 'rollup-plugin-postcss'
import sucrase from '@rollup/plugin-sucrase'
import pkg from './package.json' assert { type: 'json' }

export default {
    onwarn(warning, warn) {
        if (warning.code === 'THIS_IS_UNDEFINED') return;
        warn(warning);
    },
    input: 'src/main.js',
    output: [
        {
            file: 'dist/index.cjs.js',
            format: 'cjs',
        },
        {
            file: pkg.module,
            format: 'es',
            exports: 'named',
            // sourcemap: 'inline',
            // inlineDynamicImports: true,
            globals: {
                "react/jsx-runtime": "jsxRuntime",
                "react-dom/client": "ReactDOM",
                "react": "React",
            },
        },
        {
            file: 'dist/index.min.js',
            format: 'iife',
            name: 'version',
            plugins: [terser()],
            globals: {
                "react-dom/client": "ReactDOM",
                "react": "React",
            },
        }
    ],
    plugins: [
        // json(),
        external(),
        resolve({
            extensions: ['.js', '.jsx']
        }),
        // sass(),
        // scss({
        //     fileName: 'index.css',
        //     failOnError: true,
        //     // outputStyle: 'compressed'
        // }),
        postcss({
            plugins: [],
            minimize: true
        }),
        sucrase({
            exclude: ['node_modules/**'],
            transforms: ['jsx'],
            production: true,
        }),
        // babel({
        //     exclude: 'node_modules/**',
        //     babelHelpers: 'bundled',
        //     presets: [["@babel/preset-react", { "runtime": "automatic" }]]
        // }),
    ],
    external: [
        'react',
        'react-icons',
    ],
};