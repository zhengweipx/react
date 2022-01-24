/*
 * @Descripttion: 
 * @version: 
 * @Author: zw
 * @Date: 2021-11-30 14:58:46
 * @LastEditors: zw
 * @LastEditTime: 2021-11-30 18:49:55
 */
import { Link } from "react-router-dom";
import './App.less';

function App(data) {
    return (
        <div>
            <h1>App</h1>
            <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/inbox">Inbox</Link></li>
            </ul>
            { data.children }
        </div>
    )
}

export default App;