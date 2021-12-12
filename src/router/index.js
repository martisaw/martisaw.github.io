import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import Home from "../views/Home.vue"
import About from "../views/About.vue"

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
]

const router = createRouter({
    history: createWebHashHistory(), // Hash Mode -> Does not require server side config, but bad seo
    // history: createWebHistory(), //HTML5 Mode -> Requires server side 404 config
    routes
})

export default router