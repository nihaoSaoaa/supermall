<template>
  <scroll class="scroll" ref="scroll">
    <cart-list-item v-for="value in cartList" :key="value.iid" :goods="value" :distance="50" />
  </scroll>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll';
import CartListItem from './CartListItem';
import { storageMixin } from '../../../common/mixin'
import {  mapGetters ,mapActions } from 'vuex';

export default {
  name: 'CartList',
  components: {
    Scroll,
    CartListItem
  },
  computed: {
    ...mapGetters([
      'cartList'
    ])
  },
  mixins: [storageMixin],
  activated() {
    this.$refs.scroll.refresh();
  }
}
</script>

<style scoped>
.scroll {
  width: 100vw;
  height: calc(100vh - 44px - 49px - 40px);
  overflow: hidden;
}
</style>