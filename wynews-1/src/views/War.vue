<template>
  <div class="War">
    <Secondnav>军事频道</Secondnav>
    <div class="navII">
      <ul>
        <li v-on:click="tolink('BAI67OGGwangning',0)" :class="{'active':this.show==0}">首页</li>
        <li v-on:click="tolink('DE0CGUSJwangning',1)" :class="{'active':this.show==1}">军情</li>
      </ul>
    </div>
    <Listdev v-bind:link="this.changelink"  v-if="refresh"></Listdev>
  </div>
</template>
<script>
import Listdev from "@/components/Listdev.vue";
import Secondnav from "@/components/Secondnav.vue";
export default {
  name: "War",
  components: {
    Listdev,
    Secondnav
  },
  data() {
    return {
      changelink: "BAI67OGGwangning",
      refresh: true,
      show:0
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
<style lang="less">
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