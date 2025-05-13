import { createApp } from 'vue'
import router from "./routes";
import pinia from "./store"
import App from './App.vue'
const app=createApp(App)
app.use(router)
app.use(pinia)
document.body.style.overflow='hidden'
app.mount('#app')
