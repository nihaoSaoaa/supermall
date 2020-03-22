<template>
  <div class="bottom-bar">
    <div class="left">
      <div class="item"><i class="icon service"></i><span>客服</span></div>
      <div class="item"><i class="icon shop"></i><span>店铺</span></div>
      <div class="item"><i class="icon select"></i><span>收藏</span></div>
    </div>
    <div class="right img">
      <img src="~assets/img/tabbar/shopcart_active.svg" alt="">
      <span class="count">{{ count }}</span>
      </div>
    <div class="right category" @click="addCart"><div>加入购物车</div></div>
    <div class="right buy" @click="buyClick"><div>立即购买</div></div>
  </div>
</template>

<script>
  export default {
    name: 'DetailBottomBar',
    props: {
      count: {
        type: Number, 
      },
    },
    methods: {
      addCart() {
        this.$emit('addToCart');
      },
      buyClick() {
        this.$toast.show('请先登录您的账号！')
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
  flex: 30%;
  display: flex;
}
.left .item {
  flex: 1;
  font-size: 12px;
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
  flex: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  position: relative;
}
.right>div {
  padding: 5px 3px;
  border-radius: 10px;
}
.category>div {
  background-color: yellow;
}
img {
  width: 25px;
  height: 25px;
  margin: 3px 0 4px;
  vertical-align: middle;
  position: relative;
}
.img span {
  position: absolute;
  top: 9px;
  right: 16px;
  width: 15px;
  height: 15px;
  line-height: 15px;
  font-size: 12px;
  text-align: center;
  border-radius: 50%;
  border: 1px solid var(--color-tint);
  background-color: #fff;
}
.buy>div {
  background-color: var(--color-tint);
  color: #fff;
}
</style>