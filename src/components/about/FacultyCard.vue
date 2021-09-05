<template lang="pug">
section.card
  img.photo(
    :src="(faculty.photo === null) ? require('@/assets/image/icon/user.png') : faculty.photo"
  )
  section.department
    button(
      v-for="id in faculty.departmentId"
      :key="`department-${id}`"
    ) {{getDepartmentI18n({id: id, language: currentLanguage})}}
  section.name
    h4 {{faculty.name}}
    span {{getAcademicDegree(faculty.title)}}
  section.title
    p(
      v-for="(title, id) in getTitle(faculty.title)"
      :key="`title-${id}`"
    ) {{title}}
  section.contact
    section.mail
      img(src="@/assets/image/icon/envelope.png")
      p {{faculty.mail}}
    section.office-address
      img(src="@/assets/image/icon/location.png")
      p {{faculty.officeAddress}}
    section.office-tel
      img(src="@/assets/image/icon/phone.png")
      p {{getOfficeTel(faculty.officeTel)}}
    section.lab
      img(src="@/assets/image/icon/laboratory.png")
      a.lab-name(
        v-if="labWeb !== null"
        :href="faculty.labWeb"
        target="_blank"
      ) {{faculty.labName}}
      p.lab-name(v-else) {{faculty.labName}}
      p.lab-address {{faculty.labAddress}}
  a.more(:href="`/about/faculty/${faculty.profileId}?languageId=${currentLanguageId}`")
    p {{staticText[currentLanguage].more}}
    img(src="@/assets/image/icon/arrow.png")
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'FacultyCard',
  props: {
    faculty: {
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

.department {
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
  column-gap: 8px;

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

  > span {
    // [ layout ]
    display: flex;
    align-self: flex-end;

    // [ skin ]
    font: {
      size: 14px;
      weight: 14px;
    }
    line-height: 14px;
  }
}

.title {
  // [ layout ]
  display: flex;
  justify-self: flex-start;

  // [ position ]
  width: 100%;

  > p {
    // [ layout ]
    display: flex;

    // [ position ]
    padding: {
      top: 3px;
      bottom: 3px;
      left: 4px;
      right: 4px;
    }
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, .7);

    // [ skin ]
    font-size: 16px;
    line-height: 16px;
    color: rgba(0, 0, 0, .7);
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

  > .lab {
    // [ layout ]
    display: grid;
    grid-template: {
      areas:
        'img name'
        'img address';
      columns: min-content auto;
    }
    column-gap: 16px;
    row-gap: 2px;

    // [ position ]
    width: 100%;

    > img {
      // [ layout ]
      display: block;
      grid-area: img;

      // [ position ]
      height: auto;
      width: 20px;

      // [ skin ]
      filter: invert( 80% ) sepia( 77% ) saturate( 2862% ) brightness( 89% ) hue-rotate( 183deg ) contrast( 98% );
    }

    > .lab-name {
      // [ layout ]
      display: block;
      grid-area: name;

      // [ skin ]
      font-size: 16px;
      line-height: 18px;
    }

    > a {
      // [ skin ]
      text-decoration: underline;
    }

    > .lab-address {
      // [ layout ]
      display: block;
      grid-area: address;

      // [ skin ]
      font-size: 14px;
      line-height: 14px;
      color: #757575;
    };
  }
}

.more {
  // [ layout ]
  display: flex;
  justify-content: flex-end;
  row-gap: 8px;

  // [ display ]
  width: 100%;

  > p {
    // [ skin ]
    font-size: 16px;
    line-height: 16px;
    color: #8caae2;

    transition: color .5s;

    &:hover {
      color: #213262;
    }
  }

  > img {
    // [ positon ]
    height: 20px;
    width: auto;

    // [ skin ]
    filter: invert( 80% ) sepia( 77% ) saturate( 2862% ) brightness( 89% ) hue-rotate( 183deg ) contrast( 98% );
  }
}
</style>
