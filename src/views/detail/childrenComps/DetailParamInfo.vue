<template>
  <div class="detail-param-info" v-if="Object.keys(paramInfo).length !== 0">
    <table class="sizes" v-for="(sizes, index) in paramInfo.sizes" :key="index">
      <tr v-for="(size, index) in sizes" :key="index">
        <td v-for="(item, index) in size" :key="index">{{item}}</td>
      </tr>
    </table>
    <table class="infos">
      <tr v-for="(info, index) in paramInfo.infos" :key="index">
        <td class="key">{{info.key}}</td>
        <td class="value">{{info.value}}</td>
      </tr>
    </table>
    <div v-if="paramInfo.image !== ''" class="image">
      <img :src="paramInfo.image" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailParamInfo',
    props: {
      paramInfo: {
        type: Object,
        default() {
          return {}
        } 
      },
    },
  }
</script>

<style scoped>
.detail-param-info {
  padding: 20px 15px;
  font-size: 14px;
  border-bottom: 5px solid #f2f5f8;
}
table {
  width: 100%;
  border-collapse: collapse;
}
tr {
  height: 42px;
  line-height: 42px;
}
td {
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.infos .key {
  width: 95px;
}
.infos .value {
  color: #eb4868;
}
.image {
  width: 100%;
}
.image img {
  width: 100%;
}
</style>