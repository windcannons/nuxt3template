<template>
  <div>
    <div class="menu">{{ i18n.t('useKill') }}</div>
    <div class="menu" style="flex: 1;">{{ i18n.t('helpCenter') }}</div>
    <div class="language-switch">
      <select @change="handleLangChange($event.target.value)">
        <option value="zh">中文</option>
        <option value="en">English</option>
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { ref } from "vue";

const i18n = useI18n();

// 处理语言切换
const handleLangChange = (val: string) => {
  console.log('切换语言为:', val);
  i18n.locale.value = val; // 确保更改了响应式语言
}
</script>
