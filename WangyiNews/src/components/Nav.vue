<template>
  <div id="Nav" class="nav">
    <ul>
      <router-link to="/Fun">
        <li>娱乐</li>
      </router-link>
      <router-link to="/Sport">
        <li>体育</li>
      </router-link>
      <router-link to="/Money">
        <li>财经</li>
      </router-link>
      <router-link to="/War">
        <li>军事</li>
      </router-link>
      <router-link to="/Tech">
        <li>科技</li>
      </router-link>
      <router-link to="/Phone">
        <li>手机</li>
      </router-link>
      <router-link to="/Digtal">
        <li>数码</li>
      </router-link>
      <router-link to="/Fashion">
        <li>时尚</li>
      </router-link>
      <router-link to="/Game">
        <li>游戏</li>
      </router-link>
      <router-link to="/Edu">
        <li>教育</li>
      </router-link>
      <router-link to="/Health">
        <li>健康</li>
      </router-link>
      <router-link to="/Travel">
        <li>旅游</li>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Nav",
  data: function() {
    return {
      url: "",
      page: 0
    };
  },
  methods: {
    jumpto(parmes1, parmes2) {
      this.$router.push({
        name: parmes1,
        query: { id: parmes2 }
      });
    }
  }
};
</script>
<style lang="less">
.nav {
  a {
    text-decoration: none;
    &:active{
      color: red;
    }
  }
  font-weight: normal;
  font-size: 1rem;
  background: #f5f7f9;
  ul {
    display: flex;
    overflow: hidden;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    a {
      width: 2em;
      display: inline-block;
      font-size: 0.32rem;
      height: 0.7rem;
      line-height: 0.7rem;
      text-align: center;
      margin: 0 0 0 0.59rem;
      white-space: nowrap;
    }
    li {
      display: inline-block;
      height: 0.7rem;
      line-height: 0.7rem;
      text-align: center;
      white-space: nowrap;
    }
  }
}
</style>