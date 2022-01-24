/*
 * @Descripttion: 
 * @version: 
 * @Author: zw
 * @Date: 2021-11-30 13:36:42
 * @LastEditors: zw
 * @LastEditTime: 2021-12-01 11:10:00
 */
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, HashRouter } from "react-router-dom";
import { Provider } from "mobx-react";
import appStore from "./mobx/appStore";
import routes from "./routes/index";

ReactDOM.render(
    <Provider store={appStore}>
        <HashRouter>
            <Routes>
                {routes.map((item, index) => (
                    <Route key={index} path={item.path} element={item.component} />
                ))}
                <Route 
                    path="*"
                    element={
                        <main style={{ padding: '1rem' }}>
                        <p>There's nothing here!</p>
                        </main>
                    }
                />
            </Routes>
        </HashRouter>
    </Provider>,
    document.getElementById('colibri-app')
)