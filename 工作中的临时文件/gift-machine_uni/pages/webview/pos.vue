<template>
	<view>
		<web-view class="webview" src="http://192.168.1.22:9000/stu/%E5%B7%A5%E4%BD%9C%E4%B8%AD%E7%9A%84%E4%B8%B4%E6%97%B6%E6%96%87%E4%BB%B6/gift-machine_uni/utils/demoWebView.html" @message="handlePostMessage"></web-view>
		<!-- <web-view src="http://dstatic.test.gzhaoku.com/mall-pages/pos/index.html#/pages/pos/Index"></web-view> -->
	</view>
</template>

<script>
	let giftlugin = uni.requireNativePlugin("GiftModulePlugin")
	export default {
		data() {
			return {
				wv: null, //计划创建的webview
			}
		},
		onReady() {
			const currentWebview = this.$mp.page.$getAppWebview() //获取当前页面的webview对象
			this.wv = currentWebview.children()[0]
		},
		methods: {
			// webview向外部发送消息
			handlePostMessage(evt) {
				console.log("接收到消息：" + JSON.stringify(evt.detail.data));
				//接收到就去尝试调用
				if (evt.detail.data[0].hasOwnProperty('toPrint')) {
					this.test(evt.detail.data[0].toPrint)
				}
			},

			//原生插件的方法
			test(printData) {
				console.log(printData);
				giftlugin.giftMachine({}, (res) => {
					console.log(res);
					const scriptData = `event.emit('listenPrinted', '${JSON.stringify(res)}')`
					console.log(scriptData);
					this.wv.evalJS(scriptData);
				});
			},
		}
	}
</script>

<style scoped>
	.webview {
		height: 1200rpx;
		width: 750rpx;
	}
</style>
