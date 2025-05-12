<template>
  <div class="max-w-screen overflow-hidden">
    <NuxtLayout>
      <Header></Header>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import {
  onMounted,
  watch
} from "vue";
import { useNuxtApp } from "#app";
import {
  useRoute
} from "vue-router";

const { $aos } = useNuxtApp();
onMounted(() => {
  $aos().init({
    duration: 1000, // 动画持续时间
    easing: 'ease-in-out', // 动画缓动函数
    offset: 120, // 触发动画的滚动偏移量
    once: true, // 动画只触发一次
  });
});

const route = useRoute();
// 监听路由参数变化
watch(
  () => route,()=>{
    window.scrollTo(0, 0)
  },{
    deep:true
  }
);

</script>
