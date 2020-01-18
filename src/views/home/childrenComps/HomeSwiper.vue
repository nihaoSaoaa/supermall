<template>
  <div>
    <swiper>
      <template #default>
        <swiper-item v-for="item in banners" :key="item.index">
          <template #default>
            <a :href="item.link">
              <img :src="item.image" @load="imgLoad" />
            </a>
          </template>
        </swiper-item>
      </template>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index.js";
export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      isLoad: false,
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    imgLoad() {
      if (!this.isLoad) {
        this.$emit('swiperImgLoad');
        this.isLoad = true;
      }
    }
  }
};
</script>

<style scoped>
</style>