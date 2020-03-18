<template>
  <div class="goods-list">
    <goods-list-item v-for="(item, index) in list" :key="index" :item="item"></goods-list-item>
  </div>
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