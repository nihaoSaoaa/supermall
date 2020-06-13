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
  right: 5%;
  bottom: calc(44px + 5%);
}
.back-top .img {
  width: 40px;
  height: 40px;
  background-image: url(~assets/img/common/top.png);
  background-size: contain;
  background-position: center;
}
</style>