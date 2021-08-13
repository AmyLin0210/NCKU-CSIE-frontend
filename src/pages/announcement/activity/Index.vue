<template lang="pug">
banner(
  :title="staticText[currentLanguage].title"
  imageSrc="banner/announcement/activity.jpg"
)
section.main
  breadcrumb(route="/announcement/activity")
  topic(:topic="staticText[currentLanguage].title")
  announcement-filter(
    :supportTags="supportTags"
    :defaultTag="defaultTag"
    :tagTypesetting="tagTypesetting"
  )
</template>

<script>
import Banner from '@/components/common/Banner.vue'
import Breadcrumb from '@/components/common/Breadcrumb.vue'
import Topic from '@/components/common/Topic.vue'
import AnnouncementFilter from '@/components/announcement/AnnouncementFilter.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Index',
  components: {
    Banner,
    Breadcrumb,
    Topic,
    AnnouncementFilter
  },
  data () {
    return {
      staticText: {
        'zh-TW': {
          title: '活動公告'
        },
        'en-US': {
          title: 'Activity Announcement'
        }
      },
      supportTags: [
        'competition',
        'exhibition',
        'speech'
      ],
      defaultTag: 'all',
      tagTypesetting: {
        rowItemAmount: 4,
        large: `
          'all speech exhibition competition';
        `,
        small: `
          'all speech exhibition competition';
        `
      }
    }
  },
  computed: {
    ...mapGetters('language', ['currentLanguage', 'currentLanguageId'])
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
