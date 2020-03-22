<template>
  <div id="app">
    <transition :name="viewAnimation">
      <keep-alive exclude="Detail">
        <router-view class="view"/>
      </keep-alive>
    </transition>
    <main-tab-bar style="width: 100vw" />
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabbar/MainTabBar';
export default {
  name: "app",
  data() {
    return {
      viewAnimation: '',
    }
  },
  components: {
    MainTabBar
  },
  watch: {
    '$route'(to, from) {
      const routeDeep = ['/home', '/category','/cart', '/profile'];
      const toDepth = routeDeep.indexOf(to.path)
      const fromDepth = routeDeep.indexOf(from.path)
      if (fromDepth === -1 || toDepth === -1) {
        this.viewAnimation = 'fade';
        return;
      };
      this.viewAnimation = toDepth > fromDepth ? 'fold-left': 'fold-right';
    }
  },
  beforeRouteUpdate(to, from, next) {
    console.log(to, from);
    next();
  },
};
</script>

<style>

@import url(assets/style/common/base.less);
#app {
  width: 100vw;
  height: 100vh;
}
.view {
  position: absolute;
}
</style>
