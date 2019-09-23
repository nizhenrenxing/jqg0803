<template>
  <div id="app">
    <!-- <div class="routerlist">
      <router-link to="/recommend">推荐</router-link>
      <router-link to="/rank">排行榜</router-link>
      <router-link to="/search">搜索</router-link>
      <router-link to="/person">个人</router-link>
    </div> -->
    <RouterList></RouterList>
    <router-view></router-view>
    <Player></Player>
  </div>
</template>
<script>

import Player from '@/components/Player'
import RouterList from '@/components/RouterList'
export default {
  name: "app",
  components: {
    Player,
    RouterList
  }
};
</script>

<style lang='scss'>
body {
  margin: 0;
  padding: 0;
}
#app {
  width: 100%;
  height: 100%;
  text-align: center;
  color: #2c3e50;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  
}
</style>
