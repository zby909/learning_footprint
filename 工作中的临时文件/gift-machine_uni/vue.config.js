module.exports = {
	// 配置路径别名
	configureWebpack: {
		devServer: {
			overlay: {
				warnings: true,
				errors: true,
			},
			open: false, // 是否打开浏览器
			host: '0.0.0.0',
			port: '8080',
			proxy: {
				'/admin/posMachine/ticket': {
					target: 'http://i.test.gzhaoku.com', // 要代理的域名
					changeOrigin: true, //允许跨域
				},
			},
			disableHostCheck: true
		}
	}
}
