import {createRouter, createWebHistory} from 'vue-router'
import HomeView from './views/HomeView.vue'
import GithubView from './views/GithubView.vue'

const routes = [
    {path: '/', name: 'home',  component: HomeView},
    {path: '/github', name: 'about', component: GithubView}]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router