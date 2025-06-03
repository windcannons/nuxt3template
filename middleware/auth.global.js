//路由拦截
import { useCookie } from 'nuxt/app';
export default defineNuxtRouteMiddleware((to, from) => {
  const cookie = useCookie('cookie')

  if (cookie.value) {
    // 有 cookie，不允许访问 login 页面
    if (to.path === '/login') {
      return navigateTo('/')
    }
  } else {
    // 无 cookie，访问 checkIn 页面会跳转到 login
    if (to.path === '/checkIn') {
      return navigateTo('/login')
    }
  }
})
