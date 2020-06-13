// 工具方法
import {debounce} from 'common/utils';

import BackTop from 'components/content/backTop/BackTop.vue'

import { mapActions } from 'vuex';

export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null
    }
  },
  //不要在created的时候调用$ref,挂载后
  mounted () {
    const newRefresh = debounce(this.$refs.scroll.refresh, 50);
    this.itemImgListener = () => newRefresh();
    this.$bus.$on('itemImgLoad', this.itemImgListener);
  }
}

export const backTopMixin = {
  components: {
    BackTop,
  },
  data() {
    return {
      isBackTopShow: false,
      SHOW_POSITION: 1000
    }
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    listenBackTopShow(position) {
      this.isBackTopShow = (-position.y) > this.SHOW_POSITION;
    }
  },
}

export const storageMixin = {
  created() {
    this.getStorage();
  },
  methods: {
    ...mapActions([
      'setCart'
    ]),
    getStorage() {
      const cartList = JSON.parse(localStorage.getItem('_cart_list_'));
      if (cartList) this.setCart(cartList);
    },
  },
}