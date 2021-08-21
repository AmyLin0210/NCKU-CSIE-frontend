const state = {
  elife: {
    'zh-TW': '數位生活科技與軟體技術',
    'en-US': 'E-life Digital Technology and Software Technology',
    id: 0
  },
  communication: {
    'zh-TW': '計算通訊與網路',
    'en-US': 'Computation, Communication and Network',
    id: 1
  },
  data: {
    'zh-TW': '資料與知識工程',
    'en-US': 'Data and Knowledge Engineering',
    id: 2
  },
  multimedia: {
    'zh-TW': '多媒體',
    'en-US': 'Multimedia',
    id: 3
  },
  architecture: {
    'zh-TW': '架構與嵌入式系統',
    'en-US': 'Architecture and Embedded System',
    id: 4
  },
  biomedical: {
    'zh-TW': '生醫工程',
    'en-US': 'Biomedical Engineering',
    id: 5
  },
  manufacturing: {
    'zh-TW': '製造工程',
    'en-US': 'Manufacturing Engineering',
    id: 6
  }
}

const getters = {
  getResearchGroup: state => {
    return Object.keys(state).map(key => state[key])
  },
  getI18nById: state => {
    // @param {Object} obj
    // @param {number} obj.id - Specific faculty id
    // @param {string} obj.language - Specific language
    return (obj) => {
      const researchGroup = Object.keys(state).find(key => obj.id === state[key].id)
      return state[researchGroup][obj.language]
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
