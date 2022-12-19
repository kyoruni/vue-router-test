import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue'
import TopPage from'@/views/TopPage.vue';

const routeSettings: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'TopPage',
    component: TopPage,
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routeSettings,
});

export default router;
