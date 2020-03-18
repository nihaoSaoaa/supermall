<template>
  <div class="slide">
    <slot></slot>
  </div>
</template>

<script>
import Emitter from 'common/emitter'
export default {
  name: "SwiperItem",
  mixins: [Emitter],
  mounted () {
    this.dispatch('Swiper', 'onSwiperItemMounted');
  },
};
</script>

<style scoped>
.slide {
  width: 100%;
  flex-shrink: 0;
}
.slide img {
  width: 100%;
}
</style>