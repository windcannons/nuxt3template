import mitt from 'mitt';
import {
  defineNuxtPlugin
} from "nuxt/app";

// 创建一个 mitt 实例
const emitter = mitt();

// 导出实例
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('emitter', emitter); // 在应用中提供 emitter
});
