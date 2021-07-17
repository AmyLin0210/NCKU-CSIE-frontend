<template lang="pug">
banner(
  :title="i18n[currentLanguage].title"
  imageSrc="banner/about/index.jpg"
)
breadcrumb(
  :breadcrumbList="[ \
    {text: i18n[currentLanguage].breadcrumb.home, route: `/?languageId=${currentLanguageId}`}, \
    {text: i18n[currentLanguage].title, route: `/about?languageId=${currentLanguageId}`} \
  ]"
)
entries(:entries="siteInfoByPage( {page: 'about', language: currentLanguage, languageId: currentLanguageId})")
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
          title: '關於本系',
          breadcrumb: {
            home: '首頁'
          }
        },
        'en-US': {
          title: 'About',
          breadcrumb: {
            home: 'Home'
          }
        }
      }
    }
  },
  computed: {
    ...mapGetters('language', ['currentLanguage', 'currentLanguageId']),
    ...mapGetters('siteMap', ['siteInfoByPage'])
  }
}
</script>

<style scoped lang="scss">
</style>
