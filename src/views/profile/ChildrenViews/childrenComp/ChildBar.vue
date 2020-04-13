<template>
  <nav-bar>
    <template #left>
      <back-route />
    </template>
    <template #center><span>{{ stitle }}</span></template>
    <template #right ><span class="right" v-if="subtitle" @click="handleClick">{{ ssubtitle }}</span></template>
  </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import BackRoute from 'components/content/backRoute/BackRoute'
export default {
  props: {
    title: {
      type: String,
      required: true 
    },
    subtitle: {
      type: String,
    }
  },
  data() {
    return {
      stitle: this.title,
      ssubtitle: this.subtitle
    }
  },
  components: {
    NavBar,
    BackRoute
  },
  methods: {
    handleClick() {
      const temp = this.ssubtitle;
      this.ssubtitle = this.stitle;
      this.stitle = temp;
      this.$emit('switchTitle', temp);
    }
  },
}
</script>

<style lang="less" scoped>
.right {
  font-size: @ssmall-size;
  color: #999;
}
</style>