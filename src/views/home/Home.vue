<template>
  <div>
    <nav-bar class="top-nav-bar">
      <template #center>
        <div class="center">购物街</div>
      </template>
    </nav-bar>
    <tab-control 
      :titles="['流行','新款','精选']"  
      @tabClick="tabClick" 
      class= "tab-control-fixed"
      v-show="isTabControlShow"
      ref="tabControl1"
    />
    <scroll 
      ref="scroll"
      class="main-scroll"
      :probeType="3" 
      pullUpLoad
      @scroll="contentScroll"
      @pullingUp="loadMore"
    >
      <home-swiper :banners="banners" @swiperImgLoad="swiperImgLoad" />
      <home-recommend-view :recommends="recommends" />
      <home-feature />
      <tab-control 
        :titles="['流行','新款','精选']" 
        @tabClick="tabClick" 
        ref="tabControl2"
      />
      <goods-list :list="goodsStyle" />
    </scroll>
    <transition name="back-top">
      <back-top @click.native="backClick" v-show="isBackTopShow"></back-top>
    </transition>
  </div>
</template>

<script>
// Home组件
import HomeSwiper from './childrenComps/HomeSwiper';
import HomeRecommendView from './childrenComps/HomeRecommendView';
import HomeFeature from './childrenComps/HomeFeature'
// 公共组件
import NavBar from 'components/common/navbar/NavBar';
import TabControl from 'components/content/tabControl/TabControl';
import GoodsList from 'components/content/goodsList/GoodsList';
import Scroll from 'components/common/scroll/Scroll';
import BackTop from 'components/content/backTop/BackTop';
// 网络方法
import {getHomeMultidata, getHomeGoods} from 'network/home';
// 混入
import { itemListenerMixin, backTopMixin } from "common/mixin";

export default {
  name: 'Home',
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: {
          page: 0,
          list: []
        },
        new: {
          page: 0,
          list: []
        },
        sell: {
          page: 0,
          list: []
        }
      },
      currentType: ['pop', 'new', 'sell'],
      typeIndex: 0,
      tabOffsetTop: 0,
      saveY: 0,
      isTabControlShow: false,
    }
  },
  components: {
    HomeSwiper,
    HomeRecommendView,
    HomeFeature,

    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  mixins: [itemListenerMixin, backTopMixin],
  created() {
    // 获取首页轮播图多个数据
    this.getHomeMultidata();
    //  获取商品数据
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    //记录滚动的位置`
    this.saveY = this.$refs.scroll.getScrollY();
    // 去除图片监听事件的scroll刷新
    this.$bus.$off('itemImgLoad', this.itemImgListener);
  },
  computed: {
    goodsStyle() {
      return this.goods[this.currentType[this.typeIndex]].list;
    }
  },
  methods: {
    /**
     * 网络请求的方法
     */
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    getHomeGoods(type) {
      const currentPage = this.goods[type].page + 1;
      getHomeGoods(type, currentPage).then(res => {
        const list = res.data.list;
        this.goods[type].list.push(...list);
        this.goods[type].page += 1;
        //结束上拉加载更多
        this.$refs.scroll.finishPullUp();
        
      })
    },
    /**
     * 事件回调
     */
    tabClick(index) {
      this.typeIndex = index;
      // 使两个导航栏样式一样
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
      // 使滚动回导航栏 top 位置
      this.$refs.scroll.scrollTo(0, -this.tabOffsetTop);
      this.loadActive();
    },
    contentScroll(position) {
      // 1. backTop组件是否显示
      this.listenBackTopShow(position);
      // 2. tab-control1 组件是否显示(实现吸顶效果)
      this.isTabControlShow = (-position.y) > this.tabOffsetTop;
    },
    loadMore() {
      this.getHomeGoods(this.currentType[this.typeIndex]);
      this.loadActive();
    },
    loadActive() {
      this.$toast.show('正在努力加载', 2000);
    },
    /**
     * 轮播图加载完成获取导航栏offsetTop
     */
    swiperImgLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop - 44;
    },
  } 
}
</script>

<style lang="less" scoped>
.tab-control-fixed {
  position: fixed;
  left: 0;
  right: 0;
  z-index: 9;
}
.back-top-enter, .back-top-leave-to {
  transform: scale(.5);
  opacity: 0;
}
.back-top-enter-active, .back-top-leave-active {
  transition: all .5s;
}
</style>