
// initial state
export const state = { 
    loading: false,
    snackbar: false,
<<<<<<< HEAD
    baseUrl: 'http://laravueprac.test/'
=======
    baseUrl: 'http://froura.test/'
    //baseUrl: process.env.NODE_ENV === 'production' ? 'http://froura.test/' : 'http://froura.x10host.com/'
>>>>>>> Saved some changes
}

// getters
export const getters = {
    loading: state => state.loading,
    snackbar: state => state.snackbar,
    baseUrl: state => state.baseUrl
}

// actions
export const actions = {
    loadpage: ({commit}) => commit('loadpage')
}

// mutations
export const mutations = {
    loadpage (state) {
        state.loading = !state.loading
    }
}