<template>
  <div>
    <h1 class="bg-red text-20">
      新闻列表</h1>
    <ul>
      <li
        v-for="(news, index) in newsListData.data"
        :key="news.id"
        class="news-item"
        data-aos="fade-left"
        :data-aos-delay="index * 50"
      >
        <img
          :src="`https://admin.nimbusyun.com${news.iconUrl}`"
          alt="新闻图标"
          class="news-icon" />
        <h2>
          {{
            news.title
          }}</h2>
        <div
          v-html="news.profiles"></div>
        <p>
          标签:
          {{
            news.tagsName
          }}</p>
        <p>
          创建时间:
          {{
            news.created
          }}</p>
      </li>
    </ul>

    <!--  国际化-->
    <my-language></my-language>

    <!--pinia-->
    <div style="margin: 20px 0;">
      <h1>
        示例组件</h1>
      <p>
        当前计数器值:
        {{
          useExampleStore().counter
        }}</p>
      <button
        @click="incrementCounter">
        增加计数器
      </button>
    </div>
    <!--  轮播图-->
    <my-swiper></my-swiper>

  <!--  echarts-->
    <my-echarts></my-echarts>


  <!--  全局事件总线-->
    <el-button type="primary" @click="transferData">全局事件总线</el-button>
  </div>
</template>

<script
  setup>
import {
  useAsyncData,
} from 'nuxt/app';
import {
  getNewsList
} from '../api/list/getNewsList.js';
import {
  useExampleStore
} from "../store/example.js";
import MySwiper
  from "../components/mySwiper.vue";
import MyEcharts
  from "../components/myEcharts.vue";
import MyLanguage
  from "../components/myLanguage.vue";
import { useNuxtApp } from '#app'; // 导入 useNuxtApp
import { Search, Edit, Check } from '@element-plus/icons-vue'

// 获取新闻列表
const {
  data: newsListData,
} = await useAsyncData('newsList', () =>
  getNewsList({
    site: 1,
    limit: 3,
    offset: 0
  })
);
console.log(newsListData);


// 创建一个方法来增加计数器
const incrementCounter = () => {
  useExampleStore().increment(); // 调用 store 中的增量方法
};


//全局事件总线  在header组件内接收
const { $emitter } = useNuxtApp(); // 获取 emitter 实例
const transferData = ()=>{
  $emitter.emit('myEvent', { message: 'Hello from EmitterComponent!' }); // 发送事件
}

</script>

<style
  scoped>
.news-item {
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
}

.news-icon {
  max-width: 100%;
  height: auto;
}

img {
  width: 40px;
}

h2 {
  color: #007bff;
}

p {
  margin: 5px 0;
}
</style>
