<template lang="pug">
banner(
  :title="i18n[currentLanguage].title"
  imageSrc="banner/resource/index.jpg"
)
section.content
  breadcrumb(
    :breadcrumbList="[ \
      {text: i18n[currentLanguage].breadcrumb.home, route: `/?languageId=${currentLanguageId}`}, \
      {text: i18n[currentLanguage].title, route: `/resource?languageId=${currentLanguageId}`} \
    ]"
  )
  entries(:entries="siteInfoByPage( {page: 'resource',language: currentLanguage,languageId: currentLanguageId})")
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
          title: '相關服務',
          breadcrumb: {
            home: '首頁'
          }
        },
        'en-US': {
          title: 'Resource',
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
