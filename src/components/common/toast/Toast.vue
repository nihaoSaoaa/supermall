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
      show(msg, cb) {
        if (this.isShow) return;
        this.msg = msg;
        this.isShow = true;
        setTimeout(() => {
          this.isShow = false;
          cb && cb();
        }, 1000);
      },
    },
  }
</script>

<style scoped>
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
  border-radius: 20%/100%;
  padding: 8px 10px;
  color: #fff;
  background-color: rgba(0, 0, 0, .7);
  z-index: 99;
}
</style>