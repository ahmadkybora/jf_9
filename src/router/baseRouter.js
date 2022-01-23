// این صفحه برای روت و مسیر یابی میباشد 
import { routes } from './index.js';
// بوسیله ایمپورت کردن فایل اچ تی ام ال میتوان
// به راحتی به المنت های آن دسترسی داشت
import '../../public/index.html';

// const router = [
//   { path: "/", view: () => console.log("/")  }, 
//   { path: "/settings", view: () => console.log("settings") },
// ];
// console.log(history.pushState)
// const b = document.querySelector("#app");
// window.addEventListener("popstate", router);

export class Router {
    defaultRoute = "/";
    constructor() {
        for (const route in routes) {
          if (routes[current].path === window.location.pathname) {
            return routes[current];
          }
        }
        // return this.defaultRoute;
    }
}