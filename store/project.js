export const state = () => ({
  id: 0
})

export const actions = {
  setId ({ commit }, id) {
    commit('SET_ID', id)
  },
  resetId ({ commit }) {
    commit('RESET_ID')
  }
}

export const mutations = {
  SET_ID (state, id) {
    state.id = id
  },
  RESET_ID (state) {
    state.id = 0
  }
}

export const getters = {
  id: state => state.id
}
