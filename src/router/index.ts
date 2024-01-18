import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'recruitment-news',
      meta: {
          Title: 'Tin tuyển dụng',
      },
      component: () => import('../views/RecruitmentNews.vue'),
    },
    {
      path: '/detail/:id',
      name: 'recruitment-detail',
      meta: {
          Title: 'Chi tiết tuyển dụng',
      },
      component: () => import('../views/ApplyJob.vue'),
    },
    {
      path: '/404',
      name: 'not-found',
      meta: {
      },
      component: () => import('../views/404Page.vue'),
    },
    {
      path: '/:catchAll(.*)',
      component: () => import('../views/404Page.vue'),
    },
  ]
})

export default router
