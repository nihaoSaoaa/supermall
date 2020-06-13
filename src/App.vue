<template>
  <div id="app">
    <transition :name="viewAnimation">
      <keep-alive exclude="Detail">
        <router-view class="view"/>
      </keep-alive>
    </transition>
    <main-tab-bar style="width: 100vw" v-if="tabBarShow" />
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabbar/MainTabBar';
import { mapGetters } from 'vuex'
export default {
  name: "app",
  data() {
    return {
      viewAnimation: '',
      routeDeep: ['/home', '/category','/cart', '/profile']
    }
  },
  computed: {
    ...mapGetters([
      'cartList'
    ]),
    tabBarShow() {
      return this.routeDeep.includes(this.$route.path)
    }
  },
  components: {
    MainTabBar
  },
  watch: {
    '$route'(to, from) {
      const toDepth = this.routeDeep.indexOf(to.path)
      const fromDepth = this.routeDeep.indexOf(from.path)
      if (fromDepth === -1 || toDepth === -1) {
        this.viewAnimation = 'fade';
        return;
      };
      this.viewAnimation = toDepth > fromDepth ? 'fold-left': 'fold-right';
    },
    cartList: {
      deep: true,
      handler() {
        this.setStorage();
      }
    }
  },
  beforeRouteUpdate(to, from, next) {
    // console.log(to, from);
    next();
  },
  methods: {
    setStorage() {
      localStorage.setItem('_cart_list_', JSON.stringify(this.cartList));
    },
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
