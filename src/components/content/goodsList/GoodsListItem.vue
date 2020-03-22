<template>
  <div class="goods-items" @click="itemClick"> 
    <img v-lazy="imgSrc" alt="" @load="imgLoad">
    <div class="goods-info"> 
      <p>{{item.title}}</p>
      <span class="price">{{item.price}}</span>
      <span class="collect">{{item.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
    item: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    imgSrc() {
      return this.item.image ||  this.item.show.img;
    }
  },
  methods: {
    imgLoad() {
      this.$bus.$emit('itemImgLoad');
    },
    itemClick() {
      console.log(this.item);
      this.$router.push('/detail/' + this.item.iid);
    }
  }
}
</script>

<style scoped>
.goods-items {
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}
.goods-items img {
  width: 100%;
  border-radius: 4%;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, .1)
}
.goods-info {
  font-size: 12px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 5px;
  overflow: hidden;
  text-align: center;
}
.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 3px;
}
.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.goods-info .collect {
  position: relative;
}
.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>