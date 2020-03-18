<template>
  <div class="bottom-bar">
    <div class="left">
      <div class="item"><i class="icon service"></i><span>客服</span></div>
      <div class="item"><i class="icon shop"></i><span>店铺</span></div>
      <div class="item"><i class="icon select"></i><span>收藏</span></div>
    </div>
    <div class="right category" @click="addCart"><span>加入购物车</span></div>
    <div class="right buy"><span>立即购买</span></div>
  </div>
</template>

<script>
  export default {
    name: 'DetailBottomBar',
    methods: {
      addCart() {
        this.$emit('addToCart');
      }
    },
  }
</script>

<style scoped>
.bottom-bar {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 49px;
  display: flex;
}
.left {
  flex: 50%;
  display: flex;
}
.left .item {
  flex: 1;
  font-size: 14px;
  text-align: center;
}
.left .item .icon {
  display: block;
  width: 22px;
  height: 22px;
  margin: 6px auto 3px;
  background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
}
.left .item .service {
  background-position: 0 -54px;
}
.left .item .shop {
  background-position: 0 -98px;
}
.right {
  flex: 25%;
  text-align: center;
  line-height: 49px;
  font-size: 13px;
}
.category {
  background-color: yellow;
}
.buy {
  background-color: var(--color-tint);
  color: #fff;
}
</style>