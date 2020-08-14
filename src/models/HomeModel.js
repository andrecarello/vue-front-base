export const defaultState = {
	offers: []
};

export default {
	namespaced: true,

	state: defaultState,

	getters: {
		offers: (state) => state.offers
	},

	actions: {
		reset({ commit }) {
			commit('reset');
		},
		saveOffers({ commit }, value) {
			commit('setOffers', value);
		}
	},

	mutations: {
		reset(state) {
			Object.keys(defaultState).map((key) => {
				state[key] = defaultState[key];
			});
		},
		setOffers(state, value) {
			state.offers = value;
		}
	}
};
