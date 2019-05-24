<template>
  <div class="top">
    <a href="#Detail"><i class="fa fa-angle-up toUp"></i></a>
    <router-link to="/">
      <i class="fa fa-home"></i>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "top",
  methods: {
    touper(){

    }
  },
  mounted() {
  }
};
</script>
<style lang="less" scoped>
.top {
  position: fixed;
  z-index: 10;
  right: 0.53rem;
  bottom: 1.7rem;
  color: #fff;
  display: flex;
  width: 0.8rem;
  flex-wrap: wrap;
  opacity: 1;
  transition: all 0.6s;
  i {
    color: #fff;
    line-height: 0.8rem;
    margin-top: 0.1rem;
    border-radius: 50%;
    width: 0.8rem;
    height: 0.8rem;
    display: inline-block;
    background: rgba(0, 0, 0, 0.5);
    font-size: 0.6rem;
    cursor: pointer;
  }
}
</style>
