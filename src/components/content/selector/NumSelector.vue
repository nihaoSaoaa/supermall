<template>
  <div class="num-selector">
    <span class="derement" @click="handleClick(-1)" :class="{ disabled: val <= 1}">-</span>
    <span class="num" @click="openNewArea">{{ val }}</span>
    <span class="increment" @click="handleClick(1)">+</span>
    <transition name="selector">
      <!-- <div class="model" v-if="isShow && clickType === 'alert'"> -->
          <div class="fixed-selector" v-if="isShow">
            <div class="title">修改购买数量</div>
            <div class="select-area">
              <span @click="innerClick(-1)" :class="{ disabled: selectVal <= 1}">-</span>
              <input type="text" :value="selectVal" @input.prevent="input">
              <span @click="innerClick(1)">+</span>
            </div>
            <div class="btn-area">
              <div class="btn cancel" @click="handleCancel">取消</div>
              <div class="btn define" @click="handleDefine">确定</div>
            </div>
          </div>
      <!-- </div> -->
    </transition>
    <transition name="fade">
      <div class="model" v-if="isShow"></div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 1 
    },
    clickType: {
      type: String,
      default: 'alert'
    }
  },
  data() {
    return {
      val: this.value,
      isShow: false,
      selectVal: this.value
    }
  },
  methods: {
    changeVal(num) {
      if (this.val === num) return
      this.val = num;
      if (this.val < 1) this.val = 1
      this.$emit('changeValue', this.val)
    },
    handleClick(num) {
      num = this.val + num;
      this.changeVal(num);
    },
    openNewArea() {
      this.isShow = true;
      this.selectVal = this.val;
      this.$emit('open-selector')
    },
    handleCancel() {
      this.selectVal = this.val;
      this.isShow = false;
    },
    handleDefine() {
      this.changeVal(this.selectVal);
      this.isShow = false;
    },
    validate(num) {
      if (num < 1) this.selectVal = 1;
      if (num > 1000) this.selectVal = 1000
    },
    innerClick(num) {
      this.selectVal += num;
      this.validate(this.selectVal)
    },
    input(e) {
      console.log(typeof e.target.value);
      const val = e.target.value;
      const newVal = val.replace(/[^0-9]/g,'');
      e.target.value = newVal;
      this.selectVal = newVal;
      this.validate(this.selectVal);
    }
  },
  watch: {
    value(newVal) {
      this.val = newVal;
    }
  },
}
</script>

<style lang="less" scoped>
.num-selector {
  font-weight: bold;
}
.num {
  font-weight: 100;
  display: inline-block;
  margin: 0 5px;
  background-color: #eee;
  width: 2rem;
  text-align: center;
  font-size: 14px;
}
.derement,.increment {
  display: inline-block;
  width: 2rem;
}
.derement {
  text-align: right;
}
.increment {
  font-weight: 500;
}
.disabled {
  color: #eee;
}
.model{
  z-index: 9;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, .5);
}
.fixed-selector {
  .center(fixed);
  width: 80%;
  border-radius: .5rem;
  padding: 1rem;
  background-color: #fff;
  text-align: center;
  font-size: @middle-size;
  z-index: 99;
}
.title {
  margin-bottom: .5rem;
}
.select-area span {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  line-height: 2rem;
  border: 1px solid #999;
}
.select-area input {
  width: 4rem;
  height: 2rem;
  padding-left: 1rem;
  position: relative;
  top: -3px;
}
.btn-area {
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
}
.btn {
  flex: 0 0 40%;
  height: 1.5rem;
  line-height: 1.5rem;
  border-radius: 1.5rem;
  border: 1px solid var(--color-tint);
  color: var(--color-tint);
}
.btn.define {
  color: #fff;
  background-color: var(--color-tint);
}
</style>