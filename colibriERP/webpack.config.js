/*
 * @Descripttion: 
 * @version: 
 * @Author: zw
 * @Date: 2021-11-30 13:37:21
 * @LastEditors: zw
 * @LastEditTime: 2021-12-04 11:49:49
 */
const path = require("path");

const HTMLWebpackPlugin = require("html-webpack-plugin");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// 导入模块联邦插件
const { ModuleFederationPlugin } = require('webpack').container;


function resolve(dir) {
    console.log(path.join(__dirname, '..', dir));
    return path.join(__dirname, '..', dir);
}

module.exports = {
    entry: "./src/index.jsx",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        // publicPath: "http://localhost:8000/",
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            "@": resolve('src')
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: ['babel-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.html$/,
                use: ['html-loader'],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
            }
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            template: 'index.html',
            inject: true, // 所有js脚本放于body之后
            minify: {
                removeComments: true, // 删除注释
                collapseWhitespace: true, // 折叠空白
                removeAttributeQuotes: true // 去除属性引用
            }
        }),
        new ModuleFederationPlugin({
            // library: { type: 'var', name: 'colibri_protal' },
            // 对外提供的打包后的文件名（引入时使用）
            filename: 'colibri_protal.js',
            // 当前应用模块名称
            name: 'colibri_protal',
            // 暴露模块
            exposes: {
                './Counter': './src/components/Counter',
            },
            // shared: ["react", "react-dom", "react-router-dom"]
        })
    ],
    devServer: {
        hot: true,
        port: 8000,
        proxy: {
            '/api': {
                target: 'http://39.98.216.254:81/',
                // target: 'https://erp.hariexpress.com.br/',
                changeOrigin: true,
                pathRewrite: { '^/api': '/api' }
            },
        }
    },
}