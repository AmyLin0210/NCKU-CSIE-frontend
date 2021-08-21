const state = {
  dept: {
    'zh-TW': '資訊系',
    'en-US': 'Department of CSIE',
    id: 0
  },
  inst: {
    'zh-TW': '資訊所',
    'en-US': 'Institute of CSIE',
    id: 1
  },
  adj: {
    'zh-TW': '兼任師資',
    'en-US': 'Adjunct Professor',
    id: 2
  },
  join: {
    'zh-TW': '合聘師資',
    'en-US': 'Joint Appointment',
    id: 3
  },
  imi: {
    'zh-TW': '醫資所',
    'en-US': 'Institute of Medical Informatics',
    id: 4
  },
  imis: {
    'zh-TW': '製造所',
    'en-US': 'Institute of Manufacturing Information and Systems',
    id: 5
  },
  ai: {
    'zh-TW': '人工智慧學程',
    'en-US': 'Master\'s Program of Artificial Intelligence Technology',
    id: 6
  },
  visi: {
    'zh-TW': '客座教授',
    'en-US': 'Visiting Professor',
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
