const api = {};

api.testPost = (params = {}, vm) => {
	return vm.http1().post('/users/666?query=1', params);
};

api.testGet = (params = {}, vm) => {
	return vm.http2().get('/org2', params);
};

export default api;
