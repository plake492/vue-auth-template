export const auth = {
  namespaced: true,
  state: () => ({
    user: null,
    authenticated: false,
    loading: false
  }),

  mutations: {
    SET_USER (state, user) {
      state.user = user
    },
    SET_AUTHENTICATED (state, authenticated) {
      state.authenticated = authenticated
    },
    SET_LOADIN (state, loading) {
      state.loading = loading
    }
  },

  actions: {
    setUser ({ commit }, { user } /** Destructuring params */) {
      commit('SET_USER', user)
    },
    setAuthenticated ({ commit }, { authenticated }) {
      commit('SET_AUTHENTICATED', authenticated)
    },
    setLoading ({ commit }, { loading }) {
      commit('SET_LOADING', loading)
    },
    login ({ commit }, { user, authenticated }) {
      commit('SET_AUTHENTICATED', authenticated)
      commit('SET_USER', user)
      console.log('user==>>', user)
    },
    signup (_, { user }) {
      console.log('user==>>', user)
    },
    logut ({ commit }) {
      commit('SET_USER', null)
      commit('SET_AUTHENTICATED', false)
    }
  },
  getters: {}
}
