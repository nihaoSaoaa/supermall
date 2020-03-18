<template>
  <div class="tab-subcategory" v-if="subcategories">
    <div v-for="(item, index) in subcategories.list" :key="index" class="item">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageLoad">
        <div class="title">{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabSubcategory',
  props: {
    subcategories: {
      type: Object,
      default() {
        return {}
      }
    },
  },
  methods: {
    imageLoad(index) {
      if (index === this.subcategories.list.length - 1) {
        this.$emit("imageLoad");
      }
    }
  },
}
</script>

<style scoped>
.tab-subcategory {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
  font-size: 12px;
  padding: 20px 0;
  background-color: #fff;
}
.item {
  margin-bottom: 15px;
}
.item img {
  width: 60px;
  height: 60px;
  margin-bottom: 10px;
}
</style>