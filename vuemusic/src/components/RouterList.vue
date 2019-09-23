<template>
    <div class="routerlist">
      <router-link to="/recommend">推荐</router-link>
      <router-link to="/rank">排行榜</router-link>
      <router-link to="/search">搜索</router-link>
      <router-link to="/person">个人</router-link>
    </div>
</template>

<script>
export default {
  name: "routerlist"
};
</script>

<style lang="scss" scoped>
.routerlist{
    position: fixed;
    top: 0;
    background: rgba(0,0,0,0.2);
    width: 100%;
    height: 40px;
    line-height: 40px;
    display: flex;
    font-size: 500;
    a{
      display: inline-block;
      flex: 1;
      text-decoration: none;
      &.router-link-active{
        color: #42b983;
      }
    }
  }
</style>