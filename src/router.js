// 未使用路由懒加载, 因此模块直接使用import 导入
// 如果使用路由懒加载,是这种形式 const Index = () => import('./pages/index')
// 
import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
import Login from './pages/login'
import Index from './pages/index'
import Product from './pages/product'
import Detail from './pages/detail'
import Cart from './pages/cart'
import Order from './pages/order'
import OrderConfirm from './pages/orderConfirm'
import OrderList from './pages/orderList'
import OrderPay from './pages/orderPay'
import AliPay from './pages/alipay'



// 1. 通过Vue.use(插件)安装插件
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/', // 根路由
            name: 'home',
            component: Home, // 设定不同路由对应的组件
            redirect: '/index', // 设置根路径重定向到/index，默认访问/index
            children: [ // 子路由
                {
                    path: '/index',
                    name: 'index',
                    component: Index
                }, {
                    path: '/product/:id',
                    name: 'product',
                    component: Product,
                }, {
                    path: '/detail/:id',
                    name: 'detail',
                    component: Detail
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/cart',
            name: 'cart',
            component: Cart
        },
        {
            path: '/order',
            name: 'order',
            component: Order,
            children: [ // 子路由
                {
                    path: 'list', // 路径不加'/'
                    name: 'order-list',
                    component: OrderList,
                },
                {
                    path: 'confirm',
                    name: 'order-confirm',
                    component: OrderConfirm,
                },
                {
                    path: 'pay',
                    name: 'order-pay',
                    component: OrderPay,
                },
                {
                    path: 'alipay',
                    name: 'alipay',
                    component: AliPay,
                }
            ]
        },
    ],
    // mode: 'history'
})