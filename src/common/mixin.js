// 工具方法
import {debounce} from 'common/utils';

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