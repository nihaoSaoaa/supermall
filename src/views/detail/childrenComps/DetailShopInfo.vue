<template>
  <div class="detail-shop-info" v-if="Object.keys(shop).length !== 0">
    <div class="shop-logo">
      <img :src="shop.logo" alt="" />
      <a :href="shop.shopUrl">{{shop.name}}</a>
    </div>
    <div class="shop-info">
      <div class="main-info">
        <div class="shop-sells">
          <div class="shop-num">{{shop.sells | sellsCountFilter}}</div>
          <span>总销量</span>
        </div>
        <div class="shop-babys">
          <div class="shop-num">{{shop.goodsCount}}</div>
          <span>全部宝贝</span>
        </div>
      </div>
      <div class="line"></div>
      <div class="other-info">
        <div class="other" v-for="(score, index) in shop.score" :key="index" >
          <span>{{score.name}}</span>
          <span class="score" :class="{active:score.isBetter}" >{{score.score}}</span>
          <span v-if="score.isBetter" class="high">高</span>
          <span v-else class="low">低</span>
      </div>
      </div>
    </div>
    <a :href="shop.shopUrl">
      <div class="go-shop">进店逛逛</div>
    </a>
  </div>
</template>

<script>
  export default {
    name: 'DetailShopInfo',
    props: {
      shop: {
        type: Object,
        default() {
          return {}
        }
      },
    },
    filters: {
      sellsCountFilter(value) {
        if (value < 10000) {
          return value;
        }
        return (value / 10000).toFixed(1) + "万";
      }
    }
  }
</script>

<style scoped>
.detail-shop-info {
  padding: 20px 8px;
  border-bottom: 5px solid #f2f5f8;
}
.shop-logo {
  padding-bottom: 40px;
}
.shop-logo img{
  width: 40px;
  height: 40px;
  vertical-align: middle;
}
.shop-logo a {
  font-size: 18px;
  margin-left: 10px;
}
.shop-info {
  display: flex;
  height: 70px;
}
.shop-info .line {
  width: 2px;
  height: 50%;
  align-self: center;
  background-color: #999;
}
.shop-info .main-info {
  padding: 10px 0;
  display: flex;
  flex: 1;
  margin-right: 15px;
  margin-left: 10px;
}
.shop-info .main-info>div {
  flex: 1;
  text-align: center;
}
.shop-info .main-info>div .shop-num {
  font-size: 18px;
  margin-bottom: 5px;
  font-weight: 700;
}
.shop-info .main-info>div span {
  font-size: 12px;
  font-weight: 700;
}

.shop-info .other-info {
  flex: 1;
  margin: 0 10px 0 30px;
  font-size: 14px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  align-content: space-around;
}
.shop-info .other-info .other {
  align-items: center;
  justify-content: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.shop-info .other-info .other .score {
  display: block;
  width: 30px;
  color: #5ea732;
  position: relative;
}
.shop-info .other-info .other .active {
  color: #f13e3a;
}
.shop-info .other-info .other .high {
  background-color: #f13e3a;
  color: #fff;
  border-radius: 10%;
}
.shop-info .other-info .other .low {
  background-color: #5ea732;
  color: #fff;
  border-radius: 10%;
}
.go-shop {
  width: 40%;
  margin: 10px auto 30px;
  font-size: 14px;
  text-align: center;
  border-radius: 5% / 50%;
  padding: 6px 0;
  background-color: rgba(100, 100, 100, 0.1);
}
</style>