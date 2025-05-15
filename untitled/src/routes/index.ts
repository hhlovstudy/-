import {createRouter,createWebHistory} from "vue-router";
const home=()=>import("../views/home.vue")
const homeContent=()=>import("../views/homeContent.vue")
const router=createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/home',
            name:'home',
            component:home,
            children:[
                {
                    path:'homeContent',
                    name:'homeContent',
                    component:homeContent
                }
            ]

        }

    ]
})
export default router
