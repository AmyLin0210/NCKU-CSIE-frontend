const state = {
  journal: {
    'zh-TW': '期刊',
    'en-US': 'journal',
    id: 0
  },
  conference: {
    'zh-TW': '會議',
    'en-US': 'conference',
    id: 1
  },
  workshop: {
    'zh-TW': '工作坊',
    'en-US': 'workshop',
    id: 2
  },
  book: {
    'zh-TW': '專書',
    'en-US': 'book',
    id: 3
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
