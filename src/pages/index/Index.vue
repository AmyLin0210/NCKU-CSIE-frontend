<template lang="pug">
p {{staticText[currentLanguage].title}}
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'content',
  data () {
    return {
      staticText: {
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
