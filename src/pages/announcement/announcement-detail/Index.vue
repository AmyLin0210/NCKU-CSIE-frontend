<template lang="pug">
banner(
  :title="staticText[currentLanguage].title"
  imageSrc="banner/announcement/all.jpg"
)
section.main
  section.briefing
    section.tags
      announcement-tag(
        v-for="id in briefing.tags"
        :color="getColorById(id)"
        :text="getI18nById({id: id, language: currentLanguage})"
      )
    h4.title {{briefing.title}}
    p.update-time {{briefing.updateTime.split(' ')[0]}}
  article.content(v-html="briefing.content")

</template>

<script>
import Banner from '@/components/common/Banner.vue'
import AnnouncementTag from '@/components/announcement/AnnouncementTag.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Index',
  components: {
    Banner,
    AnnouncementTag
  },
  data () {
    return {
      staticText: {
        'zh-TW': {
          title: '公告內容'
        },
        'en-US': {
          title: 'Announcement Detail'
        }
      },
      briefing: {
        title: '110年國立成功大學電機資訊學院研究日 初賽入選名單',
        // eslint-disable-next-line
        content: `<p style=\"margin: 0px 0px 10px; color: #333333; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px;\">110年國立成功大學電機資訊學院研究日 初賽入選名單如下:</p>\n<p style=\"margin: 0px 0px 10px; color: #333333; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px;\">&nbsp;</p>\n<p style=\"margin: 0px 0px 10px; color: #333333; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px;\">專題題目 ( 中文 )&nbsp; &nbsp; &nbsp;&nbsp;組員姓名&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;</p>\n<p style=\"margin: 0px 0px 10px; color: #333333; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px;\">硬科技：人工智慧讓謠言無處可藏&nbsp; &nbsp; 李o文、倪o文&nbsp;&nbsp;</p>\n<p style=\"margin: 0px 0px 10px; color: #333333; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px;\">基於CNN在CBCT中自動分割上下 顎骨與辨識牙齒來做植牙規劃&nbsp; &nbsp;&nbsp;葉o翔</p>\n<p style=\"margin: 0px 0px 10px; color: #333333; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px;\">異質性網路中節能睡眠模式方案之垂直交遞研究&nbsp; &nbsp;&nbsp;鄭o中</p>\n<p style=\"margin: 0px 0px 10px; color: #333333; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px;\">線條藝術的張量場設計/呈現與動畫&nbsp; &nbsp; &nbsp;林o瑄、吳o楊</p>\n<p style=\"margin: 0px 0px 10px; color: #333333; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px;\">基於影像紋理與定量超音波參數的智慧化分類與診斷&nbsp; &nbsp; 黃o銘、張o文&nbsp; &nbsp;&nbsp;</p>\n<p style=\"margin: 0px 0px 10px; color: #333333; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px;\">------------------------------------------------------------------------------</p>\n<p style=\"margin: 0px 0px 10px; color: #333333; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px;\">110年國立成功大學電機資訊學院研究日 決賽時程</p>\n<p style=\"margin: 0px 0px 10px; color: #333333; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px;\">&nbsp;</p>\n<p style=\"margin: 0px 0px 10px; color: #333333; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px;\">研究日決賽：（參附件Webex操作說明）</p>\n<p style=\"margin: 0px 0px 10px; color: #333333; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px;\">日期：110年6月18日（星期五）下午2:00-5:00</p>\n<p style=\"margin: 0px 0px 10px; color: #333333; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px;\">會議網址：https://reurl.cc/qgz4jq</p>\n<p style=\"margin: 0px 0px 10px; color: #333333; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px;\">會議號：184 044 8252 &nbsp;&nbsp;密碼：mK878pMmJr3</p>\n<p style=\"margin: 0px 0px 10px; color: #333333; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px;\">&nbsp;</p>\n<p style=\"margin: 0px 0px 10px; color: #333333; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px;\">活動流程：請各參賽隊伍指派代表參加Q&amp;A（各組Q&amp;A時間將於6月11日公告）。</p>\n<p style=\"margin: 0px 0px 10px; color: #333333; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px;\">13:30-14:00&nbsp; 連線測試</p>\n<p style=\"margin: 0px 0px 10px; color: #333333; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px;\">14:00-14:05&nbsp; 院長致詞</p>\n<p style=\"margin: 0px 0px 10px; color: #333333; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px;\">14:05-15:05&nbsp; 大學部12隊Q&amp;A（每組5分鐘）</p>\n<p style=\"margin: 0px 0px 10px; color: #333333; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px;\">15:10-16:25&nbsp; 研究所15隊Q&amp;A（每組5分鐘）</p>\n<p style=\"margin: 0px 0px 10px; color: #333333; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px;\">16:30-16:50&nbsp; 委員評分及統計成績</p>\n<p style=\"margin: 0px 0px 10px; color: #333333; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px;\">16:50-17:00&nbsp; 公布成績</p>\n<p style=\"margin: 0px 0px 10px; color: #333333; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px;\">&nbsp;</p>\n<p style=\"margin: 0px 0px 10px; color: #333333; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px;\">得獎名額及獎金：</p>\n<p style=\"margin: 0px 0px 10px; color: #333333; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px;\">大學部及研究所各選出前三名得獎隊伍，</p>\n<p style=\"margin: 0px 0px 10px; color: #333333; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px;\">第一名各1隊、第2名各2隊、第3名各3隊（共計12隊），</p>\n<p style=\"margin: 0px 0px 10px; color: #333333; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px;\">將於110年11月9日本校成果發表暨頒獎活動由校長頒發獎狀乙紙及獎金，</p>\n<p style=\"margin: 0px 0px 10px; color: #333333; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px;\">第一名至第三名依序為新臺幣3萬元、2萬元、1萬元；</p>\n<p style=\"margin: 0px 0px 10px; color: #333333; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px;\">其餘佳作若干名，由學院贈予獎狀乙紙及獎金，每隊獎金新臺幣5仟元。</p>\n<p style=\"margin: 0px 0px 10px; color: #333333; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px;\">&nbsp;</p>\n<p style=\"margin: 0px 0px 10px; color: #333333; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px;\">聯絡人：電機資訊學院吳小姐（分機：34000）、陳小姐（分機：34005）</p>`,
        tags: [2, 3, 4, 8],
        updateTime: '2021-06-16 11:19:11'
      }
    }
  },
  computed: {
    ...mapGetters('language', ['currentLanguage', 'currentLanguageId']),
    ...mapGetters('announcement', ['getI18nById', 'getColorById'])
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/break-point.scss";

.main {
  // [ layout ]
  display: block;

  // [ position ]
  width: 90%;
  max-width: 924px;
  margin: {
    left: auto;
    right: auto;
  }
  padding: {
    top: 20px;
    bottom: 40px;
  }

  @media screen and (min-width: $break-point-lg){
    max-width: 1240px;
  }

  @media screen and (min-width: $break-point-xl){
    max-width: 1600px;
  }
}

.briefing {
  // [ layout ]
  display: grid;
  grid-template-areas:
      'tags'
      'title'
      'update-time';
  row-gap: 10px;

  // [ position ]
  width: 100%;
  height: fit-content;
  border-radius: 6px;
  margin: {
    top: 40px;
    bottom: 28px;
  }
  padding: {
    top: 20px;
    bottom: 20px;
    left: 14px;
    right: 14px;
  }
  background-color: #ffffff;
  box-shadow: 0 2px 24px 0 #dbdbdb, 0 8px 10px 0 #cccccc;

  @media screen and (min-width: $break-point-sm) {
    grid-template: {
      areas:
        'tags  tags'
        'title update-time';
      columns: 1fr 150px;
    }
    row-gap: 24px;
    padding: {
      top: 30px;
      bottom: 20px;
      left: 30px;
      right: 30px;
    }
  }

  > .tags {
    // [ layout ]
    display: grid;
    grid: {
      area: tags;
      template-columns: repeat(4, 1fr);
    }
    column-gap: 6px;

    @media screen and (min-width: $break-point-sm) {
      grid-template-columns: repeat(5, 100px);
      column-gap: 20px;
    }
  }

  > .title {
    // [ layout ]
    grid-area: title;
    display: block;

    // [ skin ]
    line-height: 24px;
    font: {
      size: 16px;
      weight: bold;
    }
  }

  > .update-time {
    // [ layout ]
    grid-area: update-time;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;

    // [ skin ]
    line-height: 14px;
    font-size: 14px;
    color: #b5babf;

    @media screen and (min-width: $break-point-sm) {
      justify-content: flex-end;
    }
  }
}

.content {
  // [ position ]
  margin: {
    top: 60px;
    bottom: 60px;
  }
  padding: {
    left: 30px;
    right: 30px;
  }

  p {
    height: 16px;
    line-height: normal;
  }

  ul {
    list-style: {
      type: disc;
      position: inside;
    }
  }

  ol {
    list-style: {
      type: decimal;
      position: inside;
    }
  }

  ul ul, ol ul {
    list-style: {
      type: circle;
      position: inside;
    }
    margin-left: font__px-to-rem( 15 );
  }

  ol ol, ul ol {
    list-style: {
      type: lower-latin;
      position: inside;
    }
    margin-left: font__px-to-rem( 15 );
  }

  caption {
    line-height: normal;
  }
}
</style>
