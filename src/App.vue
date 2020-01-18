<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabbar/MainTabBar';
export default {
  name: "app",
  components: {
    MainTabBar
  }
};
</script>

<style>
@import url(assets/css/base.css);
</style>
