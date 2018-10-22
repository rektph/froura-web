
// initial state
export const state = { 
    show: false
}

// getters
export const getters = {
    show: state => state.show
}

// actions
export const actions = {
    showdialog: ({commit}) => commit('showdialog')
}

// mutations
export const mutations = {
    showdialog (state) {
        state.show = !state.show
    }
}