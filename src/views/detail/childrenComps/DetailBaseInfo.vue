<template>
  <div v-if="Object.keys(goods).length!==0">
    <div class="goods-title">{{goods.title}}</div>

    <div class="goods-price">
      <span class="new-price">{{goods.newPrice}}</span>
      <strike class="old-price">{{goods.oldPrice}}</strike>
      <span v-if="goods.discount" class="discount" :style="bgStyle">{{goods.discount}}</span>
    </div>

    <div class="goods-columns">
      <span v-for="(column,index) in goods.columns" :key="index">{{column}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>

    <div class="info-service">
      <div v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon" />
        <span>{{goods.services[index-1].name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailBaseInfo',
    props: {
      goods: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    computed: {
      bgStyle() {
        return {backgroundColor: this.goods.disCountBgColor}; 
      }
    }
  }
</script>

<style scoped>
.goods-title {
  font-size: 18px;
  padding: 8px;
  font-weight: bold;
  text-indent: 1em;
}
.goods-price {
  padding: 8px;
}
.goods-price .new-price {
  font-weight: bold;
  color: var(--color-high-text);
}
.goods-price .old-price {
  margin-left: 5px;
  font-size: 12px; 
  color: #888;
}
.goods-price .discount {
  font-size: 14px;
  padding: 2px 8px;
  color: #fff;
  background-color: var(--color-tint);
  border-radius: 9px;
  position: relative;
  left: 10px;
  top: -10px;
}
.goods-columns {
  font-size: 12px;
  color: #888;
  display: flex;
}
.goods-columns>span {
  flex: 1;
  text-align: center;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.info-service {
  display: flex;
  font-size: 12px;
  padding: 10px;
  border-bottom: 5px solid #f2f5f8;
}
.info-service>div {
  flex: 1;
  text-align: center;
}
.info-service img {
  width: 14px;
  height: 14px;
  vertical-align: text-bottom;
  background-color: var(--color-tint);
  opacity: .5;
  border-radius: 50%;
  margin-right: 2px;
}
</style>