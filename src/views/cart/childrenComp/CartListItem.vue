<template>
  <div v-if="Object.keys(goods).length !== 0" class="cart-item">
    <div class="selector">
      <check-button :is-checked="goods.checked" @click.native="checkBtnClick" />
    </div>
    <div class="item-img" @click="imgClick">
      <img :src="goods.image" alt="">
    </div>
    <div class="item-info">
      <div class="title">{{goods.title}}</div>
      <div class="desc">{{goods.desc}}</div>
      <div class="bottom">
        <div class="price">¥{{goods.price}}</div>
        <num-selector :value="goods.count" @changeValue="changeValue" />
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'
import NumSelector from 'components/content/selector/NumSelector'
import { mapActions } from 'vuex'

export default {
  
  name: 'CartListItem',
  components: {
    CheckButton,
    NumSelector
  },
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    },
  },
  methods: {
    ...mapActions([
      'changeCount', //also supports payload `this.nameOfAction(amount)` 
    ]),
    checkBtnClick() {
      this.goods.checked = !this.goods.checked;
    },
    changeValue(num) {
      this.goods.count = num;
      this.changeCount({ goods: this.goods, num });
    },
    imgClick() {
      this.$router.push('/detail' + this.goods.iid);
    }
  },
}
</script>

<style scoped>
.cart-item {
  width: 100%;
  display: flex;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}
.selector {
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item-img {
  width: 30%;
}
.item-img>img {
  width: 70%;
  border-radius: 8px;
}
.item-info {
  width: 60%;
}
.title,
.desc {
  height: 2.3rem;
  line-height: 2.3rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.item-info .desc {
  font-size: 12px;
  color: #666;
}
.bottom {
  display: flex;
  justify-content: space-around;
}
.bottom .price {
  color: var(--color-high-text);
}
</style>