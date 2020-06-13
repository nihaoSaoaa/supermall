<template>
  <div v-if="Object.keys(goods).length !== 0" class="cart-item">
    <div class="selector">
      <check-button :is-checked="goods.checked" @click.native="checkBtnClick" />
    </div>
    <div class="item-img" @click="imgClick">
      <img :src="goods.image" alt="">
    </div>
    <div class="item-info" @touchstart="touchStart" @touchmove="touchMove" @click="backClick" >
      <div class="title">{{goods.title}}</div>
      <div class="desc">{{goods.desc}}</div>
      <div class="bottom">
        <div class="price">¥{{goods.price}}</div>
        <num-selector :value="goods.count" @changeValue="changeValue"  />
      </div>
    </div>
    <transition name="pop">
      <div class="popup" v-show="popShow">
        <button @click="deleteClick" class="delete">删除</button>
        <button @click="backClick" class="back">返回</button>
    </div>
    </transition>
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
  data() {
    return {
      popShow: false
    }
  },
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    },
    distance: Number,
  },
  methods: {
    ...mapActions([
      'changeCount',
      'deleteByIid' //also supports payload `this.nameOfAction(amount)` 
    ]),
    checkBtnClick() {
      this.goods.checked = !this.goods.checked;
    },
    changeValue(num) {
      this.goods.count = num;
      this.changeCount({ goods: this.goods, num });
    },
    imgClick() {
      this.$router.push('/detail/' + this.goods.iid);
    },
    touchStart(e) {
      this.startX = e.touches[0].pageX;
    },
    touchMove(e) {
      this.currentX = e.touches[0].pageX;
      const dis =  - this.currentX + this.startX;
      if (this.distance < dis && !this.popShow) {
        this.popShow = true;
      }
    },
    deleteClick() {
      this.deleteByIid({ goods: this.goods })
    },
    backClick() {
      if (this.popShow) this.popShow = false;
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
  position: relative;
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
.popup {
  position: absolute;
  right: 0;
  top: 0;
  width: 100px;
  height: 100%;
  background-color: rgba(0, 0, 0, .2);
  box-shadow: -4px 0px 4px 0px rgba(0, 0, 0, .2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.popup button {
  width: 80px;
  border-radius: 10px;
  padding: 2px;
}
.popup .delete {
  background-color: #ff8198;
  color: #fff;
}
.popup .back {
  margin-top: 10px;
  background-color: yellow;
}
</style>