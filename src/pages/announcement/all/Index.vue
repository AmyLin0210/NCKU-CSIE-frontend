<template lang="pug">
banner(
  :title="staticText[currentLanguage].title"
  imageSrc="banner/announcement/all.jpg"
)
section.main
  breadcrumb(route="/announcement/all")
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
          title: '所有公告'
        },
        'en-US': {
          title: 'All Announcement'
        }
      },
      supportTags: [
        'award',
        'college',
        'competition',
        'admission',
        'course',
        'exhibition',
        'faculty',
        'international',
        'internship',
        'master',
        'phd',
        'scholarship',
        'speech',
        'rule',
        'recruitment',
        'administrative',
        'attachment'
      ],
      defaultTag: 'all',
      tagTypesetting: {
        rowItemAmount: 5,
        large: `
          'all            admission internship    speech      rule'
          'course         college   scholarship   exhibition  recruitment'
          'faculty        master    international competition attachment'
          'administrative phd       award         .           .';
        `,
        small: `
          'all         course      faculty       administrative'
          'internship  scholarship international award'
          'admission   college     master        phd'
          'speech      exhibition  competition   .'
          'recruitment rule        attachment    .';
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
