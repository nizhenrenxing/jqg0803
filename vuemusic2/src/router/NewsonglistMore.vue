<template>
  <div class="newsonglistmore">
    <div class="newsonglistmore-con" v-for="(item, index) in listmore" :key="index">
      <img :src="item.songData.picL" alt="歌手图片" />
      <div class="newsonglistmore-item">
        <div class="right">
          <div class="right-songname">{{item.songData.songName}}</div>
          <div class="right-singername">{{item.songData.singerName[0]}}</div>
        </div>
        <div class="mid">
            <img src="../assets/stop.png" alt="播放" @click="getsongrank(index)">
        </div>
        <div class="left">
            <img src="../assets/more.png" alt="更多" />
        </div>
      </div>
    </div>
    <!-- <button @click="loadmore">more</button> -->
  </div>
</template>

<script>
import axios from "axios";
import loadsh from "lodash";
export default {
  name: "newsonglistmore",
  data() {
    return {
      listmore: [],
      listmores: []
    };
  },
methods: {
    getsongrank(index) {
      this.$store.commit(
        "updataNewsongList",
        this.listmore[index].songData.listenUrl
      );
      this.$store.commit("updataNewSongPlayList", this.listmores);
       this.$store.commit("updataNewSongDetail", this.listmores[index]);
    }
},
  mounted() {
    axios
      .get(
        "http://api.kele8.cn/agent/http://m.music.migu.cn/migu/remoting/cms_list_tag?pageSize=100&nid=11248351&pageNo=3"
      )
      .then(res => {
        this.listmore = res.data.result.results;
        for (let i = 0; i < this.listmore.length; i++) {
          this.listmores.push({
            mp3: this.listmore[i].songData.listenUrl,
            pic: this.listmore[i].songData.picL,
            singerName: this.listmore[i].songData.singerName[0],
            songName:this.listmore[i].songData.songName
          });
        }
      });
  }
};
</script>

<style lang="scss" scoped>
.newsonglistmore {
  width: 100%;
  position: fixed;
  top: 40px;
  bottom: 40px;
  left: 0;
  right: 0;
  overflow: auto;
  
  .newsonglistmore-con {
    width: 100%;
    height: 50px;
    padding: 7px 0;
    display: flex;
    img {
      flex: 0 0 50px;
      width: 50px;
      height: 50px;
      background-size: cover;
      margin-left: 10px;
    }
    .newsonglistmore-item {
      width: 100%;
      flex-wrap: nowrap;
      box-sizing: border-box;
       margin-left: 15px;
     border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      .right {
        width: 185px;
        height: 50px;
        font-size: 16px;
        text-align: left;
        float: left;
        .right-songname {
          width: 95%;
          display: inline-block;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        .right-singername {
          font-size: 13px;
          color: #888;
        }
      }
      .mid{
          float: left;
          margin-left: 30px;
          width: 30px;
          height: 30px;
          img{
              width: 100%;
              height: 100%;
          }
      }
      .left{
          float: left;
          width: 36px;
          height: 20px;
          text-align: right;
          img{
              width: 3px;
              height: 100%;
              vertical-align: middle;
          }
      }
    }
  }
}
</style>