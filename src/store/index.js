import { createStore } from 'vuex'
import language from '@/store/modules/language.js'
import siteMap from '@/store/modules/site-map.js'
import announcement from '@/store/modules/announcement.js'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    language,
    siteMap,
    announcement
  }
})
