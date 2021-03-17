import Vue from 'vue'
import { createStore } from 'vuex'
import { cloneDeep } from 'lodash'

import EventService from '../services/github-api-controller'

export const initialState = {
  user: null,
  users: [],
  userRepos: [],
  errors: {
    user: undefined,
    users: undefined,
    userRepos: undefined
  }
}

export default createStore({
  state: () => cloneDeep(initialState),

  actions: {
    async searchUser({ commit }, text) {
      try {
        const data = await EventService.searchUser(text)
        commit('SET_USERS', { users: data.data.items })
      } catch (error) {
        commit('SET_ERROR', { key: 'users', error })
      }
    },

    async getUser({ commit }, userName) {
      try {
        const data = await EventService.getUser(userName)
        commit('SET_USER', data)
      } catch (error) {
        commit('SET_ERROR', { key: 'users', error })
      }
    },

    async getUserRepos({ commit }, userName) {
      try {
        const data = await EventService.getUserRepos(userName)
        commit('SET_USER_REPOS', data)
      } catch (error) {
        commit('SET_ERROR', { key: 'userRepos', error })
      }
    }
  },

  mutations: {
    SET_USER(state, user) {
      state.user = user
    },

    SET_USERS(state, { users }) {
      state.users = users
    },

    SET_USER_REPOS(state, userRepos) {
      state.userRepos = userRepos
    },

    SET_ERROR(state, { key, error }) {
      Vue.set(state.errors, key, error)
    }
  }
})
