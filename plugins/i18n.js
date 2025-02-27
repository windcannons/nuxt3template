import { createI18n } from "vue-i18n";
import { defineNuxtPlugin } from "#app";

import en from "../locales/en.json";
import zh from "../locales/zh.json";

let t;

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: "zh", // 默认语言
    messages: {
      en,
      zh,
    },
  });

  t = i18n.global.t; // 直接赋值

  vueApp.use(i18n); // 使用 i18n
});
