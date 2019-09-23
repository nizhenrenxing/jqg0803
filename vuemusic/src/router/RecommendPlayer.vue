<template>
  <div class="recommendplayer">
    <div class="recommendplayer-item" v-for="(item, index) in songlist" :key="index">
      <div class="song-singer">
        <div class="song-name">{{item.contentName}}</div>
        <div class="singer-name">{{item.singerName}}</div>
      </div>
      <div class="player-btn"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "recommendplayer",
  data() {
    return {
      musicid: "",
      l: "",
      songlist: ""
    };
  },
  created() {
    this.Getmusicid();
  },
  methods: {
    Getmusicid() {
      this.musicid = this.$route.query.id;
      var n = this.musicid;
      this.l = parseInt(n.slice(n.indexOf("1")));
      // console.log(this.l, typeof this.l);
    }
  },

  mounted() {
    axios
      .get(
        `http://api.kele8.cn/agent/http://m.music.migu.cn/migu/remoting/playlistcontents_query_tag?playListType=2&playListId=${this.l}&contentCount=25`
      )
      .then(res => {
        console.log(res.data.contentList);
        this.songlist = res.data.contentList;
      });
  }
};
</script>

<style lang="scss" scoped>
.recommendplayer {
  position: fixed;
  top: 40px;
  left: 0;
  right: 0;
  bottom: 40px;
  overflow: auto;
  .recommendplayer-item {
    width: 100%;
    height: 50px;
    display: flex;
    text-align: left;
    font-size: 16px;
    border-bottom: 1px solid #ccc;
    box-sizing: border-box;
    .song-singer{
        flex: 0 0 70%;
        width: 70%;
        height: 100%;
        box-sizing: border-box;
        padding: 5px 20px;
        .song-name{
        width: 100%;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        }
        .singer-name{
            width: 100%;
            font-size: 13px;
            color: #888;
        }
    }
  }
}
</style>