import { app } from '../../main.js';
const api = {};

api.testPost = (params = {}) => {
	return app.$ResetRequest_1().post('/users/666?query=1', params);
};

api.testGet = (params = {}, vm) => {
	return app.$ResetRequest_2().get('/org2', params);
};

export default api;
