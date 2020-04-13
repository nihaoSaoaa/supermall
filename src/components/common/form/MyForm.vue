<template>
  <form>
    <slot/>
  </form>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {}
    },
    rules: {
      type: Object,
      default: () => {}
    }
  },
  provide() {
    return {
      form: this
    }
  },
  data() {
    return {
      // 用来存储 formItem 实例
      fields: []
    }
  },
  created () {
    this.$on('onMiFormItemAdd', field => this.fields.push(field) )
    this.$on('onMiFormItemMove', field => this.fields.splice(this.fields.indexOf(field), 1))
  },
}
</script>

<style lang="less" scoped>

</style>