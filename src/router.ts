import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import GithubView from "./views/GithubView.vue";
import NotFound from "./views/NotFound.vue";

const routes = [
  { path: "/", name: "home", component: HomeView },
  // {path: '/github', name: 'about', component: GithubView},
  { path: "/:pathMatch(.*)*", name: "not-found", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
