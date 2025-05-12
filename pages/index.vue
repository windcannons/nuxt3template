<template>
  <div>
    <!--  国际化-->
    <my-language></my-language>

    <!--pinia-->
    <div style="margin: 20px 0;">
      <h1
        data-aos="fade-left"
        :data-aos-delay="index * 50">
        aos动画</h1>
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
  useExampleStore
} from "../store/example.js";
import MySwiper
  from "../components/mySwiper.vue";
import MyEcharts
  from "../components/myEcharts.vue";
import MyLanguage
  from "../components/myLanguage.vue";
import { useNuxtApp } from '#app';

// 服务器渲染
//const {
//  data: newsListData,
//} = await useAsyncData('newsList', () =>
//// 改为请求接口数据
//  ()=>{}
//);
//console.log(newsListData);


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
