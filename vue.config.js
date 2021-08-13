const path = require('path')

module.exports = {
  pages: {
    index: {
      entry: 'src/pages/index/main.js',
      filename: 'html/home/index.html',
      title: '首頁'
    },
    notFound: {
      entry: 'src/pages/error/not-found/main.js',
      filename: 'html/error/not-found.html',
      title: '查無此頁'
    },
    about: {
      entry: 'src/pages/about/index/main.js',
      filename: 'html/about/index.html',
      title: '關於本系'
    },
    'about/intro': {
      entry: 'src/pages/about/intro/main.js',
      filename: 'html/about/intro.html',
      title: '系所介紹'
    },
    'about/contact': {
      entry: 'src/pages/about/contact/main.js',
      filename: 'html/about/contact.html',
      title: '聯絡我們'
    },
    announcement: {
      entry: 'src/pages/announcement/index/main.js',
      filename: 'html/announcement/index.html',
      title: '系所公告'
    },
    'announcement/all': {
      entry: 'src/pages/announcement/all/main.js',
      filename: 'html/announcement/all.html',
      title: '所有公告'
    },
    'announcement/activity': {
      entry: 'src/pages/announcement/activity/main.js',
      filename: 'html/announcement/activity.html',
      title: '活動公告'
    },
    student: {
      entry: 'src/pages/student/index/main.js',
      filename: 'html/student/index.html',
      title: '學生事務'
    },
    research: {
      entry: 'src/pages/research/index/main.js',
      filename: 'html/research/index.html',
      title: '學術研究'
    },
    'research/researchGroup': {
      entry: 'src/pages/research/researchGroup/main.js',
      filename: 'html/research/researchGroup.html',
      title: '研究群'
    },
    'research/center': {
      entry: 'src/pages/research/center/main.js',
      filename: 'html/research/center.html',
      title: '研究中心'
    },
    resource: {
      entry: 'src/pages/resource/index/main.js',
      filename: 'html/resource/index.html',
      title: '相關服務'
    },
    'resource/link': {
      entry: 'src/pages/resource/link/main.js',
      filename: 'html/resource/link.html',
      title: '其他連結'
    },
    'resource/venue': {
      entry: 'src/pages/resource/venue/main.js',
      filename: 'html/resource/venue.html',
      title: '場地租借'
    },
    'resource/sitemap': {
      entry: 'src/pages/resource/sitemap/main.js',
      filename: 'html/resource/sitemap.html',
      title: '網站地圖'
    }
  },
  devServer: {
    publicPath: ''
  },
  chainWebpack: config => {
    config.module
      .rule('i18n-resource')
      .test(/\.(json5?|ya?ml)$/)
      .include.add(path.resolve(__dirname, './src/locales'))
      .end()
      .type('javascript/auto')
      .use('i18n-resource')
      .loader('@intlify/vue-i18n-loader')
    config.module
      .rule('i18n')
      .resourceQuery(/blockType=i18n/)
      .type('javascript/auto')
      .use('i18n')
      .loader('@intlify/vue-i18n-loader')
  }
}
