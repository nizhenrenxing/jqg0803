<template>
  <div class="sign">
    <li v-once>用户: {{this.$store.state.userinfo}}</li>

    <div class="collect_list">
      <span>我的收藏</span>
      <div
        class="collect_item"
        v-for="(item, index) in  collList"
        :key="index"
        
      >
        <div class="collect_left">
          <img :src="item.pic" alt />
        </div>
        <div class="collect_right" >
          <div class="s" @click="playsong(item)">
            <div class="song_name">{{item.songName}}</div>
            <div class="singer_name">{{item.singerName}}</div>
          </div>

          <div class="collect_del" @click="delsong(item)"><span><img src="../assets/delete.png" alt="删除"></span></div>
        </div>
      </div>
    </div>
    <div class="out" @click="signout">注销登录</div>
  </div>
</template>

<script>
export default {
  name: "sign",
  data() {
    return {
      collList:this.$store.state.collectlist
    };
  },
  computed: {
    CollectList() {
      return this.$store.state.collectlist;
    }
  },
  watch: {
    "$store.state.collectlist": function(newvalue, oldvalue) {
      console.log(newvalue, oldvalue);
    }
  },
  methods: {
    signout() {
      this.$store.commit("updataSignFalse", false);
      this.$router.replace({ path: "/person" });
    },
    playsong(item) {
      this.$store.commit("updataNewsongList", item.mp3);
      this.$store.commit("updataNewSongDetail", item);
      this.$store.commit("updataNewSongPlayList", this.collList);
      console.log(item);
      console.log(this.collList);
    },
    delsong(item){
      var collectList=this.$store.state.collectlist
      console.log(item)
      console.log(collectList)
      collectList.forEach(function(element,index){
        if(element.mp3==item.mp3){
          element.isComplete=false
        }
      });
     this.collList=collectList.filter(item=>
        item.isComplete==true
      )
      this.$store.commit("updataNewsongList", item.mp3);
      this.$store.commit("updataNewSongDetail", item);
      this.$store.commit("updataNewSongPlayList", this.collList);
      console.log(this.collList) 
    }
  }
};
</script>

<style lang="scss" scoped>
.sign {
  width: 100%;
  position: fixed;
  top: 40px;
  bottom: 40px;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.1);
  border-top: 1px solid #fff;
  overflow: auto;
  li {
    list-style: none;
  }
  .collect_list {
    width: 100%;
    span {
      display: inline-block;
      width: 100%;
      height: 20px;
    }
    .collect_item {
      width: 100%;
      height: 40px;
      display: flex;
      margin: 7px 0;
      box-sizing: border-box;
      padding: 0 10px;
      .collect_left {
        flex: 0 0 40px;
        width: 40px;
        height: 40px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .collect_right {
        flex: 0 0 300px;
        width: 300px;
        height: 40px;
        text-align: left;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        margin-left: 10px;
        .s {
          float: left;
          width: 270px;
          height: 40px;
          .song_name {
            width: 270px;
            height: 20px;
            font-size: 16px;
            color: #333;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
          .singer_name {
            width: 100%;
            height: 20px;
            font-size: 14px;
            color: #999;
          }
        }
        .collect_del{
          float: left;
          width: 30px;
          height: 40px;
          text-align: center;
          span{
            display: inline-block;
            line-height: 40px;
            width: 25px;
            height: 30px;
            img{
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
  }
  .out {
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 18px;
    background: red;
    // position: fixed;
    color: #fff;
    bottom: 40px;
  }
}
</style>