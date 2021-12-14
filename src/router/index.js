import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import Home from "../views/Home.vue"
import About from "../views/About.vue"
import Privacy from "../views/Privacy.vue"

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
    },
    {
        path: '/privacy',
        name: 'Privacy',
        component: Privacy
    }
]

const router = createRouter({
    history: createWebHashHistory(), // Hash Mode -> Does not require server side config, but bad seo
    // history: createWebHistory(), //HTML5 Mode -> Requires server side 404 config
    routes
})

export default router