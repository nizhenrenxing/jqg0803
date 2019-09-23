<template>
  <div class="songrankcontent">
    <img class="img1" :src="this.$route.query.bgurl" alt="背景图片" />
    <div class="songrankcontent-con" v-for="(item, index) in songcontentlist" :key="index" @isComplete="comp">
      <span>{{index+1}}</span>
      <div class="songrankcontent-item">
        <div class="songrankcontent-left">
          <div class="song-name">
            {{item.songData.songName}}
            <img src="../assets/sq.png" alt="高清音质" />
          </div>
          <div class="singer-name">{{item.songData.singerName[0]}}</div>
        </div>
        <div class="songrankcontent-mid" @click="getsongrank(index)">
          <img src="../assets/stop.png" alt="播放按钮" />
        </div>
        <div class="songrankcontent-right" @click="CollectSong(item,index)">
          <img src="../assets/more.png" alt="更多" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "songrankcontent",
  data() {
    return {
      songcontentlist: [],
      songcontentlists:[],
      size: 9,
      num: 0,
      iscollect: false,
      index: null,
      comp:false
    };
  },
  methods: {
    getsongrank(index) {
      this.$store.commit(
        "updataNewsongList",
        this.songcontentlist[index].songData.listenUrl
      );
      this.$store.commit("updataNewSongPlayList", this.songcontentlists);
      this.$store.commit(
        "updataNewSongDetail",
        this.songcontentlists[index]
      );
      console.log(this.$store.state.newsonglist);
      console.log(this.$store.state.newsongplaylist);
      console.log(this.$store.state.newsongdetail);
    },
    CollectSong(items, index) {
      console.log(items)
      var coll =this.$store.state.collectlist
      var com =true
      if (this.$store.state.isSign === true) {
          let obj = {
          mp3: items.songData.listenUrl,
          pic: items.songData.picL,
          singerName: items.songData.singerName[0],
          songName: items.songData.songName,
          isComplete:!this.comp
          };
          for(let i=0;i<coll.length;i++){
            if(coll[i].mp3==items.songData.listenUrl){
              console.log(11111)
              com=false
            }   
          }
          if(com==true){
            this.$store.commit("updataCollectList",obj);
          }
            
      } else {
        console.log("请登录后收藏");
      }
      console.log(this.$store.state.collectlist)
    }
  },

  computed: {},
  mounted() {
    switch (this.$route.query.id) {
      case 23603703: //音乐榜
        if (this.num === 0) {
          this.size = 21;
        }
        if (this.num === 1) {
          this.size = 10;
        }
        break;
      case 23603721: //影视榜
        if (this.num === 0) {
          this.size = 10;
        }
        if (this.num === 1) {
          this.size = 10;
        }
        break;
      case 23603926: //华语榜（内地）
        if (this.num === 0) {
          this.size = 9;
        }
        if (this.num === 1) {
          this.size = 10;
        }
        break;
      case 23603954: //华语榜（港台）
        if (this.num === 0) {
          this.size = 16;
        }
        if (this.num === 1) {
          this.size = 10;
        }
        break;
      case 23603974: //欧美榜
        if (this.num === 0) {
          this.size = 50;
        }
        if (this.num === 1) {
          this.size = 10;
        }
        break;
      case 23603982: //日韩榜
        if (this.num === 0) {
          this.size = 49;
        }
        if (this.num === 1) {
          this.size = 10;
        }
        break;
      default:
        break;
    }
    axios
      .get(
        "http://api.kele8.cn/agent/http://m.music.migu.cn/migu/remoting/cms_list_tag?nid=" +
          this.$route.query.id +
          "&pageSize=" +
          this.size +
          "&pageNo=" +
          this.num
      )
      .then(res => {
        this.songcontentlist = res.data.result.results;
        for (let i = 0; i < this.songcontentlist.length; i++) {
          this.songcontentlists.push({
            mp3: this.songcontentlist[i].songData.listenUrl,
            pic: this.songcontentlist[i].songData.picL,
            singerName: this.songcontentlist[i].songData.singerName[0],
            songName:this.songcontentlist[i].songData.songName
          });
        }
        console.log(this.songcontentlist);
      });
  }
};
</script>

<style lang="scss" scoped>
.songrankcontent {
  width: 100%;
  position: fixed;
  top: 40px;
  bottom: 40px;
  overflow: auto;
  .img1 {
    width: 100%;
    height: 180px;
  }
  .songrankcontent-con {
    width: 100%;
    height: 60px;
    span {
      float: left;
      width: 40px;
      line-height: 60px;
      height: 100%;
      font-size: 17px;
      text-align: center;
    }
    .songrankcontent-item {
      width: 335px;
      height: 100%;
      float: left;
      border-bottom: 1px solid #eee;
      .songrankcontent-left {
        float: left;
        text-align: left;
        box-sizing: border-box;
        width: 240px;
        height: 100%;
        line-height: 25px;
        vertical-align: middle;
        .song-name {
          width: 240px;
          height: 21px;
          margin-top: 6px;
          font-size: 17px;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          img {
            position: relative;
            top: -5px;
            left: -2px;
          }
        }
        .singer-name {
          width: 240px;
          height: 19px;
          font-size: 13px;
          margin-top: 4px;
          color: #999;
        }
        img {
          width: 15px;
          height: 10px;
        }
      }
      .songrankcontent-mid {
        float: left;
        width: 60px;
        height: 60px;
        line-height: 60px;
        img {
          width: 30px;
          height: 30px;
          vertical-align: middle;
        }
      }
      .songrankcontent-right {
        float: left;
        width: 25px;
        height: 60px;
        line-height: 60px;
        img {
          width: 3px;
          height: 20px;
          vertical-align: middle;
        }
      }
    }
  }
}
</style>

