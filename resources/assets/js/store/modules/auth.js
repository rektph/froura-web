
// initial state
export const state = { 
    uid: null,
    utype: ''
}

// getters
export const getters = {
    uid: state => state.uid,
    utype: state => state.utype
}

// actions
export const actions = {
    setUser: ({commit}) => commit('setUser', payload)
}

// mutations
export const mutations = {
    setUser(state, payload) {
        state.uid = payload.uid
        state.utype = payload.utype
    }
}