<template>
  <div class="bottom-bar">
    <div class="left">
      <div class="item"><i class="icon service"></i><span>客服</span></div>
      <div class="item"><i class="icon shop"></i><span>店铺</span></div>
      <div class="item"><i class="icon select"></i><span>收藏</span></div>
      <div class="item img" @click="changRoute">
        <img src="~assets/img/tabbar/shopcart_active.svg" alt="">
        <span class="count">{{ count }}</span>
        <div>购物车</div>
      </div>
    </div>
    <div class="right category" @click="addCart">
      <transition name="add-to-cart">
        <div class="copy" v-show="isShow">+1</div>
      </transition>
      <div>加入购物车</div>
    </div>
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
    data() {
      return {
        isShow: true
      }
    },
    methods: {
      addCart() {
        this.$emit('addToCart');
      },
      buyClick() {
        this.$toast.show('请先登录您的账号！')
      },
      changRoute() {
        this.$router.replace('/cart');
      },
      changeShow() {
        this.isShow = !this.isShow;
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
  flex: 40%;
  display: flex;
}
.left .item {
  flex: 1;
  font-size: 12px;
  text-align: center;
  position: relative;
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
img {
  width: 22px;
  height: 22px;
  margin: 6px auto 1px;
  position: relative;
}
.img .count {
  position: absolute;
  top: 0px;
  right: 0px;
  width: 15px;
  height: 15px;
  line-height: 15px;
  font-size: 12px;
  text-align: center;
  border-radius: 50%;
  border: 1px solid var(--color-tint);
  background-color: #fff;
}

.right {
  flex: 18%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  position: relative;
}
.right>div {
  width: 95%;
  height: 24px;
  text-align: center;
  padding: 5px 3px;
  border-radius: 12px;
}
.category>div {
  background-color: yellow;
  position: absolute;
  z-index: 9;
}
.category>div.copy {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.buy>div {
  background-color: var(--color-tint);
  color: #fff;
}
</style>