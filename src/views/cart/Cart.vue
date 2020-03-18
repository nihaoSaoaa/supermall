<template>
  <div id="cart">
    <nav-bar class="top-nav-bar">
      <template #center >
        <span>购物车({{length}})</span>
      </template>
    </nav-bar>
    <cart-list />
    <cart-bottom-bar />
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import CartList from './childrenComp/CartList';
import CartBottomBar from './childrenComp/CartBottomBar';

import { mapGetters } from 'vuex';

export default {
  name: 'Cart',
  components: {
    NavBar,
    CartList,
    CartBottomBar
  },
  computed: {
    ...mapGetters({
      length: 'cartLength'
    })
  },
}
</script>

<style scoped>
#cart {
  height: 100vh;
}
</style>