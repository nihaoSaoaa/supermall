# vue-mall

基于vue全家桶的vue-mall单页应用--B站搜索https://www.bilibili.com/video/BV15741177Eh

## 项目结构

src
--assets
  --img
  --style
--common
--components
  --common
  --content
--network
--router
--store
--views
  --home
  --category
  --cart
  --detail
  --profile
--App.vue


## 首页 home

1. 底部标签栏 

components -> common -> TabBar/TabBarItem 底部标签栏组件
components -> content -> MainTabBar       封装底部标签栏

2. 首页导航栏

common -> NavBar 导航栏组件

3. 首页轮播图

components ->　common -> Carousel/CarouselItem 轮播图组件

4. 基于 better-scroll 的滚动组件

components -> common -> Scroll

