export const defaultState = {
	user: {},
	token: ''
};

export default {
	namespaced: true,

	state: defaultState,

	getters: {
		user: state => state.user,
		token: state => state.token
	},

	actions: {
		reset({ commit }) {
			commit('reset');
		},
		saveUser({ commit }, value) {
			commit('setUser', value)
		},
		saveToken({ commit }, value) {
			commit('setToken', value)
		}
	},

	mutations: {
		reset(state) {
			Object.keys(defaultState).map((key) => {
				state[key] = defaultState[key]
			});
		},
		setUser(state, value) {
			state.user = value
		},
		setToken(state, value) {
			state.token = value
		}
	}
};
