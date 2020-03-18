<template>
  <div>
    <nav-bar class="top-nav-bar">
      <template #center>
        <div>我的档案</div>
      </template>
    </nav-bar>
    <user-info />
    <account-info />
    <message-list :msg="orderList" />
    <message-list :msg="serviceList" />
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';

import UserInfo from "./childrenComps/UserInfo";
import AccountInfo from "./childrenComps/AccountInfo";
import MessageList from "./childrenComps/MessageList";
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
      orderList: [
        { icon: "message.svg", info: "我的消息" },
        { icon: "pointer.svg", info: "积分商城" },
        { icon: "vip.svg", info: "会员卡" }
      ],
      serviceList: [
        { icon: "cart.svg", info: "我的购物车" },
        { icon: "shopping.svg", info: "下载购物APP" }
      ]
    }
  },
}
</script>

<style scoped>
</style>