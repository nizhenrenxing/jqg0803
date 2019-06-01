<template>
  <div class="second">
    <h3>
      <i v-on:click="goback"><span></span></i>
      <slot></slot>
    </h3>
  </div>
</template>
<script>
export default {
  name: "Secondnav",
  methods: {
    goback() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="less">
.second {
  margin: 0;
  padding: 0;
  font-size: 0.32rem;
  font-weight: normal;
  background: #ee1a1a;
  position: relative;
  line-height: 0.8rem;
  color: #fff;
  h3 {
    width: 100%;
    margin: 0;
    padding: 0;
    font-size: 0.3rem;
    position: relative;
  }
  i {
    display: inline-block;
    font-size: 0.6rem;
    position: absolute;  
    left: 0;
    top: 0;
    margin-left: 4%;
    span{
      width: 19px;
      height: 19px;
      display: inline-block;
      background: url(../assets/1.png) no-repeat;
      background-size: contain;
    }
  }
}
</style>