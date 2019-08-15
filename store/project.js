export const state = () => ({
  id: 0,
  data: {},
  projectList: []
})

export const actions = {
  async makeRequest ({ getters }, { url = null, payload = null }) {
    const endpoint = 'https://my-json-server.typicode.com/n-makarin/test-duotek/'
    const response = await this.$axios({
      method: 'get',
      url: endpoint + url
    })
    return response
  },
  async setData ({ commit, dispatch }, id) {
    commit('SET_ID', id)
    const requestArgs = { url: 'projectList/' + id, payload: null }
    await dispatch('makeRequest', requestArgs)
      .catch((err) => {
        console.error(err)
      })
      .then((response) => {
        if (!response) { return null }
        commit('SET_DATA', response.data)
      })
  }
}

export const mutations = {
  SET_ID (state, id) {
    state.id = id
  },
  SET_DATA (state, data) {
    state.data = data
  },
  SET_PROJECT_LIST (state, data) {
    state.projectList = data
  }
}

export const getters = {
  id: state => state.id,
  data: state => state.data,
  projectList: state => state.projectList
}
