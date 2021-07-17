<i18n>
{
  "zh-TW": {
    "title": "首頁",
  },
  "en-US": {
    "title": "Home"
  }
}
</i18n>

<template lang="pug">
p {{i18n[currentLanguage].title}}
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'content',
  data () {
    return {
      i18n: {
        'zh-TW': {
          title: '首頁'
        },
        'en-US': {
          title: 'Home'
        }
      }
    }
  },
  computed: {
    ...mapGetters('language', ['currentLanguage'])
  },
  components: {}
}
</script>

<style scoped lang="scss">
</style>
