<template>
  <!-- <div class="cart-list">  -->
    <scroll class="scroll" ref="scroll">
      <cart-list-item v-for="value in cartList" :key="value.iid" :goods="value"  />
    </scroll>
  <!-- </div> -->
</template>

<script>
import Scroll from 'components/common/scroll/Scroll';
import CartListItem from './CartListItem';

import { mapGetters } from 'vuex';

export default {
  name: 'CartList',
  components: {
    Scroll,
    CartListItem
  },
  computed: {
    ...mapGetters([
      'cartList'
    ]),
  },
  activated() {
    this.$refs.scroll.refresh();
  },
}
</script>

<style scoped>
.scroll {
  height: calc(100% - 44px - 49px - 40px);
  overflow: hidden;
}
</style>