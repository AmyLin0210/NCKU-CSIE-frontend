<template lang="pug">

section.content
  breadcrumb(route="/about/faculty")
  section.profile
    img.photo(:src="(faculty.profile.photo === null)? require('@/assets/image/icon/user.png') : faculty.profile.photo")
    article.name
      h2.name {{faculty.profile.name}}
      p.title {{faculty.title.join( (currentLanguage === 'zh-TW')? ' 暨 ' : ', ')}}
    section.department
      p(
        v-for="id in faculty.department"
        :key="`department-${id}`"
      ) {{getDepartmentI18nById({id: id, language: currentLanguage})}}
    section.mail
      img(src="@/assets/image/icon/envelope.png")
      p.title {{`${staticText[currentLanguage].profile.mail} : `}}
      p.text {{faculty.profile.mail}}
    section.office-address
      img(src="@/assets/image/icon/location.png")
      p.title {{`${staticText[currentLanguage].profile.officeAddress} : `}}
      p.text {{faculty.profile.officeAddress}}
    section.office-tel
      img(src="@/assets/image/icon/phone.png")
      p.title {{`${staticText[currentLanguage].profile.officeTel} : `}}
      p.text {{getTelNumber(faculty.profile.officeTel)}}
    section.fax
      img(src="@/assets/image/icon/printer.png")
      p.title {{`${staticText[currentLanguage].profile.fax} : `}}
      p.text {{faculty.profile.fax}}
    section.lab
      img(src="@/assets/image/icon/laboratory.png")
      p.title {{`${staticText[currentLanguage].profile.lab} :`}}
      a.lab-name(
        v-if="faculty.profile.labWeb !== null"
        :href="faculty.profile.labWeb"
        target="_blank"
      ) {{faculty.profile.labName}}
      p.lab-name(v-else) {{faculty.profile.labName}}
      p.lab-address {{faculty.profile.labAddress}}
    section.lab-tel
      img(src="@/assets/image/icon/phone.png")
      p.title {{`${staticText[currentLanguage].profile.labTel} : `}}
      p.text {{getTelNumber(faculty.profile.labTel)}}
    section.personal-web
      img(src="@/assets/image/icon/www.png")
      p.title {{`${staticText[currentLanguage].profile.personalWeb} : `}}
      p.text {{faculty.profile.personalWeb}}
    section.specialty
      img(src="@/assets/image/icon/search.png")
      p.title {{`${staticText[currentLanguage].profile.specialty} : `}}
      section
        p(
          v-for="(text, id) in faculty.specialty"
          :key="`specialty-${id}`"
        ) {{text}}
  topic(:topic="staticText[currentLanguage].education")
  section.education
    template(
      v-for="(obj, id) in faculty.education"
      :key="`education-${id}`"
    )
      section.card
        section.time
          p.from {{obj.from}}
          hr
          p.to {{(obj.to === null)? staticText[currentLanguage].now : obj.to}}
        section.info
          img(:src="require(`@/assets/image/national-flag/${getNationKeyById(obj.nation)}.png`)")
          p.school {{obj.school}}
          p.major {{obj.major}}
          p.degree {{getEducationDegreeI18nById({id: obj.degree, language: currentLanguage})}}
  topic(:topic="staticText[currentLanguage].experience")
  section.experience
    template(
      v-for="(obj, id) in faculty.experience"
      :key="`experience-${id}`"
    )
      section.card
        section.time
          p.from {{obj.from}}
          hr
          p.to {{(obj.to === null)? staticText[currentLanguage].now : obj.to}}
        section.info
          p.organization {{obj.organization}}
          p.department {{obj.department}}
          p.title {{obj.title}}
  topic(:topic="staticText[currentLanguage].award")
  section.award
    template(
      v-for="(obj, id) in sortedAward(faculty.award)"
      :key="`award-${id}`"
    )
      h4(v-if="awardYear(obj.receivedYear)") {{obj.receivedYear}}
      section.card
        img(src="@/assets/image/icon/trophy.png")
        p {{obj.award}}
  topic(:topic="staticText[currentLanguage].publication")
  section.publication
    template(
      v-for="(obj, id) in faculty.publication"
      :key="`publication-${id}`"
    )
      section.card
        img(src="@/assets/image/icon/book.png")
        p.title {{obj.title}}
        p.authors {{obj.authors}}
  topic(:topic="staticText[currentLanguage].patent.title")
  section.patent
    template(
      v-for="(obj, id) in faculty.patent"
      :key="`patent-${id}`"
    )
      h4 {{obj.patent}}
      section.card
        h5.name-title {{staticText[currentLanguage].patent.patent}}
        p.name {{obj.patent}}
        h5.nation-title {{staticText[currentLanguage].patent.nation}}
        article.nation
          img(:src="require(`@/assets/image/national-flag/${getNationKeyById(obj.nation)}.png`)")
          p {{getNationI18nById({id: obj.nation, language: currentLanguage})}}
        h5.owner-title {{staticText[currentLanguage].patent.patentOwner}}
        p.owner {{obj.patentOwner}}
        h5.inventor-title {{staticText[currentLanguage].patent.inventor}}
        p.inventor {{obj.inventor}}
        h5.number-title {{staticText[currentLanguage].patent.certificationNumber}}
        p.number {{obj.certificationNumber}}
        h5.application-date-title {{staticText[currentLanguage].patent.applicationDate}}
        p.application-date {{obj.applicationDate}}
        h5.duration-title {{staticText[currentLanguage].patent.duration}}
        article.duration
          p {{obj.issueDate}}
          hr
          p {{obj.expireDate}}
  topic(:topic="staticText[currentLanguage].technologyTransfer.title")
  section.technology-transfer
    template(
      v-for="(obj, id) in faculty.technologyTransfer"
      :key="`technology-${id}`"
    )
      h4 {{obj.technologyTransfer}}
      section.card
        h5.name-title {{staticText[currentLanguage].technologyTransfer.technologyTransfer}}
        p.name {{obj.technologyTransfer}}
        h5.patent-title {{staticText[currentLanguage].technologyTransfer.patent}}
        article.technology-transfer-patent
          p(
            v-for="(text, id) in obj.technologyTransferPatent"
            :key="`technology-patent-${id}`"
          ) {{text}}
        h5.authorizing-title {{staticText[currentLanguage].technologyTransfer.authorizing}}
        p.authorizing {{obj.authorizingParty}}
        h5.authorized-title {{staticText[currentLanguage].technologyTransfer.authorized}}
        p.authorized {{obj.authorizedParty}}
        h5.duration-title {{staticText[currentLanguage].technologyTransfer.duration}}
        article.duration
          p {{obj.from}}
          hr
          p {{obj.to}}
  topic(:topic="staticText[currentLanguage].project.title")
  section.project
    template(
      v-for="(obj, id) in sortedProject(faculty.project)"
      :key="`technology-${id}`"
    )
      h4(v-if="projectCategory(obj.category)") {{getProjectCategoryI18nById({id: obj.category, language: currentLanguage})}}
      section.card
        h5.name-title {{staticText[currentLanguage].project.name}}
        p.name {{obj.name}}
        h5.duration-title {{staticText[currentLanguage].project.duration}}
        article.duration
          p {{obj.from}}
          hr
          p {{obj.to}}
        h5.support-title {{staticText[currentLanguage].project.support}}
        p.support {{obj.support}}
  topic(:topic="staticText[currentLanguage].studentAward.title")
  section.student-award
    template(
      v-for="(obj, id) in sortedStudentAward(faculty.studentAward)"
      :key="`student-award-${id}`"
    )
      h4(v-if="studentAwardYear(obj.receivedYear)") {{obj.receivedYear}}
      section.card
        img.award-img(src="@/assets/image/icon/trophy.png")
        p.award-text {{obj.award}}
        hr
        img.student-img(src="@/assets/image/icon/user.png")
        article.student-text
          p(
            v-for="(student, i) in obj.student"
            :key="`student-${i}`"
          ) {{`${student.name} ${getEducationDegreeI18nById({id: student.degree, language: currentLanguage})}`}}
  topic(:topic="staticText[currentLanguage].conference.title")
  section.conference
    template(
      v-for="(obj, id) in sortedConference(faculty.conference)"
      :key="`conference-${id}`"
    )
      h4(v-if="conferenceYear(obj.hostYear)") {{obj.hostYear}}
      section.card
        img(src="@/assets/image/icon/speech.png")
        p {{obj.conference}}
</template>

<script>
import Breadcrumb from '@/components/common/Breadcrumb.vue'
import Topic from '@/components/common/Topic.vue'
import DepartmentTag from '@/components/about/DepartmentTag.vue'
import { mapGetters } from 'vuex'

const data = {
  project: {
    category: null
  },
  award: {
    receivedYear: null
  },
  conference: {
    hostYear: null
  },
  studentAward: {
    receivedYear: null
  }
}

export default {
  name: 'Index',
  components: {
    Breadcrumb,
    Topic,
    DepartmentTag
  },
  data () {
    return {
      staticText: {
        'zh-TW': {
          education: '學歷',
          experience: '經歷',
          award: '榮譽及獲獎',
          publication: '著作',
          profile: {
            officeAddress: '辦公室',
            officeTel: '聯絡電話',
            mail: '信箱',
            fax: '傳真',
            lab: '實驗室',
            labTel: '實驗室電話',
            labWeb: null,
            personalWeb: '個人網頁',
            specialty: '專長領域'
          },
          patent: {
            title: '專利',
            patent: '專利名稱',
            nation: '國別',
            patentOwner: '專利權人',
            inventor: '發明人',
            certificationNumber: '專利號碼',
            duration: '專利期間',
            applicationDate: '申請日期'
          },
          technologyTransfer: {
            title: '技術轉移',
            technologyTransfer: '技術名稱',
            patent: '專利名稱',
            authorizing: '授權單位',
            authorized: '接受單位',
            duration: '專利期間'
          },
          project: {
            title: '研究計畫',
            name: '計畫名稱',
            duration: '起迄日期',
            support: '補助單位'
          },
          studentAward: {
            title: '指導學生獲獎'
          },
          conference: {
            title: '參與會議'
          },
          now: '現在'
        },
        'en-US': {
          education: 'Education',
          experience: 'Experience',
          award: 'Award',
          publication: 'Publication',
          profile: {
            officeAddress: 'Office',
            officeTel: 'Office Tel',
            mail: 'Mail',
            fax: 'Fax',
            lab: 'Lab',
            labTel: 'Lab Tel',
            personalWeb: 'Personal Web',
            specialty: 'Specialty'
          },
          patent: {
            patent: 'Patent',
            nation: 'Nation',
            patentOwner: 'Patent Owner',
            inventor: 'Inventor',
            certificationNumber: 'Certification Number',
            applicationDate: 'Issue Date',
            duration: 'Duration'
          },
          technologyTransfer: {
            title: 'Technology Transfer',
            technologyTransfer: 'Technology Transfer',
            patent: 'Patent',
            authorizing: 'Authorizing Party',
            authorized: 'Authorized Party',
            duration: 'Duration'
          },
          project: {
            title: 'Project',
            name: 'Project Name',
            duration: 'Duration',
            support: 'Support'
          },
          studentAward: {
            title: 'Student Award'
          },
          conference: {
            title: 'Conference'
          },
          now: 'Now'
        }
      },
      faculty: {
        profile: {
          name: '張燕光',
          mail: 'ykchang@mail.ncku.edu.tw',
          officeAddress: '資訊系館新大樓12F 65C10',
          officeTel: '06-2757575,62539',
          fax: '2747076',
          labName: '計算機網路架構實驗室',
          labAddress: '資訊系館新大樓5F 65502',
          labTel: '06-2757575,62539',
          labWeb: 'www.google.com',
          personalWeb: 'http://cial.csie.ncku.edu.tw/',
          photo: null
        },
        title: ['教授', '系主任'],
        department: [0, 1, 6],
        specialty: ['Cooperative Web Proxy', 'Qos', 'Network Processo Design', 'Computer Architecture', 'Multiprocesser Network and Cache Coherence Design', 'Fault-Tolerant', 'Router & Switch Design', 'Scalable Wb Server'],
        education: [
          {
            degree: 0,
            from: 1988,
            to: 1990,
            major: '資訊科學',
            nation: 1,
            school: '休士頓大學靜湖分校'
          },
          {
            degree: 1,
            from: 1988,
            to: 1990,
            major: '資訊科學',
            nation: 1,
            school: '休士頓大學靜湖分校'
          },
          {
            degree: 2,
            from: 1988,
            to: 1990,
            major: '資訊科學',
            nation: 1,
            school: '休士頓大學靜湖分校'
          }
        ],
        experience: [
          {
            from: 2004,
            to: 2004,
            organization: '國立成功大學',
            department: '資訊工程系',
            title: '助理教授'
          },
          {
            from: 2004,
            to: 2004,
            organization: '國立成功大學',
            department: '資訊工程系',
            title: '副教授'
          },
          {
            from: 2004,
            to: 2004,
            organization: '國立成功大學',
            department: '資訊工程系',
            title: '教授'
          }
        ],
        award: [
          {
            award: '龍騰論文獎',
            receivedYear: 2003
          },
          {
            award: '國立成功大學教學傑出教師',
            receivedYear: 2003
          },
          {
            award: '國立成功大學教學傑出教師',
            receivedYear: 2011
          }
        ],
        publication: [
          {
            authors: 'H.-Y. Kao, S.-H. Lin, J.-M. Ho and M.-S. Chen',
            category: 0,
            international: true,
            issueYear: 2004,
            refereed: true,
            title: '"Mining Web Information Structures and Contents based on Entropy Analysis" IEEE Trans. on Knowledge and Data Engineering, January 2004SCI EI'
          },
          {
            authors: 'H.-Y. Kao, S.-H. Lin, J.-M. Ho and M.-S. Chen',
            category: 0,
            international: true,
            issueYear: 2004,
            refereed: true,
            title: '"Mining Web Information Structures and Contents based on Entropy Analysis" IEEE Trans. on Knowledge and Data Engineering, January 2004SCI EI'
          }
        ],
        patent: [
          {
            patent: '自發性的通用型遙控系統與機制',
            nation: 0,
            patentOwner: '國立成功大學',
            inventor: '楊攸中、鄭芳田',
            certificationNumber: 'I193295',
            applicationDate: '2011-02-26',
            issueDate: '2021-03-37',
            expireDate: '2021-07-22'
          },
          {
            patent: '自發性的通用型遙控系統與機制',
            nation: 0,
            patentOwner: '國立成功大學',
            inventor: '楊攸中、鄭芳田',
            certificationNumber: 'I193295',
            applicationDate: '2011-02-26',
            issueDate: '2021-03-37',
            expireDate: '2021-07-22'
          }
        ],
        technologyTransfer: [
          {
            authorizedParty: '安達通系統 (現更名為群錄系統)',
            authorizingParty: '成大製造所',
            from: '2021-02-21',
            to: '2022-02-22',
            technologyTransfer: '半導體封裝廠通用型機台監控系統(共3項)',
            technologyTransferPatent: [
              '生產製程之虛擬量測系統之信心度的評估方法',
              '雙階段虛擬量測方法',
              '全自動化型虛擬量測的伺服器與系統及方法',
              '量測抽樣方法與其電腦程式產品',
              '預測模型之建模樣本的篩選方法及其電腦程式產品',
              '具有虛擬量測功能的製造執行系統與製造系統',
              '使用具有信心指標之虛擬量測的先進製程控制系統與方法及其電腦程式產品'
            ]
          },
          {
            authorizedParty: '安達通系統 (現更名為群錄系統)',
            authorizingParty: '成大製造所',
            from: '2021-02-21',
            to: '2022-02-22',
            technologyTransfer: '半導體封裝廠通用型機台監控系統(共3項)',
            technologyTransferPatent: [
              '生產製程之虛擬量測系統之信心度的評估方法',
              '雙階段虛擬量測方法',
              '全自動化型虛擬量測的伺服器與系統及方法',
              '量測抽樣方法與其電腦程式產品',
              '預測模型之建模樣本的篩選方法及其電腦程式產品',
              '具有虛擬量測功能的製造執行系統與製造系統',
              '使用具有信心指標之虛擬量測的先進製程控制系統與方法及其電腦程式產品'
            ]
          }
        ],
        project: [
          {
            category: 0,
            from: 1999,
            to: 2000,
            name: '半導體封裝廠電腦整合製造執行系統技術研發（III）- 總計畫',
            support: '國科會'
          },
          {
            category: 0,
            from: 1999,
            to: 2000,
            name: '半導體封裝廠電腦整合製造執行系統技術研發（III）- 總計畫',
            support: '國科會'
          },
          {
            category: 1,
            from: 1999,
            to: 2000,
            name: '半導體封裝廠電腦整合製造執行系統技術研發（III）- 總計畫',
            support: '國科會'
          },
          {
            category: 0,
            from: 1999,
            to: 2000,
            name: '半導體封裝廠電腦整合製造執行系統技術研發（III）- 總計畫',
            support: '國科會'
          }
        ],
        studentAward: [
          {
            award: 'AI CUP 2019 芒果辨識',
            receivedYear: 2019,
            student: [
              {
                degree: 1,
                name: '王大明'
              },
              {
                degree: 0,
                name: '黃小美'
              }
            ]
          },
          {
            award: 'AI CUP 2019 芒果辨識',
            receivedYear: 2019,
            student: [
              {
                degree: 1,
                name: '王大明'
              },
              {
                degree: 0,
                name: '黃小美'
              }
            ]
          },
          {
            award: 'AI CUP 2019 芒果辨識',
            receivedYear: 2020,
            student: [
              {
                degree: 1,
                name: '王大明'
              },
              {
                degree: 0,
                name: '黃小美'
              }
            ]
          }
        ],
        conference: [
          {
            conference: 'PC member, the 1st Workshop on Intelligent Web Technologies',
            hostYear: 2000,
            title: ''
          },
          {
            conference: 'PC member, the 1st Workshop on Intelligent Web Technologies',
            hostYear: 2000,
            title: ''
          }
        ]
      }
    }
  },
  computed: {
    ...mapGetters('language', ['currentLanguage', 'currentLanguageId']),
    ...mapGetters('department', {
      getDepartmentI18nById: 'getI18nById'
    }),
    ...mapGetters('nation', {
      getNationKeyById: 'getKeyById',
      getNationI18nById: 'getI18nById'
    }),
    ...mapGetters('educationDegree', {
      getEducationDegreeI18nById: 'getI18nById'
    }),
    ...mapGetters('projectCategory', {
      getProjectCategoryI18nById: 'getI18nById'
    })
  },
  methods: {
    getTelNumber (tel) {
      if (this.currentLanguage === 'zh-TW') {
        return tel.split(',').join(' 分機 ')
      } else {
        return tel
      }
    },
    sortedConference (tmp) {
      data.conference.hostYear = null
      return tmp.sort((a, b) => {
        return b.hostYear - a.hostYear
      })
    },
    conferenceYear (hostYear) {
      if (data.conference.hostYear === null || data.conference.hostYear > hostYear) {
        data.conference.hostYear = hostYear
        return true
      } else {
        return false
      }
    },
    sortedStudentAward (tmp) {
      data.studentAward.receivedYear = null
      return tmp.sort((a, b) => {
        return b.receivedYear - a.receivedYear
      })
    },
    studentAwardYear (receivedYear) {
      if (data.studentAward.receivedYear === null || data.studentAward.receivedYear > receivedYear) {
        data.studentAward.receivedYear = receivedYear
        return true
      } else {
        return false
      }
    },
    sortedAward (tmp) {
      data.award.receivedYear = null
      return tmp.sort((a, b) => {
        return b.receivedYear - a.receivedYear
      })
    },
    awardYear (receivedYear) {
      if (data.award.receivedYear === null || data.award.receivedYear > receivedYear) {
        data.award.receivedYear = receivedYear
        return true
      } else {
        return false
      }
    },
    sortedProject (tmp) {
      data.project.category = null
      return tmp.sort((a, b) => {
        return a.category - b.category
      })
    },
    projectCategory (category) {
      if (data.project.category === null || data.project.category !== category) {
        data.project.category = category
        return true
      } else {
        return false
      }
    },
    sortedPublication (publication) {
      return publication.sort((a, b) => {
        if (a.category !== b.category) {
          return b.category - a.category
        } else if (a.refereed !== b.refereed) {
          return (a.refereed === true) ? 1 : -1
        } else if (a.international !== b.international) {
          return (a.international === true) ? 1 : -1
        } else if (a.issueYear !== b.issueYear) {
          return b.issueYear - a.issueYear
        } else {
          return 0
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/break-point.scss";

// [ variable ]
$card-gap: 32px;

.content {
  // [ layout ]
  display: block;

  // [ position ]
  max-width: 1220px;
  width: 100%;
  margin: {
    left: auto;
    right: auto;
  }
  padding: {
    left: 24px;
    right: 24px;
    bottom: 30px;
    top: 100px;
  }

  @media screen and (min-width: $break-point-md) {
    width: 80%;
    padding: {
      left: 0;
      right: 0;
    }
  }
}

%time-element {
  // [ layout ]
  display: flex;
  align-items: center;
  justify-content: center;

  // [ position ]
  padding: {
    top: 4px;
    bottom: 4px;
    left: 12px;
    right: 12px;
  }
  border-radius: 24px;
  border: 1px solid #757575;

  // [ skin ]
  font-size: 14px;
  line-height: 16px;

  @media screen and (min-width: $break-point-sm) {
    // [ position ]
    padding: {
      top: 8px;
      bottom: 8px;
      left: 24px;
      right: 24px;
    }

    // [ skin ]
    font-size: 16px;
  }
}

%gray-element {
  // [ layout ]
  display: flex;
  align-self: center;

  // [ position ]
  padding: {
    top: 4px;
    bottom: 4px;
    left: 12px;
    right: 12px;
  }
  border-radius: 24px;

  // [ skin ]
  background-color: #ededed;
  color: #adacad;
  font-size: 14px;
  line-height: 18px;

  @media screen and (min-width: $break-point-sm) {
    // [ position ]
    padding: {
      top: 8px;
      bottom: 8px;
      left: 24px;
      right: 24px;
    }

    // [ skin ]
    font-size: 16px;
  }
}

%blue-element {
  // [ layout ]
  display: flex;
  align-self: center;

  // [ position ]
  padding: {
    top: 4px;
    bottom: 4px;
    left: 12px;
    right: 12px;
  }
  border-radius: 24px;

  // [ skin ]
  background-color: #eaeff7;
  color: #8caae2;
  font-size: 14px;
  line-height: 18px;

  @media screen and (min-width: $break-point-sm) {
    // [ position ]
    padding: {
      top: 8px;
      bottom: 8px;
      left: 24px;
      right: 24px;
    }

    // [ skin ]
    font-size: 16px;
  }
}

%till-element {
  // [ layout ]
  display: flex;
  align-self: center;

  // [ position ]
  height: 0px;
  width: 24px;
  border: 1px solid #757575;
}

.profile {
  // [ layout ]
  display: grid;
  grid-template-areas:
      'photo'
      'name'
      'department'
      'mail'
      'office-address'
      'office-tel'
      'fax'
      'lab'
      'lab-tel'
      'personal-web'
      'specialty';
  row-gap: $card-gap;

  // [ position ]
  margin: {
    top: 40px;
    bottom: 64px;
  }

  @media screen and (min-width: $break-point-md) {
    grid-template: {
      areas:
        'photo          name'
        'photo          department'
        'mail           mail'
        'office-address office-address'
        'office-tel     office-tel'
        'fax            fax'
        'lab            lab'
        'lab-tel        lab-tel'
        'personal-web   personal-web'
        'specialty      specialty';
      columns: 400px auto;
    }
  }

  @media screen and (min-width: $break-point-lg) {
    grid-template: {
      areas:
        'name           name '
        'department     photo'
        'mail           photo'
        'office-address photo'
        'office-tel     photo'
        'fax            photo'
        'lab            photo'
        'lab-tel        photo'
        'personal-web   photo'
        'specialty      specialty';
      columns: 1fr 500px;
    }
  }

  > .photo {
    // [ layout ]
    grid-area: photo;
    display: flex;
    justify-self: center;
    width: 80%;
    height: auto;
    border-radius: 50%;

    // [ skin ]
    background-color: rgba(0, 0, 0, .1);

    @media screen and (min-width: $break-point-sm) {
      width: 350px;
      height: 350px;
    }

    @media screen and (min-width: $break-point-lg) {
      // [ layout ]
      justify-self: flex-end;
    }
  }

  > .name {
    // [ layout ]
    display: flex;
    grid-area: name;
    flex-wrap: wrap;
    row-gap: 16px;
    column-gap: 16px;

    > h2 {
      // [ layout ]
      display: flex;
      align-self: flex-end;
      justify-content: center;

      // [ position ]
      width: 100%;

      // [ skin ]
      line-height: 22px;
      font: {
        size: 22px;
        weight: bold;
      }

      @media screen and (min-width: $break-point-md) {
        width: fit-content;
        justify-content: none;
      }

      @media screen and (min-width: $break-point-lg) {
        align-self: flex-end;
      }
    }

    > p {
      // [ layout ]
      display: flex;
      align-self: flex-end;
      justify-content: center;

      // [ position ]
      width: 100%;

      // [ skin ]
      line-height: 16px;
      font-size: 16px;

      @media screen and (min-width: $break-point-md) {
        width: fit-content;
        justify-content: none;
      }
    }
  }

  .department {
    // [ layout ]
    grid-area: department;
    display: flex;
    row-gap: 8px;
    column-gap: 8px;
    justify-content: center;

    @media screen and (min-width: $break-point-md) {
      justify-content: flex-start;
    }

    > p {
      // [ layout ]
      display: flex;
      align-items: center;
      justify-content: center;

      // [ position ]
      height: 28px;
      min-width: 72px;
      padding: {
        top: 7px;
        bottom: 7px;
        left: 14px;
        right: 14px;
      }
      border-radius: 12px;

      // [ skin ]
      line-height: 14px;
      font-size: 14px;
      color: white;
      background-color: #8caae2;
    }
  }

  %profile-element {
    // [ layout ]
    display: grid;
    grid-template: {
      areas: 'img title text';
      columns: 30px auto auto;
    }
    column-gap: 2px;
    justify-content: flex-start;

    // [ position ]
    width: 100%;

    @media screen and (min-width: $break-point-sm) {
      grid-template-columns: 42px auto auto;
      column-gap: 8px;
    }

    > img {
      // [ layout ]
      display: block;
      grid-area: img;

      // [ position ]
      height: auto;
      width: 20px;

      // [ skin ]
      object-fit: contain;
      filter: invert( 80% ) sepia( 77% ) saturate( 2862% ) brightness( 89% ) hue-rotate( 183deg ) contrast( 98% );
    }

    > .title {
      // [ layout ]
      display: block;
      grid-area: title;

      // [ position ]
      margin-right: 4px;

      // [ skin ]
      font-size: 16px;
      line-height: 18px;
    }

    > .text {
      // [ layout ]
      display: block;
      grid-area: text;

      // [ skin ]
      font-size: 16px;
      line-height: 18px;
    }
  }

  > .mail {
    @extend %profile-element;
    // [ layout ]
    grid-area: mail;

    > p {
      word-break: break-all;
    }
  }

  > .office-address {
    // [ layout ]
    grid-area: office-address;

    @extend %profile-element;
  }

  > .office-tel {
    // [ layout ]
    grid-area: office-tel;

    @extend %profile-element;
  }

  > .fax {
    // [ layout ]
    grid-area: fax;

    @extend %profile-element;
  }

  > .lab-tel {
    // [ layout ]
    grid-area: lab-tel;

    @extend %profile-element;
  }

  > .personal-web {
    // [ layout ]
    grid-area: personal-web;

    @extend %profile-element;

    > .text {
      // [ skin ]
      word-break: break-all;
    }
  }

  > .lab {
    // [ layout ]
    display: grid;
    grid-template: {
      areas:
        'img title       lab-name'
        '.   lab-address lab-address';
      columns: 30px auto auto;
    }
    column-gap: 2px;
    row-gap: 2px;
    justify-content: flex-start;

    // [ position ]
    width: 100%;

    @media screen and (min-width: $break-point-sm) {
      grid-template-columns: 42px auto auto;
      column-gap: 8px;
    }

    > img {
      // [ layout ]
      display: block;
      grid-area: img;

      // [ position ]
      height: auto;
      width: 20px;

      // [ skin ]
      filter: invert( 80% ) sepia( 77% ) saturate( 2862% ) brightness( 89% ) hue-rotate( 183deg ) contrast( 98% );
    }

    > .title {
      // [ layout ]
      display: block;
      grid-area: title;

      // [ skin ]
      font-size: 16px;
      line-height: 18px;
    }

    > .lab-name {
      // [ layout ]
      display: block;
      grid-area: lab-name;

      // [ skin ]
      font-size: 16px;
      line-height: 18px;
    }

    > a {
      // [ skin ]
      text-decoration: underline;
    }

    > .lab-address {
      // [ layout ]
      display: block;
      grid-area: lab-address;

      // [ skin ]
      font-size: 14px;
      line-height: 14px;
      color: #757575;
    };
  }

  > .specialty {
    // [ layout ]
    display: grid;
    grid: {
      area: specialty;
      template: {
        areas: 'img title specialty';
        columns: 30px auto auto;
      }
    }
    column-gap: 2px;
    justify-content: flex-start;

    // [ position ]
    width: 100%;

    @media screen and (min-width: $break-point-sm) {
      grid-template-columns: 42px auto auto;
      column-gap: 8px;
    }

    > img {
      // [ layout ]
      display: block;
      grid-area: img;

      // [ position ]
      height: auto;
      width: 20px;

      // [ skin ]
      object-fit: contain;
      filter: invert( 80% ) sepia( 77% ) saturate( 2862% ) brightness( 89% ) hue-rotate( 183deg ) contrast( 98% );
    }

    > .title {
      // [ layout ]
      display: block;
      grid-area: title;

      // [ skin ]
      font-size: 16px;
      line-height: 18px;
    }

    > section {
      // [ layout ]
      display: flex;
      flex-wrap: wrap;
      grid-area: specialty;
      column-gap: 8px;
      row-gap: 12px;

      > p {
        @extend %gray-element;
      };
    }
  }
}

.education {
  // [ layout ]
  display: flex;
  flex-wrap: wrap;
  row-gap: $card-gap;

  // [ position ]
  margin: {
    top: 48px;
    bottom: 48px;
  }

  > .card {
    // [ layout ]
    display: grid;
    grid-template: {
      areas:
      'time'
      'info';
      columns: 100%;
    }
    row-gap: 8px;
    align-items: center;
    justify-content: flex-start;

    // [ position ]
    width: 100%;

    @media screen and (min-width: $break-point-md) {
      grid-template: {
        areas: 'time info';
        columns: auto auto;
      }
      column-gap: 50px;
    }

    > .time {
      // [ layout ]
      grid-area: time;
      display: flex;
      justify-content: center;
      column-gap: 16px;

      // [ position ]
      width: 100%;

      @media screen and (min-width: $break-point-sm) {
        justify-content: flex-start;
      }

      > .from {
        @extend %time-element;

        // [ layout ]
        grid-area: from;
      }

      > .to {
        @extend %time-element;

        // [ layout ]
        grid-area: to;
      }

      > hr {
        @extend %till-element;

        // [ layout ]
        grid-area: till;
      }
    }

    > .info {
      // [ layout ]
      display: flex;
      flex-wrap: wrap;
      grid-area: info;
      row-gap: 8px;
      justify-content: center;
      column-gap: 16px;

      // [ position ]
      width: 100%;

      @media screen and (min-width: $break-point-sm) {
        justify-content: flex-start;
      }

      > img {
        // [ layout ]
        display: flex;
        align-self: center;

        // [ position ]
        height: 30px;
        width: 30px;
      }

      > .school {
        @extend %gray-element;
      }

      > .major {
        @extend %gray-element;
      }

      > .degree {
        @extend %blue-element;
      }
    }
  }
}

.experience {
  // [ layout ]
  display: flex;
  flex-wrap: wrap;
  row-gap: $card-gap;

  // [ position ]
  margin: {
    top: 48px;
    bottom: 48px;
  }

  > .card {
    // [ layout ]
    display: grid;
    grid-template: {
      areas:
      'time'
      'info';
      columns: 100%;
    }
    row-gap: 8px;
    align-items: center;
    justify-content: flex-start;

    // [ position ]
    width: 100%;

    > .time {
      // [ layout ]
      grid-area: time;
      display: flex;
      justify-content: center;
      column-gap: 16px;

      // [ position ]
      width: 100%;

      @media screen and (min-width: $break-point-sm) {
        justify-content: flex-start;
      }

      > .from {
        @extend %time-element;

        // [ layout ]
        grid-area: from;
      }

      > .to {
        @extend %time-element;

        // [ layout ]
        grid-area: to;
      }

      > hr {
        @extend %till-element;

        // [ layout ]
        grid-area: till;
      }
    }

    > .info {
      // [ layout ]
      display: flex;
      flex-wrap: wrap;
      grid-area: info;
      row-gap: 8px;
      justify-content: center;
      column-gap: 16px;

      // [ position ]
      width: 100%;

      @media screen and (min-width: $break-point-sm) {
        justify-content: flex-start;
      }

      > .organization {
        @extend %gray-element;

        // [ layout ]
        grid-area: organization;
      }

      > .department {
        @extend %gray-element;

        // [ layout ]
        grid-area: department;
      }

      > .title {
        @extend %blue-element;

        // [ layout ]
        grid-area: title;
      }
    }
  }
}

.award {
  // [ layout ]
  display: flex;
  flex-wrap: wrap;
  row-gap: 24px;

  // [ layout ]
  margin: {
    top: 48px;
    bottom: 48px;
  }

  > h4 {
    // [ position ]
    width: 100%;

    // [ skin ]
    font: {
      size: 16px;
      weight: bold;
    }
    line-height: 16px;
  }

  > .card {
    // [ layout ]
    display: flex;
    justify-content: flex-start;
    align-content: center;
    column-gap: 24px;

    // [ position ]
    width: 100%;
    padding: {
      top: 16px;
      bottom: 16px;
      left: 24px;
      right: 24px;
    }
    border-radius: 8px;

    // [ skin ]
    background-color: white;
    box-shadow: 0 1px 24px #dbdbdb, 0 8px 12px #ccc;

    > img {
      // [ layout ]
      display: flex;
      align-self: center;

      // [ position ]
      height: 30px;
      widows: 30px;
    }

    > p {
      // [ layout ]
      display: flex;
      align-self: center;

      // [ skin ]
      font-size: 16px;
      line-height: 24px;
    }
  }
}

.publication {
  // [ layout ]
  display: flex;
  flex-wrap: wrap;
  row-gap: 24px;

  // [ layout ]
  margin: {
    top: 48px;
    bottom: 48px;
  }

  > h4 {
    // [ position ]
    width: 100%;

    // [ skin ]
    font: {
      size: 16px;
      weight: bold;
    }
    line-height: 16px;
  }

  > .card {
    // [ layout ]
    display: grid;
    grid-template-areas:
        'img title'
        'img authors';
    justify-content: flex-start;
    align-content: center;
    column-gap: 24px;

    // [ position ]
    width: 100%;
    padding: {
      top: 16px;
      bottom: 16px;
      left: 24px;
      right: 24px;
    }
    border-radius: 8px;

    // [ skin ]
    background-color: white;
    box-shadow: 0 1px 24px #dbdbdb, 0 8px 12px #ccc;

    > img {
      // [ layout ]
      grid-area: img;
      display: flex;
      align-self: center;

      // [ position ]
      height: 30px;
      widows: 30px;
    }

    > p {
      // [ layout ]
      display: flex;
      align-self: center;

      // [ skin ]
      font-size: 16px;
      line-height: 24px;
    }

    > .title {
      // [ layout ]
      grid-area: title;
    }

    > .authors {
      // [ layout ]
      grid-area: authors;
    }
  }
}

.patent {
  // [ layout ]
  display: flex;
  flex-wrap: wrap;
  row-gap: 24px;

  // [ layout ]
  margin: {
    top: 48px;
    bottom: 48px;
  }

  > h4 {
    // [ position ]
    width: 100%;

    // [ skin ]
    font: {
      size: 16px;
      weight: bold;
    }
    line-height: 16px;
  }

  > .card {
    // [ layout ]
    display: grid;
    grid-template: {
      areas:
        'name-title     name'
        'nation-title   nation'
        'owner-title    owner'
        'inventor-title inventor'
        'number-title   number'
        'application-date-title application-date'
        'duration-title duration';
      columns: max-content auto;
    }
    justify-content: flex-start;
    align-content: center;
    row-gap: 16px;
    column-gap: 24px;

    // [ position ]
    width: 100%;
    margin-bottom: 32px;

    @media screen and (min-width: $break-point-sm) {
      // [ position ]
      padding-left: 32px;
    }

    > h5 {
      // [ layout ]
      display: flex;
      align-self: center;

      // [ skin ]
      font: {
        size: 16px;
        weight: 500;
      }
      line-height: 16px;
    }

    > p {
      // [ layout ]
      display: flex;
      align-self: center;

      // [ skin ]
      font-size: 16px;
      line-height: 24px;
    }

    > .nation {
      // [ layout ]
      grid-area: nation;
      display: flex;
      align-items: center;
      column-gap: 8px;

      > img {
        // [ position ]
        height: 24px;
        width: 24x;
      }

      > p {
        // [ layout ]
        display: block;

        // [ skin ]
        font-size: 16px;
        line-height: 24px;
      }
    }

    > .duration {
      // [ layout ]
      grid-area: duration;
      display: grid;
      grid-template-columns: repeat(3, auto);
      justify-content: flex-start;
      column-gap: 16px;

      > p {
        @extend %time-element;
      }

      > hr {
        @extend %till-element;
      }
    }
  }
}

.technology-transfer {
  // [ layout ]
  display: flex;
  flex-wrap: wrap;
  row-gap: 24px;

  // [ layout ]
  margin: {
    top: 48px;
    bottom: 48px;
  }

  > h4 {
    // [ position ]
    width: 100%;

    // [ skin ]
    font: {
      size: 16px;
      weight: bold;
    }
    line-height: 16px;
  }

  > .card {
    // [ layout ]
    display: grid;
    grid-template: {
      areas:
        'name-title        name'
        'patent-title      patent'
        'authorized-title  authorized'
        'authorizing-title authorizing'
        'duration-title duration';
      columns: max-content auto;
    }
    justify-content: flex-start;
    align-content: center;
    row-gap: 16px;
    column-gap: 24px;

    // [ position ]
    width: 100%;
    margin-bottom: 32px;

    @media screen and (min-width: $break-point-sm) {
      padding-left: 32px;
    }

    > h5 {
      // [ layout ]
      display: flex;
      align-self: center;

      // [ skin ]
      font: {
        size: 16px;
        weight: 500;
      }
      line-height: 16px;
    }

    > p {
      // [ layout ]
      display: flex;
      align-self: center;

      // [ skin ]
      font-size: 16px;
      line-height: 24px;
    }

    > .technology-transfer-patent {
      // [ layout ]
      grid-area: patent;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      row-gap: 8px;

      > p {
        // [ layout ]
        display: block;

        // [ position ]
        width: 100%;

        // [ skin ]
        font-size: 16px;
        line-height: 24px;

        &::before {
          // [ layout ]
          display: inline-block;

          // [ position ]
          width: 8px;
          height: 8px;

          // [ skin ]
          border: {
            color: rgba(0, 0, 0, .6);
            style: solid;
            width: 4px;
            radius: 50%;
          }
          margin-right: 16px;
          content: '';
        }
      }
    }

    > .duration {
      // [ layout ]
      grid-area: duration;
      display: grid;
      grid-template-columns: repeat(3, auto);
      justify-content: flex-start;
      column-gap: 16px;

      > p {
        @extend %time-element;
      }

      > hr {
        @extend %till-element;
      }
    }
  }
}

.project {
  // [ layout ]
  display: flex;
  flex-wrap: wrap;
  row-gap: 24px;

  // [ layout ]
  margin: {
    top: 48px;
    bottom: 48px;
  }

  > h4 {
    // [ position ]
    width: 100%;

    // [ skin ]
    font: {
      size: 16px;
      weight: bold;
    }
    line-height: 16px;
  }

  > .card {
    // [ layout ]
    display: grid;
    grid-template: {
      areas:
        'name-title        name'
        'duration-title duration'
        'support-title  support';
      columns: max-content auto;
    }
    justify-content: flex-start;
    align-content: center;
    row-gap: 16px;
    column-gap: 24px;

    // [ position ]
    width: 100%;
    margin-bottom: 32px;

    @media screen and (min-width: $break-point-sm) {
      padding-left: 32px;
    }

    > h5 {
      // [ layout ]
      display: flex;
      align-self: center;

      // [ skin ]
      font: {
        size: 16px;
        weight: 500;
      }
      line-height: 16px;
    }

    > p {
      // [ layout ]
      display: flex;
      align-self: center;

      // [ skin ]
      font-size: 16px;
      line-height: 24px;
    }

    > .duration {
      // [ layout ]
      grid-area: duration;
      display: grid;
      grid-template-columns: repeat(3, auto);
      justify-content: flex-start;
      column-gap: 16px;

      > p {
        @extend %time-element;
      }

      > hr {
        @extend %till-element;
      }
    }
  }
}

.student-award {
  // [ layout ]
  display: flex;
  flex-wrap: wrap;
  row-gap: 24px;

  // [ layout ]
  margin: {
    top: 48px;
    bottom: 48px;
  }

  > h4 {
    // [ position ]
    width: 100%;

    // [ skin ]
    font: {
      size: 16px;
      weight: bold;
    }
    line-height: 16px;
  }

  > .card {
    // [ layout ]
    display: grid;
    grid-template: {
      areas:
        'award-img   award-text'
        '.           line'
        'student-img student-text';
      columns: 50px auto;
    }
    row-gap: 12px;

    // [ position ]
    width: 100%;
    padding: {
      top: 16px;
      bottom: 16px;
      left: 24px;
      right: 24px;
    }
    border-radius: 8px;

    // [ skin ]
    background-color: white;
    box-shadow: 0 1px 24px #dbdbdb, 0 8px 12px #ccc;

    > img {
      // [ layout ]
      display: flex;
      align-self: center;

      // [ position ]
      height: 30px;
      widows: 30px;
    }

    > .award-text {
      // [ layout ]
      display: flex;
      align-self: center;

      // [ skin ]
      font-size: 16px;
      line-height: 24px;
    }

    > .award-img {
      // [ layout ]
      grid-area: award-img;
    }

    > .award-text {
      // [ layout ]
      grid-area: award-text;
    }

    > hr {
      // [ layout ]
      grid-area: line;

      // [ position ]
      width: 100%;
      height: 0;
      border: .5px solid #c4c4c4;
    }

    > .student-img {
      // [ layout ]
      grid-area: student-img;
    }

    > .student-text {
      // [ layout ]
      display: flex;
      flex-wrap: wrap;
      grid-area: student-text;
      column-gap: 16px;

      > p {
        // [ skin ]
        font-size: 16px;
        line-height: 24px;
      }
    }
  }
}

.conference {
  // [ layout ]
  display: flex;
  flex-wrap: wrap;
  row-gap: 24px;

  // [ layout ]
  margin: {
    top: 48px;
    bottom: 48px;
  }

  > h4 {
    // [ position ]
    width: 100%;

    // [ skin ]
    font: {
      size: 16px;
      weight: bold;
    }
    line-height: 16px;
  }

  > .card {
    // [ layout ]
    display: flex;
    justify-content: flex-start;
    align-content: center;
    column-gap: 24px;

    // [ position ]
    width: 100%;
    padding: {
      top: 16px;
      bottom: 16px;
      left: 24px;
      right: 24px;
    }
    border-radius: 8px;

    // [ skin ]
    background-color: white;
    box-shadow: 0 1px 24px #dbdbdb, 0 8px 12px #ccc;

    > img {
      // [ layout ]
      display: flex;
      align-self: center;

      // [ position ]
      height: 30px;
      widows: 30px;
    }

    > p {
      // [ layout ]
      display: flex;
      align-self: center;

      // [ skin ]
      font-size: 16px;
      line-height: 24px;
    }
  }
}
</style>
