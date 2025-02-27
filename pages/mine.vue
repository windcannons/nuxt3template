<template>
  <div>
    <h1>新闻列表</h1>
    <div v-if="pending">加载中...</div>
    <div v-if="error">错误: {{ error.message }}</div>
    <ul
      v-if="!pending && !error && newsListData?.data">
      <li
        v-for="(news, index) in newsListData.data"
        :key="news.id"
        class="news-item"
        data-aos="fade-left"
        :data-aos-delay="index * 50">
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

    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">上一页</button>
      <span>第 {{ currentPage }} 页</span>
      <button @click="nextPage">下一页</button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useAsyncData } from 'nuxt/app';
import { getNewsList } from '../api/list/getNewsList.js';

// 使用 Vue Router
const router = useRouter();
const route = useRoute();

// 当前页数
const currentPage = ref(Number(route.query.page) || 1);

// 创建响应式变量来存储新闻数据
const newsListData = ref(null);
const pending = ref(true);
const error = ref(null);

// 获取新闻列表
const fetchNewsList = async () => {
  const { data, pending: fetchPending, error: fetchError } = await useAsyncData('newsList', () =>
    getNewsList({ site: 1, limit: 10, offset: (currentPage.value - 1) * 3 })
  );
  newsListData.value = data.value;  // 赋值新闻数据
  pending.value = fetchPending.value;  // 赋值加载状态
  error.value = fetchError.value;      // 赋值错误信息
};
// 监听路由参数变化
watch(
  () => route.query.page,
  async (newPage) => {
    currentPage.value = Number(newPage) || 1;
    await fetchNewsList(); // 更新新闻列表
  }
);

// 初始化加载新闻列表
await fetchNewsList();

// 翻到下一页
const nextPage = () => {
  currentPage.value++;
  router.push({ query: { page: currentPage.value } });
};

// 翻到上一页
const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    router.push({ query: { page: currentPage.value } });
  }
};
</script>

<style scoped>
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
img{
  width: 40px;
}

h2 {
  color: #007bff;
}

p {
  margin: 5px 0;
}

.pagination {
  margin-top: 20px;
}
</style>
