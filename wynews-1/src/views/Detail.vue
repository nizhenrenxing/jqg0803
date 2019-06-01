<template>
  <div id="Detail" class="detail">
    <Secondnav>资讯聚焦</Secondnav>
    <Loading v-if="onloading"></Loading>
    <div v-if="this.vwindow" class="vwindow" v-html="vwindow"></div>
    <div v-if="this.head" class="head" v-html="head"></div>
    <div v-if="this.videowindow" class="videowindow" v-html="videowindow"></div>
    <div v-if="this.mycontent" class="main" v-html="mycontent"></div>
    <Listdev v-if="onloadingdev" link="BA10TA81wangning" class="detail-list">
      <h5 class="hot">热门新闻</h5>
    </Listdev>
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import Loading from "../components/Loading";
import Listdev from "@/components/Listdev.vue";
import Notfound from "@/components/Notfound.vue";
import Secondnav from "@/components/Secondnav.vue";
export default {
  name: "Detail",
  props: ["newlink"],
  inject:['reload'],
  data() {
    return {
      head: null,
      mycontent: null,
      vwindow: null,
      videowindow: null,
      params: "",
      onloading: true,
      notfounddev: false,
      onloadingdev: false,
      isRouterAlive:true
    };
  },
  components: {
    Loading,
    Notfound,
    Listdev,
    Secondnav
  },
  methods: {
    goback() {
      this.$router.go(-1);
    }
  },
  created() {
    var param = this.$route.query;
    this.params = param;

    axios
      .get(`https://api.kele8.cn/agent?url=${this.params.id}`)
      .then(res => {
        const cheerio = require("cheerio");
        const $ = cheerio.load(res.data);
        $("img").each(function(i, elem) {
          $(elem).attr("src", $(elem).data("src"));
        });
        this.videowindow = $.html(".video_article_content");
        this.vwindow = $.html(".visual_window");
        this.head = $.html(".head");
        this.mycontent = $.html(".content");
        this.onloading = false;
        this.onloadingdev = true;
      })
      .catch(err => {
        console.error(err);
      });
  },
  beforeRouteUpdate(to, from, next) {
    this.reload()
    next();
  }
};
</script>
<style  lang="less">
.detail {
  .detail-list {
    margin-top: 0.2rem;
    border-top: 1px solid #e6e6e6;
    border-bottom: 1px solid #e6e6e6;
    background: #f6f6f6;
  }
  .hot {
    text-align: left;
    padding-left: 3%;
    font-size: 0.4rem;
    color: #de3e3e;
    margin: 0.2rem 0;
  }

  .head {
    text-align: left;
    font-weight: normal;
    padding: 0 0.3rem 0 0.3rem;
    .info {
      font-size: 0.28rem;
      font-weight: normal;
      margin: 0 0 0.12rem 0;
      color: #888888;
    }
    .title {
      font-size: 0.46rem;
      font-weight: bold;
      padding: 0 0 0.2rem 0;
      color: #404040;
    }
  }
  .main {
    padding: 2%;
    p {
      margin: 0.6rem 0;
      text-align: justify;
      text-indent: 2em;
    }
    .content {
      font-size: 0.31rem;
      line-height: 1.5em;
      padding: 0 0.3rem 0 0.3rem;
      word-break: break-all;
      color: #404040;
      word-break: break-all;
      color: #404040;
      video {
        width: 100%;
      }
      table {
        font-size: 12px;
        overflow-x: auto;
        width: 100%;
        border-spacing: 0;
        text-align: center;
        border-top: 1px solid #e6e6e6;
        border-left: 1px solid #e6e6e6;
        tr {
          display: table-row;
          vertical-align: inherit;
          border-color: inherit;
          td {
            padding: 0;
            border-right: 1px solid #e6e6e6;
            border-bottom: 1px solid #e6e6e6;
          }
        }
      }
      img {
        display: block;
        max-width: 100%;
        margin: 0 auto;
      }
    }
  }
  .vwindow {
    .visual_window {
      margin: 0 auto;
      padding: 2%;
      max-width: 1080px;
      height: 100%;
      overflow: hidden;
      position: relative;
      ul {
        width: 100%;
        margin: 0;
        padding: 0;
        position: inherit;
        li {
          left: 0;
          top: 0;
          list-style: none;
        }
      }
      span,
      .list-more {
        font-size: 0.34rem;
      }
      .last-page,
      footer,
      .flowlist {
        display: none;
      }
      .img_title {
        color: #888888;
        font-weight: normal;
        display: block;
        text-align: center;
        &::after {
          content: "---";
        }
        &::before {
          content: "---";
        }
      }
      .note {
        text-align: left;
        display: inline-block;
        margin: 0;
        padding: 0;
        // text-indent: 0.6rem;
        line-height: 0.6rem;
      }
      .photoComment {
        display: block;
        width: 100%;
        max-width: 1080px;
        margin-bottom: 0;
        position: absolute;
        bottom: 0.8rem;
        left: 0;
        padding: 2% 4% 2%;
        z-index: 1;
        box-sizing: border-box;
        transform: translate3d(0, 100%, 0) translate3d(0, 0.8rem, 0);
        color: #fff;
        font-size: 0.28rem;
        background-color: rgba(0, 0, 0, 0.7);
        box-shadow: none;
        transition: 0.5s;
      }
      .albumTitle {
        width: 6.29rem;
        color: #fff;
        margin: 0;
        font-family: "STHeiti", "Microsoft YaHei", Helvetica, Arial, sans-serif;
        font-weight: 300;
        font-size: 0.34rem;
        text-align: left;
        word-wrap: break-word;
      }
      img {
        position: relative;
        display: block;
        margin: 0 auto;
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }
    }
  }
}
</style>