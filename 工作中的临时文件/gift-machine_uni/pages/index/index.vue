<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<navigator url="../webview/pos" hover-class="navigator-hover">
				<text class="title"> pos - 首页 </text>
			</navigator>
			<button @click="test">测试原生api</button>
		</view>
		<view class="button-demo">
			<u-button :ripple="true">按钮组件演示</u-button>
		</view>
		<view class="link-demo">
			<u-link :color="$u.color['primary']" :under-line="true" href="http://www.baidu.com">www.baidu.com</u-link>
		</view>
	</view>
</template>

<script>
	let giftlugin = uni.requireNativePlugin("GiftModulePlugin")
	export default {
		data() {
			return {
				title: 'Hello',
			};
		},
		onLoad() {},
		methods: {
			test() {
				this.$u.toast('1');
				// console.log(giftlugin.test());
				console.log(giftlugin.giftMachine({},(res)=>{
					console.log(res);
				}));
			},
		},
	};
</script>

<style lang="scss" scoped>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 40rpx;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 100rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 28rpx;
		color: $u-content-color;
	}

	.button-demo {
		margin-top: 80rpx;
	}

	.link-demo {
		margin-top: 80rpx;
	}
</style>
