<template>
  <nav-bar>
    <template #left>
      <backRoute/>
    </template>
    <template #center>
      <div class="title">
        <div v-for="(item,index) in items" :key="index" :class="{isShow:curItem === index}" @click="itemClick(index)">{{item}}</div>
      </div>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import BackRoute from 'components/content/backRoute/BackRoute'
export default {
  name: 'DetailNavBar',
  components: {
    NavBar,
    BackRoute
  },
  data() {
    return {
      items: ['商品', '参数', '评论', '推荐'],
      curItem: 0,
    }
  },
  methods: {
    itemClick(index) {
      this.curItem = index;
      this.$emit('navClick', index);
    }
  },
}
</script>

<style scoped>
.title {
  display: flex;
  font-size: 13px;
}
.title>div {
  flex: 1;
  text-align: center;
}
.isShow {
  color: var(--color-high-text);
}
</style>