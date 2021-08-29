<template lang="pug">
banner(
  :title="staticText[currentLanguage].title"
  imageSrc="banner/about/staff.jpg"
)
section.main
  section.content
    breadcrumb(route="/about/staff")
    topic(:topic="staticText[currentLanguage].title")
    section.staff
      staff-card(
        v-for="(info, i) in staff"
        :key="`staff-${i}`"
        :staff="info"
      )
</template>

<script>
import Banner from '@/components/common/Banner.vue'
import Breadcrumb from '@/components/common/Breadcrumb.vue'
import Topic from '@/components/common/Topic.vue'
import StaffCard from '@/components/about/StaffCard.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Index',
  components: {
    Banner,
    Breadcrumb,
    Topic,
    StaffCard
  },
  data () {
    return {
      staticText: {
        'zh-TW': {
          title: '行政人員'
        },
        'en-US': {
          title: 'Staff'
        }
      },
      staff: [
        {
          photo: null,
          business: ['總務職代'],
          title: ['專案工作人員'],
          name: '陳亭',
          officeAddress: '資訊系館新大樓2F 65202',
          officeTel: '06-2757575,62500,19',
          mail: 'z11001023@ncku.edu.tw'
        },
        {
          photo: null,
          business: ['總務職代'],
          title: ['專案工作人員'],
          name: '陳亭',
          officeAddress: '資訊系館新大樓2F 65202',
          officeTel: '06-2757575,62500,19',
          mail: 'z11001023@ncku.edu.tw'
        },
        {
          photo: null,
          business: ['總務職代'],
          title: ['專案工作人員'],
          name: '陳亭',
          officeAddress: '資訊系館新大樓2F 65202',
          officeTel: '06-2757575,62500,19',
          mail: 'z11001023@ncku.edu.tw'
        },
        {
          photo: null,
          business: ['總務職代'],
          title: ['專案工作人員'],
          name: '陳亭',
          officeAddress: '資訊系館新大樓2F 65202',
          officeTel: '06-2757575,62500,19',
          mail: 'z11001023@ncku.edu.tw'
        },
        {
          photo: null,
          business: ['總務職代'],
          title: ['專案工作人員'],
          name: '陳亭',
          officeAddress: '資訊系館新大樓2F 65202',
          officeTel: '06-2757575,62500,19',
          mail: 'z11001023@ncku.edu.tw'
        },
        {
          photo: null,
          business: ['總務職代'],
          title: ['專案工作人員'],
          name: '陳亭',
          officeAddress: '資訊系館新大樓2F 65202',
          officeTel: '06-2757575,62500,19',
          mail: 'z11001023@ncku.edu.tw'
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
  // [ skin ]
  background-color: #eff3f9;
}
.content {
  // [ layout ]
  display: block;

  // [ position ]
  max-width: 1440px;
  width: 100%;
  margin: {
    left: auto;
    right: auto;
  }
  padding: {
    left: 24px;
    right: 24px;
    bottom: 30px;
  }

  @media screen and (min-width: $break-point-md) {
    width: 80%;
    padding: {
      left: 0;
      right: 0;
    }
  }
}

.staff {
  // [ layout ]
  display: grid;
  grid-template-columns: repeat(1, 98%);
  justify-content: space-between;
  row-gap: 16px;

  // [ position ]
  margin: {
    top: 64px;
    bottom: 64px;
  }

  @media screen and (min-width: $break-point-sm) {
    grid-template-columns: repeat(2, 49%);
  }

  @media screen and (min-width: $break-point-md) {
    grid-template-columns: repeat(3, 33%);
  }

  @media screen and (min-width: $break-point-lg) {
    grid-template-columns: repeat(4, 24%);
  }
}
</style>
