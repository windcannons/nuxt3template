export default defineNuxtConfig({
  // 应用程序基本设置
  app: {
    baseURL: "/", // 基础路径
    head: {
      htmlAttrs: {
        lang: "zh-CN", // 设置 HTML 标签的语言
      },
      link: [
        // 可在此添加外部样式或图标链接
      ],
    },
  },

  // 构建配置
  build: {
    transpile: [/echarts/], // 将 echarts 进行转译处理
  },

  // 全局引入 CSS 文件
  css: [
    "aos/dist/aos.css", // AOS 动画库
    "./assets/swiper.css", // Swiper 轮播样式
    "~/assets/css/index.less", // 项目全局样式
    "element-plus/dist/index.css", // Element Plus 样式
  ],

  // 引入 Nuxt 模块
  modules: [
    "@vueuse/nuxt", // VueUse 工具库
    "@nuxt/image", // Nuxt 图像优化模块
    '@unocss/nuxt', // 启用 UnoCSS 模块
  ],

  // 插件配置
  plugins: [
    "~/plugins/aos.client.js", // 客户端专用的 AOS 动画插件
    "~/plugins/i18n.js", // 国际化插件
  ],

  // PostCSS 配置
  postcss: {
    plugins: {
      autoprefixer: {
        overrideBrowserslist: ["last 5 version", ">1%", "ie >=8"], // 浏览器兼容性
      },
    },
  },

  // 本地开发服务器配置
  devServer: {
    host: "0.0.0.0", // 允许所有 IP 访问
    port: 8090, // 开发服务器端口号
  },

  // 启用 Nuxt 实验性功能
  experimental: {
    payloadExtraction: false, // 关闭页面负载提取优化
    renderJsonPayloads: true, // 启用 JSON 格式化的负载渲染
    typedPages: true, // 启用带类型的页面功能
    inlineSSRStyles: false, // 禁用内联 SSR 样式
  },

  // 开启服务器端渲染模式
  // 启用 SSR
  ssr: true,

  // Vue 特定配置
  vue: {
    compilerOptions: {
      comments: false, // 编译时移除所有注释
    },
  },

  // 禁用遥测功能
  // 禁用 Nuxt 遥测数据收集
  telemetry: false,

  // 自动导入功能配置
  imports: {
    autoImport: false, // 关闭自动导入功能
  },

  // 开发工具配置
  devtools: {
    enabled: false, // 禁用开发者工具
  },

  compatibilityDate: "2025-04-17",
});