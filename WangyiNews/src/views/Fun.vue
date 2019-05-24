<template>
  <div>
    <Secondnav>娱乐频道</Secondnav>
    <div class="navII">
      <ul>
        <li v-on:click="tolink('BA10TA81wangning',0)" :class="{'active':this.show==0}">首页</li>
        <li v-on:click="tolink('BD2A86BEwangning',1)" :class="{'active':this.show==1}">电视</li>
        <li v-on:click="tolink('BD2A9LEIwangning',2)" :class="{'active':this.show==2}">电影</li>
        <li v-on:click="tolink('BD2AB5L9wangning',3)" :class="{'active':this.show==3}">明星</li>
        <li v-on:click="tolink('BD2AC4LMwangning',4)" :class="{'active':this.show==4}">音乐</li>
      </ul>
    </div>
    <Listdev v-bind:link="this.changelink" v-if="refresh"></Listdev>
    <router-view></router-view>
  </div>
</template>
<script>
import Listdev from "@/components/Listdev.vue";
import Secondnav from "@/components/Secondnav.vue";
export default {
  name: "Fun",
  components: {
    Listdev,
    Secondnav
  },
  data() {
    return {
      changelink: "BA10TA81wangning",
      refresh: true,
      show: 0
    };
  },
  methods: {
    tolink(to,num) {
      this.show = num
      this.refresh = false;
      this.changelink = to;
      setTimeout(() => {
        this.refresh = true;
      }, 10);
    }
  }
};
</script>
<style scoped lang="less">
.navII{
  position: relative;
  ul{
    position: inherit;
    li{
      position: inherit;
    }
  }
}
.active {
  color: #ee1a1a;
  &::after {
    content: "";
    display: block;
    width: 20%;
    height: 3px;
    bottom: -1.5px;
    left: 50%;
    transform: rotateY(0deg);
    margin-left: -10%;
    background: #ee1a1a;
    position: absolute;
  }
}
</style>
