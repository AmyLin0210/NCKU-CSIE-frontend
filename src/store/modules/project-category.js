const state = {
  general: {
    'zh-TW': '一般建教案',
    'en-US': 'General Projects',
    id: 0
  },
  nsc: {
    'zh-TW': '國科會計劃',
    'en-US': 'National Science Council Projects',
    id: 1
  }
}

const getters = {
  getDepartment: state => {
    return Object.keys(state).map(key => state[key])
  },
  getI18nById: state => {
    // @param {Object} obj
    // @param {number} obj.id - Specific faculty id
    // @param {string} obj.language - Specific language
    return (obj) => {
      const degree = Object.keys(state).find(key => obj.id === state[key].id)
      return state[degree][obj.language]
    }
  }
}

const mutations = {}

const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
