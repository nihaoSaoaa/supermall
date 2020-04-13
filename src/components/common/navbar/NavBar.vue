<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
.nav-bar {
  width: 100vw;
  display: flex;
  height: 44px;
  line-height: 44px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, .3);
}
.nav-bar .left, .right {
  width: 55px;
}
.nav-bar .center {
  flex: 1;
}

</style>