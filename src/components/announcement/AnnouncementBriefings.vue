<template lang='pug'>
section.briefings
  a.briefing(
    v-for="(briefing, i) in briefings"
    :key="`briefing-${i}`"
    :href="`/announcement/${briefing.announcementId}?languageId=${currentLanguageId}`"
  )
    section.tags
      announcement-tag(
        v-for="id in briefing.tags"
        :color="getColorById(id)"
        :text="getI18nById({id: id, language: currentLanguage})"
      )
    h4.title {{briefing.title}}
    p.content {{briefing.content}}
    p.update-time {{briefing.updateTime.split(' ')[0]}}
</template>

<script>
import { mapGetters } from 'vuex'
import AnnouncementTag from '@/components/announcement/AnnouncementTag.vue'

export default {
  name: 'AnnouncementBriefings',
  props: {
    briefings: {
      type: Array,
      required: true
    }
  },
  components: {
    AnnouncementTag
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
    ...mapGetters('language', ['currentLanguage', 'currentLanguageId']),
    ...mapGetters('announcement', ['getI18nById', 'getColorById', 'getKeyById'])
  }
}
</script>

<style scoped lang='scss'>
@import "@/assets/scss/break-point.scss";

.briefings {
  // [ animation ]
  transition: max-height .5s ease;
  @keyframes collapse {
    from {
      // [ skin ]
      transform: scaleY( 1 );
    }

    to {
      // [ skin ]
      transform: scaleY( 0 );
    }
  }
  @keyframes expand {
    from {
      // [ skin ]
      transform: scaleY( 0 );
    }

    to {
      // [ skin ]
      transform: scaleY( 1 );
    }
  }

  .briefing {
    // [ layout ]
    display: grid;
    grid-template: {
      areas:
        'tags  '
        'title '
        'content'
        'time';
      columns: 100%;
    }
    row-gap: 12px;

    // [ position ]
    width: 100%;
    height: fit-content;
    border-radius: 6px;
    margin-bottom: 28px;
    padding: {
      top: 30px;
      bottom: 20px;
      left: 30px;
      right: 30px;
    }
    background-color: #ffffff;
    box-shadow: 0 2px 24px 0 #dbdbdb, 0 8px 10px 0 #cccccc;

    @media screen and ( min-width: $break-point-sm ) {
      grid-template: {
        areas:
          'tags    tags'
          'title   title'
          'content time';
        columns: 1fr 100px;
        rows: auto  auto 30px;
      }
    }

    &:hover {
      // [ layout ]
      margin: {
        top: -4px;
        bottom: 32px;
      }

      // [ skin ]
      cursor: pointer;
    }

    > .tags {
      // [ layout ]
      display: grid;
      grid: {
        area: tags;
        template-columns: repeat(4, 1fr);
      }
      column-gap: 10px;

      // [ position ]
      margin-bottom: 6px;

      @media screen and ( min-width: $break-point-sm ) {
        grid-template-columns: repeat(5, 100px);
      }
    }

    > .title {
      // [ layout ]
      grid-area: title;
      display: flex;
      align-items: center;

      // [ position ]
      height: 100%;

      // [ skin ]
      line-height: 16px;
      font: {
        size: 16px;
        weight: bold;
      }
    }

    > .content {
      // [ layout ]
      grid-area: content;
      display: block;

      // [ position ]
      height: 18px;

      // [ skin ]
      line-height: 16px;
      font-size: 16px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }

    > .update-time {
      // [ layout ]
      grid-area: time;
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;

      // [ skin ]
      line-height: 14px;
      font-size: 14px;
      color: #b5babf;
    }
  }
}
</style>
