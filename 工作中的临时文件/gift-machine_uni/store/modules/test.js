// import api from '@/api/modules/container.api';
// import {
// 	cloneDeep
// } from 'lodash-es';

const state = {
	VX_TEST_VALUE: "start test vuex"
};

const mutations = {
	SET_VX_TEST_VALUE(state, prop_value) {
		state.VX_TEST_VALUE += prop_value;
	},
	SET_VX_TEST_VALUE2(state, new_value) {
		state.VX_TEST_VALUE = new_value;
	},
};

const actions = {
	syncSetTestValue({ commit }) {
		new Promise((resolve, reject) => {
			setTimeout(() => {
				commit('SET_VX_TEST_VALUE2', 'uniapp has vuex');
				resolve();
			}, 2000);
		});
	}
};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
};
