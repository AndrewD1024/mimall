module.exports = {
    devServer: { // 配置开发服务器，vue-cli-service serve
        host: 'localhost',
        port: 8080,
        // devServer.proxy 如果你的前端应用和后端 API 服务器没有运行在同一个主机上，你需要在开发环境下将 API 请求代理到 API 服务器。
        proxy: {
            '/api': { // 将'/api'开头的请求代理到target地址
                target: 'http://mall-pre.springboot.cn',
                changeOrigin: true,
                pathRewrite: {
                    '/api': ''
                }
            }
        },

    }
}