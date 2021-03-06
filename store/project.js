export const state = () => ({
  data: {},
  projectList: [],
  commentList: [],
  selectedPage: 0
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
  /**
   * Set commentList of selected project
   * @param {Number} projectId
   * @returns {Any}
   */
  async setCommentList ({ commit, dispatch }, projectId) {
    const requestArgs = { url: 'commentList?postId=' + projectId, payload: null }
    await dispatch('makeRequest', requestArgs)
      .catch((err) => {
        console.error(err)
      })
      .then((response) => {
        if (!response) {
          commit('SET_COMMENT_LIST', null)
        }
        commit('SET_COMMENT_LIST', response.data)
      })
  },
  /**
   * Set data of selected project
   * @param {Number} id Project id
   * @returns {Any}
   */
  async setData ({ commit, dispatch }, id) {
    const requestArgs = { url: 'project/' + id, payload: null }
    await dispatch('makeRequest', requestArgs)
      .catch((err) => {
        console.error(err)
      })
      .then((response) => {
        if (!response) { return null }
        commit('SET_DATA', response.data)
      })
  },
  setSelectedPage ({ commit }, page) {
    commit('SET_SELECTED_PAGE', Number(page))
  }
}

export const mutations = {
  SET_DATA (state, data) {
    state.data = data
  },
  SET_PROJECT_LIST (state, data) {
    state.projectList = data
  },
  SET_COMMENT_LIST (state, data) {
    state.commentList = data
  },
  SET_SELECTED_PAGE (state, page) {
    state.selectedPage = page
  }
}

export const getters = {
  data: state => state.data,
  projectList: state => state.projectList,
  commentList: state => state.commentList,
  selectedPage: state => state.selectedPage
}
