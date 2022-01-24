/*
 * @Descripttion: 异步处理，主要原因是 remote 暴露的 js 文件需要优先加载，
    如果 bootstrap.js 不是一个异步逻辑，在 import 暴露的组件 的时候，会依赖 暴露项目（如colibri_protal） 的 对外提供的打包后的文件名 如 colibri_protal.js，
    如果直接在 index.js 执行，colibri_protal 的 colibri_protal.js 根本没有加载，所以会有问题。
 * @version: 
 * @Author: zw
 * @Date: 2021-11-30 13:36:42
 * @LastEditors: zw
 * @LastEditTime: 2021-12-03 18:09:20
 */
import('./bootstrap');