import { createApp } from 'vue'
import router from "./routes";
import pinia from "./store"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import './nomal.css'
const app=createApp(App)
app.use(router)
app.use(pinia)
app.use(ElementPlus)
document.body.style.overflow='hidden'
app.mount('#app')
