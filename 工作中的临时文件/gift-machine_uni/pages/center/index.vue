<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view class="text-area">
      <!-- <text class="title"> uView - {{ username }} </text> -->
      <button type="default" @click="sumbitByPost">快速http请求</button>
      <button type="default" @click="sumbitByPost2">延迟响应的http请求</button>
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
      this.$store.commit('test/SET_VX_TEST_VALUE', 'zby');
    }, 2000);
    setTimeout(() => {
      this.$store.dispatch('test/syncSetTestValue');
    }, 4000);
  },
  methods: {
    sumbitByPost() {
			this.$u.toast('1');
      this.http1();
      this.$u
        .get('/users/555?query=1', {
          body: 'zby',
        })
        .then(res => {
          // res为服务端返回的数据
          // console.log(res);
        });
    },
    sumbitByPost2() {
      this.http2();
      this.$u.http.setConfig({
        baseUrl: 'http://localhost:8001',
      });
      this.$u
        .get('/org2', {
          body: '666',
        })
        .then(res => {
          // res为服务端返回的数据
          // console.log(res);
        });
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
