/* eslint-disable consistent-return */
import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store/index';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('@/components/CommonLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/Home.vue'),
        name: 'home',
      },
    ],
  },
  {
    path: '/login',
    component: () => import('@/views/Login.vue'),
    name: 'login',
  },
  {
    path: '/person',
    component: () => import('@/views/Person.vue'),
    name: 'person',
  },
];

const router = new VueRouter({
  routes,
});
// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next();
  // 获取token
  const tokenStr = store.state.token;
  if (!tokenStr) return next('/login');
  next();
});
export default router;
