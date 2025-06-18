import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import '@fortawesome/fontawesome-free/css/all.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './components/pages/Home.vue'
import About from './components/pages/About.vue'
import Menu from './components/pages/Menu.vue'
import Blog from './components/pages/Blog.vue'
import Order from './components/pages/Order.vue'
import Contact from './components/pages/Contact.vue'

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/about',
        component: About,
    },
    {
        path: '/Menu',
        component: Menu,
    },
    {
        path: '/contact',
        component: Contact,
    },
    {
        path: '/blog',
        component: Blog,
    },
    {
        path: '/order',
        component: Order,
    }
];
const router = createRouter({
    history: createWebHashHistory(),
    routes:routes,
})

const app = createApp(App);
app.use(router);
app.mount('#app');
