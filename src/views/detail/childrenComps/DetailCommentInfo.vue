<template>
  <div class="comment-info" v-if="Object.keys(commentInfo).length!==0">
    <div class="info-header">
      <div class="title">用户评价</div>
      <div class="more">更多</div>
    </div>
    <div class="info-user">
      <img :src="commentInfo.user.avatar" alt="">
      <span>{{commentInfo.user.uname}}</span>
    </div>
    <div class="info-detail">
      <p>{{commentInfo.content}}</p>
      <div class="info-other">
        <span class="date">{{commentInfo.created | showDate}}</span>
        <span>{{commentInfo.style}}</span>
      </div>
    </div>
    <div class="info-img">
      <img v-for="(src, index) in commentInfo.images" :key="index" :src="src" alt="">
    </div>
  </div>
</template>

<script>
import { formatDate } from 'common/utils'
export default {
  name: 'DetailCommentInfo',
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {}
      }
    },
  },
  filters: {
    showDate(value) {
      //根据时间戳获得date对象
      const date = new Date(value * 1000);
      //转化为时间
      return formatDate(date, 'YYYY / MM / DD hh:mm:ss');
    }
  }
}
</script>

<style scoped>
.comment-info {
  padding-bottom: 20px;
  border-bottom: 5px solid #f2f5f8;
  padding: 0 10px;
}
.info-header {
  display: flex;
  justify-content: space-between;
  line-height: 3rem;
  border-bottom: 1px solid rgba(100, 100, 100, 0.2);
}
.info-header .title {
  font-size: 16px;
}
.info-header .more {
  font-size: 14px;
}
.info-user {
  padding: 10px;
}
.info-user img {
  border-radius: 50%;
  width: 50px;
  vertical-align: middle;
  margin-right: 14px;
}

.info-user span {
  font-size: 16px;
  font-weight: bold;
}
.info-detail p {
  text-indent: 2em;
  color: #fff;
  font-size: 14px;
  line-height: 1.5rem;
  background-color: var(--color-tint);
  border-radius: 5px;
}
.info-detail .info-other {
  color: #999;
  font-size: 12px;
  line-height: 1.5rem;
}

.info-detail .info-other .date {
  margin-right: 10px;
}
.info-img {
  display: flex;
  margin: auto;
  flex-wrap: wrap;
  padding-bottom: 1rem;
}

.info-img img {
  width: 30%;
  height: 100%;
  margin-right: .5rem;
}
</style>