<template lang="pug">
section.card
  img.photo(
    :src="(staff.photo === null) ? require('@/assets/image/icon/user.png') : staff.photo"
  )
  section.business
    button(
      v-for="(text, id) in staff.business"
      :key="`business-${id}`"
    ) {{text}}
  section.name
    h4 {{staff.name}}
    p(
      v-for="(title, id) in staff.title"
      :key="`title-${id}`"
    ) {{title}}
  section.contact
    section.mail
      img(src="@/assets/image/icon/envelope.png")
      p {{staff.mail}}
    section.office-address
      img(src="@/assets/image/icon/location.png")
      p {{staff.officeAddress}}
    section.office-tel
      img(src="@/assets/image/icon/phone.png")
      p {{getOfficeTel(staff.officeTel)}}
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'FacultyCard',
  props: {
    staff: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      staticText: {
        'zh-TW': {
          more: '更多資訊'
        },
        'en-US': {
          more: 'More'
        }
      }
    }
  },
  computed: {
    ...mapGetters('language', ['currentLanguage', 'currentLanguageId']),
    ...mapGetters('researchGroup', {
      getResearchGroupI18n: 'getI18nById'
    }),
    ...mapGetters('department', {
      getDepartmentI18n: 'getI18nById'
    })
  },
  methods: {
    getAcademicDegree (title) {
      if (this.currentLanguage === 'zh-TW') {
        return title.filter(tmp => tmp.includes('教授'))[0]
      } else {
        return title.filter(tmp => tmp.includes('Professor'))[0]
      }
    },
    getTitle (title) {
      if (this.currentLanguage === 'zh-TW') {
        return title.filter(tmp => !tmp.includes('教授'))
      } else {
        return title.filter(tmp => !tmp.includes('Professor'))
      }
    },
    getOfficeTel (tel) {
      if (this.currentLanguage === 'zh-TW') {
        return tel.split(',').join(' 分機 ')
      } else {
        return tel
      }
    }
  }
}
</script>

<style scoped lang="scss">
.card {
  // [ layout ]
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 16px;

  // [ position ]
  width: 100%;
  height: auto;
  padding: {
    top: 20px;
    bottom: 20px;
    left: 32px;
    right: 32px;
  }

  // [ skin ]
  background-color: white;
}

.photo {
  // [ layout ]
  display: block;

  // [ position ]
  width: 100%;
  height: auto;
  border-radius: 50%;

  // [ skin ]
  background-color: #C9CCD5;
}

.business {
  // [ layout ]
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 8px;
  column-gap: 8px;

  > button {
    // [ layout ]
    display: flex;
    align-items: center;

    // [ position ]
    min-width: 72px;
    padding: {
      top: 7px;
      bottom: 7px;
      left: 14px;
      right: 14px;
    }
    border-radius: 12px;

    // [ skin ]
    line-height: 14px;
    font-size: 14px;
    color: #8caae2;
    background-color: #eaeff7;
  }
}

.name {
  // [ layout ]
  display: flex;
  column-gap: 16px;
  align-items: center;

  // [ position ]
  width: 100%;

  > h4 {
    // [ layout ]
    display: block;

    // [ skin ]
    font: {
      size: 16px;
      weight: bold;
    }
    line-height: 16px;
  }

  > p {
    // [ layout ]
    display: block;

    // [ position ]
    padding: {
      left: 7px;
      right: 7px;
      top: 4px;
      bottom: 4px;
    }

    border: 1px solid #adacad;
    border-radius: 4px;

    // [ skin ]
    line-height: 14px;
    font-size: 14px;
    color: #adacad;
  }
}

.contact {
  // [ layout ]
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  row-gap: 12px;
  width: 100%;

  %contact-element {
    // [ layout ]
    display: flex;
    justify-content: flex-start;
    column-gap: 12px;

    // [ position ]
    width: 100%;

    > img {
      // [ layout ]
      display: block;

      // [ position ]
      height: auto;
      width: 20px;

      // [ skin ]
      object-fit: contain;
      filter: invert( 80% ) sepia( 77% ) saturate( 2862% ) brightness( 89% ) hue-rotate( 183deg ) contrast( 98% );
    }

    > p {
      // [ layout ]
      display: block;

      // [ skin ]
      font-size: 16px;
      line-height: 18px;
    }
  }

  > .mail {
    @extend %contact-element;
    > p {
      word-break: break-all;
    }
  }

  > .office-address {
    @extend %contact-element;
  }

  > .office-tel {
    @extend %contact-element;
  }
}
</style>
