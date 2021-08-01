<template lang="pug">
banner(
  :title="i18n[currentLanguage].title"
  imageSrc="banner/about/contact.jpg"
)
section.content
  breadcrumb(route="/about/contact")
  section.contact-block
    iframe.map(
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.721972979988!2d120.21841421503353!3d22.99724908496579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e769337a9d2a5%3A0x908f765e123a6d7!2z5ZyL56uL5oiQ5Yqf5aSn5a246LOH6KiK5bel56iL5a2457O7!5e0!3m2!1szh-TW!2stw!4v1627818215684!5m2!1szh-TW!2stw"
      height="600"
      allowfullscreen=""
      loading="lazy"
    )
    section.paragraph
      template(v-for="(obj, idx) in contact" :key="`contact-${idx}`")
        topic(:topic="obj.title[currentLanguage]")
        template(v-for="(item, id) in obj.article" :key="`item-${id}`")
          h3(v-if="item.type === 'heading'") {{item[currentLanguage]}}
          template(v-if="item.type === 'text'")
            p(v-for="(text, i) in item[currentLanguage]" :key="`text-${i}`") {{text}}
</template>

<script>
import Banner from '@/components/common/Banner.vue'
import Breadcrumb from '@/components/common/Breadcrumb.vue'
import Paragraph from '@/components/common/Paragraph.vue'
import Topic from '@/components/common/Topic.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Index',
  components: {
    Banner,
    Breadcrumb,
    Paragraph,
    Topic
  },
  data () {
    return {
      i18n: {
        'zh-TW': {
          title: '聯絡我們'
        },
        'en-US': {
          title: 'Contact'
        }
      },
      contact: [
        {
          title: {
            'zh-TW': '自行開車（國道路線）',
            'en-US': 'Driving'
          },
          article: [
            {
              'zh-TW': '南下',
              'en-US': 'South',
              type: 'heading'
            },
            {
              'zh-TW': [
                '沿國道一號南下，下永康交流道右轉；沿中正北路、中正南路（南向）往台南市區直行；中華路左轉，沿中華東路前進，於小東路口右轉，直走即可抵達本校。',
                '自國道三號北上者，轉86號快速道路（西向），可接國道一號（北向）。'
              ],
              'en-US': [
                '1. Take National Freeway No.1 (Sun Yat-Sen Freeway) southbound.',
                '2. Get off at Exit 319 (Yongkang Interchange) and turn right to southbound Chungcheng N. Road.',
                '3. Travel down on Chungcheng N. Road and Chungcheng S. Road, and make a left turn at Chunghwa Road.',
                '4. Drive down Chunghwa Road and Chunghwa East Road.',
                '5. Turn right at Shiaodong Road and travel along it. ',
                'Or',
                '1. If you drive on National Freeway No.3 Southbound, exit at Exit 346 (Shinhua System).',
                '2. Take National Freeway No.8 Westbound (Exit 6, Tainan System Interchange) to get on National Freeway No.1 Southbound to Exit 319.'
              ],
              type: 'text'
            },
            {
              'zh-TW': '北上',
              'en-US': 'North',
              type: 'heading'
            },
            {
              'zh-TW': [
                '沿國道一號北上，下仁德交流道左轉；沿東門路(西向)往台南市區直走，遇林森路或長榮路右轉(北向)，即可抵達本校。',
                '自國道三號北上者，轉86號快速道路（西向），可接國道一號（北向）。'
              ],
              'en-US': [
                '1. Take National Freeway No.1 (Sun Yat-Sen Freeway) northbound.',
                '2. Get off at Exit 327 (Tainan Interchange) and turn left to westbound Chungshang Road.',
                '3. Travel on Chungshang Road and continue on Dongmen Road.',
                '4. Make a right turn at either Chang Rung Road or Sheng-Li Road, and travel along it.',
                'Or',
                '1. If you take National Freeway No.3 Northbound, exit at Exit 357 (Guanmiao Interchange).',
                '2. Take No.86 Expressway westbound (Exit 8, Rende System Interchange) to get on National Freeway No.1 northbound to Exit 327. '
              ],
              type: 'text'
            }
          ]
        },
        {
          title: {
            'zh-TW': '搭乘火車',
            'en-US': 'For Train'
          },
          article: [
            {
              'zh-TW': [
                '於台南站下車後，自後站出口（大學路），大學路左側即為本校光復校區；繼續往前步行，經過勝利路之後，左手邊即為成功校區。'
              ],
              'en-US': [
                '1. Take TRA Train to Tainan Station.',
                '2. NCKU is located on Ta-Shueh (University) Road about 100m from the rear entrance of Tainan Station.'
              ],
              type: 'text'
            }
          ]
        },
        {
          title: {
            'zh-TW': '搭乘高鐵',
            'en-US': 'For THSR'
          },
          article: [
            {
              'zh-TW': [
                '搭乘台灣高鐵抵台南站者，可至高鐵台南站二樓轉乘通廊或一樓大廳1號出口前往台鐵沙崙站搭乘區間車前往台南火車站。',
                '區間車約30分鐘一班車，20分鐘可到達台南火車站，自台南火車站後站步行即可到達成功大學。'
              ],
              'en-US': [
                '1-1. Those who arrived at Tainan Station by THSR can proceed to the interchange corridor on the 2nd floor',
                '1-2  Or the No.1 exit on the 1st floor lobby to take the shuttle train at Sharon Station to Tainan Train Station.',
                '2. The shuttle train appears every 30 minutes and arrives at Tainan Train Station in about 20 minutes.',
                '3. You can walk from Tainan Train Station to National Cheng Kung University.'
              ],
              type: 'text'
            }
          ]
        }
      ]
    }
  },
  computed: {
    ...mapGetters('language', ['currentLanguage', 'currentLanguageId'])
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/break-point.scss";

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

.contact-block {
  // [ layout ]
  display: grid;

  grid-template-areas:
    'paragraph'
    'map';

  align-items: center;

  // [ position ]
  width: 100%;
  height: fit-content;
  margin-bottom: 16px;

  @media screen and (min-width: $break-point-lg){
    grid-template: {
      areas: 'map . paragraph';
      columns: 3fr 24px 2fr;
    };
  }

  > .paragraph {
    // [ lauout ]
    grid-area: paragraph;

    // [ position ]
    margin-bottom: 16px;

    > h3 {
      // [ layout ]
      display: block;
      width: fit-content;
      margin: {
        top: 8px;
        bottom: 8px;
      }
      line-height: 14px * 1.2;

      // [ skin ]
      border: solid 1px #adacad;
      border-radius: 3px;
      padding: 3px;
      color: #adacad;
      font: {
        size: 14px;
        weight: bold;
      }
    }

    > p {
      // [ layout ]
      margin: {
        top: 8px;
        bottom: 8px;
      }
      line-height: 16px * 1.2;

      // [ skin ]
      font-size: 16px;
    }
  }

  > .map {
    // [ layout ]
    display: flex;
    grid-area: map;
    justify-self: center;

    // [ position ]
    width: 100%;
    min-height: font__px-to-rem( 480 );

    @media screen and (min-width: $break-point-lg){
      min-height: font__px-to-rem( 640 );
    }
  }
}
</style>
