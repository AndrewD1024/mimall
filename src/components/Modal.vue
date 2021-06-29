// 这是模态框，弹出信息

<template>
  <div class="modal" v-show="showModal">
    <div class="mask"></div>
    <div class="modal-dialog">
      <div class="modal-header">
        <span>标题</span>
        <a href="javascript:;" class="icon-close"></a>
      </div>
      <div class="modal-body">
        <slot name="body"></slot>
      </div>
      <div class="modal-footer">
        <div class="btn-group">
          <a href="javascript:;" class="btn">确定</a>
          <a href="javascript:;" class="btn">取消</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "modal",
  props: {
    // 指定传过来的参数
    modalType: {
      // 弹框类型：小small，中middle，大large，表单form
      type: String,
      default: "form",
    },
    // 弹框标题
    title: String,
    // 按钮类型： 1.确定按钮， 2：取消按钮， 3：确定取消
    btnType: String,
    sureText: {
      type: String,
      default: "确定",
    },
    cancleText: {
      type: String,
      default: "取消",
    },
  },
};
</script>

<style lang="scss">
// 引入config.scss以使用公共颜色和字体大小
@import "./../assets/scss/config.scss";
// 引入mixin.scss以使用position()函数
@import "./../assets/scss/mixin.scss";
/* 引入modal组件的css文件 */
@import "./../assets/scss/modal.scss";
</style>