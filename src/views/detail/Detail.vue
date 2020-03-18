<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav-bar" @navClick="navClick" ref="navBar" />
    <scroll class="scroll" ref="scroll" :probeType="3" @scroll="contentScroll">
      <p>{{$store.carList}}</p>
      <detail-swiper :topImages="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-img-info :detail-info="detailInfo" @imgLoad="detailImgLoad" ref="goodsImg" />
      <detail-param-info :param-info="paramInfo" ref="param" />
      <detail-comment-info :comment-info="commentInfo" ref="comment" />
      <goods-list :list="recommend"  class="list" ref="recommend" />
    </scroll>
    <transition name="back-top">
      <back-top @click.native="backClick" v-show="isBackTopShow"></back-top>
    </transition>
    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
  </div>
</template>

<script>
//detail组件
import DetailNavBar from './childrenComps/DetailNavBar'
import DetailSwiper from './childrenComps/DetailSwiper'
import DetailBaseInfo from './childrenComps/DetailBaseInfo'
import DetailShopInfo from "./childrenComps/DetailShopInfo";
import DetailImgInfo from "./childrenComps/DetailImgInfo";
import DetailParamInfo from "./childrenComps/DetailParamInfo";
import DetailCommentInfo from './childrenComps/DetailCommentInfo';
import DetailBottomBar from './childrenComps/DetailBottomBar';
//公共组件
import Scroll from 'components/common/scroll/Scroll';
import GoodsList from 'components/content/goodsList/GoodsList';
import BackTop from 'components/content/backTop/BackTop';
//网络方法
import { Goods, Shop, GoodsParam, getDetailData, getRecommend } from 'network/detail';
// 混入
import { itemListenerMixin, backTopMixin } from "common/mixin";
import { mapActions } from 'vuex'

export default {
  name: 'Detail',
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailImgInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,

    GoodsList,
    Scroll,
    BackTop
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommend: [],
      themeTopYs: [],
      curItem: 0,
      isBottomClick: false
    }
  },
  mixins: [itemListenerMixin, backTopMixin],
  created() {
    // 1. 保存传入的iid
    this.iid = this.$route.params.iid;
    // 2. 保存detail页面的各项数据
    getDetailData(this.iid).then( res => {
      const data = res.result;
      // 2.1 轮播图src数据
      this.topImages = data.itemInfo.topImages;
      // 2.2 商品主信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // 2.3 商家信息
      this.shop = new Shop(data.shopInfo);
      // 2.4 商品详情信息
      this.detailInfo = data.detailInfo;
      // 2.5 商品参数信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      // 2.6 评论信息
      if (data.rate.cRate !==0) {
        this.commentInfo = data.rate.list[0];
      }
      // 2.7 推荐数据
      getRecommend().then(res => {
        this.recommend = res.data.list;
      })
    });
  },
  destroyed () {
    // 去除图片监听事件的scroll刷新
    this.$bus.$off('itemImgLoad', this.itemImgListener);
  },
  methods: {
      ...mapActions([
      'addCart',
    ]),
    detailImgLoad() {
      this.$refs.scroll.refresh();
      this.themeTopYs.push(this.$refs.goodsImg.$el.offsetTop);
      this.themeTopYs.push(this.$refs.param.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
    },
    navClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index]);
    },
    contentScroll(position) {
      // 内容滚动与导航栏联动
      const posY = - position.y;
      const len = this.themeTopYs.length;
      this.themeTopYs.forEach((topY,index) => {
        if ( 
          (index < len - 1 && posY >= topY && posY < this.themeTopYs[index + 1]) ||
          (index === len - 1 && posY >= topY)
          ) {
          if (this.curItem !== index) {
            this.curItem = index;
            this.$refs.navBar.curItem = index;
          }
        } 
      });
       // 控制回顶按钮显示
      this.listenBackTopShow(position);
    },
    addToCart() {
      if (this.isBottomClick) {
        return;
      }
      this.isBottomClick = true;
      const product = {
        image: this.topImages[0],
        title: this.goods.title,
        desc: this.goods.desc,
        price: this.goods.lowNowPrice,
        iid: this.iid
      }
      this.addCart(product).then(msg => {
        this.$toast.show(msg, () => this.isBottomClick = false);
      });
    }
  },
}
</script>

<style scoped>
#detail {
  position: relative;
  height: 100vh;
  z-index: 9;
  background-color: #fff;
}
.detail-nav-bar {
  background-color: #fff;
  z-index: 1;
  position: relative;
}
.scroll {
  width: 100%;
  position: absolute;
  overflow: hidden;
  top: 44px;
  bottom: 49px;
}
</style>
