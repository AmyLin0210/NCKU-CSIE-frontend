<template lang="pug">
banner(
  :title="i18n[currentLanguage].title"
  imageSrc="banner/resource/link.jpg"
)
section.content
  breadcrumb(
    :breadcrumbList="[ \
      {text: i18n[currentLanguage].breadcrumb.home, route: `/?languageId=${currentLanguageId}`}, \
      {text: i18n[currentLanguage].breadcrumb.resource, route: `/resource?languageId=${currentLanguageId}`}, \
      {text: i18n[currentLanguage].title, route: `/resource/link?languageId=${currentLanguageId}`} \
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
          title: '其他連結',
          breadcrumb: {
            home: '首頁',
            resource: '相關服務'
          }
        },
        'en-US': {
          title: 'Other Resources',
          breadcrumb: {
            home: 'Home',
            resource: 'Resources'
          }
        }
      },
      entries: [
        {
          'zh-TW': {
            title: '教師課程大綱上傳',
            detail: '教師課程大綱上傳連結'
          },
          'en-US': {
            title: 'Syllabus Administration System',
            detail: 'Syllabus Administration System'
          },
          href: 'http://140.116.165.74/syllabus/login.php'
        },
        {
          'zh-TW': {
            title: '教室借用系統',
            detail: '系所租借設備或場地'
          },
          'en-US': {
            title: 'Rent',
            detail: 'Borrow things from department'
          },
          href: 'http://www.csie.ncku.edu.tw/Class2014/'
        },
        {
          'zh-TW': {
            title: '資格考系統',
            detail: '博士資格考系統'
          },
          'en-US': {
            title: 'PhD Qualification Exam System',
            detail: 'PhD Qualification Exam System'
          },
          href: 'http://www.csie.ncku.edu.tw/score/'
        },
        {
          'zh-TW': {
            title: 'web mail',
            detail: '資訊工程學系 web mail'
          },
          'en-US': {
            title: 'Web Mail',
            detail: 'NCKU CSIE web mail'
          },
          href: 'https://mail.csie.ncku.edu.tw/'
        },
        {
          'zh-TW': {
            title: '電腦教室維護回報系統',
            detail: '電腦教室維護回報系統'
          },
          'en-US': {
            title: 'Computer Classroom Maintain Report System',
            detail: 'Computer Classroom Maintain Report System'
          },
          href: 'https://simple-report-system.herokuapp.com/api/v1'
        },
        {
          'zh-TW': {
            title: '高等教育資料調查',
            detail: '資料及個資保護僅供學校統計'
          },
          'en-US': {
            title: 'Student Survey',
            detail: 'Student Survey'
          },
          href: 'https://docs.google.com/forms/d/e/1FAIpQLSfL7RK6dqdF7lJF0QvZSqc86G6ymB8CO9eUY89_zomggrtJnA/viewform'
        },
        {
          'zh-TW': {
            title: '問卷系統',
            detail: '系上課程問卷系統'
          },
          'en-US': {
            title: 'Course Survey',
            detail: 'Course Survey'
          },
          href: 'http://ieet.csie.ncku.edu.tw/'
        },
        {
          'zh-TW': {
            title: '電資學院',
            detail: '國立成功大學電機資訊學院首頁'
          },
          'en-US': {
            title: 'NCKU',
            detail: 'NCKU website'
          },
          href: 'http://www.eecs.ncku.edu.tw/'
        },
        {
          'zh-TW': {
            title: '成功大學',
            detail: '國立成功大學首頁'
          },
          'en-US': {
            title: 'NCKU College of Electrical Engineering & Computer Science',
            detail: 'NCKU College of Electrical Engineering & Computer Science'
          },
          href: 'https://web.ncku.edu.tw/'
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
