<template>
  <scroll class="tab-menu">
    <div class="menu-list" 
      v-for="(item,index) in categories" 
      :key="item.maitKey"
      :class="{active: index===curIndex}"
      @click="menuClick(index)"
    >
      <div class="list-item">
        {{item.title}}
      </div>
    </div>
  </scroll>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll';
export default {
  name: 'TabMenu',
  components: {
    Scroll,
  },
  props: {
    categories: {
      type: Array,
      default() {
        return []
      } 
    },
  },
  data() {
    return {
      curIndex: 0
    }
  },
  methods: {
    menuClick(index) {
      this.curIndex = index;
      this.$emit('titleClick', index);
    }
  },
}
</script>

<style scoped>
.tab-menu {
  background-color: #f6f6f6;
  height: 100%;
  width: 80px;
  box-sizing: border-box;
  overflow: hidden;
}
.menu-list .list-item{
  font-weight: bold;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 14px;
  border-bottom: 1px solid #eee;
}
.menu-list .list-item:hover {
  color: var(--color-high-text);
  border-left: 2px solid var(--color-high-text);
}
.menu-list.active {  
  color: var(--color-high-text);
  background-color: #fff;
  border-left: 2px solid var(--color-high-text);
}
</style>