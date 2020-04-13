<template>
  <div>
    <my-form :data="data" class="login-form">
      <form-item label="手机号" prop="phoneNumber" :widthPrecent="75" class="form-item" >
        <template #default>
          <my-input :value="data.phoneNumber" placeholder="请输入手机号码" inType="number" class="my-input" />
        </template>
        <template #other>
          <div class="line"></div>
          <div v-if="isShow" :class="{active: !!data.phoneNumber}" @click="getCode">获取验证码</div>
          <CountDowm v-else :startTime="60" @timeOver="CountDownOver" >
            <span>s后重试</span>
          </CountDowm>
        </template>
      </form-item>
      <form-item label="验证码" prop="validateCode" class="form-item">
        <my-input :value="data.validateCode" placeholder="请输入验证码" inType="number"  class="my-input" />
      </form-item>
    </my-form>
    <div class="btn-area">
      <button 
        :disabled="disabled" 
        @click="loginWithPhone" 
        class="phone-login-btn">验证登录</button>
      <div class="notice">
        <p>未注册或绑定的手机号，将帮你注册新账号</p>
        <p>登录代表你同意用户协议和隐私政策</p>
      </div>
    </div>
  </div>
</template>

<script>
import MyForm from  'components/common/form/MyForm'
import FormItem from  'components/common/form/FormItem'
import MyInput from  'components/common/form/MyInput'
import CountDowm from 'components/content/countDown/CountDowm'
export default {
  components: {
    MyForm,
    FormItem,
    MyInput,
    CountDowm
  },
  data() {
    return {
      data: {
        phoneNumber: '',
        validateCode: '',
      },
      trueCode: '',
      isShow: true
    }
  },
  computed: {
    disabled() {
      return !this.data.phoneNumber || !this.data.validateCode 
    }
  },
  methods: {
    getCode() {
      if (!this.data.phoneNumber) return;
      if (this.data.phoneNumber.length !== 11) return this.$toast.show('手机号不正确'); 
      const code = this.getRandomNum(1000, 9999);
      this.trueCode = String(code);
      this.$toast.show(`短信发送成功,验证码为：${code}`);
      this.isShow = false;
    },
    getRandomNum(min, max) {
      return Math.floor(Math.random() * (max - min)) + min
    },
    loginWithPhone() {
      if (this.data.phoneNumber.length !== 11) return this.$toast.show('手机号不正确'); 
      if (this.data.validateCode !== this.trueCode) return this.$toast.show('验证码不正确');
      this.$toast.show('登陆成功');
    },
    CountDownOver() {
      this.isShow = true;
    }
  },
}
</script>

<style lang="less" scoped>
.login-form {
  border-top: 1px solid #aaa;
  border-bottom: 1px solid #aaa;
  padding-left: 10px;
  font-size: @middle-size;
  .form-item {
    display: flex;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #aaa;
    color: #ccc;
    &:last-of-type {
      border-bottom: none;
    }

    .line {
      width: 1px;
      height: 20px;
      background-color: #aaa;
      position: relative;
      top: 15px;
      margin-right: 3px;
    }
    .active {
      color: @color-tint;
    }
  }
}
.btn-area {
  background-color: #eee;
  padding: 20px 10px 50px 10px; 
  .phone-login-btn {
    width: 100%;
    color: #fff;
    height: 40px;
    line-height: 40px;
    background-color: @color-tint;
    border-radius: 2px;
    &:disabled {
      opacity: .3;
    }
  }
  .notice {
    font-size: @ssmall-size;
    padding-top: 10px;
    text-align: center;
    line-height: 1.2;
  }
}
</style>