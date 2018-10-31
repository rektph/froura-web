
// initial state
export const state = { 
    show: {
        "verifCode":false,
        "regForm":false
    }
}

// getters
export const getters = {
    showVerifCode: state => state.show.verifCode,
    showRegForm: state => state.show.regForm
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