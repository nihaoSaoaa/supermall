<template>
  <div class="count-dowm-timer">
    <span>{{start}}</span>
    <slot/>
  </div>
</template>

<script>
export default {
  props: {
    startTime: {
      type: Number,
      required: true
    },
    finishTime: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      start: this.startTime,
      timer: null,
      finishTimer: null
    }
  },
  mounted () {
    this.timer = setInterval(() => {
      this.start --;
    }, 1000);
    const timeOut = 1000 * (this.startTime - this.finishTime); 
    console.log(timeOut);
    this.finishTimer = setTimeout(() => {
      clearInterval(this.timer);
      clearTimeout(this.finishTimer);
      this.timer = null;
      this.finishTimer - null;
      this.$emit('timeOver');
    }, timeOut);
  },
  methods: {
    resetTime() {
      this.start = this.startTime;
    }
  },
}
</script>

<style lang="less" scoped>
</style>