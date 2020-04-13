<template>
  <div class="back-route-btn" @click="backClick">
    <img src="~assets/img/common/back.svg" alt=""/>
  </div>
</template>

<script>
  export default {
    methods: {
      backClick() {
        this.$router.go(-1);
      }
    },
  }
</script>

<style lang="less" scoped>
.back-route-btn {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>