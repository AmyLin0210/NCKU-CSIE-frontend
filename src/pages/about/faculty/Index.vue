<template lang="pug">
banner(
  :title="staticText[currentLanguage].title"
  imageSrc="banner/about/faculty.jpg"
)
section.main
  section.content
    breadcrumb(route="/about/faculty")
    topic(:topic="staticText[currentLanguage].title")
    h3 {{staticText[currentLanguage].department}}
    section.department
      department-tag(
        v-for="(department, idx) in getDepartment"
        :key="`department-${idx}`"
        :text="department[currentLanguage]"
        :departmentId="department.id"
      )
    h3 {{staticText[currentLanguage].researchGroup}}
    section.research-group
      research-group-tag(
        v-for="(researchGroup, idx) in getResearchGroup"
        :key="`research-group-${idx}`"
        :text="researchGroup[currentLanguage]"
        :researchGroupId="researchGroup.id"
      )
    section.faculty
      faculty-card(
        v-for="faculty in faculties"
        :key="`faculty-${faculty.profileId}`"
        :faculty="faculty"
      )
</template>

<script>
import Banner from '@/components/common/Banner.vue'
import Breadcrumb from '@/components/common/Breadcrumb.vue'
import Topic from '@/components/common/Topic.vue'
import DepartmentTag from '@/components/about/DepartmentTag.vue'
import ResearchGroupTag from '@/components/about/ResearchGroupTag.vue'
import FacultyCard from '@/components/about/FacultyCard.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Index',
  components: {
    Banner,
    Breadcrumb,
    Topic,
    DepartmentTag,
    ResearchGroupTag,
    FacultyCard
  },
  data () {
    return {
      staticText: {
        'zh-TW': {
          title: '師資陣容',
          department: '系所別',
          researchGroup: '研究群'
        },
        'en-US': {
          title: 'Faculty',
          department: 'Department',
          researchGroup: 'Research Group'
        }
      },
      faculties: [
        {
          photo: null,
          departmentId: [0, 1, 6],
          profileId: 16,
          name: '張燕光',
          title: ['教授', '系主任'],
          mail: 'ykchang@mail.ncku.edu.tw',
          officeAddress: '資訊系館新大樓12F 65C10',
          officeTel: '06-2757575,62539',
          labName: '計算機網路架構實驗室',
          labWeb: 'http://cial.csie.ncku.edu.tw/',
          labAddress: '資訊系館新大樓5F 65502'
        },
        {
          photo: null,
          departmentId: [0, 1, 6],
          profileId: 16,
          name: '張燕光',
          title: ['教授', '系主任'],
          mail: 'ykchang@mail.ncku.edu.tw',
          officeAddress: '資訊系館新大樓12F 65C10',
          officeTel: '06-2757575,62539',
          labName: '計算機網路架構實驗室',
          labWeb: 'http://cial.csie.ncku.edu.tw/',
          labAddress: '資訊系館新大樓5F 65502'
        },
        {
          photo: null,
          departmentId: [0, 1, 6],
          profileId: 16,
          name: '張燕光',
          title: ['教授', '系主任'],
          mail: 'ykchang@mail.ncku.edu.tw',
          officeAddress: '資訊系館新大樓12F 65C10',
          officeTel: '06-2757575,62539',
          labName: '計算機網路架構實驗室',
          labWeb: 'http://cial.csie.ncku.edu.tw/',
          labAddress: '資訊系館新大樓5F 65502'
        },
        {
          photo: null,
          departmentId: [0, 1, 6],
          profileId: 16,
          name: '張燕光',
          title: ['教授', '系主任'],
          mail: 'ykchang@mail.ncku.edu.tw',
          officeAddress: '資訊系館新大樓12F 65C10',
          officeTel: '06-2757575,62539',
          labName: '計算機網路架構實驗室',
          labWeb: 'http://cial.csie.ncku.edu.tw/',
          labAddress: '資訊系館新大樓5F 65502'
        },
        {
          photo: null,
          departmentId: [0, 1, 6],
          profileId: 16,
          name: '張燕光',
          title: ['教授', '系主任'],
          mail: 'ykchang@mail.ncku.edu.tw',
          officeAddress: '資訊系館新大樓12F 65C10',
          officeTel: '06-2757575,62539',
          labName: '計算機網路架構實驗室',
          labWeb: 'http://cial.csie.ncku.edu.tw/',
          labAddress: '資訊系館新大樓5F 65502'
        },
        {
          photo: null,
          departmentId: [0, 1, 6],
          profileId: 16,
          name: '張燕光',
          title: ['教授', '系主任'],
          mail: 'ykchang@mail.ncku.edu.tw',
          officeAddress: '資訊系館新大樓12F 65C10',
          officeTel: '06-2757575,62539',
          labName: '計算機網路架構實驗室',
          labWeb: 'http://cial.csie.ncku.edu.tw/',
          labAddress: '資訊系館新大樓5F 65502'
        },
        {
          photo: null,
          departmentId: [0, 1, 6],
          profileId: 16,
          name: '張燕光',
          title: ['教授', '系主任'],
          mail: 'ykchang@mail.ncku.edu.tw',
          officeAddress: '資訊系館新大樓12F 65C10',
          officeTel: '06-2757575,62539',
          labName: '計算機網路架構實驗室',
          labWeb: 'http://cial.csie.ncku.edu.tw/',
          labAddress: '資訊系館新大樓5F 65502'
        },
        {
          photo: null,
          departmentId: [0, 1, 6],
          profileId: 16,
          name: '張燕光',
          title: ['教授', '系主任'],
          mail: 'ykchang@mail.ncku.edu.tw',
          officeAddress: '資訊系館新大樓12F 65C10',
          officeTel: '06-2757575,62539',
          labName: '計算機網路架構實驗室',
          labWeb: 'http://cial.csie.ncku.edu.tw/',
          labAddress: '資訊系館新大樓5F 65502'
        }
      ]
    }
  },
  computed: {
    ...mapGetters('language', ['currentLanguage', 'currentLanguageId']),
    ...mapGetters('department', ['getDepartment']),
    ...mapGetters('researchGroup', ['getResearchGroup'])
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

h3 {
  // [ layout ]
  display: block;

  // [ position ]
  height: 24px;
  width: fit-content;
  line-height: 20px;
  margin: {
    top: 40px;
    bottom: 10px;
    left: auto;
    right: auto;
  }
  padding: {
    bottom: 4px;
    left: 8px;
    right: 8px;
  }
  border-bottom: 2px solid rgba(0, 0, 0, .87);

  // [ skin ]
  font: {
    size: 18px;
    weight: bold;
  }
}

.department {
  // [ layout ]
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 10px;
  column-gap: 10px;

  // [ position ]
  margin: {
    top: 20px;
    bottom: 20px;
  }
}

.research-group {
  // [ layout ]
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 10px;
  column-gap: 10px;

  // [ position ]
  margin: {
    top: 20px;
    bottom: 20px;
  }
}

.faculty {
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
