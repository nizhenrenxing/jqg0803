<template>
  <div id="Listbackup" class="Listback">
    <Loading v-if="onloading"></Loading>
    <ul>
      <slot></slot>
      <router-link to="/Detail">
        <li v-for="(item, index) in newsList.auto" :key="index" >
          <h3 v-bind:path="item.link">{{item.title}}</h3>
          <div class="imgContent">
            <img v-if="item.picInfo" v-bind:src="item.picInfo[0].url" alt>
            <img v-if="item.picInfo" v-bind:src="item.picInfo[1].url" alt>
            <img v-if="item.picInfo" v-bind:src="item.picInfo[2].url" alt>
          </div>
          <span>{{item.ptime}}</span>
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
import Loading from "./Loading"
import { log } from "util";
export default {
  name: "Listbackup",
  props: ["link"],
  data: function() {
    return {
      newurl: "BA10TA81wangning",
      page: 2,
      newsList: [],
      updateUrl: "BA10TA81wangning",
      onloading:'ture'
    };
  },
  components:{
    Loading
  },
  watch: {
    link: function(newValue, oldValue) {
      this.updateUrl = newValue;
    }
  },
  methods: {
    // handle() {
    //   $emit("getLink", this.item.link);
    // }
  },
  created() {
    // console.log(this.updateUrl);

    axios
      .get(
        `https://api.kele8.cn/agent?url=https://3g.163.com/touch/reconstruct/article/list/${this.link}/${this.page}-10.html`
        // 'https://api.kele8.cn/agent?url=https://3g.163.com/touch/reconstruct/article/list/BA10TA81wangning/1-2.html'
      )
      .then(res => {
        this.onloading=false;
        this.newsList = res.data.data
        
      })
      .catch(err => {
        console.error(err);
      });
  }
};
</script>

<style lang="less">
// 自定义样式
.block {
  content: "";
  display: block;
  clear: both;
}
// 本体
.Listback{
  a{
    text-decoration: none;
  }
  ul {
    width: 100%;
    padding: 0;
    margin: 0;
    overflow: hidden;

    li {
      padding: 0;
      margin: 0;
      width: 100%;
      list-style: none;
      text-align: left;
      border-bottom: 1px solid #f5f7f9;
      &::after {
        .block;
      }

      h3 {
        margin-left: 2%;
        width: 100%;
        color: #000;
        font-weight: normal;
        font-size: 1rem;
        font-family: "微软雅黑", sans-serif;
      }
      .imgContent {
        text-align: center;
        &::after {
          .block;
        }
        img {
          width: 30%;
          margin: 0 1%;
          height: auto;
          display: inline-block;
          height: auto;
        }
      }
      span {
        line-height: 1.3rem;
        margin: 10px 0 10px 2%;
        font-size: 0.7rem;
      }
      // 第0个li
      &:nth-child(1) {
        position: relative;
        overflow: hidden;

        h3 {
          display: block;
          position: absolute;
          margin: 0;
          left: 0;
          bottom: 0;
          z-index: 1;
          width: 100%;
          line-height: 2rem;
          color: rgb(255, 255, 255);
          font-weight: bold;
          font-size: 1rem;
          font-family: "微软雅黑", sans-serif;
          background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
        }
        .imgContent {
          position: relative;
          text-align: center;
          &::after {
            .block;
          }
          img {
            margin: 0;
            display: none;
            &:nth-child(1) {
              width: 100%;
              height: auto;
              display: inline-block;
              height: auto;
            }
          }
        }
        span {
          display: none;
        }
      }
    }
  }
}
</style>