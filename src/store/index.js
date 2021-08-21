import { createStore } from 'vuex'
import language from '@/store/modules/language.js'
import siteMap from '@/store/modules/site-map.js'
import department from '@/store/modules/department.js'
import researchGroup from '@/store/modules/research-group.js'

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
    department,
    researchGroup
  }
})
