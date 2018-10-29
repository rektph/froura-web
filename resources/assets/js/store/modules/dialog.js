
// initial state
export const state = { 
    show: {
        "verifCode":false
    },
    verifCode: '',
    verifCodeError: []
}

// getters
export const getters = {
    showVerifCode: state => state.show.verifCode,
    verifCode: state => state.verifCode,
    verifCodeError: state => state.verifCodeError,
}

// actions
export const actions = {
    showdialog: ({commit}) => commit('showdialog', payload)
}

// mutations
export const mutations = {
    showdialog (state, payload) {
        state.show[payload.key] = !state.show[payload.key]
    }
}