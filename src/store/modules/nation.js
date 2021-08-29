const state = {
  tw: {
    'zh-TW': '台灣',
    'en-US': 'Taiwan',
    id: 0
  },
  us: {
    'zh-TW': '美國',
    'en-US': 'USA',
    id: 1
  },
  cn: {
    'zh-TW': '中國',
    'en-US': 'China',
    id: 2
  },
  gb: {
    'zh-TW': '英國',
    'en-US': 'UK',
    id: 3
  },
  jp: {
    'zh-TW': '日本',
    'en-US': 'Japan',
    id: 4
  },
  de: {
    'zh-TW': '德國',
    'en-US': 'Germany',
    id: 5
  },
  au: {
    'zh-TW': '澳洲',
    'en-US': 'Australia',
    id: 6
  },
  sg: {
    'zh-TW': '新加坡',
    'en-US': 'Singapore',
    id: 7
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
      const department = Object.keys(state).find(key => obj.id === state[key].id)
      return state[department][obj.language]
    }
  },
  getKeyById: state => {
    return (id) => {
      return Object.keys(state).find(key => state[key].id === id)
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
