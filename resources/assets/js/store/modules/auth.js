
// initial state
export const state = { 
    uid: null,
    utype: '',
    access: [0]
}

// getters
export const getters = {
    uid: state => state.uid,
    utype: state => state.utype
}

// actions
export const actions = {
    setUid: ({commit}) => commit('setUid', payload),
    setUtype: ({commit}) => commit('setUtype', payload)
}

// mutations
export const mutations = {
    setUid(state, payload) {
        state.uid = payload.uid
    },
    setUtype(state, payload) {
        state.utype = payload.utype
    }
}