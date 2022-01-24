import App from "../App";
import About from "../pages/About";

const routes = [
    { path: '/', text: 'home', component: <App /> },
    { path: '/about', text: 'about', component: <About /> },
]

export default routes;