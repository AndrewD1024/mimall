// 底部服务栏组件

<template>
  <div class="service">
    <div class="container">
      <ul>
        <li><span class="icon-setting"></span>预约维修服务</li>
        <li><span class="icon-7day"></span>7天无理由退货</li>
        <li><span class="icon-15day"></span>15天免费换货</li>
        <li><span class="icon-post"></span>满150元包邮</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "service-bar", // 组件名称
};
</script>

<style lang="scss" >
@import "./../assets/scss/mixin.scss";
.service {
  padding: 33px 0;
  color: #666666;
  font-size: 16px;
  li {
    display: inline-block;
    width: 24.9%; // 四块，一块25%，但是有时浏览器会有问题，可能会被挤下来，因此定义少一点
    text-align: center;
    border-right: 1px solid #e5e5e5; // 设置小竖线
    span {
      display: inline-block;
      width: 20px;
      height: 20px;
      vertical-align: middle;
      margin-right: 8px;
    }
    .icon-setting {
      @include bgImg(20px, 20px, "/imgs/icon-setting.png");
    }
    .icon-7day {
      @include bgImg(20px, 20px, "/imgs/icon-7day.png");
    }
    .icon-15day {
      @include bgImg(20px, 20px, "/imgs/icon-15day.png");
    }
    .icon-post {
      @include bgImg(20px, 20px, "/imgs/icon-post.png");
    }
  }
}
</style>