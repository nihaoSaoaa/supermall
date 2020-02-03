<template>
  <div>
    <swiper class="detail-swiper">
      <template >
        <swiper-item v-for="(src, index) in topImages" :key="index">
          <template #default>
            <a :href="src">
              <img :src="src" />
            </a>
          </template>
        </swiper-item>
      </template>
    </swiper>
  </div>
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
.slide img {
  width: 320px;
}
</style>