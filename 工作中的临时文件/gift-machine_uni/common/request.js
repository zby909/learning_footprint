import myhttp1 from './http1';
import myhttp2 from './http2';
// 注册两个请求服务器的伪实例
//vm为一个Vue的实例，也即每个页面的"this"，所以我们能在这里获取vuex的变量等等
const install = (Vue, vm) => {
  Vue.prototype.http1 = myhttp1(vm);
  Vue.prototype.http2 = myhttp2(vm);
};
export default {
  install,
};

//ps:可以通过修改uview的request类源码 以暴露出request类以达到真实创建两个不同服务器的请求实例 但考虑该ui库的升级 还是不要修改的好
