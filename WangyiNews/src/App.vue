<template>
  <div id="app">
    <div class="logo" v-if="navShow"><img src="./assets/logo-site.png" alt=""></div>
    <div class="index-head" v-if="navShow">
      <ul>
        <router-link to="/">
          <li>要闻</li>
        </router-link>
        <router-link to="about">
          <li>推荐</li>
        </router-link>
        <router-link to="Orlist">
          <li>原创</li>
        </router-link>
      </ul>
    </div>
    <router-view v-if="isRouterAlive"></router-view>

    <!-- <div class="copy">404NTDfound</div> -->
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
<script>
import Nav from "@/components/Nav.vue";
import List from "@/components/List.vue";
import Top from "@/components/Top.vue";

import { log } from "util";

export default {
  name: "App",
  provide() {
    return {
      reload: this.reload
    };
  },
  data: function() {
    return {
      newurl: "",
      navShow: true,
      isRouterAlive: true
    };
  },
  components: {
    Nav,
    List,
    Top
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function() {
        this.isRouterAlive = true;
      });
    }
  },
  watch: {
    // 监听路由变化
    $route(to, from) {
      let ThisPage = to.name;
      if (
        ThisPage === "home" ||
        ThisPage === "about" ||
        ThisPage === "Orlist"
      ) {
        this.navShow = true;
      } else {
        this.navShow = false;
      }
    }
  }
};
</script>
<style lang="less">
// 激活样式
@keyframes spin {
  0% {
    transform: rotateY(90deg);
  }
  100% {
    transform: rotateY(0deg);
  }
}
.router-link-exact-active {
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
  i {
    color: #ee1a1a;
  }
}
ul {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
a {
  font-weight: normal;
  color: #000;
  text-decoration: none;
}
html {
  font-size: 48px;
  scroll-behavior: smooth;
}
body {
  margin: 0;
  padding: 0;
}
#app {
  position: relative;
  margin: 0 auto;
  max-width: 800px;
  .logo{
    height: 0.8rem;
    background: #de3e3e;
    line-height: 0.8rem;
    img{
      width: 1rem;
      vertical-align: middle;
    }
    // background-image: url('./assets/logo-site.png');
    // background-repeat: no-repeat;
    // background-size: contain;
  }
  .index-head {
    color: #000;
    font-size: 0.34rem;
    line-height: 0.94rem;
    // background: #de3e3e;
    ul {
      display: flex;
      // border-bottom: 2px solid #f5f7f9;
      a {
        display: inline-block;
        flex: 33%;

        position: relative;
      }
    }
  }
}
.copy {
  position: relative;
  bottom: 0;
  font-size: 0.34rem;
  width: 100%;
  line-height: 0.8rem;
  color: #fff7f7;
  background: #de3e3e;
}
.navII {
  background: #f5f7f9;
  ul {
    display: flex;
    li {
      font-size: 0.34rem;
      flex: 1;
      line-height: 0.8rem;
    }
  }
}
</style>