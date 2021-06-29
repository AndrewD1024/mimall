// 首页导航栏组件: 包含顶部和导航

<template>
  <div class="header">
    <!-- 顶部 -->
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MIUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <!-- 添加v-if属性使得登陆后才显示控件 -->
          <a href="javascript:;" v-if="username">{{ username }}</a>
          <a href="javascript:;" @click="login()">登录</a>
          <a href="javascript:;" v-if="username">我的订单</a>
          <a href="javascript:;" class="my-cart" @click="gotoCart()"
            ><span class="icon-cart"></span>购物车</a
          >
        </div>
      </div>
    </div>
    <!-- 导航 -->
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li
                  class="product"
                  v-for="(item, index) in phoneList"
                  :key="index"
                >
                  <a v-bind:href="'/#/product/' + item.id" target="_blank">
                    <div class="pro-img">
                      <img :src="item.mainImage" alt="item.subtitle" />
                    </div>
                    <div class="pro-name">{{ item.name }}</div>
                    <div class="pro-price">{{ item.price | currency }}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>Redmi红米</span>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children">
              <ul>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-1.jpg" alt="" />
                    </div>
                    <div class="pro-name">小米壁画电视</div>
                    <div class="pro-price">6999</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-2.jpg" alt="" />
                    </div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">1799</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">1799</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">1799</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">1799</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">1799</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword" />
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import func from "vue-editor-bridge";
export default {
  name: "nav-header", // 组件名称
  data() {
    return {
      username: "jack",
      phoneList: [],
    };
  },
  filters: {
    // 定义过滤器处理价格; 过滤器一般用于金额格式化，日期格式化
    currency(val) {
      if (!val) return "0.00";
      return "￥" + val.toFixed(2) + "元";
    },
  },
  mounted() {
    this.getPoductList();
  },
  methods: {
    login() {
      this.$router.push("/login");
    },
    getPoductList() {
      this.axios
        .get("/products", {
          params: {
            categoryId: "100012",
            // pageSize: 6
          },
        })
        .then((res) => {
          // Math.max(res.list, 6)
          if (res.list.length > 6) {
            this.phoneList = res.list.slice(0, 6); //截取返回数据前6条
          }
        });
    },
    goToCart() {
      this.$router.push("/cart");
    },
  },
};
</script>

<style lang="scss">
@import "./../assets/scss/base.scss";
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/config.scss";
.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: #333333;
    color: #b0b0b0;
    .container {
      // display: flex;
      // justify-content: space-between;
      // align-items: center;
      @include flex(

      ); // 使用mixin将flex布局抽取（/src/assets/scss/mixin.scss），此处引用即可
      a {
        display: inline-block;
        color: #b0b0b0;
        margin-right: 17px;
      }
      .my-cart {
        width: 110px;
        background-color: #ff6600;
        text-align: center;
        color: #fff;
        margin-right: 0;
        .icon-cart {
          // display: inline-block;
          // width: 16px;
          // height: 12px;
          // background: url("/imgs/icon-cart-checked.png") no-repeat center;
          // background-size: contain; // 这里必须要加！！！否则图片变成裁切了
          @include bgImg(
            16px,
            12px,
            "/imgs/icon-cart-checked.png"
          ); // 使用mixin将背景图片样式bgImg抽取（/src/assets/scss/mixin.scss），此处引用即可
          margin-right: 4px;
        }
      }
    }
  }

  .nav-header {
    .container {
      position: relative;
      height: 112px;

      // display: flex;
      // justify-content: space-between;
      // align-items: center;
      @include flex(); // 使用mixin将flex布局抽取，此处引用即可

      .header-logo {
        display: inline-block;
        width: 55px;
        height: 55px;
        background-color: #ff6600;

        a {
          display: inline-block;
          width: 110px;
          height: 55px;
          &:before {
            // 伪类设置两张图片
            content: " "; // content必须要加，用来占位

            // display: inline-block;
            // width: 55px;
            // height: 55px;
            // background: url("/imgs/mi-logo.png") no-repeat center;
            // background-size: 55px;
            @include bgImg(55px, 55px, "/imgs/mi-logo.png", 55px);
            transition: margin 0.2s; // 鼠标移出logo切换延迟0.2s
          }
          &:after {
            // 伪类设置两张图片
            content: " ";

            // display: inline-block;
            // width: 55px;
            // height: 55px;
            // background: url("/imgs/mi-home.png") no-repeat center;
            // background-size: 55px;
            @include bgImg(55px, 55px, "/imgs/mi-home.png", 55px);
          }
          &:hover:before {
            margin-left: -55px;
            transition: margin 0.2s; // 鼠标移上logo切换延迟0.2s
          }
        }
      }
      .header-menu {
        display: inline-block;
        width: 643px;
        padding-left: 209px;
        .item-menu {
          display: inline-block;
          color: #333333;
          font-weight: bold;
          font-size: 16px;
          line-height: 112px;
          margin-right: 20px;
          span {
            cursor: pointer;
          }
          &:hover {
            color: $colorA;
            .children {
              height: 220px;
              opacity: 1; // 鼠标移到“小米手机",则商品列表透明度为1，显示
            }
          }
          .children {
            position: absolute;
            top: 112px;
            left: 0;
            height: 0;
            opacity: 0; // 透明度设置为0使得默认不显示
            overflow: hidden;
            width: 1226px; // 这里注意！！！开始设成了110px结果li全部黏到一起！！
            border-top: 1px solid #e5e5e5;
            box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
            z-index: 10;
            transition: height 0.5s; // 动画 高度逐渐出现
            background-color: #fff;

            .product {
              position: relative; // 子绝父相，为了分割线
              float: left;
              width: 16.6%;
              height: 220px;
              font-size: 12px;
              line-height: 12px;
              text-align: center;
              a {
                display: inline-block;
              }

              img {
                width: auto;
                height: 111px;
                margin-top: 26px;
              }
              .pro-img {
                height: 137px;
              }
              .pro-name {
                font-weight: bold;
                margin-top: 19px;
                margin-bottom: 8px;
                color: $colorB;
              }
              .pro-price {
                color: $colorA;
              }
              &:before {
                // 伪类设置商品间的分割线
                content: "";
                position: absolute;
                top: 28px;
                right: 0;
                border-left: 1px solid $colorF;
                height: 100px;
                width: 1px;
              }
              &:last-child:before {
                // 最后一条分割线不显示
                display: none;
              }
            }
          }
        }
      }
      .header-search {
        width: 319px;
        .wrapper {
          height: 50px;
          border: 1px solid #e0e0e0;
          display: flex;
          align-items: center;
          input {
            border: none;
            box-sizing: border-box;
            border-right: 1px solid #e0e0e0;
            width: 264px;
            height: 50px;
            padding-left: 14px;
          }
          a {
            // display: inline-block;
            // width: 18px;
            // height: 18px;
            // background: url("/imgs/icon-search.png") center;
            // background-size: contain; // 这里必须要加！！！否则图片变成裁切了
            @include bgImg(18px, 18px, "/imgs/icon-search.png");

            margin-left: 17px;
          }
        }
      }
    }
  }
}
</style>