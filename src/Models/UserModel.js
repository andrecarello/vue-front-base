export const defaultState = {
    loggedIn: true,
    email: "andrelino.cl@gmail.com"
};

export default {

    namespaced: true,

    state: defaultState,

    getters: {
        loggedIn: state => state.loggedIn,
        email: state => state.email
    },

    actions: {
        reset({commit}) {
            commit('reset');
        },
        saveLoggedIn({commit}, value) {
            commit('setLoggedIn', value)
        },
        saveEmail({commit}, value) {
            commit('setEmail', value);
        }
    },

    mutations: {
        reset(state) {
            Object.keys(defaultState).map((key) => {
                state[key] = defaultState[key];
            });
        },
        setLoggedIn(state, value) {
            state.loggedIn = value;
        },
        setEmail(state, value) {
            state.email = value;
        }
    }
}