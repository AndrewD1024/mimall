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
    return {
      res: {},
    };
  },
  mounted() {
    // Mock模拟数据方式一：本地加载请求静态json文件的形式
    // this.axios.get("/mock/user/login.json").then((res) => {
    //   this.res = res;
    // });
    // Mock模拟数据方式三：本地继承mockjs实现数据mock
    this.axios.get("/user/login.json").then((res) => {
      this.res = res;
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
