<template>
  <div class="Loading">
    <div class="bounce1"></div>
    <div class="bounce2"></div>
    <div class="bounce3"></div>
  </div>
</template>
<script>
export default {
  name: "Loading"
};
</script>
<style lang="less">
@keyframes bouncedelay {
  0%,
  80%,
  100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
.Loading {
  position: relative;
  bottom: 0;
  margin: 0 auto 0;
  width: 150px;
  text-align: center;
  & > div {
    width: 20px;
    height: 20px;
    background-color: #bb9a9a;
    border-radius: 100%;
    display: inline-block;
    animation: bouncedelay 1.4s infinite ease-in-out;
    animation-fill-mode: both;
  }
  .bounce1 {
    animation-delay: -0.32s;
  }
  .bounce2 {
    animation-delay: -0.16s;
  }
}
</style>