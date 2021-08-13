<template lang="pug">
banner(
  :title="staticText[currentLanguage].title"
  imageSrc="banner/research/center.jpg"
)
section.main
  h2 {{staticText[currentLanguage].login}}
  article.account
    input(
      type="text"
      :placeholder="staticText[currentLanguage].account"
    )
  article.password
    input(
      type="password"
      :placeholder="staticText[currentLanguage].password"
    )
  button(:class="{active: isValid}") {{staticText[currentLanguage].login}}
</template>

<script>
import Banner from '@/components/common/Banner.vue'
import Entries from '@/components/common/Entries.vue'
import Breadcrumb from '@/components/common/Breadcrumb.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Index',
  components: {
    Banner,
    Entries,
    Breadcrumb
  },
  data () {
    return {
      staticText: {
        'zh-TW': {
          title: '使用者登入',
          login: '登入',
          account: '帳號',
          password: '密碼'
        },
        'en-US': {
          title: 'Login',
          login: 'Login',
          account: 'Account',
          password: 'Password'
        }
      },
      isValid: false
    }
  },
  computed: {
    ...mapGetters('language', ['currentLanguage', 'currentLanguageId'])
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/break-point.scss";

.main {
  // [ layout ]
  display: block;

  // [ position ]
  width: 100%;
  margin: {
    top: 200px;
    bottom: 200px;
    left: auto;
    right: auto;
  }

  // [ RWD: $small ]
  @media screen and ( min-width: $break-point-sm ) {
    // [ position ]
    width: 500px;
    border: {
      left: solid .5px #757575;
      right: solid .5px #757575;
      bottom: solid .5px #757575;
      top: solid 5.6px #999999;
      radius: 3px;
    }

    // [ skin ]
    background-color: rgba( 224, 224, 224, .1 );
  }

  %input-block {
    // [ layout ]
    display: flex;
    align-content: center;
    justify-content: center;

    // [ position ]
    width: 80%;
    height: 39px;
    margin: {
      top: 12px;
      bottom: 12px;
      right: auto;
      left: auto;
    }
    border: {
      radius: 4px;
      left: solid 4px #999999;
    }

    // [ skin ]
    background-color: rgba( 224, 224, 224, .4 );

    > input {
      // [ position ]
      width: 90%;

      // [ skin ]
      background: rgba( 224, 224, 224, .1 );
      font: {
        size: 16px;
        weight: normal;
        style: normal;
        stretch: normal;
      }
      line-height: 1.33;
      letter-spacing: normal;
      color: #757575;

      // [ RWD: $small ]
      @media screen and ( min-width: $break-point-sm ) {
        font-size: 18px;
      }
    }
  }

  > h2 {
    // [ layout ]
    display: none;
    height: auto;
    margin: {
      top: 30px;
      bottom: 30px;
      left: auto;
      right: auto;
    }

    // [ skin ]
    line-height: normal;
    text-align: center;
    font-size: 24px;

    @media screen and ( min-width: $break-point-sm ) {
      display: block;
    }
  }

  > .account {
    @extend %input-block;
  }

  > .password {
    @extend %input-block;
  }

  > button {
    // [ layout ]
    display: block;

    // [ position ]
    position: relative;
    width: 80%;
    height: 50px;
    margin: {
      right: auto;
      left: auto;
      top: 40px;
      bottom: 48px;
    }

    // [ skin ]
    line-height: normal;
    letter-spacing: normal;
    border-radius: 4px;
    box-shadow: 0 12px 12px rgba( 0, 0, 0, .25 );
    background-color: #adacad;
    font: {
      size: 18px;
      weight: normal;
      style: normal;
      stretch: normal;
    }
    color: #ffffff;

    @media screen and ( min-width: $break-point-sm ) {
      width: 80%;
    }

    &.active {
      // [ skin ]
      background-color: #213262;

      &:hover {
        // [ skin ]
        cursor: pointer;
      }
    }
  }
}
</style>
