<template>
  <div>
    <input 
      type="text"
      :placeholder="placeholder"
      v-slice.number="val"
      @input="handleInput"
    >
    <span class="delete-btn" v-show="!!val" @click="handleClick"></span>
  </div>
</template>

<script>
import emitter from 'common/emitter'
export default {
  props: {
    placeholder: {
      type: String,
      default: '',
      required: true
    },
    inType: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      val: this.value
    }
  },
  watch: {
    value(newValue) {
      if (newValue !== this.value) this.val = this.value;
    }
  },
  mixins: [emitter],
  methods: {
    handleInput(e) {
      const value = e.target.value;
      const newValue =  value.replace(/[^0-9]/g, '');
      this.dispatch('FormItem', 'handleInput', newValue);
    },
    handleClick() {
      this.val = '';
      this.dispatch('FormItem', 'handleInput', '');
    }
  },
}
</script>

<style lang="less" scoped>
div {
  position: relative;
}
input {
  width: 90%;
}
input::placeholder {
  color: #ccc;
}
.delete-btn {
  position: absolute;
  display: inline-block;
  right: 0;
  top: 20px;;
  width: 10px;
  height: 10px;
  background-color: rgba(0, 0, 0, .3);
  border-radius: 50%;
}
</style>