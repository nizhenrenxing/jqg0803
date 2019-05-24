<template>
  <div class="home">
    <Nav></Nav>
    <!-- <List></List> -->
    <List link="toutiao">
      <h6>今日要闻</h6>
    </List>
    <List link="ent">
      <h6>娱乐</h6>
    </List>
    <List link="sports">
      <h6>体育</h6>
    </List>
    <List link="money">
      <h6>财经</h6>
    </List>
    <List link="tech">
      <h6>科技</h6>
    </List>
    <List link="war">
      <h6>军事</h6>
    </List>
    <List link="auto">
      <h6>汽车</h6>
    </List>
    <i class="toloading"></i>
    <Loading v-if="onloading"></Loading>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";
import List from "@/components/List.vue";
import Listdev from "@/components/Listdev.vue";
import Loading from "@/components/Loading.vue";
export default {
  name: "home",
  components: {
    Nav,
    List,
    Listdev,
    Loading
  },
  data: function() {
    return {
      onloading: true,
      showcount: 1
    };
  },
  methods: {},
  mounted() {
    let toload = document.querySelector(".toloading");
    let _this = this;
    window.onscroll = function() {
      if (
        toload.offsetTop <=
        window.innerHeight + document.documentElement.scrollTop
      ) {
        _this.onloading = false;
        _this.showcount += 1;
      }
    };
  }
};
</script>

<style  lang="less">
.home {
  text-align: left;
  padding: 0;
  h6 {
    margin: 10px 0 10px 3%;
    font-size: 0.38rem;
    font-weight: bold;
  }
}
</style>
