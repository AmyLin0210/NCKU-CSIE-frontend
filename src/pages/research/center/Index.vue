<template lang="pug">
banner(
  :title="i18n[currentLanguage].title"
  imageSrc="banner/research/center.jpg"
)
section.content
  breadcrumb(
    :breadcrumbList="[ \
      {text: i18n[currentLanguage].breadcrumb.home, route: `/?languageId=${currentLanguageId}`}, \
      {text: i18n[currentLanguage].breadcrumb.research, route: `/resource?languageId=${currentLanguageId}`}, \
      {text: i18n[currentLanguage].title, route: `/resource/resource/link?languageId=${currentLanguageId}`} \
    ]"
  )
  entries(:entries="\
    entries.map((entry)=> {                           \
      return {                                        \
        title: entry[currentLanguage].title,          \
        detail: entry[currentLanguage].detail,        \
        href: entry.href                              \
      }                                               \
    })                                                \
  ")
</template>

<script>
import Banner from '@/components/common/Banner.vue'
import Entries from '@/components/common/Entries.vue'
import Breadcrumb from '@/components/common/Breadcrumb.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Index',
  components: {
    Banner,
    Entries,
    Breadcrumb
  },
  data () {
    return {
      i18n: {
        'zh-TW': {
          title: '研究中心',
          breadcrumb: {
            home: '首頁',
            research: '學術研究'
          }
        },
        'en-US': {
          title: 'Center',
          breadcrumb: {
            home: 'Home',
            research: 'Research'
          }
        }
      },
      entries: [
        {
          'zh-TW': {
            title: '人工智慧生技醫療創新研究中心',
            detail: '人工智慧生技醫療創新研究中心'
          },
          'en-US': {
            title: 'AIBMRC',
            detail: 'MOST Artificial intelligence Biomedical Research Center'
          },
          href: 'http://aibmrc.csie.ncku.edu.tw/index.php/'
        },
        {
          'zh-TW': {
            title: '數位生活科技研究中心',
            detail: '數位生活科技研究中心'
          },
          'en-US': {
            title: '數位生活科技研究中心',
            detail: '數位生活科技研究中心'
          },
          href: 'http://credit.csie.ncku.edu.tw/'
        }
      ]
    }
  },
  computed: {
    ...mapGetters('language', ['currentLanguage', 'currentLanguageId'])
  }
}
</script>

<style scoped lang="scss">
.content {
  // [ layout ]
  display: block;

  // [ position ]
  width: 90%;
  margin: {
    left: auto;
    right: auto;
  }
}
</style>
