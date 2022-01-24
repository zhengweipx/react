/*
 * @Descripttion: 
 * @version: 
 * @Author: zw
 * @Date: 2021-11-30 14:58:46
 * @LastEditors: zw
 * @LastEditTime: 2021-12-03 09:52:40
 */
import { Link } from "react-router-dom";
import './App.less';
// import { colibri_protal } from "appone/colibri_protal";
// import {About} from "appone/About";
import React, { useState } from 'react';
// const About = React.lazy(() => import('appone/About'));


// console.log(About)
function App(data) {
    return (
        <div>
            <h1>App</h1>
            <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/inbox">Inbox</Link></li>
            </ul>
            { data.children }
            {/* <React.Suspense fallback='Loading Counter...'>
                <About/>
            </React.Suspense> */}
            {/* <Pagination /> */}
            {/* { colibri_protal } */}
        </div>
    )
}

export default App;