const myhttp1 = vm => {
	return () => {
		vm.$u.http.setConfig({
			baseUrl: 'http://localhost:8000',
			// 设置为json，返回后会对数据进行一次JSON.parse()
			dataType: 'json',
			showLoading: true, // 是否显示请求中的loading
			loadingText: '努力加载中~', // 请求loading中的文字提示
			loadingTime: 800, // 在此时间内，请求还没回来的话，就显示加载中动画，单位ms
			originalData: true, // 是否在拦截器中返回服务端的原始数据
			loadingMask: true, // 展示loading的时候，是否给一个透明的蒙层，防止触摸穿透
			// 配置请求头信息
			header: {
				'content-type': 'application/json;charset=UTF-8',
			},
		});

		// 请求拦截，配置Token等参数
		vm.$u.http.interceptor.request = config => {
			// vuex方法，那么需要使用$store.state获取
			config.header.token = vm.$store.state.test.VX_TEST_VALUE;

			// 如果token放在了globalData，通过getApp().globalData获取
			// config.header.token = getApp().globalData.username;

			// 如果token放在了Storage本地存储中，拦截是每次请求都执行的
			// const token = uni.getStorageSync('token');
			// config.header.token = token;
			// config.header.Token = 'wsnd';

			// 可以对某个url进行特别处理，此url参数为this.$u.get(url)中的url值
			if (config.url == '/user/login') config.header.noToken = true;
			// 最后需要将config进行return
			return config;
			// 如果return一个false值，则会取消本次请求
			// if(config.url == '/user/rest') return false; // 取消某次请求
		};

		// 响应拦截，判断状态码是否通过
		vm.$u.http.interceptor.response = res => {
			if (res.statusCode == 200) {
				// res为服务端返回值，可能有code，result等字段
				// 这里对res.result进行返回，将会在this.$u.post(url).then(res => {})的then回调中的res的到
				// 如果配置了originalData为true，请留意这里的返回值
				console.log(res);
				return res.data;
			} else if (res.statusCode == 201) {
				// 假设201为token失效，这里跳转登录
				vm.$u.toast('验证失败，请重新登录');
				setTimeout(() => {
					// 此为uView的方法，详见路由相关文档
					vm.$u.route('/pages/user/login');
				}, 1500);
				return false;
			} else {
				// 如果返回false，则会调用Promise的reject回调，
				// 并将进入this.$u.post(url).then().catch(res=>{})的catch回调中，res为服务端的返回值
				return false;
			}
		};

		return vm.$u.http;
	}
};

export default myhttp1;
