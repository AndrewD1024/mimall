<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
  mounted() {},
};
</script>

<style>
/* 导入scss文件 */
@import "./assets/scss/reset.scss";
/* @import "./assets/scss/config.scss"; */

@import "./assets/scss/button.scss";
</style>
