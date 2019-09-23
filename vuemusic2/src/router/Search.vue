<template>
  <div class="search">
    <div class="inp-con">
      <span class="fa fa-search"></span>
      <div class="del" v-show="this.keyword" @click="delinput">x</div>
      <input
        type="text"
        placeholder="搜索歌曲、歌手"
        v-model="keyword"
        @blur="isfShowsearchlist"
        @focus="istShowsearchlist"
      />
    </div>
    <div class="line"></div>

    <div class="hotword" v-show="!this.keyword">
      <div class="hot-recommend">热门搜索</div>
      <span
        v-for="(item, index) in hotword"
        :key="index"
        @click="uptxtname(item)"
      >{{item.txtData.txtName}}</span>
    </div>

    <div class="tipword" v-if="!searchlist.length>0">
      <ul>
        <li class="tipsearchword" v-show="this.keyword">搜索'{{this.keyword}}'</li>
        <li v-for="(item, index) in tipword" :key="index" @click="getsearchword(item.name)">
          <span class="fa fa-search"></span>
          {{item.name}}
        </li>
      </ul>
    </div>

    <div class="searchlist" v-if="searchlist">
      <div
        class="searchlist-con"
        v-for="(item, index) in searchlist"
        :key="index"
        @click="Getsearchlistcon(item)"
      >
        <img :src="item.cover" alt="歌手头像" />
        <div class="searchlist-right">
          <div class="searchlist-songname">{{item.songName}}</div>
          <div class="searchlist-singername">{{item.singerName}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "search",
  data() {
    return {
      hotword: [],
      tipword: [],
      keyword: "",
      searchlist: [],
      searchlists: [],
      Showsearchlist: true
    };
  },

  methods: {
    SearchKeyWord(x) {
      return axios
        .get(
          "http://api.kele8.cn/agent/http://m.music.migu.cn/migu/remoting/autocomplete_tag",
          {
            params: {
              keyword: x
            }
          }
        )
        .then(res => {
          this.tipword = res.data.key;
          console.log(this.tipword);
        });
    },
    delinput() {
      this.keyword = "";
      this.Showsearchlist = true;
      this.searchlist = [];
      setTimeout(() => {
        this.Showsearchlist = false;
      }, 100);
    },
    getsearchword(searchword) {
      this.keyword = searchword;
      axios
        .get(
          "http://api.kele8.cn/agent/http://m.music.migu.cn/migu/remoting/scr_search_tag",
          {
            params: {
              rows: 20,
              type: 2,
              keyword: searchword,
              pgc: 1
            }
          }
        )
        .then(res => {
          this.searchlist = res.data.musics;
          
        });
    },
    istShowsearchlist() {
      this.Showsearchlist = true;
      console.log(this.Showsearchlist);
       this.searchlist = [];
    },
    isfShowsearchlist() {
      this.Showsearchlist = false;
      this.searchlist = [];
      console.log(this.Showsearchlist);
    },
    Getsearchlistcon(item) {
      this.searchlists=[]
      var index
      console.log(this.searchlist)
      var newsearchlist=this.searchlist
     newsearchlist.forEach((element,i) => {
       if(item.mp3==element.mp3){
         index=i
       }
       console.log(index)
      });
      for (let i = 0; i < newsearchlist.length; i++) {
            this.searchlists.push({
              mp3: newsearchlist[i].mp3,
              pic: newsearchlist[i].cover,
              singerName: newsearchlist[i].singerName,
              songName: newsearchlist[i].songName
          });
        }
      this.$store.commit("updataNewsongList", this.searchlists[index].mp3);
      this.$store.commit("updataNewSongDetail", this.searchlists[index]);
      this.$store.commit("updataNewSongPlayList", this.searchlists);
      
      console.log(this.searchlists[index].mp3);
       console.log(item.mp3);
    },
    uptxtname(item) {
      this.keyword = item.txtData.txtName;
    }
  },

  watch: {
    keyword(newvalue, oldvalue) {
      if (newvalue) {
        this.SearchKeyWord(newvalue);
        console.log(newvalue);
      } else {
        this.tipword = [];
      }
    },
  },

  mounted() {
    axios
      .get(
        "http://api.kele8.cn/agent/http://m.music.migu.cn/migu/remoting/cms_list_tag?pageSize=10&nid=24041523&pageNo=0&type=2005"
      )
      .then(res => {
        this.hotword = res.data.result.results;
        console.log(this.hotword);
      });

  }
};
</script>

<style lang="scss" scoped>
.search {
  position: fixed;
  top: 40px;
  bottom: 40px;
  left: 0;
  right: 0;
  overflow: auto;
  .inp-con {
    width: 100%;
    position: relative;
    span {
      position: absolute;
      top: 16px;
      left: 31px;
      color: #ccc;
    }
    .del {
      width: 16px;
      height: 16px;
      line-height: 16px;
      border-radius: 50%;
      color: #fff;
      position: absolute;
      top: 17px;
      right: 24px;
      background: rgba(0, 0, 0, 0.3);
    }
    input {
      margin-top: 5px;
      width: 75%;
      height: 40px;
      outline: none;
      padding: 0 20px 0 33px;
      border: 0;
      border-radius: 20px;
      background: rgba(0, 0, 0, 0.1);
    }
  }
  .line {
    width: 100%;
    height: 1px;
    margin-top: 5px;
    background: rgba(0, 0, 0, 0.1);
  }
  .hotword {
    width: 100%;
    text-align: left;
    padding: 12px 20px;
    box-sizing: border-box;
    .hot-recommend {
      font-size: 14px;
      color: #666;
    }
    span {
      display: inline-block;
      height: 26px;
      padding: 0 8px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 13px;
      // background: rgba(0, 0, 0, 0.1);
      margin: 5px 10px;
    }
  }
  .tipword {
    width: 100%;
    ul {
      width: 100%;
      margin: 0;
      padding: 0;
      text-align: left;
      li {
        list-style: none;
        height: 35px;
        line-height: 35px;
        padding: 3px 0;
        font-size: 15px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        color: #333;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        &.tipsearchword {
          color: #507daf;
          padding: 3px 7px;
        }
        span {
          font-size: 14px;
          padding: 0 7px;
          color: rgba(0, 0, 0, 0.3);
        }
      }
    }
  }
  .searchlist {
    width: 100%;
    .searchlist-con {
      display: flex;
      width: 100%;
      height: 50px;
      box-sizing: border-box;
      padding: 0 10px;
      margin: 10px 0;

      img {
        flex: 0 0 50px;
        width: 50px;
        height: 50px;
      }
      .searchlist-right {
        flex: 1;
        text-align: left;
        margin-left: 10px;
        font-size: 14px;
        color: #888;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        .searchlist-songname {
          width: 300px;
          font-size: 16px;
          color: #333;
          margin-bottom: 3px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
    }
  }
}
</style>