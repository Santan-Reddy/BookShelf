import { createRouter,createWebHistory } from "vue-router";
import LoginView from '@/views/LoginView.vue'
import SignupView from "@/views/SignupView.vue";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ContactView from "@/views/ContactView.vue";
const router=createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:'/',
            name:'login',
            component:LoginView
        },
        {
            path:'/login',
            redirect:'/'
        },
        {
            path:'/signup',
            name:'signup',
            component:SignupView
        },
        {
            path:'/home',
            name:'home',
            component:HomeView
        },
        {
            path:'/about',
            name:'about',
            component:AboutView
        },
        {
            path:'/contact',
            name:'contact',
            component:ContactView
        },

    ]
})

export default router