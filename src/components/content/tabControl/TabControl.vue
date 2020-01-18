<template>
  <div class="tab-control">
    <div
      v-for="(title, index) in titles"
      :key="index"
      class="tab-control-item"
      @click="itemClick(index)"
      :class="{active: currentIndex === index}"
    >
      <span>{{title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('tabClick', index);
    }
  }
};
</script>

<style scoped>
.tab-control {
  display: flex;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
}
.tab-control .tab-control-item {
  flex: 1;
  text-align: center;
  margin: 0 30px;
}
.tab-control .tab-control-item span {
  padding: 5px;
  position: relative;
}
.tab-control .tab-control-item span::after {
  content: "";
  display: block;
  width: 100%;
  height: 3px;
  position: absolute;
  bottom: -2px;
  left: 0;
  background-color: var(--color-tint);
  border-radius: 1.5px;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}
.tab-control .active {
  color: var(--color-high-text);
}
.tab-control .active span::after {
  opacity: 1;
}
</style>