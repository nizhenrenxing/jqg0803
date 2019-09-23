<template>
  <div class="songrank" @click="GetSongRankid(songrankid)">
    <div class="songrank-content">
      <div class="songrank-item">
        <img :src="songrankid.url" alt="图片" />
        <div class="right">
          <div class="song-list" v-for="(item, index) in songrankcontent" :key="index">
            <span>{{index+1}}</span>.
            <span>{{item.songData.songName}}</span>·
            <span>{{item.songData.singerName[0]}}</span>
          </div>
          <img src="../assets/7.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "songrank",
  props: ["songrankid"],
  data() {
    return {
      songrankcontent: []
    };
  },
  mounted() {
    axios
      .get(
        `http://api.kele8.cn/agent/http://m.music.migu.cn/migu/remoting/cms_list_tag?nid=${this.songrankid.id}&pageSize=3&pageNo=0`
      )
      .then(res => {
        this.songrankcontent = res.data.result.results;
        console.log(this.songrankcontent);
      });
  },
  methods: {
     GetSongRankid(item){
    this.$router.push({path:'/rank/SongRankContent',query:{id:item.id,bgurl:item.bgurl}})
  }
  },
};
</script>

<style lang="scss" scoped>
.songrank {
    position: relative;
  width: 100%;
  height: 100px;
  margin-bottom: 15px;
  .songrank-content {
    width: 100%;
    height: 100%;
    line-height: 100px;
      text-align: center;
    .songrank-item {
      width: 100%;
      height: 100%;
       box-sizing: border-box;
      img {
        width: 100px;
        height: 100px;
        float: left;
      }
      .right {
          float: left;
        text-align: left;
        font-size: 14px;
        color: #3f3f3f;
        margin-left: 15px;
       margin-top: 12.5px;
        .song-list{
            width: 220px;
            line-height: 25px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            letter-spacing: 0.5px;
            
        }
        img{
           position: absolute;
            width: 10px;
            height: 13px;
            right: 20px;
            top: 50%;
            margin-top: -5px;
            }
      }
    }
  }
}
</style>