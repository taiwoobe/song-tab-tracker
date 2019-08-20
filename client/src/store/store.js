import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export const store = new Vuex.Store({
    strict: true,
    state: {
        user: null,
        token: null,
        isUserLoggedIn: false
    },
    plugins: [createPersistedState()],
    actions: {    
        setToken({commit}, token) {
            commit('SET_TOKEN', token);
        },   
        setUser({commit}, user) {
            commit('SET_USER', user);
        }    
    },
    mutations: {   
        SET_TOKEN: (state, token) => {
            state.token = token;
            token ? state.isUserLoggedIn = true : state.isUserLoggedIn = false;
        },
        SET_USER: (state, user) => {
            state.user = user;
        }
    },
    getters: {
    }
})