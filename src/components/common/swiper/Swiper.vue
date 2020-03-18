<template>
  <div id="hy-swiper">
    <!-- 主展示区 -->
    <div class="swiper" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd" ref="swiper">
      <slot></slot>
    </div>
    <!-- 左右指示器 -->
    <slot name="indicator"></slot>
    <!-- 点指示器 -->
    <div class="indicator" v-if="showIndicator && slideCount > 1">
      <slot name="indicator">
        <div
          v-for="(item, index) in slideCount"
          class="indi-item"
          :class="{active: index === currentIndex - 1}"
          :key="index"
        ></div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  props: {
    interval: {
      type: Number,
      default: 3000
    },
    animDuration: {
      type: Number,
      default: 300
    },
    moveRatio: {
      type: Number,
      default: 0.5
    },
    showIndicator: {
      type: Boolean,
      default: true
    },
    slideCount: {
      type: Number
    }
  },
  data() {
    return {
      itemCount: 0,
      totalWidth: 0, //swiper的宽度
      swiperStyle: {}, //swiper的样式
      currentIndex: 1, //当前图片的索引
      scrolling: true //是否正在滚动
    };
  },
  created () {
    this.$on('onSwiperItemMounted', () => {
      if (++ this.itemCount === this.slideCount) {
        //操作dom，在前后添加slide
        this.handleDom();
        //开启定时器
        this.startTimer();
      }
    } );
  },
  methods: {
    /**
     * 定时器操作
     */
    startTimer() {
      this.playTimer = window.setInterval(() => {
        this.currentIndex++;
        this.scrollContent(-this.currentIndex * this.totalWidth);
      }, this.interval);
    },

    stopTimer() {
      window.clearInterval(this.playTimer);
    },

    /**
     * 滚动到正确的位置
     * @param {Number} currentPosition
     */
    scrollContent(currentPosition) {
      // 1. 开始滚动
      this.scrolling = true;
      // 2. 设置滚动动画
      this.swiperStyle.transition = `transform ${this.animDuration}ms`;
      this.setTransform(currentPosition);
      // 3. 判断滚动到的位置
      this.checkPositon();
      // 4. 结束滚动
      this.scrolling = false;
    },

    /**
     * 设置变换的位置
     */
    setTransform(position) {
      this.swiperStyle.transform = `translate3d(${position}px, 0, 0)`;
      this.swiperStyle[
        "-webkit-transform"
      ] = `translate3d(${position}px), 0, 0`;
      this.swiperStyle["-ms-transform"] = `translate3d(${position}px), 0, 0`;
    },

    /**
     * 判断滚动的位置
     */
    checkPositon() {
      window.setTimeout(() => {
        //1. 校验位置是否正确(主要是clone节点上)
        this.swiperStyle.transition = "0ms";
        if (this.currentIndex > this.slideCount) {
          this.currentIndex = 1;
          this.setTransform(-this.totalWidth * this.currentIndex);
        } else if (this.currentIndex < 1) {
          this.currentIndex = this.slideCount;
          this.setTransform(-this.totalWidth * this.currentIndex);
        }

        // 2.结束移动后的回调
        this.$emit("transitionEnd", this.currentIndex - 1);
      }, this.animDuration);
    },

    /**
     * 操作DOM, 在DOM前后添加Slide
     */
    handleDom() {
      // 1. 获取要操作的元素
      const swiperEl = this.$refs.swiper;
      const slideEls = swiperEl.getElementsByClassName("slide");
      // const slideVNODE = this.$slots.default.map(vnode => vnode.elm);
      // console.log(slideEls, slideEls.length, slideVNODE);
      // 2. 保存个数
      this.slideCount = slideEls.length;
      // 3. 若大于1，则克隆前后两个dom
      if (this.slideCount > 1) {
        const cloneFirst = slideEls[0].cloneNode(true);
        const cloneLast = slideEls[this.slideCount - 1].cloneNode(true);
        swiperEl.insertBefore(cloneLast, slideEls[0]);
        swiperEl.appendChild(cloneFirst);
        this.totalWidth = swiperEl.offsetWidth;
        this.swiperStyle = swiperEl.style;
      }
      // 4.让swiper元素, 显示第一个(目前是显示前面添加的最后一个元素)
      this.setTransform(-this.totalWidth);
    },

    /**
     * 拖动事件
     */
    touchStart(e) {
      if (this.scrolling) return;
      this.stopTimer();
      this.startX = e.touches[0].pageX;
    },
    touchMove(e) {
      this.currentX = e.touches[0].pageX;
      this.distance = this.currentX - this.startX;
      let currentPosition = -this.currentIndex * this.totalWidth;
      let movePosition = this.distance + currentPosition;
      this.setTransform(movePosition);
    },
    touchEnd(e) {
      // 1. 获取移动的距离
      const currentMove = Math.abs(this.distance);
      // 2. 判断最终的距离
      if (currentMove === 0) {
        return;
      } else if (
        this.distance > 0 &&
        currentMove > this.totalWidth * this.moveRatio
      ) {
        this.currentIndex--;
      } else if (
        this.distance < 0 &&
        currentMove > this.totalWidth * this.moveRatio
      ) {
        this.currentIndex++;
      }
      // 3. 移动到正确的位置
      this.scrollContent(-this.totalWidth * this.currentIndex);
      // 4. 恢复定时器
      this.startTimer();
    },

    changeItem(num) {
      stopTimer();
      this.currentIndex += num;
      this.scrollContent(- this.currentIndex * this.totalWidth);
      startTimer();
    },
    next() {
      this.changeItem(1);
    },
    prev() {
      this.changeItem(-1);
    }
  }
};
</script>

<style scoped>
#hy-swiper {
  overflow: hidden;
  position: relative;
}
.swiper {
  display: flex;
}
.indicator {
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
  bottom: 8px;
}
.indicator .indi-item {
  box-sizing: border-box;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #fff;
  line-height: 8px;
  text-align: center;
  font-size: 12px;
  margin: 0 5px;
}
.indicator .indi-item.active {
  background-color: rgba(212, 62, 46, 1);
}
</style>