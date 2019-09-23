<template>
<div>
  <div class="player-content" v-if="NewsongDetail">
    <div class="singerpic" @click="showcovers">
      <img :src="NewsongDetail.pic" alt="歌手头像"/>
    </div>
    <div class="songcontent">
      <div class="song-name">{{NewsongDetail.songName}}</div>
      <div class="singer-name">{{NewsongDetail.singerName}}</div>
    </div>
    <div class="player">
      <audio :src="Newsonglist" autoplay="autoplay" controls="controls" ref="myaudio"></audio>
      <div class="playmusic" @click="playmusic" v-show="playshow">
        <img src="../assets/playstop.png" alt="播放" />
      </div>
      <div class="stopmusic" @click="stopmusic" v-show="!playshow">
        <img src="../assets/playmove.png" alt="暂停" />
      </div>
      <div class="prev" @click="prevsong">
        <img src="../assets/playleft.png" alt="上一首" />
      </div>
      <div class="next" @click="nextsong">
        <img src="../assets/playright.png" alt="下一首" />
      </div>
    </div>

    <transition name="cover">
      <div class="cover" v-show="showcover">
        <div class="close-cover">
          <span @click="showcoverc">
            <img src="../assets/vvv.png" alt />
          </span>
        </div>

        <div class="bg-singer">
          <img class="mohu" :src="NewsongDetail.pic" alt="歌手背景" />
          <div class="bg-singer-cover"></div>
        </div>

        <div class="turntable">
          <img
            class="turntablep"
            :class="ismove?'play':'stop'"
            :src="NewsongDetail.pic"
            @click="Lyric"
            alt="唱盘"
          />
        </div>

        <BetterScroll ref="lyricList" class="lyric" :data='currentLyric&&currentLyric.line'>
          <ul>
             <li ref='lyricLine' v-for="(item, index) in currentLyric" :key="index"
             :class="{'current':currentLineNum===index}">{{item.txt}}</li>
          </ul>
        </BetterScroll>

        <div class="conbtn">
          <div class="conbtn-play">
             <span class="btn-prev" @click="prevsong">
              <img src="../assets/playleft.png" alt="上一首" />
            </span>
            <span class="btn-playmusic" @click="playmusic" v-show="playshow">
              <img src="../assets/playstop.png" alt="暂停" />
            </span>
           
            <span class="btn-stopmusic" @click="stopmusic" v-show="!playshow">
              <img src="../assets/playmove.png" alt="播放" />
            </span>
            <span class="btn-next" @click="nextsong">
              <img src="../assets/playright.png" alt="下一首" />
            </span>
          </div>
        </div>
      </div>
    </transition>
  </div>
 </div> 
</template>

<script>
import {Base64} from 'js-base64'
import Lyric from 'lyric-parser'
import BScroll from 'better-scroll'
import BetterScroll from '@/components/BetterScroll.vue'
export default {
  name: "player",
  computed: {
    Newsonglist: function() {
      return this.$store.state.newsonglist;
    },
    NewsongDetail: function() {
      return this.$store.state.newsongdetail;
    },
    NewSongPlayList: function() {
      return this.$store.state.newsongplaylist;
    },
    NewLyric:function(){
      return new Lyric(Base64.decode(this.lyric)).lines
    }
  },
  data() {
    return {
      playshow: false,
      showcover: false,
      isActive: true,
      ismove:true,
      currentLineNum:0,
      currentLyric:null,
      lyric:'W3RpOuiKkuenjV0KW2FyOumfs+mYmeivl+WQrC/otbXmlrnlqaddClthbDroipLnp41dCltieTpdCltvZmZzZXQ6MF0KWzAwOjAwLjAwXeiKkuenjSAtIOmfs+mYmeivl+WQrC/otbXmlrnlqacKWzAwOjAwLjA5Xeivje+8muWBh+WvkApbMDA6MDAuMTNd5puy77ya5q6H5bCP6LCoClswMDowMC4xN13nvJbmm7LvvJpNb3JyaTNvbijllqzlh6HkuIkpClswMDowMC4yNl3mt7fpn7PvvJrmroflsI/osKgKWzAwOjAwLjMyXeavjeW4puWkhOeQhu+8muauh+Wwj+iwqApbMDA6MDAuMzld5ZKM5aOw77ya55qO5pyIClswMDowMC40M13lkozlo7DnvJblhpnvvJrnmo7mnIgKWzAwOjAwLjUwXeaWh+ahiO+8muWBj+eUn+aik+W9kgpbMDA6MDAuNTZd5Y+k562d77ya57Sr5qC8ClswMDowMC42MF3lj6TnrZ3nvJblhpnvvJrntKvmoLwvTW9ycmkzb24o5Zas5Yeh5LiJKQpbMDA6MDAuNzRd5bCP5o+Q55C077ya5aSn55C0S29UbwpbMDA6MDAuODBd5bCP5o+Q55C057yW5YaZ77ya5aSn55C0S29UbwpbMDA6MDAuODhd5Yi25L2c5Lq677ya5q6H5bCP6LCoClswMDowMC45NV3lvZXpn7PlrqTvvJpIaSBNdXNpYyBTdHVkaW8KWzAwOjAxLjAxXea3t+mfs+WupO+8mkhpIE11c2ljIFN0dWRpbwpbMDA6MDEuMDdd55uR5Yi277ya5p2O5L+K5769ClswMDowMS4xMl3lh7rlk4HvvJrpn7PpmJnor5flkKwKWzAwOjAxLjE5XeS4gOaDs+WIsOS9oOaIkeWwsQpbMDA6MDMuMTZdV3UKWzAwOjA0Ljc3XeepuuaBqOWIq+aipuS5hQpbMDA6MDcuNDldV3UKWzAwOjA5LjYyXeeDp+WOu+e6uOeBsOWfi+eDn+afswpbMDA6MzMuNDld5LqO6bKc5rS755qE5p6d5LirClswMDozNi4wM13lh4vpm7bkuIvnmoTml6DmmocKWzAwOjM4LjQzXeaYr+aUtuiOt+iwnOW6leeahOS7o+S7twpbMDA6NDIuNDNd5L2Z5pmW5rK+5LiKIOi/nOihjOS6uueahOWPkQpbMDA6NDUuNjhd5LuW5rSS5LiL5omL5Lit54m15oyCClswMDo0OS43Nl3kuo7moaXkuIsKWzAwOjUxLjU2XeWJjeS4lui/n+adpeiAhQpbMDA6NTMuMzZd5pOm6IKp6ICM6L+HClswMDo1NC41OF3mjozlv4PliLsKWzAwOjU1Ljk1XeadpeeUn+iusOW+lwpbMDA6NTcuMDJd5L2g55y85Lit54Of5rOi5ru06JC95LiA5ru05aKoIHdvClswMTowMS44NV3oi6XkvZvor7QKWzAxOjAyLjY3XeaXoOeJteaXoOaMggpbMDE6MDMuOTVd5pS+5LiL5omn552AClswMTowNS43NF3ml6Dnm7jml6DoibIKWzAxOjA2LjczXeaIkeaAjuiDvSDms6LmvpzkuI3mg4og5Y676ZmE5ZKMClswMToxMC44M13kuIDmg7PliLDkvaDmiJHlsLEKWzAxOjEyLjQ5XVd1ClswMToxNC4yNV3mgajmg4XkuI3lr78g5oC75LqO6Ium5rW35ZuaClswMToxNi44MF1XdQpbMDE6MTkuMjJd5paw57+g5b6S55WZIOiQveiKseW9seS4rea4uApbMDE6MjEuNTFdV3UKWzAxOjI0LjExXeebuOaAneaXoOeUqCDmiY3nrJHlsbHnm5/ml6cKWzAxOjI2LjU4XVd1ClswMToyOS45NV3osJPmiJHkvZXmsYIKWzAxOjQzLjMxXeenjeS4gOS4h+acteiOsuiKsQpbMDE6NDUuNjVd5Zyo5LyX55Sf5Lit5Y+R6Iq9ClswMTo0OC4wMF3nrYnnuqLlsJjkuIDkuIfnp43op6PnrZQKWzAxOjUxLjk0XeW/teePoOiQvei/myDml7bpl7TnmoTms6XmspkKWzAxOjU1LjIxXeW+hSDlibLoiI3or6Dph4rmhYjmgrIKWzAxOjU5LjE1XeeahOivu+azlQpbMDI6MDEuMzFd5YmN5LiW6L+f5p2l6ICFClswMjowMy4wOF3mk6bogqnogIzov4cKWzAyOjA0LjM1XeaOjOW/g+WIuwpbMDI6MDUuNDJd5p2l55Sf6K6w5b6XClswMjowNi44Nl3kvaDnnLzkuK3ng5/ms6Lmu7TokL3kuIDmu7Tloqggd28KWzAyOjExLjQ5XeiLpeS9m+ivtApbMDI6MTIuNDFd5peg54m15peg5oyCClswMjoxMy40Ml3mlL7kuIvmiafnnYAKWzAyOjE0Ljk1XeaXoOebuOaXoOiJsgpbMDI6MTYuMTBd5oiR5oCO6IO9IOazoua+nOS4jeaDiiDljrvpmYTlkowKWzAyOjIyLjc2XeS4gOaDs+WIsOS9oOaIkeWwsQpbMDI6MjQuNDhdV3UKWzAyOjI2LjYxXeaBqOaDheS4jeWvvyDmgLvkuo7oi6bmtbflm5oKWzAyOjI5LjE2XVd1ClswMjozMS40M13mlrDnv6DlvpLnlZkg6JC96Iqx5b2x5Lit5ri4ClswMjozMy45MV1XdQpbMDI6MzYuMTBd55u45oCd5peg55SoIOaJjeeskeWxseebn+aXpwpbMDI6MzguNTBdV3UKWzAyOjQxLjg5Xeiwk+aIkeS9leaxggpbMDI6NDQuODNdClswMjo1MS42N13osJPmiJHkvZXmsYI='
    };
  },
  components:{
    BetterScroll,
    BScroll
  },
  methods: {
    playmusic() {
      this.$refs.myaudio.play();
      this.Lyric()
      this.playshow = false;
      this.ismove=true
    },
    stopmusic() {
      this.$refs.myaudio.pause();
      this.playshow = true;
      this.ismove=false
    },
    showcovers() {
      this.showcover = true;
    },
    showcoverc() {
      this.showcover = false;
    },
    Lyric(){
      const lyric=Base64.decode(this.lyric)
      this.currentLyric=new Lyric(lyric,this.handle).lines
      // console.log(this.currentLyric)
      // if(this.playshow){
      //   console.log('this.playshow',this.playshow)
      //  this.currentLyric.play()
      // }
    },
    handle(lineNum){
      this.currentLineNum=lineNum
      if(lineNum>0){
        let lineEl=this.$refs.lyricLine[lineNum-5]
        this.$refs.lyricList.scrollToElement(lineEl,1000)
      }
      else{
       this.$refs.lyricList.scrollToElement(0,0,2000)
      }

    },
    nextsong() {
      var newsongid = this.Newsonglist;
      var newsonglist = this.NewSongPlayList;
      var currentIndex;
      this.ismove=true
      newsonglist.forEach(function(element, index) {
        if (element.mp3 == newsongid) {
          currentIndex = index;
          console.log(currentIndex);
        }
      });

     
      if (currentIndex > newsonglist.length - 2) {
        currentIndex = -1;
      }
      if (currentIndex < newsonglist.length - 1) {
        this.$store.commit(
          "updataNewsongList",
          newsonglist[currentIndex + 1].mp3
        );
        this.$store.commit(
          "updataNewSongDetail",
          newsonglist[currentIndex + 1]
        );
        console.log(newsonglist[currentIndex + 1]);
      }
    },

    prevsong() {
      var newsongid = this.Newsonglist;
      var newsonglist = this.NewSongPlayList;
      var currentIndex;
      this.ismove=true
      newsonglist.forEach(function(element, index) {
        if (element.mp3 == newsongid) {
          currentIndex = index;
        }
      });
      if (currentIndex < 1) {
        currentIndex = newsonglist.length - 1;
        console.log(currentIndex);
        this.$store.commit(
          "updataNewsongList",
          newsonglist[currentIndex].mp3
        );
        this.$store.commit("updataNewSongDetail", newsonglist[currentIndex]);
      } else {
        this.$store.commit(
          "updataNewsongList",
          newsonglist[currentIndex - 1].mp3
        );
        this.$store.commit(
          "updataNewSongDetail",
          newsonglist[currentIndex - 1]
        );
      }
    }
  },
  watch: {
    Newsonglist(newvalue, oldvalue) {
      if (oldvalue != newvalue) {
        this.playshow = false;
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.player-content {
  position: fixed;
  display: flex;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 40px;
  background: rgba(0, 0, 0, 0.2);
  
  .cover {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 667px;
    z-index: 10;
    background: #fff;
    .lyric{
      position: absolute;
      top: 390px;
      left: 0;
      width: 100%;
      height: 130px;
      background: none;
       overflow: hidden;
      ul{
        padding: 0;
        margin: 0;
        width: 100%;
        // height: 100%;
       
        li{
          font-size: 14px;
          color: white;
          list-style: none;
          &.current{
            color: yellow;
          }
        }
      }
   }
    .close-cover {
      width: 100%;
      height: 30px;
      text-align: left;
      span {
        display: inline-block;
        width: 30px;
        height: 30px;
        text-align: center;
        padding-top: 5px;
        transform: rotateZ(90deg);
        img {
          width: 15px;
          height: 20px;
          background-size: cover;
        }
      }
    }
    .bg-singer {
      width: 100%;
      height: 100%;
      position: relative;
      overflow: hidden;
      .bg-singer-cover {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0,0,0.3);
      }
    }
    .mohu {
      filter: blur(20px);
      width: 100%;
      height: 85%;
    }
    @keyframes run {
      from {
        transform: rotateZ(0deg);
      }
      to {
        transform: rotateZ(360deg);
      }
    }
    .turntable {
      width: 300px;
      height: 300px;
      position: absolute;
      top: 70px;
      left: 50%;
      border-radius: 50%;
      border: 4px solid rgba(255, 255, 255, 0.3);
      transform: translateX(-50%);

      .turntablep {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        animation: run 10s infinite linear;
      }
      // .move {
      //   width: 100%;
      //   height: 100%;
      //   border-radius: 50%;
      //   animation: run 10s infinite linear;
      // }
      .play{
        animation: run 10s infinite linear;
      }
      .stop{
         animation-play-state: paused;
      }
    }
    .conbtn {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 80px;
      .conbtn-play {
        width: 100%;
        height: 100%;
        span {
          display: inline-block;
          width: 50px;
          height: 50px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        // .btn-playmusic {
         
        //   bottom: 120px;
        //   left: 165px;
        // }
        // .btn-stopmusic {
         
        //   bottom: 120px;
        //   left: 165px;
        // }
        // .btn-prev {
          
        //   bottom: 120px;
        //   left: 100px;
        // }
        // .btn-next {
         
        //   bottom: 120px;
        //   left: 230px;
        // }
      }
    }
  }
  .singerpic {
    flex: 0 0 70px;
    width: 40px;
    height: 40px;
    img {
      width: 40px;
      height: 100%;
      border-radius: 50%;
    }
  }
  .songcontent {
    flex: 0 0 170px;
    width: 170px;
    height: 40px;
    .song-name {
      text-align: left;
      font-size: 16px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .singer-name {
      text-align: left;
      font-size: 14px;
      color: #999;
    }
  }
  .player {
    flex: 0 0 125px;
    width: 125px;
    height: 40px;
    position: relative;
    .playmusic {
      position: absolute;
      top: 0px;
      left: 50%;
      margin-left: -20px;
      width: 40px;
      height: 40px;
      overflow: hidden;
      border-radius: 50%;
      z-index: 10;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .stopmusic {
      position: absolute;
      top: 0px;
      left: 50%;
      margin-left: -20px;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .prev {
      position: absolute;
      top: 0px;
      left: 0;
      width: 40px;
      height: 40px;
      overflow: hidden;
      border-radius: 50%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .next {
      position: absolute;
      top: 0px;
      right: 0;
      width: 40px;
      height: 40px;
      overflow: hidden;
      border-radius: 50%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    audio {
      width: 1%;
      height: 1%;
    }
  }

  .cover-enter,
  .cover-leave-to {
    width: 100%;
    height: 0;
  }
  .cover-enter-active,
  .cover-leave-active {
    transition: all 0.3s;
  }
  .cover-enter-to,
  .cover-leave {
    width: 100%;
    height: 667px;
  }
}
</style>