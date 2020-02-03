<template>
  <div class="detail-info" v-if="Object.keys(detailInfo).length !== 0">
    <div class="info-desc clear-fix">
      <div class="start"></div>
      <div class="desc">{{ detailInfo.desc }}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{ detailInfo.detailImage[0].key }}</div>
    <div class="info-list">
      <img
        v-for="(src, index) in detailInfo.detailImage[0].list"
        :src="src"
        :key="index"
        @load="imgLoad"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailImgInfo",
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      imgLen: 0,
      count: 0
    }
  },
  methods: {
    imgLoad() {
      //图片数准确后在发送事件
      if (++this.count === this.imgLen) {
        this.$emit('imgLoad');
      }
    }
  },
  //侦听数据改变获取图片数
  watch: {
    detailInfo() {
      this.imgLen = this.detailInfo.detailImage[0].list.length;
    }
  },
};
</script>

<style scoped>
.detail-info {
  padding: 20px 0;
  border-bottom: 5px solid #f2f5f8;
}

.info-desc {
  padding: 0 15px;
}

.info-desc .start,
.info-desc .end {
  width: 90px;
  height: 1px;
  background-color: #a3a3a5;
  position: relative;
}

.info-desc .start {
  float: left;
}

.info-desc .end {
  float: right;
}

.info-desc .start::before,
.info-desc .end::after {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #333;
  bottom: 0;
}

.info-desc .end::after {
  right: 0;
  bottom: -5px;
}

.info-desc .desc {
  text-indent: 1em;
  padding: 15px 0;
  font-size: 14px;
}
.info-key{
  margin: 10px 0 10px 15px;
  color: #333;
  font-size: 15px;
}

.info-list img {
  width: 100%;
}
</style>
