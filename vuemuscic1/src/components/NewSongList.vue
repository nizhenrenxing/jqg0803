<template>
  <div class="newsonglist">
    <div class="newsonglist-title" @click="NewsonglistMore">
      新歌速递
      <span>
        <img src="../assets/jian.png" alt="箭头" />
      </span>
    </div>
    <div class="newsonglist-content" v-for="(item, index) in newsonglist" :key="index">
      <img :src="item.songData.picL" />
      <div class="content">
        <div class="newsonglist-item">
          <span class="songname">{{item.songData.songName}}</span>
          <div class="singername">{{item.songData.singerName[0]}}</div>
        </div>
        <div class="playerbtn">
          <img src="../assets/stop.png" alt="播放" @click="getsongid(index)" />
        </div>
        <div class="left">
          <img src="../assets/more.png" alt="更多" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "newsonglist",
  data() {
    return {
      newsonglist: [],
      newsonglists:[]
    };
  },
  methods: {
    getsongid(index) {
      axios
        .get(
          "http://api.kele8.cn/agent/http://m.music.migu.cn/migu/remoting/cms_list_tag?pageSize=4&nid=11248351&pageNo=3"
        )
        .then(res => {
          // this.newsonglist = res.data.result.results;
          this.$store.commit(
            "updataNewsongList",
            res.data.result.results[index].songData.listenUrl
           
          );
          this.$store.commit(
            "updataNewSongDetail",
            this.newsonglists[index]
          );
          console.log(res.data.result.results[index]);
          this.$store.commit("updataNewSongPlayList",  this.newsonglists);
          console.log( res.data.result.results)
        });
    },
    NewsonglistMore() {
      this.$router.push({ path: "/recommend/NewsonglistMore"});
    }
  },
  mounted() {
    axios
      .get(
        "http://api.kele8.cn/agent/http://m.music.migu.cn/migu/remoting/cms_list_tag?pageSize=4&nid=11248351&pageNo=3"
      )
      .then(res => {
        this.newsonglist = res.data.result.results;
        console.log(res.data.result.results);
        for (let i = 0; i < this.newsonglist.length; i++) {
          this.newsonglists.push({
            mp3: this.newsonglist[i].songData.listenUrl,
            pic: this.newsonglist[i].songData.picL,
            singerName: this.newsonglist[i].songData.singerName[0],
            songName:this.newsonglist[i].songData.songName
          });
        }
      });
  }
};
</script>

<style lang="scss" scoped>
.newsonglist {
  width: 100%;
  margin-top: 10px;
  .newsonglist-title {
    width: 100%;
    height: 25px;
    line-height: 25px;
    font-size: 18px;
    box-sizing: border-box;
    text-align: center;
    margin-bottom: 7px;

    span {
      display: inline-block;
      width: 18px;
      height: 18px;
      padding-top: 1px;
      margin-left: 5px;
      vertical-align: top;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .newsonglist-content {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    box-sizing: border-box;
    padding-left: 10px;
    margin-bottom: 8px;
    img {
      flex: 0 0 50px;
      width: 50px;
      height: 50px;
      background-size: cover;
    }
    .content {
      flex: 1;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      margin-left: 25px;
      .newsonglist-item {
        width: 185px;
        font-size: 16px;
        text-align: left;
        float: left;
        .songname {
          width: 95%;
          display: inline-block;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        .singername {
          font-size: 13px;
          color: #888;
        }
      }
      .playerbtn {
        float: left;
        margin-left: 30px;
        width: 30px;
        height: 30px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .left {
        float: left;
        width: 30px;
        height: 20px;
        text-align: right;
        img {
          width: 3px;
          height: 100%;
          vertical-align: middle;
        }
      }
    }
  }
}
</style>