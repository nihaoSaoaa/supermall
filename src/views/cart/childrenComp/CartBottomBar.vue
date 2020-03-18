<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button class="check-btn" :is-checked="cartAllIsChecked" @click.native="checkBtnClick" />
      <span>全选</span>
      <span class="price">合计:¥{{totalPrice}}</span>
    </div>

    <div class="calc" @click="calcClick">去结算({{checkedLength}})</div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton';
import { mapGetters } from 'vuex';


export default {
  name: 'CartBottomBar',
  components: {
    CheckButton,
  },
  computed: {
    ...mapGetters([
      'cartAllIsChecked',
    ]),
    totalPrice() {
      return this.$store.state.cartList.reduce((price, cart) => {
        return (cart.checked) ? price + Number(cart.price) * cart.count : price;
      }, 0).toFixed(2);
    },
    checkedLength() {
      return this.$store.state.cartList.reduce((price, cart) => {
        return (cart.checked) ? price + cart.count : price;
      }, 0)
    }
  },
  methods: {
    checkBtnClick() {
      const antiChecked = !this.cartAllIsChecked;
      if (!this.$store.state.cartList.length) return;
      this.$store.state.cartList.map( cart => {
        cart.checked = antiChecked;
      });
    },
    calcClick() {
      this.$toast.show('穷鬼你买NM呢');
    }
  },
}
</script>

<style scoped>
.bottom-bar {
  height: 40px;
  display: flex;
  font-size: 14px;
  background-color: #eee;
  line-height: 40px;
}
.check-content {
  display: flex;
  align-items: center;
  flex: 1;
}
.check-btn {
  margin-left: 5px;
  margin-right: 5px;
  display: flex;
  justify-content: center;
}
.price {
  margin-left: 30px;
}
.calc {
  width: 100px;
  background-color: orangered;
  color: white;
  text-align: center;
}
</style>