<template>
  <swiper class="detail-swiper" :slideCount="topImages.length">
      <swiper-item v-for="(src, index) in topImages" :key="index">
        <a :href="src">
          <img :src="src" />
        </a>
      </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index";
export default {
  name: "DetailSwiper",
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
.detail-swiper {
  height: 300px;
}
</style>