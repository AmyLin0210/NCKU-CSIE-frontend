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
    :tagLayout="tagLayout"
  )
  announcement-topic(:topic="staticText[currentLanguage].pinned")
  no-result(
    v-if="status.pinned === 'noResult'"
    :withImage="false"
  )
  loading(v-if="status.pinned === 'loading'")
  announcement-topic(:topic="staticText[currentLanguage].normal")
  no-result(
    v-if="status.normal === 'noResult'"
    :withImage="true"
  )
  loading(v-if="status.normal === 'loading'")
  announcement-briefings(
    v-if="status.normal === 'briefing'"
    :briefings="announcement"
  )
</template>

<script>
import Banner from '@/components/common/Banner.vue'
import Breadcrumb from '@/components/common/Breadcrumb.vue'
import Topic from '@/components/common/Topic.vue'
import NoResult from '@/components/common/NoResult.vue'
import Loading from '@/components/common/Loading.vue'
import AnnouncementFilter from '@/components/announcement/AnnouncementFilter.vue'
import AnnouncementTopic from '@/components/announcement/AnnouncementTopic.vue'
import AnnouncementBriefings from '@/components/announcement/AnnouncementBriefings.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Index',
  components: {
    Banner,
    Breadcrumb,
    Topic,
    NoResult,
    Loading,
    AnnouncementFilter,
    AnnouncementTopic,
    AnnouncementBriefings
  },
  data () {
    return {
      staticText: {
        'zh-TW': {
          title: '所有公告',
          pinned: '置頂貼文',
          normal: '一般公告'
        },
        'en-US': {
          title: 'All Announcement',
          pinned: 'Pinned Announcement',
          normal: 'Announcement'
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
      tagLayout: {
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
      },
      status: {
        pinned: 'loading',
        normal: 'briefing'
      },
      announcement: [
        {
          announcementId: 1486,
          content: '各位同學: 因疫情的關係,明天(5/14)的SEMINAR改成線上直播演講資訊如下:演講題目：選擇【今天的成功 是因為昨天做了很多對的事情】時間：2021/05/14/(五) 下午 2:30-3:30',
          tags: [1, 5],
          title: '109學年下 Seminar－學生上課點名統計表',
          updateTime: '2021-06-02 11:02:50'
        },
        {
          announcementId: 1487,
          content: '各位同學: 因疫情的關係,明天(5/14)的SEMINAR改成線上直播演講資訊如下:演講題目：選擇【今天的成功 是因為昨天做了很多對的事情】時間：2021/05/14/(五) 下午 2:30-3:30',
          tags: [1, 5],
          title: '109學年下 Seminar－學生上課點名統計表',
          updateTime: '2021-06-02 11:02:50'
        },
        {
          announcementId: 1488,
          content: '各位同學: 因疫情的關係,明天(5/14)的SEMINAR改成線上直播演講資訊如下:演講題目：選擇【今天的成功 是因為昨天做了很多對的事情】時間：2021/05/14/(五) 下午 2:30-3:30',
          tags: [1, 5],
          title: '109學年下 Seminar－學生上課點名統計表',
          updateTime: '2021-06-02 11:02:50'
        },
        {
          announcementId: 1489,
          content: '各位同學: 因疫情的關係,明天(5/14)的SEMINAR改成線上直播演講資訊如下:演講題目：選擇【今天的成功 是因為昨天做了很多對的事情】時間：2021/05/14/(五) 下午 2:30-3:30',
          tags: [1, 5],
          title: '109學年下 Seminar－學生上課點名統計表',
          updateTime: '2021-06-02 11:02:50'
        },
        {
          announcementId: 1490,
          content: '各位同學: 因疫情的關係,明天(5/14)的SEMINAR改成線上直播演講資訊如下:演講題目：選擇【今天的成功 是因為昨天做了很多對的事情】時間：2021/05/14/(五) 下午 2:30-3:30',
          tags: [1, 5],
          title: '109學年下 Seminar－學生上課點名統計表',
          updateTime: '2021-06-02 11:02:50'
        },
        {
          announcementId: 1491,
          content: '各位同學: 因疫情的關係,明天(5/14)的SEMINAR改成線上直播演講資訊如下:演講題目：選擇【今天的成功 是因為昨天做了很多對的事情】時間：2021/05/14/(五) 下午 2:30-3:30',
          tags: [1, 5],
          title: '109學年下 Seminar－學生上課點名統計表',
          updateTime: '2021-06-02 11:02:50'
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
@import "@/assets/scss/break-point.scss";

.main {
  // [ layout ]
  display: block;

  // [ position ]
  width: 90%;
  max-width: 924px;
  margin: {
    left: auto;
    right: auto;
  }
  padding: {
    top: 20px;
    bottom: 40px;
  }

  @media screen and (min-width: $break-point-lg){
    max-width: 1240px;
  }

  @media screen and (min-width: $break-point-xl){
    max-width: 1600px;
  }
}
</style>
