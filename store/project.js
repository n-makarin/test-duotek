export const state = () => ({
  id: 0,
  data: {},
  projectList: [],
  commentList: []
})

export const actions = {
  async makeRequest ({ getters }, { url = null, payload = null }) {
    const endpoint = 'https://my-json-server.typicode.com/n-makarin/test-duotek/'
    const response = await this.$axios({
      method: 'get',
      url: endpoint + url,
      data: payload
    })
    return response
  },
  async setCommentList ({ commit, dispatch }, projectId) {
    const requestArgs = { url: 'project/' + projectId + '/commentList', payload: null }
    await dispatch('makeRequest', requestArgs)
      .catch((err) => {
        console.error(err)
      })
      .then((response) => {
        if (!response) { return null }
        commit('SET_COMMENT_LIST', response.data)
      })
  },
  async setData ({ commit, dispatch }, id) {
    commit('SET_ID', id)
    const requestArgs = { url: 'project/' + id, payload: null }
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
  },
  SET_COMMENT_LIST (state, data) {
    state.commentList = data
  }
}

export const getters = {
  id: state => state.id,
  data: state => state.data,
  projectList: state => state.projectList,
  commentList: state => state.commentList
}
