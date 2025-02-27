// api/http.ts
import { $fetch } from 'ohmyfetch';
import { useCookie } from 'nuxt/app';

// 请求地址
const BASE_URL = 'https://admin.nimbusyun.com';
export const requests = {
  get: async (url, params) => {
    const cookie = useCookie('cookie');
    return await $fetch(`${BASE_URL}${url}`, {
      method: 'GET',
      headers: {
        'Cookie': cookie.value || '',
        'Content-Type': 'application/json',
      },
      query: params,
      timeout: 5000,
    });
  },

  post: async (url, body) => {
    const cookie = useCookie('cookie');
    return await $fetch(`${BASE_URL}${url}`, {
      method: 'POST',
      headers: {
        'Cookie': cookie.value || '',
        'Content-Type': 'application/json',
      },
      body,
      timeout: 5000,
    });
  },
};
