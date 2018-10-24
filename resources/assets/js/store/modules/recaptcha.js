import firebase from 'firebase/app'

// initial state
export const state = { 
    appVerif:'',
    appWidgetId: ''
}

// getters
export const getters = {
    appVerif: state => state.appVerif
}

// actions
export const actions = {
    setupVerif: ({commit}) => commit('setupVerif', payload)
}

// mutations
export const mutations = {
    setupVerif(state, payload) {
        state.appVerif = new firebase.auth.RecaptchaVerifier(payload.elem, payload.config)
        state.appVerif.render().then((widgetId)=>{
            state.appWidgetId = widgetId
        })
    }
}