<template lang="pug">
nav.breadcrumb
  template(
    v-for="(obj, idx) in breadcrumbList()"
    :key="`breadcrumb-${idx}`"
  )
    template(v-if="idx !== breadcrumbList().length - 1")
      a.link(:href="obj.href") {{obj.text}}
      img.arrow(src="@/assets/image/icon/arrow.png")
    p.text(v-else) {{obj.text}}
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'breadcrumb',
  props: {
    route: {
      type: String
    }
  },
  data () {
    return {
      staticText: {
        'zh-TW': {
          home: '首頁'
        },
        'en-US': {
          home: 'Home'
        }
      }
    }
  },
  computed: {
    ...mapGetters('language', ['currentLanguageId', 'currentLanguage']),
    ...mapGetters('siteMap', ['getSiteMap'])
  },
  methods: {
    breadcrumbList () {
      const pages = this.route.split('/')
      const query = `?languageId=${this.currentLanguageId}`
      return pages.map((page, idx) => {
        // Home page
        if (idx === 0) {
          return {
            text: this.staticText[this.currentLanguage].home,
            href: `/${query}`
          }
        // Topic menue page
        } else if (idx === 1) {
          return {
            text: this.getSiteMap[page].header[this.currentLanguage].title,
            href: `/${page}/${query}`
          }
        // Current page
        } else {
          return {
            text: this.getSiteMap[pages[1]].subclass[page][this.currentLanguage].title,
            href: `${this.route}/${query}`
          }
        }
      })
    }
  }
}
</script>

<style scoped lang='scss'>
@import "@/assets/scss/break-point.scss";

.breadcrumb {
  // [ dispaly ]
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  // [ position ]
  height: 100px;
  width: 100%;
  margin: {
    left: auto;
    right: auto;
  }

  // [ skin ]
  background-color: transparent;
}

.link {
  // [ layout ]
  display: inline-block;

  // [ position ]
  width: fit-content;

  // [ skin ]
  color: #213262;
  background-color: transparent;
  line-height: normal;
  font-size: 20px;
  text-decoration: underline;
  cursor: pointer;
}

.arrow {
  // [ layout ]
  display: inline-block;

  // [ skin ]
  height: 20px;
  width: auto;
  margin: {
    left: 10px;
    right: 10px;
  }
  vertical-align: middle;

  // [ skin ]
  background-color: transparent;

  @media screen and (min-width: $break-point-md) {
    // [ position ]
    margin: {
      left: 40px;
      right: 40px;
    }
  }
}

.text {
  // [ layout ]
  display: inline-block;

  // [ position ]
  width: fit-content;

  // [ skin ]
  color: #757575;
  background-color: transparent;
  font-size: 20px;
}
</style>
