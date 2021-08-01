<template lang="pug">
banner(
  :title="staticText[currentLanguage].title"
  imageSrc="banner/announcement/index.jpg"
)
section.main
  breadcrumb(route="/announcement")
  entries(:entries="getEntryByTopic( {topic: 'announcement',language: currentLanguage,languageId: currentLanguageId})")
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
      staticText: {
        'zh-TW': {
          title: '系所公告'
        },
        'en-US': {
          title: 'Announcement'
        }
      }
    }
  },
  computed: {
    ...mapGetters('language', ['currentLanguage', 'currentLanguageId']),
    ...mapGetters('siteMap', ['getEntryByTopic'])
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/break-point.scss";

.main {
  // [ layout ]
  display: block;

  // [ position ]
  width: 90%;
  margin: {
    left: auto;
    right: auto;
  }

  @media screen and (min-width: $break-point-lg){
    max-width: 1440;
  }
}
</style>
