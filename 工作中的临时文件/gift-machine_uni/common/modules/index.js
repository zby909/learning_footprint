// 自动引入api
const modulesFiles = require.context('./', true, /\.api\.js/);
const apiModules = modulesFiles.keys().reduce((modules, modulePath) => {
	const moduleName = modulePath.replace(/^\.\/([A-Za-z]+).*$/, '$1');
	const value = modulesFiles(modulePath);
	modules[moduleName] = value.default;
	return modules;
}, {});

console.log(apiModules);
const install = (Vue, vm) => {
	// let testGet = (params = {}) => {
	// 	return vm.http1.get('/users/555?query=1', params);
	// };
	// Vue.prototype.API = { testGet };
	Vue.prototype.$API = apiModules;
};

export default {
	install,
};
