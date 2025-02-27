// store/example.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useExampleStore = defineStore('example', () => {
  const counter = ref(2221); // 初始值为0
  const message = ref('Hello, Pinia!'); // 其他初始数据

  // 定义动作
  const increment = () => {
    counter.value++;
  };

  const setMessage = (newMessage) => {
    message.value = newMessage;
  };

  // 返回状态和动作
  return {
    counter,
    message,
    increment,
    setMessage,
  };
}, {
  persist: true, // 启用持久化
});
