<template>
  <div>
    <child-bar :title="titles[0]" :subtitle="titles[1]" @switch="switchTitle(title)" />
    <div class="img">
      <img class="img" src="~assets/img/profile/Floc-74744256.webp" alt="">
    </div>
    <login-form />
  </div>
</template>

<script>
import ChildBar from '../childrenComp/ChildBar'
import LoginForm from '../childrenComp/LoginForm'
export default {
  data() {
    return {
      titles: ['手机号登录注册', '密码登录'],
      content: '46asdas465464asdad1111'
    }
  },
  components: {
    ChildBar,
    LoginForm
  },
  methods: {
    switchTitle(title) {
      
    }
  },
}
</script>

<style lang="less" scoped>
.login-in {
  border-bottom: 1px solid @color-tint; 
  padding: 5px;
}
.img {
  width: 100vw;
  font-size: 0;
}
</style>