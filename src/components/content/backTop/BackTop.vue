<template>
  <div class="back-top">
    <div class="img"></div>
  </div>
</template>

<script>
export default {
  name: 'BackTop'
}
</script>

<style scoped>
.back-top {
  position: absolute;
  right: 10px;
  bottom: 51px;
}
.back-top .img {
  width: 40px;
  height: 40px;
  background-image: url(~assets/img/common/top.png);
  background-size: contain;
  background-position: center;
}
</style>