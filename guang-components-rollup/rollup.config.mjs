import postcss from 'rollup-plugin-postcss';
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';

/** @type {import("rollup").RollupOptions} */
export default {
    input: 'src/index.ts',
    external: [ 'react', 'react-dom' ],
    output: [
        {
            file: 'dist/esm.js',
            format: 'esm'
        },
        {
            file: 'dist/cjs.js',
            format: "cjs"
        },
        {
            file: 'dist/umd.js',
            name: 'Guang',
            format: "umd",
            globals: {
                'react': 'React',
                'react-dom': 'ReactDOM'
            }
        }
    ],
    plugins: [
        resolve(),
        commonjs(),
        typescript({
            tsconfig: 'tsconfig.json'
        }),
        postcss({
            extract: true,
            extract: 'index.css'
        }),
        replace({
            'process.env.NODE_ENV': '"production"'
        })
    ]
};
