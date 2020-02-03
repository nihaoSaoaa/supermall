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
        <span class="date">{{commentInfo.created}}</span>
        <span>{{commentInfo.style}}</span>
      </div>
    </div>
    <div class="info-img">
      <img v-for="(src, index) in commentInfo.images" :key="index" :src="src" alt="">
    </div>
  </div>
</template>

<script>
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
  }
</script>

<style scoped>
.comment-info {
  padding-bottom: 20px;
  border-bottom: 5px solid #f2f5f8;
}
.info-header {
  display: flex;
  justify-content: space-between;
  margin: 20px 10px 10px 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.2);
}
.info-header .title {
  font-size: 16px;
}
.info-header .more {
  font-size: 14px;
}
.info-user img {
  border-radius: 50%;
  width: 50px;
  vertical-align: middle;
  margin-right: 14px;
}

.info-user span {
  font-size: 16px;
}
.info-detail {
  padding: 0 10px 0 0;
  margin: 0 15px 0 12px;
}

.info-detail p {
  text-indent: 2em;
  color: #777;
  font-size: 14px;
  margin-bottom: 10px;
  line-height: 1.5;
}

.info-detail .info-other {
  color: #999;
  font-size: 12px;
}

.info-detail .info-other .date {
  margin-right: 10px;
}

.info-img {
  display: flex;
  width: 25%;
  margin-top: 10px;
  margin-bottom: 20px;
}

.info-img img {
  width: 100%;
  margin-right: 6px;
}
</style>