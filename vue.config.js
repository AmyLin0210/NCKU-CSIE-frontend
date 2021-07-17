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
    announcement: {
      entry: 'src/pages/announcement/index/main.js',
      filename: 'html/announcement/index.html',
      title: '系所公告'
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
    resource: {
      entry: 'src/pages/resource/index/main.js',
      filename: 'html/resource/index.html',
      title: '相關服務'
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
