<template>
  <div class="main-tab-bar">
    <tab-bar>
      <tab-bar-item path="/home">
        <template #item-icon><img src="~assets/img/tabbar/home.svg" alt=""></template>
        <template #item-icon-active><img src="~assets/img/tabbar/home_active.svg" alt=""></template>
        <template #item-text><div>首页</div></template>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <template #item-icon><img src="~assets/img/tabbar/shopcart.svg" alt=""></template>
        <template #item-icon-active><img src="~assets/img/tabbar/shopcart_active.svg" alt=""></template>
        <template #item-text><div>分类</div></template>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <template #item-icon><img src="~assets/img/tabbar/category.svg" alt=""></template>
        <template #item-icon-active><img src="~assets/img/tabbar/category_active.svg" alt=""></template>
        <template #item-text><div>购物车</div></template>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <template #item-icon><img src="~assets/img/tabbar/profile.svg" alt=""></template>
        <template #item-icon-active><img src="~assets/img/tabbar/profile_active.svg" alt=""></template>
        <template #item-text><div>我的</div></template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar.vue';
import TabBarItem from 'components/common/tabbar/TabBarItem.vue';
export default {
  name: 'MainTarBar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>
.main-tab-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}
</style>
