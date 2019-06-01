<template>
  <div id="Listdev" class="list">
    <slot></slot>
    <ul>
      <!-- <scroller :on-refresh="refresh" :on-infinite="infinite"> -->
      <li
        v-for="(item, index) in newsList"
        :key="index"
        v-on:click="handle(item.skipType,item.url,item.photosetID,item.skipURL)"
        v-bind:class="{ 'type1': item.imgsrc3gtype==1, 'type2': item.imgsrc3gtype==2, 'type3': item.imgsrc3gtype==3}"
      >
        <div class="msginfo">
          <h4>{{item.title}}</h4>
          <p v-if="item.imgsrc3gtype==1||item.imgsrc3gtype==3">{{item.source}} {{item.ptime}}</p>
        </div>
        <div class="imgContent" v-if="item.imgsrc3gtype==1">
          <img v-bind:src="item.imgsrc" v-bind:alt="item.title">
        </div>
        <div class="imgContent" v-if="item.imgsrc3gtype==3">
          <img v-bind:src="item.imgsrc" v-bind:alt="item.title">
        </div>
        <div class="imgContent" v-if="item.imgsrc3gtype==2">
          <img v-bind:src="item.imgsrc" v-bind:alt="item.title">
          <img v-bind:src="item.imgextra[0].imgsrc" v-bind:alt="item.title">
          <img v-bind:src="item.imgextra[1].imgsrc" v-bind:alt="item.title">
        </div>
        <p v-if="item.imgsrc3gtype==2">{{item.source}} {{item.ptime}}</p>
      </li>
      <!-- </scroller> -->
    </ul>
    <Loading v-if="onloading"></Loading>
    <i class="toloading">
      <!-- <span class="author-info">加载中</span> -->
    </i>
  </div>
</template>

<script>
import Loading from "./Loading";
import { log } from "util";
import { setTimeout } from "timers";
var lodash = require("lodash");
export default {
  name: "Listdev",
  props: ["link"],
  data: function() {
    return {
      newsList: [],
      onloading: "ture",
      page: 10,
      changeurl: this.link,
      newarr: ""
    };
  },
  components: {
    Loading
  },
  methods: {
    handle(parmes1, parmes2, parmes3, parmes4) {
      if (parmes1 == "video") {
        this.$router.push({
          name: "Detail",
          query: { id: parmes4 }
        });
      } else if (parmes1 == "photoset") {
        if (parmes3) {
          var photoset = `https://3g.163.com/all/photoview/${parmes3.replace(
            "|",
            "/"
          )}.html`;
        }
        this.$router.push({
          name: "Detail",
          query: { id: photoset }
        });
      } else if (parmes1 != "photoset") {
        this.$router.push({
          name: "Detail",
          query: { id: parmes2 }
        });
      }
    },
    exchangeData(parmes) {
      switch (this.changeurl) {
        // 娱乐类
        case "BA10TA81wangning":
          this.newarr = parmes.BA10TA81wangning;
          break;
        case "BD2A86BEwangning":
          this.newarr = parmes.BD2A86BEwangning;
          break;
        case "BD2A9LEIwangning":
          this.newarr = parmes.BD2A9LEIwangning;
          break;
        case "BD2AB5L9wangning":
          this.newarr = parmes.BD2AB5L9wangning;
          break;
        case "BD2AC4LMwangning":
          this.newarr = parmes.BD2AC4LMwangning;
          break;
        // 体育类
        case "BA8E6OEOwangning":
          this.newarr = parmes.BA8E6OEOwangning;
          break;
        // 财经类
        case "BA8EE5GMwangning":
          this.newarr = parmes.BA8EE5GMwangning;
          break;
        // 军事类
        case "BAI67OGGwangning":
          this.newarr = parmes.BAI67OGGwangning;
          break;
        case "DE0CGUSJwangning":
          this.newarr = parmes.DE0CGUSJwangning;
          break;
        // 数码类
        case "BAI6JOD9wangning":
          this.newarr = parmes.BAI6JOD9wangning;
          break;
        // 旅游类
        case "BEO4GINLwangning":
          this.newarr = parmes.BEO4GINLwangning;
          break;
        // 科技类
        case "BA8D4A3Rwangning":
          this.newarr = parmes.BA8D4A3Rwangning;
          break;
        // 手机类
        case "BAI6I0O5wangning":
          this.newarr = parmes.BAI6I0O5wangning;
          break;
        // 健康类
        case "BDC4QSV3wangning":
          this.newarr = parmes.BDC4QSV3wangning;
          break;
        // 游戏类
        case "BAI6RHDKwangning":
          this.newarr = parmes.BAI6RHDKwangning;
          break;
        // 时尚类
        case "BA8F6ICNwangning":
          this.newarr = parmes.BA8F6ICNwangning;
          break;
        // 教育类
        case "BA8FF5PRwangning":
          this.newarr = parmes.BA8FF5PRwangning;
          break;
      }
    }
  },
  created() {
    // var storage = window.localStorage;
    // if (storage) {
    //   this.newsList = storage.getItem("index");
    // }
    var url = `https://3g.163.com/touch/reconstruct/article/list/${
      this.changeurl
    }/0-10.html`;
    this.$jsonp(url, {
      callbackName: "artiList"
    })
      .then(res => {
        this.exchangeData(res);
        this.newsList = this.newarr;
        // storage.setItem("index", this.newsList);
        this.onloading = false;
      })
      .catch(error => {
        console.log(error);
      });
  },
  mounted() {
    let self = this;
    let toload = document.querySelector(".toloading");
    var canLoad = true;
    document.onscroll = function() {
      // console.log(toload.offsetTop,
      //   window.innerHeight + document.documentElement.scrollTop);

      if (
        toload.offsetTop <=
        window.innerHeight + document.documentElement.scrollTop
      ) {
        if (canLoad == true) {
          canLoad = false;
          var url = `https://3g.163.com/touch/reconstruct/article/list/${
            self.changeurl
          }/${self.page}-5.html`;
          self
            .$jsonp(url, {
              callbackName: "artiList"
            })
            .then(res => {
              self.page += 6;
              self.exchangeData(res);
              self.newsList = self.newsList.concat(self.newarr);
              self.onloading = false;
              setTimeout(() => {
                canLoad = true;
              }, 100);
            })
            .catch(error => {
              console.log(error);
            });
        }
      }
    };
  }
};
</script>

<style lang="less">
// 过渡
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
// 自定义样式
.block {
  content: "";
  display: block;
  clear: both;
}
// 动画
@keyframes spin {
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(0deg);
  }
}
// 本体
.list {
  .toloading {
    position: relative;
    width: 100%;
    height: 2px;
    bottom: 0;
    opacity: 0;
    display: block;
    animation: spin 3s infinite ease-in-out;
    animation-fill-mode: both;
  }
  a {
    text-decoration: none;
  }
  ul {
    width: 100%;
    padding: 0;
    margin: 0;
    overflow: hidden;

    li {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-wrap: nowrap;
      padding: 10px;
      margin: 0;
      width: 100%;
      list-style: none;
      text-align: left;
      border-bottom: 1px solid #f5f7f9;
      box-sizing: border-box;
      &.type2 {
        display: block;
        .imgContent {
          width: 100%;
          margin-top: 0.12rem;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          flex-direction: row;
          img {
            flex: 0 0 33.1%;
            display: block;
            width: 2.34rem;
            height: 1.46rem;
          }
        }
        p {
          color: #b4b4b4;
          font-size: 0.27rem;
          display: block;
          overflow: hidden;
          white-space: nowrap;
        }
      }
      &::after {
        .block;
      }

      .msginfo {
        flex: 2 2 auto;
        h4 {
          margin: 0;
          padding: 0;
          color: #000;
          font-weight: normal;
          line-height: 0.45rem;
          font-size: 0.34rem;
          vertical-align: middle;
          font-family: "微软雅黑", sans-serif;
        }
        p {
          margin: 0;
          display: block;
          font-size: 0.24rem;
          line-height: 0.5rem;
          color: #b4b4b4;
        }
      }

      .imgContent {
        width: 2.34rem;
        flex: 0 0 auto;
        text-align: center;
        box-sizing: border-box;
        font-size: 0.3rem;
        overflow: hidden;
        &::after {
          .block;
        }
        img {
          width: 100%;
          display: block;
          height: 1.46rem;
          margin: 0 auto;
        }
      }
      // // 0
      // &:nth-child(1) {
      //   position: relative;
      //   overflow: hidden;

      //   h3 {
      //     display: block;
      //     position: absolute;
      //     margin: 0;
      //     left: 0;
      //     bottom: 0;
      //     z-index: 1;
      //     width: 100%;
      //     line-height: 2rem;
      //     color: rgb(255, 255, 255);
      //     font-weight: bold;
      //     font-size: 1rem;
      //     font-family: "微软雅黑", sans-serif;
      //     background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
      //   }
      //   .imgContent {
      //     position: relative;
      //     text-align: center;
      //     &::after {
      //       .block;
      //     }
      //     img {
      //       margin: 0;
      //       display: none;
      //       &:nth-child(1) {
      //         width: 100%;
      //         height: auto;
      //         display: inline-block;
      //         height: auto;
      //       }
      //     }
      //   }
      //   span {
      //     display: none;
      //   }
      // }
    }
  }
}
</style>