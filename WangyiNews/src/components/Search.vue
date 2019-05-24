<template>
  <div>
      <input type="text" v-model="searchKeyWord">
      <slot></slot>
      <ul v-if="searchMsg">
          <li v-for="(item, index) in suggestKeyWords" :key="index"></li>
      </ul>
  </div>
</template>
<script>
export default {
  name: "Search",
  data() {
    return {
      searchKeyWord: null,
      suggestKeyWords: null,
      searchMsg: null,
      searchPic:null
    };
  },
  watch: {
    searchKeyWord: function(newValue, oldValue) {
      // window.console.log(newValue, oldValue);
      axios
        .get("https://www.apiopen.top/novelSearchApi", {
          params: {
            name: this.searchKeyWord
          }
        })
        .then(res => {
          console.log(res.data);
          // this.suggestKeyWords = res.data.title;
          this.searchMsg = res.data.msg;
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
};
</script>