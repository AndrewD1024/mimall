<template>
  <div class="index">
    <div class="container">
      <!-- 轮播图 -->
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children">
                <!-- 使用v-for必须使用index接收索引，然后使用v-bind绑定key属性，否则会报错：error  Elements in iteration expect to have 'v-bind:key' directives  vue/require-v-for-key-->
                <ul v-for="(item, i) in menuList" v-bind:key="i">
                  <li v-for="(sub, j) in item" v-bind:key="j">
                    <!-- 这里使用三目运算符是为了将其他没有给定来源的图片全部设置为item-box-1.png -->
                    <a v-bind:href="sub ? '/#/product/' + sub.id : ''">
                      <img
                        v-bind:src="sub ? sub.img : '/imgs/item-box-1.png'"
                        alt=""
                      />
                      {{ sub ? sub.name : "小米9" }}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电视 盒子</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">笔记本 平板</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">家电 插线板</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">出行 穿戴</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">智能 路由器</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电源 配件</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">生活 箱包</a>
            </li>
          </ul>
        </div>
        <swiper ref="mySwiper" :options="swiperOptions">
          <swiper-slide v-for="(item, index) in slideList" :key="index">
            <a :href="'/#/product/' + item.id">
              <img :src="item.img" />
            </a>
          </swiper-slide>
          <!-- 分页器:轮播图底部小圆按钮 -->
          <div class="swiper-pagination" slot="pagination"></div>
          <!-- 上一页\下一页按钮 -->
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <!-- 广告位 -->
      <div class="ads-box">
        <a
          v-bind:href="'/#/product/' + item.id"
          v-for="(item, index) in adsList"
          v-bind:key="index"
        >
          <img v-bind:src="item.img" alt="" />
        </a>
      </div>
      <!-- 常驻广告 -->
      <div class="banner">
        <a href="/#/product/30">
          <img src="imgs/banner-1.png" alt="" />
        </a>
      </div>
    </div>
    <!-- 产品 -->
    <div class="product-box">
      <div class="container">
        <h2>手机</h2>
        <div class="wrapper">
          <div class="banner-left">
            <a href=""><img src="/imgs/mix-alpha.jpg" alt="" /></a>
          </div>
          <div class="list-box">
            <div class="list" v-for="(arr, i) in phoneList" v-bind:key="i">
              <div class="item" v-for="(item, j) in arr" v-bind:key="j">
                <!-- 设置偶数位商品为新品 -->
                <span v-bind:class="{ 'new-pro': j % 2 == 0 }">新品</span>
                <div class="item-img">
                  <img v-bind:src="item.mainImage" alt="" />
                </div>
                <div class="item-info">
                  <h3>{{ item.name }}</h3>
                  <p>{{ item.subtitle }}</p>
                  <p class="price">{{ item.price }}元</p>
                </div>
              </div>
            </div>
            <div class="list"></div>
          </div>
        </div>
      </div>
    </div>
    <service-bar></service-bar>
    <!-- 模态框 弹出消息 -->
    <modal
      title="提示"
      sureText="查看购物车"
      btnType="1"
      modalType="middle"
      v-bind:showModal="true"
    >
      <template v-slot:body>
        <p>商品添加成功！</p>
      </template>
    </modal>
  </div>
</template>

<script>
import ServiceBar from "./../components/ServiceBar";
import Modal from "./../components/Modal";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "index", // 组件名称
  components: {
    ServiceBar,
    swiper,
    swiperSlide,
    Modal,
  },
  data() {
    return {
      swiperOptions: {
        // 轮播图属性
        autoplay: true, // 自动播放
        loop: true, // 循环, 注意loop如果不设置为true那么在第一张图片时点击上一页按钮会失效
        effect: "cube", // 切换效果
        cubeEffect: {
          slideShadows: true,
          shadow: true,
          shadowOffset: 100,
          shadowScale: 0.6,
        },
        pagination: {
          // 分页器
          el: ".swiper-pagination",
          clickable: true, // 可点击
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },

      // 轮播图列表
      slideList: [
        {
          id: "42",
          img: "/imgs/slider/slide-1.jpg",
        },
        {
          id: "45",
          img: "/imgs/slider/slide-2.jpg",
        },
        {
          id: "46",
          img: "/imgs/slider/slide-3.jpg",
        },
        {
          id: "",
          img: "/imgs/slider/slide-4.jpg",
        },
        {
          id: "",
          img: "/imgs/slider/slide-1.jpg",
        },
      ],

      // 左侧商品菜单，右边商品列表
      menuList: [
        // 6行4列
        [
          {
            id: 30,
            img: "/imgs/item-box-1.png",
            name: "小米CC9",
          },
          {
            id: 31,
            img: "/imgs/item-box-2.png",
            name: "小米8青春版",
          },
          {
            id: 32,
            img: "/imgs/item-box-3.jpg",
            name: "Redmi K20 pro",
          },
          {
            id: 33,
            img: "/imgs/item-box-4.jpg",
            name: "移动4G专区",
          },
        ],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ],

      // 中间广告位ads-box广告列表
      adsList: [
        {
          id: "33",
          img: "imgs/ads/ads-1.png",
        },
        {
          id: "48",
          img: "imgs/ads/ads-2.jpg",
        },
        {
          id: "45",
          img: "imgs/ads/ads-3.png",
        },
        {
          id: "47",
          img: "imgs/ads/ads-4.jpg",
        },
      ],

      // 底部商品列表
      phoneList: [],
    };
  },
  mounted() {
    this.init(); // 加载商品列表
  },
  methods: {
    init() {
      this.axios
        .get("/products", {
          params: {
            categoryId: 100012,
            pageSize: 14,
          },
        })
        .then((res) => {
          res.list = res.list.slice(6, 14); // 取14条数据，前6条作为导航栏“小米手机Redmi红米 电视”里的六条数据，后八条在此处用，否则图片有拉长
          this.phoneList = [res.list.slice(0, 4), res.list.slice(4, 8)];
        });
    },
  },
};
</script>

<style  lang="scss">
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/config.scss";
// .index是组件名
.index {
  .swiper-box {
    .nav-menu {
      position: absolute;
      width: 264px;
      height: 451px;
      z-index: 9; // 让左侧导航栏在轮播图上面显示
      padding: 26px 0;
      background-color: #55585a7a;
      // opacity: 0.7; // 注意此处不能使用opacity,因为它会使nav-menu内部包括背景和字体在内所有元素都半透明,必须使用backgroud-color
      box-sizing: border-box; //设置盒模型为IE盒模型(怪异盒模型)，此时盒子宽度包括了padding和border
      .menu-wrap {
        .menu-item {
          height: 50px;
          line-height: 50px;
          a {
            position: relative;
            display: block;
            font-size: 16px;
            color: #fff;
            padding-left: 30px;
            // 伪类设置箭头
            &:after {
              position: absolute;
              right: 30px;
              top: 17.5px;
              content: " "; // 伪类必须加content属性给它占位,否则伪类不生效
              @include bgImg(10px, 15px, "/imgs/icon-arrow.png");
            }
          }
          &:hover {
            background-color: $colorA;
            .children {
              display: block;
            }
          }

          .children {
            display: none; // 默认隐藏
            // width: 962px; // 如果设置了宽度则会导致.children区域完全空白，内部图片等无法渲染
            height: 451px;
            background-color: $colorG;
            position: absolute;
            top: 0;
            left: 264px;
            border: 1px solid $colorH;
            ul {
              display: flex;
              justify-content: space-between; // 两边对齐
              height: 75px;
              li {
                height: 75px;
                line-height: 75px;
                width: 241px;
                padding-left: 23px;
              }
              a {
                color: $colorB;
                font-size: 14px;
                img {
                  width: 42px;
                  height: 35px;
                  margin-right: 7px;
                  vertical-align: middle;
                }
              }
            }
          }
        }
      }
    }
    .swiper-container {
      // 定义swiper的大小，覆盖掉插件内部的值
      height: 451px;
      .swiper-button-prev {
        left: 274px;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .ads-box {
    @include flex(); // mixin.scss中定义过flex()布局，只需引入传参即可
    justify-content: space-between;
    margin-top: 14px;
    a {
      width: 296px;
      height: 167px;
    }
  }

  .banner {
    margin-top: 14px;
    margin-bottom: 50px;
  }

  .product-box {
    background-color: $colorJ;
    padding: 30px 0 50px;
    h2 {
      font-size: $fontF;
      height: 21px;
      line-height: 21px;
      color: $colorB;
      margin-bottom: 20px;
    }
    .wrapper {
      display: flex;
      .banner-left {
        margin-right: 16px;
        img {
          width: 224px;
          height: 619px;
        }
      }
      .list-box {
        .list {
          // list是手机列表的一行
          @include flex();
          width: 986px;
          margin-bottom: 14px;
          &:last-child {
            // 设置最后一行底部无margin
            margin-bottom: 0;
          }
          .item {
            width: 236px;
            height: 302px;
            background-color: $colorG;
            text-align: center;
            span {
              display: inline-block;
              width: 67px;
              height: 24px;
              font-size: 14px;
              line-height: 24px;
              color: $colorG;
              &.new-pro {
                // 新品背景色
                background-color: #7ecf68;
              }
              &.kill-pro {
                // 秒杀背景色
                background-color: #e82626;
              }
            }
            .item-img {
              img {
                width: 100%;
                height: 195px;
              }
            }
            .item-info {
              h3 {
                font-size: $fontJ;
                color: $colorB;
                line-height: $fontJ;
                font-weight: bold;
              }
              p {
                color: $colorD;
                line-height: 13px;
                margin: 6px auto 13px;
              }
              .price {
                color: #f20a0a;
                font-size: $fontJ;
                font-weight: bold;
                cursor: pointer;
                // 购物车图标
                &:after {
                  @include bgImg(22px, 22px, "/imgs/icon-cart-hover.png");
                  content: " "; // 伪类设置content为空占位
                  margin-left: 5px;
                  vertical-align: middle;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>