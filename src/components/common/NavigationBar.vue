<template lang="pug">
nav.nav-bar(:class="{active: bar.isActive, fixed: bar.isFixed}")
  a.logo(href="/")
    img.image(
      src="@/assets/image/logo/csie-small.png"
      alt="csie logo"
    )
    section.caption(href="/")
      article.title
        span.text 成功大學
        span.text 資訊工程學系
        span.text 暨
        span.text 研究所
      article.subtitle
        span.text Department
        span.text of
        span.text Computer Science
        span.text and
        span.text Information Engineering

  //- There are two kinds of menu, one for small screen and another for large screen,
  //- using CSS media query to control which is shown;

  //- When mouse leave large-menu DOM, hide the list of the topic;
  section.large-menu(@mouseleave="currentList = ''")
    nav.navigation
      template(
        v-for="(obj, key) in getSiteMap"
        :key="`nav-${key}`"
      )
        ul.list
          //- When mouse hover on the topic button,
          //- show the list of specific topic
          a.header(
            :href="`${obj.header.href}?languageId=${currentLanguageId}`"
            @mouseover="currentList = key"
          ) {{obj.header[$root.$i18n.locale].title}}
          li.dropdown(v-if="Object.keys(obj.subclass).length > 0" v-show="key === currentList")
            a.item(
              v-for="(item, itemKey) in obj.subclass"
              :key="`nav-item-${key}-${itemKey}`"
              :href=" \
                (item.href[0] === '/')?                                    \
                `${item.href}?languageId=${currentLanguageId}` : item.href \
              "
            ) {{item[$root.$i18n.locale].title}}
    section.tools
      a.login(:href="`/auth/login?languageId=${currentLanguageId}`")
        img.image(src="@/assets/image/icon/user.png")
        span.button {{i18n[currentLanguage].login}}
      img.search(src="@/assets/image/icon/search.png")
      section.langs
        //- v-bind evaluate the expression at runtime,
        //- but the path aliasing is complete in compile time.
        //- To access static file via dynamic pathname,
        //- use `require()` to get the compiled module.
        //- Reference: https://github.com/vuejs/vue-loader/issues/896
        img.image(
          :src="require(`@/assets/image/icon/flag-${currentLanguageId}.png`)"
          @click="isShowLangs = !isShowLangs"
        )
        ul.dropdown(v-show="isShowLangs")
          template(
            v-for="(language, key) in supportedLanguages"
            :key="`dropdown-langs-${key}`"
          )
            li.item(
              @click="changeLocale(key)"
            )
              img.flag(:src="require(`/src/assets/image/icon/flag-${key}.png`)")
              span.content {{ language.name }}
  //- Here is the menu for small screen;
  section.small-menu
    img.menu-icon(
      src="@/assets/image/icon/menu.png"
      @click="showMenu = true"
    )
    nav.navigation(:class="{active: showMenu}")
      section.close
        img(
          src="@/assets/image/icon/close.png"
          @click="\
            currentList = ''; \
            showMenu = false;\
          "
        )
      template(
        v-for="(obj, key) in getSiteMap"
        :key="`small-nav-${key}`"
      )
        section.topic
          a.text(
            :href="`${obj.header.href}?languageId=${currentLanguageId}`"
          ) {{obj.header[$root.$i18n.locale].title}}
          img.more(
            src="@/assets/image/icon/arrow.png"
            :class="{active: key === currentList}"
            v-if="Object.keys(obj.subclass).length > 0"
            @click="currentList = (key === currentList) ? '' : key"
          )
        ul.list(
          v-if="Object.keys(obj.subclass).length > 0"
          :class="{active: key === currentList}"
        )
          a.item(
            v-for="(item, itemKey) in obj.subclass"
            :key="`small-nav-item-${key}-${itemKey}`"
            :href=" \
              (item.href[0] === '/')?                                    \
              `${item.href}?languageId=${currentLanguageId}` : item.href \
            "
          ) {{item[$root.$i18n.locale].title}}
      a.login(:href="`/auth/login?languageId=${currentLanguageId}`")
        img(src="@/assets/image/icon/user.png")
        p {{i18n[currentLanguage].login}}
      a.search(:href="`/home/search?languageId=${currentLanguageId}`")
        img(src="@/assets/image/icon/search.png")
        p {{i18n[currentLanguage].search}}
      section.language
        article.content
          img.flag(:src="require(`@/assets/image/icon/flag-${currentLanguageId}.png`)")
          p {{i18n[currentLanguage].language}}
        img.more(
          src="@/assets/image/icon/arrow.png"
          :class="{active: isShowLangs}"
          @click="isShowLangs = !isShowLangs"
        )
      section.language-list(:class="{active: isShowLangs}")
        template(
          v-for="(language, key) in supportedLanguages"
          :key="`small-langs-${key}`"
        )
          li.item(@click="changeLocale(key)")
            img(:src="require(`/src/assets/image/icon/flag-${key}.png`)")
            span.content {{ language.name }}

</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'navigation-bar',
  data () {
    return {
      i18n: {
        'zh-TW': {
          login: '登入',
          search: '搜尋',
          language: '語言'
        },
        'en-US': {
          login: 'Login',
          search: 'Search',
          language: 'Language'
        }
      },
      currentList: '',
      isShowLangs: false,
      preScrollPos: 0,
      bar: {
        isActive: false,
        isFixed: false
      },
      showMenu: false
    }
  },
  created () {
    window.addEventListener('scroll', this.scrollEvent)
  },
  computed: {
    ...mapState('language', ['supportedLanguages']),
    ...mapGetters('language', ['currentLanguageId', 'currentLanguage']),
    ...mapGetters('siteMap', ['getSiteMap'])
  },
  methods: {
    changeLocale (languageId) {
      const params = new URLSearchParams(window.location.search)
      params.set('languageId', languageId)
      window.location.assign(`${window.location.pathname}?${params.toString()}`)
    },
    scrollEvent () {
      const prevScrollpos = this.preScrollPos
      const currentScrollPos = window.pageYOffset

      if (prevScrollpos < currentScrollPos && currentScrollPos > 70) {
        this.bar.isActive = true
      } else {
        this.bar.isActive = false
      }

      if (currentScrollPos > 70) {
        this.bar.isFixed = true
      } else {
        this.bar.isFixed = false
      }

      this.preScrollPos = currentScrollPos
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/break-point.scss";

.nav-bar {
  // [ layout ]
  display: grid;
  grid-template-areas:
      'logo'
      'menu';
  position: fixed;
  text-align: left;
  top: 0;
  align-items: center;
  z-index: 1;

  // [ position ]
  width: 100%;
  height: 85px;

  // [ skin ]
  background-color: #ffffff;
  padding-right: 10px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);

  // [ transition ]
  transition: top .5s;

  @media screen and (min-width: $break-point-sm) {
    // [ layout ]
    grid-template: {
      areas: 'logo menu';
      columns: 450px auto;
    }

    // [ position ]
    height: 70px;
  }

  &.active {
    // [ position ]
    top: -85px;

    @media screen and (min-width: $break-point-sm) {
      // [ position ]
      top: -70px;
    }
  }

  &.fixed {
    position: fixed;
  }

  .logo {
    // [ layout ]
    grid-area: logo;
    display: flex;
    align-items: center;

    // [ position ]
    width: 100%;
    height: 100%;

    .image {
      // [ layout ]
      display: block;
      width: auto;
      height: 36px;

      // [ skin ]
      margin: {
        top: 5px;
        left: auto;
        right: auto;
      }
      background-color: transparent;

      @media screen and (min-width: $break-point-sm) {
        // [ layout ]
        display: inline-block;

        // [ position ]
        width: 58px;
        height: 44px;
        margin: {
          top: none;
          left: 10px;
          right: 0;
        }
      }
    }

    .caption {
      // [ layout ]
      display: none;
      margin-left: 12px;

      // [ skin ]
      width: auto;
      height: 44px;
      padding: {
        top: 6px;
        bottom: 6px;
      }
      background-color: transparent;

      @media screen and (min-width: $break-point-sm) {
        display: inline-block;
      }

      > .title {
        // [ layout ]
        display: block;
        width: auto;
        height: 16px;
        text-align: left;
        line-height: normal;

        // [ skin ]
        color: #212121;
        background-color: transparent;

        > .text {
          // [ layout ]
          display: inline-block;
          vertical-align: top;
          line-height: 16px;

          // [ skin ]
          width: auto;
          height: 16px;
          margin-bottom: 4px;
          background-color: transparent;
          font: {
            size: 16px;
            style: normal;
            weight: bold;
          }
        }
      }
      > .subtitle {
        // [ layout ]
        display: block;
        text-align: left;
        line-height: 12px;

        // [ skin ]
        width: auto;
        height: 12px;
        color: #212121;
        background-color: transparent;

        > .text {
          // [ layout ]
          display: inline-block;
          vertical-align: top;
          line-height: 12px;
          word-spacing: 3px;

          // [ skin ]
          width: auto;
          height: 12px;
          border: {
            color: transparent;
            style: solid;
            right-width: 3px;
          }
          background-color: transparent;
          font: {
            size: 12px;
            style: normal;
            weight: normal;
          }
        }
      }
    }
  }
}

.large-menu {
  // [ layout ]
  display: none;
  grid-area: menu;
  justify-content: space-between;

  // [ position ]
  width: 100%;
  height: 100%;

  @media screen and (min-width: $break-point-lg){
    // [ layout ]
    display: flex;
  }

  .navigation {
    // [ variable ]
    $font-size: 16px;

    // [ position ]
    z-index: 2;

    // [ layout ]
    display: flex;
    align-items: center;
    overflow-y: visible;

    // [ skin ]
    width: auto;
    background-color: transparent;
    height: 100%;

    // [ animation ]
    transition: right 0.5s;

    > .list {
      // [ position ]
      position: static;

      // [ layout ]
      display: inline-flex;
      align-items: center;

      // [ skin ]
      width: auto;
      height: 44px;

      &:hover {
        // [ skin ]
        background-color: #ededed;
      }

      > .header {
        // [ position ]
        // This style is set to put `.item__link` above `.item__switch`.
        position: relative;
        z-index: 5;

        // [ layout ]
        display: inline-flex;
        line-height: $font-size;
        text-align: center;
        align-items: center;
        justify-content: center;

        // [ skin ]
        width: auto;
        min-width: 87px;
        height: 100%;
        color: #adacad;
        background-color: transparent;
        font: {
          size: $font-size;
          style: normal;
          weight: normal;
        }
      }

      > .dropdown {
        // [ position ]
        position: absolute;
        left: 0;
        right: 0;
        top: 70px;
        z-index: 4;

        // [ layout ]
        display: block;
        text-align: center;

        // [ skin ]
        max-height: 10000px;
        width: 100%;
        height: 80px;
        background-color: #213262;

        > .item {
          // [ layout ]
          display: inline-block;
          margin: 0;
          vertical-align: middle;
          line-height: $font-size;

          // [ skin ]
          min-width: 115px;
          width: auto;
          height: 80px;
          border: {
            color: transparent;
            style: solid;
            top-width: 14px;
            bottom-width: 14px;
            left-width: 0;
          }
          background-color: #213262;

          // [ skin ]
          padding: {
            top: 18px;
            bottom: 18px;
            left: 25px;
            right: 25px;
          }
          color: #ffffff;
          font: {
            size: $font-size;
            style: normal;
            weight: normal;
          }

          &:hover {
            // [ skin ]
            background-color: #1d2d56;
          }
        }
      }
    }
  }

  .tools {
    // [ layout ]
    display: flex;
    align-items: center;

    > .login {
      // [ layout ]
      display: inline-block;
      vertical-align: top;

      // [ skin ]
      width: 105px;
      height: 36.15px;
      line-height: 36.15px;
      background-color: #213262;
      box-shadow: 0 0.06rem 0.06rem 0 rgba(0, 0, 0, 0.24),
        0 0 2px 0 rgba(0, 0, 0, 0.12);
      font: {
        size: 14px;
        weight: 500;
      }
      color: #ffffff;

      > .image {
        // [ layout ]
        display: inline-block;
        vertical-align: middle;
        margin: {
          right: 14.4px;
          left: 14.4px;
        }
        width: 22px;
        height: 21px;

        // [ skin ]
        max: {
          width: 22px;
          height: 22px;
        }
        border-radius: 50%;
        background: {
          size: 21.1px;
          repeat: no-repeat;
        }
        filter: invert(100%) sepia(0%) saturate(1%) hue-rotate(49deg)
          brightness(101%) contrast(101%);
      }

      > .button {
        // [ layout ]
        display: inline-block;
        vertical-align: top;

        // [ skin ]
        line-height: 36.15px;
        width: auto;
        height: 36.15px;
        font: {
          size: 14px;
          weight: 500;
        }
        color: #ffffff;
      }
    }

    > .search {
      // [ layout ]
      display: inline-block;
      vertical-align: top;
      margin: {
        left: 24px;
        top: 6px;
        bottom: 6px;
      }

      // [ skin ]
      height: 24px;
      width: 24px;
      background-color: #ffffff;
      cursor: pointer;
    }

    > .langs {
      // [ layout ]
      display: inline-flex;
      vertical-align: top;
      margin: {
        left: 24px;
        top: 6px;
        bottom: 6px;
      }

      // [ skin ]
      height: 24px;
      width: 24px;
      cursor: pointer;
      background-color: #ffffff;

      > .image {
        // [ skin ]
        height: 24px;
        width: 24px;
      }

      > .dropdown {
        // [ position ]
        top: 32px;
        left: -128px;
        z-index: 1;

        // [ layout ]
        display: flex;
        position: relative;
        flex-direction: column;
        align-content: center;
        justify-content: center;

        // [ skin ]
        height: 82px;
        min-width: 128px;
        background-color: #1a284d;
        box-shadow: 0 1px 2px 0 rgba( 0, 0, 0, .25 );
        font-size: 16px;
        color: #ffffff;

        &::before {
          // [ layout ]
          display: inline;
          position: absolute;
          top: -9.6px;
          right: 9.6px;

          // [ skin ]
          content: '';
          border: {
            width: 4.8px;
            style: solid;
            top-color: transparent;
            right-color: transparent;
            bottom-color: #1a284d;
            left-color: transparent;
          }
        }

        > .item {
          // [ layout ]
          display: flex;
          align-items: center;
          padding-left: 25.6px;

          // [ skin ]
          height: 41px;
          width: 100%;

          > .flag {
            // [ layout ]
            display: inline-block;
            margin-right: 16px;

            // [ position ]
            width: 21.1px;
            height: 21.1px;
          }
        }
      }
    }
  }
}

.small-menu {
  // [ layout ]
  display: flex;
  grid-area: menu;
  justify-content: center;

  @media screen and (min-width: $break-point-sm) {
    // [ layout ]
    justify-content: flex-end;
  }

  @media screen and (min-width: $break-point-lg) {
    // [ layout ]
    display: none;
  }

  > .menu-icon {
    // [ position ]
    height: 35px;
    width: auto;
    margin: {
      left: 20px;
      right: 20px;
    }

    // [ skin ]
    filter: opacity(70%);
    transform: scale(1, 0.9);

    @media screen and (min-width: $break-point-sm) {
      height: 40px;
    }
  }

  > .navigation {
    // [ variable ]
    $navigation-width: 320px;
    $topic-height: 50px;
    $item-height: 40px;
    $font-size: 16px;

    // [ position ]
    position: fixed;
    top: 0;
    right: -1 * $navigation-width;
    z-index: 3;

    // [ layout ]
    overflow-y: auto;

    // [ skin ]
    width: 100%;
    height: 100%;
    background-color: #213262;

    // [ animation ]
    transition: right .5s;

    &.active {
      // [ position ]
      right: 0;

      // [ layout ]
      display: block;
    }

    @media screen and (min-width: $navigation-width) {
      // [ position ]
      width: $navigation-width;
    }

    > .close {
      // [ layout ]
      display: flex;
      align-items: center;

      // [ position ]
      width: 100%;
      height: 60px;
      border-bottom: 2px solid #415277;

      > img {
        // [ position ]
        height: 30px;
        width: auto;
        margin: {
          left: auto;
          right: auto;
        }

        // [ skin ]
        filter: invert(100%);
      }
    }

    > .topic {
      // [ layout ]
      display: flex;
      justify-content: space-between;
      align-items: center;

      // [ position ]
      width: 100%;
      height: $topic-height;
      border-bottom: 2px solid #415277;

      > .text {
        // [ position ]
        margin-left: 20px;

        // [ skin ]
        color: #8f98ae;
        line-height: 16px;
        font-size: 16px;
      }

      > .more {
        // [ position ]
        height: 30px;
        width: auto;
        margin-right: 20px;

        // [ skin ]
        filter: invert(66%);

        // [ animation ]
        transition: transform .5s;

        &.active {
          // [ skin ]
          transform: rotate(0.25turn);
        }
      }
    }

    > .list {
      // [ layout ]
      display: block;

      // [ position ]
      max-height: 0;

      // [ skin ]
      background-color: #1d2d56;
      opacity: 0;

      // [ animation ]
      transition: height .5s, padding .5s;

      &.active {
        // [ position ]
        padding: {
          top: 20px;
          bottom: 20px;
        }
        max-height: 1000px;
        opacity: 1;
      }

      > .item {
        // [ layout ]
        display: flex;
        align-items: center;

        // [ position ]
        margin-left: 120px;
        padding-left: 30px;
        border-left: 1px solid #415277;
        height: $item-height;

        // [ skin ]
        color: #fff;
        font-size: 16px;
        line-height: 16px;
      }
    }

    > .login {
      // [ layout ]
      display: flex;
      align-items: center;

      // [ position ]
      width: 100%;
      height: $topic-height;
      border-bottom: 2px solid #415277;

      > img {
        // [ position ]
        height: 25px;
        width: auto;
        margin: {
          left: 20px;
          right: 20px;
        }

        // [ skin ]
        filter: invert(66%);
      }

      > p {
        // [ skin ]
        font-size: 16px;
        line-height: 16px;
        color: #8f98ae;
      }
    }

    > .search {
      // [ layout ]
      display: flex;
      align-items: center;

      // [ position ]
      width: 100%;
      height: $topic-height;
      border-bottom: 2px solid #415277;

      > img {
        // [ position ]
        height: 25px;
        width: auto;
        margin: {
          left: 20px;
          right: 20px;
        }

        // [ skin ]
        filter: invert(66%);
      }

      > p {
        // [ skin ]
        font-size: 16px;
        line-height: 16px;
        color: #8f98ae;
      }
    }

    > .language {
      // [ layout ]
      display: flex;
      justify-content: space-between;
      align-items: center;

      // [ position ]
      width: 100%;
      height: $topic-height;
      border-bottom: 2px solid #415277;

      > .content {
        // [ layout ]
        display: flex;
        align-items: center;

        > .flag {
          // [ position ]
          height: 25px;
          width: auto;
          margin: {
            left: 20px;
            right: 20px;
          }
        }

        > p {
          // [ skin ]
          font-size: 16px;
          line-height: 16px;
          color: #8f98ae;
        }
      }

      > .more {
        // [ position ]
        height: 30px;
        width: auto;
        margin-right: 20px;

        // [ skin ]
        filter: invert(66%);

        // [ animation ]
        transition: transform .5s;

        &.active {
          // [ skin ]
          transform: rotate(0.25turn);
        }
      }
    }

    > .language-list {
      // [ layout ]
      display: block;

      // [ position ]
      max-height: 0;

      // [ skin ]
      background-color: #1d2d56;
      opacity: 0;

      // [ animation ]
      transition: height .5s, opacity .5s;

      // [ hover ]
      &:hover {
        cursor: pointer;
      }

      &.active {
        max-height: none;
        opacity: 1;
      }

      > .item {
        // [ layout ]
        display: flex;
        align-items: center;

        // [ position ]
        margin-left: 60px;
        height: $topic-height;

        > img {
          // [ position ]
          height: 20px;
          width: auto;
          margin-right: 10px;
        }

        > span {
          // [ skin ]
          color: #fff;
          font-size: 16px;
          line-height: 16px;
        }
      }
    }
  }
}
</style>
