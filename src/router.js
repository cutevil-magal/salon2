import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import About from './views/About.vue'
import Services from './views/Services.vue'
import Сabinet from './components/regform.vue'
import Admin from './views/Admin.vue'
//import Sing from './views/Сabinet.vue'


const routes = [{name: 'Home', path: '/', component: Dashboard, meta: {title: 'Главная',showInNav: true}},
                {name: 'About', path: '/about', component: About, meta: {title: 'О нас',showInNav: true}},
                {name: 'Services', path: '/services', component: Services, meta: {title: 'Наши услуги',showInNav: true}},
                {name: 'Сabinet', path: '/cabinet', component: Сabinet, meta: {title: 'Личный кабинет',showInNav: true}},
                {name: 'Admin', path: '/admin', component: Admin, meta: {title: 'Админ',showInNav: false}},
                ]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
