const state = {
  about: {
    header: {
      'zh-TW': {
        title: '關於本系'
      },
      'en-US': {
        title: 'About'
      },
      href: '/about'
    },
    list: {
      intro: {
        'zh-TW': {
          title: '系所介紹',
          detail: '系所的歷史沿革、教育目標與發展方向'
        },
        'en-US': {
          title: 'Introduction',
          detail: 'Department history, education goals and developing directions'
        },
        href: '/about/intro'
      },
      faculty: {
        'zh-TW': {
          title: '師資陣容',
          detail: '系所的教職人員、隸屬部門與研究類群'
        },
        'en-US': {
          title: 'Faculty',
          detail: 'Faculty, belonging department and research groups'
        },
        href: '/about/faculty'
      },
      staff: {
        'zh-TW': {
          title: '系辦成員',
          detail: '承辦業務與聯絡的主要人員'
        },
        'en-US': {
          title: 'Staff',
          detail: 'Administrative support, public relations and finance'
        },
        href: '/about/staff'
      },
      award: {
        'zh-TW': {
          title: '榮譽事蹟',
          detail: '包含競賽成績、獲頒獎項與優秀的研究成果等'
        },
        'en-US': {
          title: 'Award',
          detail: 'Competition results, receiving awards and excellent research publications'
        },
        href: '/about/award'
      },
      rule: {
        'zh-TW': {
          title: '法規彙編',
          detail: '系所規範、畢業辦法與表單文件'
        },
        'en-US': {
          title: 'Rule',
          detail: 'Rules of department, graduation requirements and documents'
        },
        href: '/about/rule'
      },
      contact: {
        'zh-TW': {
          title: '聯絡我們',
          detail: '提供自行開車、搭乘火車及高鐵三種不同的交通資訊'
        },
        'en-US': {
          title: 'Contact Us',
          detail: 'Providing three different traffic information, including self-driving, train and THSR'
        },
        href: '/about/contact'
      }
    }
  },
  announcement: {
    header: {
      'zh-TW': {
        title: '系所公告'
      },
      'en-US': {
        title: 'Announcement'
      },
      href: '/announcement'
    },
    list: {
      all: {
        'zh-TW': {
          title: '全部公告',
          detail: '系所及學校重要資訊公告，不分類別'
        },
        'en-US': {
          title: 'All',
          detail: 'Announcements of department and university'
        },
        href: '/announcement/all'
      },
      activity: {
        'zh-TW': {
          title: '活動公告',
          detail: '系所舉辦的研討會、演講、競賽及展覽'
        },
        'en-US': {
          title: 'Activity',
          detail: 'Conference, speech, competitions and exhibition held by department'
        },
        href: '/announcement/activity'
      },
      recruitment: {
        'zh-TW': {
          title: '徵才資訊',
          detail: '企業及系所招聘人才資訊'
        },
        'en-US': {
          title: 'Recruitment',
          detail: 'Recruitment information'
        },
        href: '/announcement/recruitment'
      },
      admission: {
        'zh-TW': {
          title: '招生資訊',
          detail: '系所招生資訊'
        },
        'en-US': {
          title: 'Admission',
          detail: 'Admissions information'
        },
        href: '/announcement/admission'
      }
    }
  },
  student: {
    header: {
      'zh-TW': {
        title: '學生事務'
      },
      'en-US': {
        title: 'Student'
      },
      href: '/student'
    },
    list: {
      highSchool: {
        'zh-TW': {
          title: '高中生專區',
          detail: '高中生專區'
        },
        'en-US': {
          title: 'For High School Students',
          detail: 'For high school students'
        },
        href: '/student/high-school'
      },
      college: {
        'zh-TW': {
          title: '大學部',
          detail: '資訊系大學部的相關資訊，包含課程、實習、獎學金等'
        },
        'en-US': {
          title: 'College',
          detail: 'Information related to undergraduated students, including course, internship, scholarship and more'
        },
        href: '/student/college'
      },
      master: {
        'zh-TW': {
          title: '碩士',
          detail: '資訊所碩士班的相關資訊，包含課程、實習、獎學金等'
        },
        'en-US': {
          title: 'Master',
          detail: 'Information related to graduated students, including course, internship, scholarship and more'
        },
        href: '/student/master'
      },
      phd: {
        'zh-TW': {
          title: '博士',
          detail: '資訊所博士班的相關資訊，包含課程、實習、獎學金等'
        },
        'en-US': {
          title: 'Ph.D',
          detail: 'Information related to Ph.D students, including course, internship, scholarship and more'
        },
        href: '/student/phd'
      },
      international: {
        'zh-TW': {
          title: '國際合作交流',
          detail: '國際合作的相關資訊，包含交換、MOU等'
        },
        'en-US': {
          title: 'International',
          detail: 'Information about international activity'
        },
        href: '/student/international'
      },
      studentAssociation: {
        'zh-TW': {
          title: '系學會',
          detail: '國立成功大學資訊工程學系系學會'
        },
        'en-US': {
          title: 'Student Association',
          detail: 'The student association of NCKU CSIE'
        },
        href: '/student/student-association'
      }
    }
  },
  research: {
    header: {
      'zh-TW': {
        title: '學術研究'
      },
      'en-US': {
        title: 'Research'
      },
      href: '/research'
    },
    list: {
      lab: {
        'zh-TW': {
          title: '實驗室',
          detail: '資訊所研究實驗室列表'
        },
        'en-US': {
          title: 'Laboratories',
          detail: 'List of all laboratories of department'
        },
        href: '/research/lab'
      },
      researchGroup: {
        'zh-TW': {
          title: '研究群',
          detail: '研究群'
        },
        'en-US': {
          title: 'Research Group',
          detail: 'Research Group'
        },
        href: '/research/research-group'
      },
      center: {
        'zh-TW': {
          title: '研究中心',
          detail: '成功大學資訊系相關研究中心'
        },
        'en-US': {
          title: 'Center',
          detail: 'List of all research center'
        },
        href: '/research/center'
      }
    }
  },
  resource: {
    header: {
      'zh-TW': {
        title: '相關服務'
      },
      'en-US': {
        title: 'Resource'
      },
      href: '/resource'
    },
    list: {
      venue: {
        'zh-TW': {
          title: '場地租借',
          detail: '系所租借設備或場地'
        },
        'en-US': {
          title: 'Venue',
          detail: 'Borrow things from department'
        },
        href: '/resource/venue'
      },
      sitemap: {
        'zh-TW': {
          title: '網站地圖',
          detail: '網站空間的概觀'
        },
        'en-US': {
          title: 'Site Map',
          detail: 'Navigation for the website'
        },
        href: '/resource/sitemap'
      },
      alumni: {
        'zh-TW': {
          title: '系友專區',
          detail: '畢業資訊填寫與系友相關資訊'
        },
        'en-US': {
          title: 'Alumni',
          detail: 'Graduation students information'
        },
        href: 'http://www.csie.ncku.edu.tw/classmate/index.php?p=phdmenu'
      },
      link: {
        'zh-TW': {
          title: '其他連結',
          detail: '系上相關網站連結'
        },
        'en-US': {
          title: 'Links',
          detail: 'Related links'
        },
        href: '/resource/link'
      }
    }
  },
  attachment: {
    header: {
      'zh-TW': {
        title: '常用文件'
      },
      'en-US': {
        title: 'Attachment'
      },
      href: '/attachment'
    },
    list: {}
  }
}

const getters = {
  allSiteMap: state => {
    return state
  },
  siteMapHeader: state => {
    return Object.keys(state)
  },
  siteInfoByPage: state => {
    return (obj) => {
      return Object.keys(state[obj.page].list).map(key => {
        const tmp = state[obj.page].list[key]
        return {
          title: tmp[obj.language].title,
          detail: tmp[obj.language].detail,
          href: (tmp.href[0] === '/') ? `${tmp.href}?languageId=${obj.languageId}` : tmp.href
        }
      })
    }
  }
}

const mutations = {}

const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
