const reRouter = [
  {
    path: '/',
    name: 'index',
    component: () => import('../pages/index.vue')
  },
  {
    path: '/:catchAll(.*)', // 匹配所有路径
    redirect: '/' // 重定向到首页
  }
]
export default {
  routes:(_routes: any)=>[
    ...reRouter
  ]
}
