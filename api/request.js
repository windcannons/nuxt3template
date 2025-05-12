import { $fetch } from 'ohmyfetch';
import { useCookie } from 'nuxt/app';

// 请求地址
const BASE_URL = 'http://192.168.2.130:11000';

export default Request = {
  get: (url, params) => {
    const cookie = useCookie('cookie');
    return new Promise((resolve, reject) => {
      $fetch(`${BASE_URL}${url}`, {
        method: 'GET',
        headers: {
          'Cookie': cookie.value || '',
          'Content-Type': 'application/json',
        },
        query: params,
        timeout: 5000,
      })
        .then(response => {
          if (response.code === 200) {
            resolve(response.data);
          } else {
            reject(new Error(response.message || 'Request failed'));
          }
        })
        .catch(error => {
          reject(new Error(error.message || 'Network error'));
        });
    });
  },

  post: (url, body) => {
    const cookie = useCookie('cookie');
    return new Promise((resolve, reject) => {
      $fetch(`${BASE_URL}${url}`, {
        method: 'POST',
        headers: {
          'Cookie': cookie.value || '',
          'Content-Type': 'application/json',
        },
        body,
        timeout: 5000,
      })
        .then(response => {
          if (response.code === 200) {
            resolve(response.data);
          } else {
            reject(new Error(response.message || 'Request failed'));
          }
        })
        .catch(error => {
          reject(new Error(error.message || 'Network error'));
        });
    });
  },
};
