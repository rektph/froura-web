
// initial state
export const state = { 
    loading: false,
    snackbar: false,
    mobile: '+639167983610',
    baseUrl: 'http://froura.test/'
    //baseUrl: process.env.NODE_ENV === 'production' ? 'http://froura.test/' : 'http://froura.x10host.com/'
}

// getters
export const getters = {
    loading: state => state.loading,
    snackbar: state => state.snackbar,
    baseUrl: state => state.baseUrl,
    mobile: state => state.mobile
}

// actions
export const actions = {
    loadpage: ({commit}) => commit('loadpage'),
    setMobile: ({commit}) => commit('setMobile', payload)
}

// mutations
export const mutations = {
    loadpage(state) {
        state.loading = !state.loading
    },
    setMobile(state, payload) {
        state.mobile = payload.mobile
    }
}