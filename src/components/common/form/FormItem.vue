<template>
  <div>
    <label class="label-area" :style="widthStyle">
      <div v-if="label" class="label">{{label}}</div>
      <slot></slot>
    </label>
    <slot name="other" />
  </div>
</template>

<script>
import  Emitter  from 'common/emitter'
export default {
  name: 'FormItem',
  props: {
    label: {
      type: String,
      required: true
    },
    prop :{
      type: String,
      required: true
    },
    widthPrecent: {
      type: Number,
      default: 100
    }
  },
  data() {
    return {
      initialValue: ''
    }
  },
  computed: {
    fieldValue() {
      return this.form.data[this.prop] 
    },
    widthStyle() {
      return { width: this.widthPrecent + '%' };
    }
  },
  inject: ['form'],
  mixins: [Emitter],
  created () {
    this.$on('handleInput', this.changeValue);
  },
  mounted () {
    // 需校验的缓存 且 监听input框
    if (this.prop) {
      this.dispatch('MiForm', 'onMiFormItemAdd', this)
      // 设置初始值
      this.initialValue = this.fieldValue;
    }
  },
  destroyed () {
    // 组件销毁时消除缓存
    this.dispatch('MiForm', 'onMiFormItemMove', this);
  },
  methods: {
    changeValue(val) {
      this.form.data[this.prop] = val;
    },
    reset() {
      this.form.data[this.prop] = '';
    }
  },
}
</script>

<style lang="less" scoped>
.label-area {
  display: flex;
}
.label {
  color: #333;
  width: 50px;
}
</style>