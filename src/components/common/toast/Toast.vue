<template>
  <transition name="fade" 
  >
    <div class="toast" v-show="isShow" ref="toast" >
      <span>{{msg}}</span>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'Toast',
    data() {
      return {
        msg: '',
        isShow: false,
      }
    },
    methods: {
      show(msg,delay) {
        return new Promise((resolve, reject) => {
          if (this.isShow) {
            resolve();
          }
          this.msg = msg;
          this.isShow = true;
          setTimeout(() => {
            this.isShow = false;
            resolve(msg);
          }, delay);
        })
      },
    },
  }
</script>

<style lang="less" scoped>
.toast {
  .center(fixed);
  white-space: nowrap;
  border-radius: 10px;
  padding: 8px 10px;
  color: #fff;
  font-size: @small-size;
  background-color: rgba(0, 0, 0, .7);
  z-index: 99;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
</style>