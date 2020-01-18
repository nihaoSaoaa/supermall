<template>
  <div id="home">
    <nav-bar class="home-nav">
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
      class="content"
      :probeType="3" 
      :pullUpLoad="true"
      @scroll="contentScroll"
      @pullingUp="loadMore"
    >
     <template #default>
        <home-swiper :banners="banners" @swiperImgLoad="swiperImgLoad" />
        <home-recommend-view :recommends="recommends" />
        <home-feature />
        <tab-control 
          :titles="['流行','新款','精选']" 
          @tabClick="tabClick" 
          ref="tabControl2"
        />
        <goods-list :list="goodsStyle" />
     </template>
    </scroll>
    <back-top @click.native="backClick" v-show="isBackTopShow"></back-top>
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
import BackTop from 'components/content/backTop/BackTop'
// 网络方法
import {getHomeMultidata, getHomeGoods} from 'network/home';
// 工具方法
import {debounce} from 'common/utils';

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
      isBackTopShow: false,
      tabOffsetTop: 0,
      isTabControlShow: false,
      saveY: 0
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
  created() {
    // 获取首页轮播图多个数据
    this.getHomeMultidata();
    //  获取商品数据
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  //不要在created的时候调用$ref,挂载后
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh);
    this.$bus.$on('itemImgLoad', () => {
      refresh();
    });
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    //记录滚动的位置
    this.saveY = this.$refs.scroll.getScrollY();
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
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    contentScroll(position) {
      // 1. backTop组件是否显示
      this.isBackTopShow = (-position.y) > 1000;
      // 2. scroll1组件是否显示(实现吸顶效果)
      this.isTabControlShow = (-position.y) > this.tabOffsetTop;
    },
    loadMore() {
      this.getHomeGoods(this.currentType[this.typeIndex]);
    },
    /**
     * 轮播图加载完成获取导航栏offsetTop
     */
    swiperImgLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    }
  } 
}
</script>

<style scoped>
#home {
  position: relative;
  height: 100vh;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
.home-nav .center {
  text-align: center;
}
.tab-control-fixed {
  position: fixed;
  left: 0;
  right: 0;
  z-index: 9;
}
.content {
  position: absolute;
  overflow: hidden;
  top: 44px;
  bottom: 49px;
}
</style>