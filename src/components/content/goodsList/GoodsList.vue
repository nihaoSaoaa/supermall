<template>
  <transition-group class="goods-list" name="list">
    <goods-list-item v-for="item in list" :key="item" :item="item"></goods-list-item>
  </transition-group>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
  name: 'GoodsList',
  props: {
    list: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    GoodsListItem
  }
}
</script>

<style scoped>
.goods-list {
  padding: .2rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>