<template>
  <div>
    <nav-bar class="top-nav-bar">
      <template #center>
        <div>我的信息</div>
      </template>
    </nav-bar>
    <user-info @click.native="routeChange('登录/注册')" />
    <account-info />
    <message-list :msg="orderList" @routeChange="routeChange" />
    <message-list :msg="serviceList" @routeChange="routeChange" />
    <transition name="slide-left">
      <router-view class="profile-router-view" />
    </transition>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';

import UserInfo from "./childrenComps/UserInfo";
import AccountInfo from "./childrenComps/AccountInfo";
import MessageList from "./childrenComps/MessageList";
import LoginBar from './childrenComps/LoginBar'
export default {
  name: 'Profile',
  components: {
    NavBar,
    UserInfo,
    AccountInfo,
    MessageList
  },
  data() {
    return {
      isLogined: false,
      orderList: [
        { icon: "message.svg", info: "我的消息" },
        { icon: "pointer.svg", info: "积分商城" },
        { icon: "vip.svg", info: "会员卡" }
      ],
      serviceList: [
        { icon: "cart.svg", info: "我的购物车" },
        { icon: "shopping.svg", info: "下载购物APP" },
        {icon: '', info: '向我打赏' }
      ]
    }
  },
  methods: {
    routeChange(info) {
      const path = this.getPath(info);
      if (!path) return;
      if (path === 'login' && this.isLogined ) return;
      this.$router.push(`/profile/${path}`);
    },
    getPath(info) {
      switch (info) {
        case "我的消息":
          return 'message';
        case "下载购物APP":
          return 'download';
        case "向我打赏":
          return 'reward';
        case '登录/注册':
          return 'login';
        default:
          return '';
      }
    }
  },
}
</script>

<style scoped>
.profile-router-view {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #fff;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
}
</style>