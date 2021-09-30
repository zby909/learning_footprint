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
				'aaa/users': {
					target: 'http://192.168.1.22:8000', // 要代理的域名
					changeOrigin: true, //允许跨域
				},
			},
			disableHostCheck: true
		}
	}
}
