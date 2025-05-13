import {createRouter,createWebHistory} from "vue-router";
const home=()=>import("../views/home.vue")
const router=createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/home',
            name:'home',
            component:home
        }

    ]
})
export default router
