import path from 'node:path';
import MiniCssExtractPlugin from "./mini-css-extract-plugin.mjs";

/** @type {import("webpack").Configuration} */
export default {
    entry: './src/index.js',
    mode: 'development',
    devtool: false,
    output: {
        path: path.resolve(import.meta.dirname, 'dist2'),
        filename: 'bundle.js',
    },
    module: {
        rules: [{
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
        }],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'index.css'
        })
    ]
};
