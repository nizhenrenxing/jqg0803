<template>
  <div class="second">
    <h3>
      <i v-on:click="goback" class="fa fa-angle-left fa-3x back"></i>
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
  background: #de3e3e;
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
    top: .1rem;
    margin-left: 2%;
  }
}
</style>
