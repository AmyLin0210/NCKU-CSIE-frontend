<template lang='pug'>
section.filter
  section.tags(
    :style="`grid-template-areas: ${tagTypesetting[screenSize]}`"
    :class="`row-item-amount-${tagTypesetting.rowItemAmount}`"
  )
    announcement-tag(
      :class="{active: true}"
      :color="(defaultTag === 'all')? 'yellow' : getColorByKey(defaultTag)"
      :text="(defaultTag === 'all')? staticText[currentLanguage].all : getI18nByKey({key: defaultTag, language: currentLanguage})"
      :tagKey="defaultTag"
    )
    announcement-tag(
      v-for="(key, idx) in supportTags"
      :key="`tag-${idx}`"
      :tagKey="key"
      :color="getColorByKey(key)"
      :text="getI18nByKey({key: key, language: currentLanguage})"
    )
  section.time
    section.from
      label.text {{staticText[currentLanguage].from}}
      span.input
        input(type="date" value="2017-06-01")
    section.to
      label.text {{staticText[currentLanguage].to}}
      span.input
        input(type="date" value="2017-06-01")
  section.keyword
    label.text {{staticText[currentLanguage].keyword}}
    section.input
      input(type="text")
      img(src="@/assets/image/icon/search.png")
</template>

<script>
import { mapGetters } from 'vuex'
import AnnouncementTag from '@/components/announcement/AnnouncementTag.vue'

export default {
  name: 'AnnouncementFilter',
  props: {
    supportTags: {
      type: Array,
      required: true
    },
    defaultTag: {
      type: String,
      required: true
    },
    tagTypesetting: {
      type: Object
    }
  },
  components: {
    AnnouncementTag
  },
  data () {
    return {
      staticText: {
        'zh-TW': {
          all: '全部',
          from: '開始日期',
          to: '結束日期',
          keyword: '關鍵字'
        },
        'en-US': {
          all: 'all',
          from: 'from',
          to: 'to',
          keyword: 'keyword'
        }
      },
      screenSize: (window.innerWidth > 600) ? 'large' : 'small'
    }
  },
  mounted () {
    window.addEventListener('resize', this.onWidthChange)
  },
  computed: {
    ...mapGetters('announcementTags', ['getI18nByKey', 'getColorByKey']),
    ...mapGetters('language', ['currentLanguage'])
  },
  methods: {
    onWidthChange () {
      if (window.innerWidth > 600) {
        this.screenSize = 'large'
      } else {
        this.screenSize = 'small'
      }
    }
  }
}
</script>

<style scoped lang='scss'>
@import "@/assets/scss/break-point.scss";

.filter {
  // [ layout ]
  display: grid;
  grid-template-areas:
      'tags'
      'time'
      'keyword';
  row-gap: 20px;

  // [ position ]
  margin-bottom: 10px;
  width: 100%;
  margin: {
    left: auto;
    right: auto;
  }

  @media screen and ( min-width: $break-point-sm ) {
    // [ layout ]
    grid-template: {
      areas:
        'tags tags tags'
        '.    time .'
        '.    keyword .';
      columns: 1fr 400px 1fr;
    }

    // [ position ]
    width: 550px;
  }

  @media screen and ( min-width: $break-point-lg ) {
    // [ layout ]
    grid-template: {
      areas:
        'tags . time'
        'tags . keyword';
      columns: 550px auto 400px;
    }
    row-gap: none;

    // [ position ]
    width: 100%;
  }
}

.tags {
  // [ layout ]
  grid-area: tags;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 8px;
  column-gap: 6px;

  &.row-item-amount-5 {
    @media screen and ( min-width: $break-point-sm ) {
      grid-template-columns: repeat(5, 1fr);
    }
  }

  &.row-item-amount-4 {
    @media screen and ( min-width: $break-point-sm ) {
      grid-template-columns: repeat(4, 1fr);
      width: 440px;
      margin: {
        left: auto;
        right: auto;
      }
    }

    @media screen and ( min-width: $break-point-lg ) {
      margin-left: 0;
    }
  }
}

.time {
  // [ layout ]
  display: grid;
  grid: {
    area: time;
    template-areas:
      'from'
      'to';
  }
  row-gap: 10px;

  // [ position ]
  width: 100%;

  @media screen and ( min-width: $break-point-sm ) {
    grid-template-columns: 190px 1fr 190px;
    grid-template: {
      areas: 'from . to';
      columns: 190px 1fr 190px;
    }
  }

  > section {
    // [ layout ]
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    row-gap: 10px;

    // [ position ]
    width: 100%;

    &.from {
      // [ layout ]
      grid-area: from;
    }

    &.to {
      // [ layout ]
      grid-area: to;
    }

    > .text {
      // [ layout ]
      display: block;

      // [ position ]
      width: 100%;
      margin-left: 10px;

      // [ skin ]
      line-height: 16px;
      font-size: 16px;
    }

    > .input {
      // [ layout ]
      display: flex;
      align-items: center;
      justify-content: center;

      // [ position ]
      width: 100%;
      height: 32px;
      border: 1px solid #757575;
      border-radius: 32px;

      > input {
        // [ layout ]
        display: block;

        // [ position ]
        width: 90%;

        // [ skin ]
        font-size: 16px;
        line-height: 16px;
      }
    }
  }
}

.keyword {
  // [ layout ]
  grid-area: keyword;
  display: flex;
  flex-wrap: wrap;
  row-gap: 10px;
  align-content: center;

  // [ position ]
  width: 100%;

  > .text {
    // [ layout ]
    display: block;

    // [ position ]
    width: 100%;
    margin-left: 10px;

    // [ skin ]
    line-height: 16px;
    font-size: 16px;
  }

  > .input {
    // [ layout ]
    display: grid;
    grid-template: {
      areas: 'input img';
      columns: 1fr 50px;
    };
    align-items: center;
    justify-content: space-between;

    // [ position ]
    width: 100%;
    height: 32px;
    border: 1px solid #757575;
    border-radius: 32px;

    @media screen and ( min-width: $break-point-sm ) {
      grid-template-columns: 350px 1fr;
    }

    > input {
      // [ layout ]
      grid-area: input;
      display: block;

      // [ position ]
      margin-left: 15px;
      width: 80%;

      // [ skin ]
      font-size: 16px;
      line-height: 16px;

      @media screen and ( min-width: $break-point-sm ) {
        // [ position ]
        width: 330px;
      }
    }

    > img {
      // [ layout ]
      grid-area: img;
      display: block;

      // [ position ]
      width: auto;
      height: 20px;
      padding-left: 12px;
      border-left: 1px solid #757575;

      &:hover {
        // [ skin ]
        cursor: pointer;
      }
    }
  }
}
</style>
