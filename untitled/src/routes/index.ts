import {createRouter,createWebHistory} from "vue-router";
const home=()=>import("../views/home.vue")
const homeContent=()=>import("../views/homeContent.vue")
const sleepParameter=()=>import("../views/sleepParameter.vue")
const environmentParameter=()=>import("../views/environmentParameter.vue")
const paramsInput=()=>import("../views/parameterInput.vue")
const router=createRouter({
    history:createWebHistory(),
    routes:[
        {
            path: '/',
            redirect: '/home/homeContent/parameterInput' // 访问 / 时自动跳转到 /home
        },
        {
            path:'/home',
            name:'home',
            component:home,
            children:[
                {
                    path:'homeContent',
                    name:'homeContent',
                    component:homeContent,
                    children:[
                        {
                            path:'sleepParameter',
                            name:'sleepParameter',
                            component:sleepParameter
                        },{
                            path:'environmentParameter',
                            name:'environmentParameter',
                            component:environmentParameter

                    },
                        {
                            path:'parameterInput',
                            name:'parameterInput',
                            component:paramsInput
                        }
                    ]
                }
            ]

        }

    ]
})
export default router
