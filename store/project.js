export const state = () => ({
  id: 0,
  data: {}
})

export const actions = {
  setData ({ commit }, id) {
    commit('SET_ID', id)
  }
}

export const mutations = {
  SET_ID (state, id) {
    state.id = id
  },
  SET_DATA (state, data) {
    state.data = data
  }
}

export const getters = {
  id: state => state.id,
  data: state => state.data
}
