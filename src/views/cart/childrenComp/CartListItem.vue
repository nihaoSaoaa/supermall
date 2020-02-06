<template>
  <div v-if="Object.keys(goods).length !== 0" class="cart-item">
    <div class="selector">
      <check-button :is-checked="goods.checked" @click.native="checkBtnClick" />
    </div>
    <div class="item-img">
      <img :src="goods.image" alt="">
    </div>
    <div class="item-info">
      <div class="title">{{goods.title}}</div>
      <div class="desc">{{goods.desc}}</div>
      <div class="bottom">
        <div class="price">¥{{goods.price}}</div>
        <div class="count">x{{goods.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'
export default {
  name: 'CartListItem',
  components: {
    CheckButton,
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
    checkBtnClick() {
      this.goods.checked = !this.goods.checked;
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
  width: 90%;
  border-radius: 8px;
}
.item-info {
  width: 60%;
}
.title,
.desc {
  margin-top: 15px;
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
  margin-top: 30px;
  bottom: 10px;
  justify-content: center;
}
.bottom .price {
  margin-right: 40px;
  color: var(--color-high-text);
}
</style>