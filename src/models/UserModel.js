export const defaultState = {
	user: {},
	users: [],
	token: ''
};

export default {
	namespaced: true,

	state: defaultState,

	getters: {
		user: state => state.user,
		users: state => state.users,
		token: state => state.token
	},

	actions: {
		reset({ commit }) {
			commit('reset');
		},
		saveUser({ commit }, value) {
			commit('setUser', value)
		},
		saveUsers({ commit }, value) {
			commit('setUsers', value)
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
		setUsers(state, value) {
			state.users = value
		},
		setToken(state, value) {
			state.token = value
		}
	}
};
