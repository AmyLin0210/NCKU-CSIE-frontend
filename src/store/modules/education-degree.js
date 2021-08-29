const state = {
  bachelor: {
    'zh-TW': '學士',
    'en-US': 'bachelor',
    id: 0
  },
  master: {
    'zh-TW': '碩士',
    'en-US': 'master',
    id: 1
  },
  phd: {
    'zh-TW': '博士',
    'en-US': 'phd',
    id: 2
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
