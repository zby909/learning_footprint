<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view>
			<text class="title"> vuex - {{ username }} </text>
		</view>
		<view>
			<TestCmp></TestCmp>
		</view>
		<view class="text-area">
			<u-button @click="sumbitByPost" type="primary" size="medium" shape="square" :ripple="true">快速http请求</u-button>
			<u-button @click="sumbitByPost2" type="primary" size="medium" shape="square" :ripple="true">延迟响应的http请求</u-button>
		</view>
		<view class="link-demo">
			<u-link :color="$u.color['primary']" :under-line="true" href="http://www.uviewui.com">Link超链接组件演示</u-link>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
			};
		},
		computed: {
			username() {
				return this.$store.state.test.VX_TEST_VALUE;
			},
		},
		onLoad() {
			setTimeout(() => {
				this.$store.commit('test/SET_VX_TEST_VALUE', ' add')
			}, 2000);
			setTimeout(() => {
				this.$store.dispatch('test/syncSetTestValue');
			}, 4000);
		},
		methods: {
			async sumbitByPost() {
				console.log(this);
				let res = await this.$API.test.testPost({ body: '1号node服务器'});
				console.log("%c 1号node服务器响应", "color:orange")
				this.$u.toast(res.a)
			},
			async sumbitByPost2() {
				let res = await this.$API.test.testGet({ body: '2号node服务器'});
				console.log("%c 2号node服务器响应", "color:red")
				this.$u.toast(res.a)
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

	.link-demo {
		margin-top: 80rpx;
	}
</style>
