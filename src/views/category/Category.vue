<template>
  <div id="category">
    <nav-bar class="top-nav-bar">
      <template #center>
        <span>分类</span>
      </template>
    </nav-bar>

    <div class="content">
      <tab-menu :categories="categories" @titleClick="titleClick"></tab-menu>
      <scroll class="scroll" ref="scroll">
        <tab-subcategory :subcategories="showSubcategory" @imageLoad="imageLoad"></tab-subcategory>
      </scroll>
    </div>

    <back-top @click.native="backClick" v-show="isBackTopShow"></back-top>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import Scroll from '../../components/common/scroll/Scroll';
import TabMenu from './childrenComps/TabMenu';
import TabSubcategory from './childrenComps/TabSubcategory';

import { getCategory, getSubcategory } from 'network/category';
import { backTopMixin } from 'common/mixin';

export default {
  name: 'Category',
  components: {
    NavBar,
    Scroll,
    TabMenu,
    TabSubcategory
  },
  data() {
    return {
      categories: [],
      categoryData: [],
      curIndex: 0,
    }
  },
  mixins: [ backTopMixin ],
  created () {
    this._getCategory();
  },
  computed: {
    showSubcategory() {
      return this.categoryData[this.curIndex]; 
    }
  },
  methods: {
    //网络请求
    _getCategory() {
      getCategory().then(res => {
        //请求tabmenu数据
        this.categories = res.data.category.list;
        //初始化data
        this.categoryData = this.categories.map(element => ({}));
        //获取第一个title的数据
        this._getSubcategories(this.curIndex);
      })
    },
    _getSubcategories(index) {
      this.curIndex = index;
      const maitKey = this.categories[index].maitKey;
      getSubcategory(maitKey).then(res => {
        this.categoryData.splice(index, 1, res.data);
      })
    },
    //事件
    titleClick(index) {
      this._getSubcategories(index);
    },
    imageLoad() {
      this.$refs.scroll.refresh();
    }
  }
}
</script>

<style scoped>
#category {
  height: 100vh;
}
.content {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;
  display: flex;
}
.scroll {
  flex: 1;
  height: 100%;
  overflow: hidden;
}
</style>