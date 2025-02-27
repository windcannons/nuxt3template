import {
  defineNuxtPlugin
} from 'nuxt/app';
import {
  createPinia
} from 'pinia';
import piniaPersistedstate
  from 'pinia-plugin-persistedstate';

export default defineNuxtPlugin((nuxtApp) => {
  const pinia = createPinia();

  // 使用持久化状态插件
  if (window) {
    pinia.use(piniaPersistedstate);
  }

  // 在插件中实例化 store
  nuxtApp.vueApp.use(pinia);
});
