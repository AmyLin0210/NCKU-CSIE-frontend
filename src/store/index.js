import { createStore } from 'vuex'
import language from '@/store/modules/language.js'
import siteMap from '@/store/modules/site-map.js'
import department from '@/store/modules/department.js'
import researchGroup from '@/store/modules/research-group.js'
import educationDegree from '@/store/modules/education-degree.js'
import nation from '@/store/modules/nation.js'
import publicationCategory from '@/store/modules/publication-category.js'
import projectCategory from '@/store/modules/project-category.js'

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
    researchGroup,
    educationDegree,
    nation,
    publicationCategory,
    projectCategory
  }
})
