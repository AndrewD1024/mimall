// 首页底部导航栏组件

<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="imgs/logo-footer.png" alt="" />
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="http://www.mi.com" target="_blank">小米商城主页</a
      ><span>|</span> <a href="javascript:;">红米商城</a><span>|</span>
      <a href="javascript:;">米家家居</a><span>|</span>
      <a href="javascript:;">生态链</a>
    </div>
    <div class="copyright">
      Copyright ©2021 <span class="domain">mi.future.com</span> All Rights
      Reserved.
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-footer", // 组件名称
};
</script>

<style lang="scss" scoped>
// scoped表示只有当前组件会被当前样式渲染
.footer {
  height: 234px;
  border-top: 4px solid #ff6600;
  background-color: #333333;
  color: #999999;
  font-size: 16px;
  text-align: center;
  .footer-logo {
    margin-top: 46px;
    margin-bottom: 31px;
    img {
      width: 53px;
      height: 36px;
      margin-bottom: 13px;
    }
  }
  .footer-link {
    a {
      color: #999999;
      display: inline-block;
    }
    span {
      margin: 0 10px;
    }
    margin-bottom: 13px;
  }
  .copyright {
    .domain {
      color: #ff6600;
    }
  }
}
</style>