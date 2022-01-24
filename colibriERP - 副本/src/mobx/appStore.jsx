/*
 * @Descripttion: 
 * @version: 
 * @Author: zw
 * @Date: 2021-11-30 19:14:51
 * @LastEditors: zw
 * @LastEditTime: 2021-11-30 19:18:05
 */
import { observable, action } from "mobx";

const appStore = observable({
    counter: 0
})

appStore.addCount = action(() => {
    appStore.counter += 1;
})

export default appStore;