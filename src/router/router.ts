import Main from '@/pages/Main.vue'
import {createRouter, createWebHistory} from "vue-router";
import UserPage from "@/pages/UserPage.vue"
import About from "@/pages/About.vue"
import PostIdPage from "@/pages/PostIdPage.vue"
const routes = [
    {
        path:'/',
        component: Main
    },
    {
        path:'/pages',
        component: UserPage
    },
    {
        path:'/about',
        component: About
    },
    {
        path:'/pages/:id',
        component: PostIdPage
    },
]

const router = createRouter( {
    routes,
    history: createWebHistory()
})

export default router;
