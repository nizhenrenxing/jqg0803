<template>
  <div class="recommendlist">
    <div class="recommendlist-title">
      推荐歌单
      <span>
        <img src="../assets/jian.png" alt="箭头" />
      </span>
    </div>
    <div class="recommendlist-content">
      <div
        class="recommendlist-item"
        v-for="(item, index) in recommendlist"
        :key="index"
        @click="Getid(item)"
      >
        <img :src="item.linkData.linkPicUrl" alt="图片" />
        <div class="song-desc">{{item.linkData.linkTitle}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "recommendlist",
  data() {
    return {
      recommendlist: [],
      recommendlists:null
    };
  },
  mounted() {
      axios
      .get(
        "http://api.kele8.cn/agent/http://m.music.migu.cn/migu/remoting/cms_list_tag?pageSize=10&nid=23853969&pageNo=0&type=2006"
      )
      .then(res => {
        this.recommendlist = res.data.result.results;
        // console.log(this.recommendlist);
      }); 
  },
  

  methods: {
    getSongData(){
      getLyric().then((res)=>{
        if(res.code === ERR_OK){
          console.log(res)
        }
      })
  },
    Getid(item) {
      this.$router.push({
        path: "/recommendplayer",
        query: { id: item.linkData.linkUrl }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.recommendlist {
  width: 100%;
  margin-top: 10px;
  .recommendlist-title {
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
  .recommendlist-content {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    box-sizing: border-box;
    justify-content: space-between;
    padding: 0 7px;
    .recommendlist-item {
      width: 32%;
      height: 170px;
      margin-bottom: 4px;
      img {
        width: 100%;
        height: auto;
        background-size: cover;
      }
      .song-desc {
        font-size: 13px;
        text-align: left;
        padding-bottom: 5px;
      }
    }
  }
}
</style>