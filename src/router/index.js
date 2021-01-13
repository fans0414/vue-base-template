import Vue from 'vue';
import VueRouter from 'vue-router';

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
];

const router = new VueRouter({
  routes,
});

export default router;
