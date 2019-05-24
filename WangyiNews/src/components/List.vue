<template>
  <div id="List" class="list">
    <slot v-if="onloading"></slot>
    <ul>
      <li
        v-for="(item, index) in newsList"
        :key="index"
        v-on:click="handle(item.link)"
        v-bind:class="{ 'type1': item.imgsrc3gtype==1, 'type2': item.imgsrc3gtype==2, 'type3': item.imgsrc3gtype==3,  }"
      >
        <!-- 类型0 -->
        <div class="msginfo" v-if="item.imgsrc3gtype==0">
          <h4>{{item.title}}</h4>
          <p class="author-info">{{item.source}} {{item.ptime}}</p>
        </div>
        <!-- 类型1 -->
        <div class="msginfo" v-if="item.imgsrc3gtype==1">
          <h4>{{item.title}}</h4>
          <p class="author-info">{{item.source}} {{item.ptime}}</p>
        </div>
        <div class="imgContent" v-if="item.imgsrc3gtype==1">
          <img v-bind:src="item.picInfo[0].url" alt="item.title">
        </div>
        <!-- 类型2 -->
        <div class="msginfo" v-if="item.imgsrc3gtype==2">
          <h4>{{item.title}}</h4>
        </div>
        <div class="imgContent" v-if="item.imgsrc3gtype==2">
          <img v-bind:src="item.picInfo[0].url" alt="item.title">
          <img v-bind:src="item.picInfo[1].url" alt="item.title">
          <img v-bind:src="item.picInfo[2].url" alt="item.title">
        </div>
        <p class="author-info" v-if="item.imgsrc3gtype==2">{{item.source}} {{item.ptime}}</p>
        <!-- 类型3 -->
        <div class="msginfo type3" v-if="item.imgsrc3gtype==3">
          <h4>{{item.title}}</h4>
        </div>
        <div class="imgContent type3" v-if="item.imgsrc3gtype==3">
          <img v-bind:src="item.picInfo[0].url" alt="item.title">
        </div>
        <p class="author-info" v-if="item.imgsrc3gtype==3">{{item.source}} {{item.ptime}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import Loading from "./Loading";
import { log } from "util";

export default {
  name: "List",
  props: ["link"],
  data: function() {
    return {
      newsList: [],
      onloading: false,
      newurl: this.link,
      localarr: null
    };
  },
  components: {
    Loading
  },
  watch: {},
  methods: {
    handle(parmes) {
      this.$router.push({
        name: "Detail",
        query: { id: parmes }
      });
    }
  },
  created() { 
    var indexStorage = window.localStorage;
    if (localStorage.getItem("ilocal")) {
      this.localarr = JSON.parse(localStorage.getItem("ilocal"));
      switch (this.newurl) {
        case "toutiao":
          this.newsList = this.localarr.toutiao;
          break;
        case "ent":
          this.newsList = this.localarr.ent;
          break;
        case "sports":
          this.newsList = this.localarr.sports;
          break;
        case "tech":
          this.newsList = this.localarr.tech;
          break;
        case "war":
          this.newsList = this.localarr.war;
          break;
        case "dy":
          this.newsList = this.localarr.dy;
          break;
        case "money":
          this.newsList = this.localarr.money;
          break;
        case "auto":
          this.newsList = this.localarr.auto;
          break;
      }
      this.onloading = true;
    }
    axios
      .get(`https://www.apiopen.top/journalismApi`)
      // .get('../assets/api.json')
      .then(res => {
        // console.log(res);
        this.localarr = res.data.data;
        indexStorage.setItem("ilocal", JSON.stringify(this.localarr));
        switch (this.newurl) {
          case "toutiao":
            this.newsList = this.localarr.toutiao;
            break;
          case "ent":
            this.newsList = this.localarr.ent;
            break;
          case "sports":
            this.newsList = this.localarr.sports;
            break;
          case "tech":
            this.newsList = this.localarr.tech;
            break;
          case "war":
            this.newsList = this.localarr.war;
            break;
          case "dy":
            this.newsList = this.localarr.dy;
            break;
          case "money":
            this.newsList = this.localarr.money;
            break;
        }
        this.onloading = true;
      })
      .catch(err => { 
        // console.error(err);
      });
  }
};
</script>

<style scoped lang="less">
// 自定义样式
.block {
  content: "";
  display: block;
  clear: both;
}
.author-info {
  color: #b4b4b4;
  font-size: 0.27rem;
  display: block;
  overflow: hidden;
  white-space: nowrap;
}
// 本体
.list {
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
          font-size: 0.35rem;
          vertical-align: middle;
          font-family: "微软雅黑", sans-serif;
        }
      }

      .imgContent {
        flex: 0 0 auto;
        margin-top: 0.12rem;
        text-align: center;
        box-sizing: border-box;
        &::after {
          .block;
        }
        img {
          width: 100%;
          height: auto;
          display: block;
        }
      }
      // 判断类型给样式
      &.type1 {
        width: 100%;
      }
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
      }
      &.type3 {
        display: block;
        flex-direction: column;
        h4 {
          line-height: 0.45rem;
        }
        .imgContent {
          width: 100%;
          flex: 1;
        }
      }
      // 第0个li
    }
  }
}
</style>
