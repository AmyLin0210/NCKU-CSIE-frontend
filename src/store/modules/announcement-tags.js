const state = {
  faculty: {
    'zh-TW': '教職人員',
    'en-US': 'faculty',
    color: 'yellow',
    id: 0
  },
  course: {
    'zh-TW': '課程',
    'en-US': 'course',
    color: 'yellow',
    id: 1
  },
  college: {
    'zh-TW': '大學部',
    'en-US': 'college',
    color: 'blue',
    id: 2
  },
  master: {
    'zh-TW': '碩士',
    'en-US': 'master',
    color: 'blue',
    id: 3
  },
  phd: {
    'zh-TW': '博士',
    'en-US': 'phd',
    color: 'blue',
    id: 4
  },
  speech: {
    'zh-TW': '演講',
    'en-US': 'speech',
    color: 'purple',
    id: 5
  },
  admission: {
    'zh-TW': '招生',
    'en-US': 'admission',
    color: 'blue',
    id: 6
  },
  exhibition: {
    'zh-TW': '展覽',
    'en-US': 'exhibition',
    color: 'purple',
    id: 7
  },
  competition: {
    'zh-TW': '競賽',
    'en-US': 'competition',
    color: 'purple',
    id: 8
  },
  scholarship: {
    'zh-TW': '獎學金',
    'en-US': 'scholarship',
    color: 'red',
    id: 9
  },
  international: {
    'zh-TW': '國際交流',
    'en-US': 'international',
    color: 'red',
    id: 10
  },
  internship: {
    'zh-TW': '實習',
    'en-US': 'internship',
    color: 'red',
    id: 11
  },
  rule: {
    'zh-TW': '法規彙編',
    'en-US': 'rule',
    color: 'green',
    id: 12
  },
  recruitment: {
    'zh-TW': '徵人',
    'en-US': 'recuritment',
    color: 'green',
    id: 13
  },
  award: {
    'zh-TW': '榮譽事蹟',
    'en-US': 'award',
    color: 'red',
    id: 14
  },
  attachment: {
    'zh-TW': '常用表單',
    'en-US': 'attachment',
    color: 'green',
    id: 15
  },
  administrative: {
    'zh-TW': '行政',
    'en-US': 'administrative',
    color: 'yellow',
    id: 16
  }
}

const getters = {
  getI18nByKey: state => {
    // @param {Object} obj
    // @param {string} obj.key - The key of the tag
    // @param {string} obj.language - The language of current page
    return (obj) => {
      return state[obj.key][obj.language]
    }
  },
  getColorByKey: state => {
    // @param {String} key - The color of specific tag
    return (key) => {
      return state[key].color
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
