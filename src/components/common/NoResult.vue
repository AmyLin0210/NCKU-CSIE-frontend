<template lang='pug'>
section.no-result
  img(
    v-if="withImage"
    src="@/assets/image/icon/no-result.png"
  )
  p {{staticText[currentLanguage].noResult}}
  article(v-if="withImage")
    p {{staticText[currentLanguage].start}}
    a(:href="`/?languageId=${currentLanguageId}`") {{staticText[currentLanguage].link}}
    p {{staticText[currentLanguage].end}}
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'NoResult',
  props: {
    withImage: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      staticText: {
        'zh-TW': {
          noResult: '查無結果',
          start: '變更篩選器或回到',
          link: '首頁',
          end: ''
        },
        'en-US': {
          noResult: 'No Result',
          start: 'Try changing the filters or return to the ',
          link: 'home page',
          end: '.'
        }
      }
    }
  },
  computed: {
    ...mapGetters('language', ['currentLanguage', 'currentLanguageId'])
  }
}
</script>

<style scoped lang='scss'>
@import "@/assets/scss/break-point.scss";

.no-result {
  // [ layout ]
  display: block;
  margin: {
    top: 20px;
    bottom: 20px;
  }

  > img {
    // [ layout ]
    display: block;

    // [ position ]
    height: 64px;
    width: auto;
    margin: {
      left: auto;
      right: auto;
      bottom: 20px;
    }
  }

  > p {
    // [ layout ]
    display: block;

    // [ position ]
    line-height: 16px;
    height: 16px;
    margin: {
      left: auto;
      right: auto;
    }

    // [ skin ]
    color: #adacad;
    font-size: 16px;
    text-align: center;
  }

  > article {
    // [ layout ]
    display: flex;
    justify-content: center;

    // [ position ]
    margin: {
      top: 10px;
      bottom: 10px;
    }

    > p, a{
      // [ position ]
      line-height: 16px;
      height: 16px;

      // [ skin ]
      color: #adacad;
      font-size: 16px;
    }

    > a {
      // [ skin ]
      text-decoration: underline;
    }
  };
}
</style>
