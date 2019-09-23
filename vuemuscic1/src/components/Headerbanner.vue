<template>
  <div class="headerbanner">
      <swiper :options="swiperOption" v-if="banner.length>0">
        <swiper-slide class="swiper-slide"  v-for="(item,index) in banner" :key="index">
          <img :src="item" alt />
        </swiper-slide>
        <div
          class="swiper-pagination" v-if="swiperOption.pagination" slot="pagination"  
        ></div> 
      </swiper>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Headerbanner",
  data() {
    return {
      banner: [],
      swiperOption: {
         loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true, //允许分页点击跳转
          type: "bullets"
        },
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },
        speed: 800,
        initialSlide: 0,
        mousewheel: true,
        grabCursor: true
      }
    };
  },
  
  mounted() {
    axios
      .get(
        "http://api.kele8.cn/agent/http://m.music.migu.cn/migu/remoting/cms_list_tag?pageSize=10&nid=23831003&pageNo=0&type=2006"
      )
      .then(res => {
        for (let i = 0; i < res.data.result.results.length; i++) {
          this.banner.push(res.data.result.results[i].linkData.linkPicUrl);
        }
        // this.banner=res.data.result.results
        // console.log(this.banner);
      });
  }
};
</script>

<style lang="scss" scoped>
  .swiper-slide {
    width: 100%;
    height: 180px;
    line-height: 180px;
    font-size: 50px;
    text-align: center;
    img {
      width: 100%;
      height: 100%;
    }
  }
</style>

