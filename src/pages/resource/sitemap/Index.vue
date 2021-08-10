<template lang="pug">
banner(
  :title="staticText[currentLanguage].title"
  imageSrc="banner/resource/sitemap.jpg"
)
section.content
  breadcrumb(route="/resource/sitemap")
  img.logo(src="@/assets/image/logo/csie.png")
  article.sitemap
    template(
      v-for="(obj, key) in getSiteMap"
      :key="`nav-${key}`"
    )
      ul(v-if="key !== 'attachment'")
        a.header(
          :href="`${obj.header.href}?languageId=${currentLanguageId}`"
          @mouseover="currentList = key"
        ) {{obj.header[currentLanguage].title}}
        // If the first character is '/', it means it's an in-site url;
        // Because of it, we should give the language id;
        a.item(
          v-for="(item, itemKey) in obj.subclass"
          :key="`nav-item-${key}-${itemKey}`"
          :href=" \
            (item.href[0] === '/')?                                    \
            `${item.href}?languageId=${currentLanguageId}` : item.href \
          "
          :target="(item.href[0] === '/')? '_self': '_blank'"
        ) {{item[currentLanguage].title}}

</template>

<script>
import Banner from '@/components/common/Banner.vue'
import Breadcrumb from '@/components/common/Breadcrumb.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Index',
  components: {
    Banner,
    Breadcrumb
  },
  data () {
    return {
      staticText: {
        'zh-TW': {
          title: '網站地圖'
        },
        'en-US': {
          title: 'Sitemap'
        }
      }
    }
  },
  computed: {
    ...mapGetters('language', ['currentLanguage', 'currentLanguageId']),
    ...mapGetters('siteMap', ['getSiteMap'])
  }
}
</script>

<style scoped lang="scss">
.content {
  // [ layout ]
  display: block;

  // [ position ]
  max-width: 1440px;
  width: 80%;
  margin: {
    left: auto;
    right: auto;
    bottom: 30px;
  }
}

.logo {
  // [ layout ]
  display: block;
  width: 100px;
  height: auto;
  margin: {
    left: auto;
    right: auto;
  }
}

.sitemap {
  // [ layout ]
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  ul {
    // [ layout ]
    display: flex;
    justify-content: center;
    align-content: flex-start;

    // [ position ]
    width: 150px;
    flex-wrap: wrap;
    margin: {
      top: 20px;
      bottom: 20px;
    }

    > .header {
      // [ layout ]
      display: flex;
      justify-content: center;
      line-height: 24px * 1.5;
      letter-spacing: normal;

      // [ position ]
      width: 100%;
      border-bottom: 2px #aaaaaa solid;

      // [ skin ]
      padding: {
        top: 20px;
        bottom: 20px;
      }
      margin-bottom: 20px;
      color: #213262;
      font: {
        size: 24px;
        weight: bold;
      };
    }

    > .item {
      // [ layout ]
      display: flex;
      justify-content: center;
      line-height: 18px * 1.5;
      letter-spacing: normal;

      // [ position ]
      width: 100%;
      margin: {
        top: 4px;
        bottom: 4px;
      }

      // [ skin ]
      color: #000000;
      font-size: 18px;
    }
  }
}
</style>
