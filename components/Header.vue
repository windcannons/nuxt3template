<template>
  <header
    class="header">
    <nav
      class="navbar">
      <ul
        class="nav-list">
        <li
          class="nav-item">
          <NuxtLink
            to="/"
            class="nav-link"
            exact-active-class="active-link"
          >
            首页
          </NuxtLink>
        </li>
        <li
          class="nav-item">
          <NuxtLink
            to="/mine"
            class="nav-link"
            exact-active-class="active-link"
          >
            个人中心
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script
  setup>

import {
  onBeforeUnmount,
  onMounted
} from "vue";
import { useNuxtApp } from '#app'; // 导入 useNuxtApp

//接收全局事件总线
const { $emitter } = useNuxtApp(); // 获取 emitter 实例
onMounted(() => {
  console.log('onMounted-->')
  $emitter.on('myEvent', (data)=>{
    console.log(data)
  }); // 监听事件
})
onBeforeUnmount(() => {
  $emitter.off('myEvent'); // 清理监听
})

</script>

<style
  scoped>
.header {
  background-color: #2c3e50; /* 深色背景 */
  padding: 15px 30px; /* 更大的内边距 */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* 阴影效果 */
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  position: sticky;
  top: 0;
  z-index: 2;
}

.navbar {
  display: flex;
}

.nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-item {
  margin-right: 30px; /* 更大的间距 */
}

.nav-link {
  color: #ecf0f1; /* 更柔和的文本颜色 */
  text-decoration: none;
  font-weight: 600; /* 加粗文本 */
  padding: 10px 15px; /* 添加内边距 */
  border-radius: 5px; /* 圆角效果 */
  transition: background-color 0.3s, color 0.3s; /* 添加过渡效果 */
}

.nav-link:hover {
  background-color: #34495e; /* 悬停时改变背景色 */
  color: #ffffff; /* 悬停时改变文字颜色 */
}

/* 高亮当前选中的链接 */
.active-link {
  background-color: #34495e; /* 当前选中项的背景色 */
  color: #ffffff; /* 当前选中项的文本颜色 */
}
</style>
