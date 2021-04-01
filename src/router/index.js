import Vue from 'vue';
import Router from 'vue-router';

import Layout from '@/layout/DetaultLayout.vue';

Vue.use(Router);

export const constantRoutes = [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '/dashboard',
          alias: '/',
          component: () => import('@/views/Dashboard/index'),
          name: 'Dashboard',
          meta: {
            title: 'route.dashboard', icon: 'mdi-view-dashboard', noCache: true, affix: true,
          },
        },
      ],
    },
    
  ];
export default new Router({
    // mode: 'history', // gh-pages
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
});