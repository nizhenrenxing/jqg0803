<template>
  <div class="rank">
    <SongRank v-for="(item, index) in songrankid" :key="index" :songrankid="songrankid[index]"></SongRank>
  </div>
</template>

<script>
import SongRank from "@/components/SongRank";
export default {
  name: "rank",
  components: {
    SongRank
  },
  data() {
    return {
      songrankid: [
        { id: 23603703, url:require("../assets/1.jpg"),bgurl:require("../assets/11.jpg")},
        { id: 23603721, url:require("../assets/2.jpg"),bgurl:require("../assets/12.jpg")},
        { id: 23603926, url:require("../assets/3.jpg"),bgurl:require("../assets/13.jpg")},
        { id: 23603954, url:require("../assets/4.jpg"),bgurl:require("../assets/14.jpg")},
        { id: 23603974, url:require("../assets/5.jpg"),bgurl:require("../assets/15.jpg")},
        { id: 23603982, url:require("../assets/6.jpg"),bgurl:require("../assets/16.jpg")}
      ]
    };
  },
};
</script>

<style lang="scss" scoped>
    .rank{
        position: fixed;
        top: 40px;
        bottom: 40px;
        left: 0;
        right: 0;
        overflow: auto;
    }


</style>

