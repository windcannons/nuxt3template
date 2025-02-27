# nuxt3项目模板

## 项目结构

```
│  .editorconfig               # 编辑器配置文件，统一项目代码风格
│  .env                        # 环境变量文件，用于配置项目环境参数
│  .gitignore                  # Git 忽略配置文件，指定不需要提交的文件或目录
│  app.vue                     # 应用的根组件，整个应用的入口文件
│  nuxt.config.js              # Nuxt 配置文件，用于路由、插件和模块配置等
│  package-lock.json           # 锁定文件，确保所有依赖在团队间的一致性
│  package.json                # 项目配置文件，包括依赖、脚本和项目描述信息
│  pnpm-lock.yaml              # 使用 pnpm 管理依赖时生成的锁定文件
│  README.md                   # 项目说明文档，描述项目的基本信息和使用方法
│  tsconfig.json               # TypeScript 配置文件，设置编译选项

├─.idea                        # IDE（如 WebStorm）的项目配置文件夹
│      .gitignore              # IDEA 配置中的 Git 忽略文件
│      modules.xml             # IDEA 配置的模块文件
│      nuxt3template.iml       # IDEA 模板项目文件
│      workspace.xml           # IDEA 项目工作区配置

├─.nuxt                        # Nuxt 生成的文件夹，包含项目的运行时文件
│  │  app.config.mjs           # Nuxt 应用的配置文件
│  │  components.d.ts          # 自动生成的组件声明文件
│  │  imports.d.ts             # 自动导入的类型定义文件
│  │  nitro.json               # Nuxt Nitro 配置文件
│  │  nuxt.d.ts                # Nuxt 类型声明文件
│  │  tsconfig.json            # .nuxt 下的 TypeScript 配置文件
│  │  tsconfig.server.json     # 服务端 TypeScript 配置文件
│  ├─dev
│  │      index.mjs            # 开发服务器的入口文件
│  │      index.mjs.map        # index.mjs 的 Source Map 文件
│  ├─dist
│  │  └─server
│  │          client.manifest.json # 客户端清单文件
│  │          client.manifest.mjs  # 客户端清单文件的 mjs 格式
│  │          server.mjs           # 服务端入口文件
│  ├─manifest
│  │  │  latest.json          # 最新构建的 manifest 文件
│  │  └─meta
│  │          dev.json        # 开发模式下的元信息文件
│  ├─schema
│  │      nuxt.schema.d.ts    # Nuxt 配置 schema 的 TypeScript 定义
│  │      nuxt.schema.json    # Nuxt 配置的 JSON Schema 文件
│  └─types
│          app-defaults.d.ts  # 默认应用配置类型定义
│          app.config.d.ts    # 应用配置类型定义文件
│          build.d.ts         # 构建配置的类型定义
│          imports.d.ts       # 导入的类型定义文件
│          layouts.d.ts       # 布局类型定义文件
│          middleware.d.ts    # 中间件类型定义文件
│          nitro-config.d.ts  # Nitro 配置的类型定义
│          nitro-imports.d.ts # Nitro 的导入类型定义
│          nitro-nuxt.d.ts    # Nuxt 和 Nitro 集成的类型定义
│          nitro-routes.d.ts  # Nitro 路由的类型定义
│          nitro.d.ts         # Nitro 类型定义文件
│          plugins.d.ts       # 插件类型定义文件
│          schema.d.ts        # Nuxt 配置的 schema 类型定义
│          typed-router.d.ts  # 路由类型定义文件
│          vue-shim.d.ts      # Vue 的 shim 文件类型定义

├─api                          # API 文件夹，定义前后端交互的 API 函数
│  │  http.js                  # HTTP 请求配置，定义基于 Fetch 的请求方法
│  └─list
│          getNewsList.js      # 数据获取的 API 函数，例：获取新闻列表

├─app
│      router.options.ts       # 路由选项配置文件

├─assets                       # 资源文件夹，存放样式、字体等静态资源
│  │  swiper.css               # Swiper 轮播图样式文件
│  ├─css
│  │      index.less           # 全局样式文件
│  └─font                      # 字体文件夹，存放项目所需字体

├─components                   # 组件文件夹，存放可复用的 Vue 组件
│      Header.vue              # 页头组件，包含导航和品牌标识
│      myEcharts.vue           # Echarts 图表组件
│      myLanguage.vue          # 语言切换组件
│      mySwiper.vue            # Swiper 轮播图组件

├─locales                      # 国际化文件夹，包含多语言 JSON 文件
│      en.json                 # 英文语言包
│      zh.json                 # 中文语言包

├─pages                        # 页面文件夹，包含路由页面组件
│      index.vue               # 首页组件，作为默认页面
│      mine.vue                # 用户个人页面组件

├─plugins                      # 插件文件夹，存放自定义 Nuxt 插件
│      aos.client.js           # AOS 动画插件配置
│      chart.js                # Chart.js 图表插件
│      element-plus.client.ts  # Element Plus UI 库插件配置
│      i18n.js                 # 国际化插件配置文件
│      mitt.js                 # mitt 事件总线配置文件
│      pinia.js                # Pinia 状态管理插件

├─public                       # 公共文件夹，存放可直接通过 URL 访问的静态资源

├─server                       # 服务器相关文件夹，用于存放与后端交互的逻辑
│      tsconfig.json           # 服务端的 TypeScript 配置文件

├─static                       # 静态文件夹，存放无需处理的静态资源

├─store                        # 状态管理文件夹，存放 Vuex 或 Pinia 状态管理逻辑
│      example.js              # 示例状态管理文件

└─utils                        # 工具函数文件夹，包含通用功能函数
        env.ts                 # 环境变量相关工具函数
        token.ts               # 令牌相关工具函数，处理身份验证

```

​        



## 配置swiper

https://www.swiper.com.cn/

## 配置pinia并持久化

## 配置echarts

## 配置国际化

## 配置mitt事件总线

## 引入element plus

- 图标需要单独引入

```
import { Lock, User, Key } from '@element-plus/icons-vue'
```

