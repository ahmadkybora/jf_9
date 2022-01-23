import Users from '../components/Users/index.html';
import Posts from "../components/Posts/index.html";
import Dashboard from "../components/Dashboard/index.html";

// در این قسمت روت های مورد نظر را ارسال میکنیم
// بدینوسیله هر روتی که به آن برویم
// کامپوننت مورد نظر در آن روت لود میشود

export const routes = [
    { path: "/", name: "dashboard", component: Dashboard }, 
    { path: "/users", name: "users", component: Users },
    { path: "/posts", name: "posts", component: Posts }, 
]