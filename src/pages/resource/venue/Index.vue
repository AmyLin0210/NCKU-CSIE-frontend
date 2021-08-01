<template lang="pug">
banner(
  :title="staticText[currentLanguage].title"
  imageSrc="banner/resource/venue.jpg"
)
section.content
  breadcrumb(route="/resource/venue")
  topic(:topic="staticText[currentLanguage].title")
  paragraph(:content="content")
  attachment(v-for="attachment in attachments" :attachment="attachment")

</template>

<script>
import Banner from '@/components/common/Banner.vue'
import Breadcrumb from '@/components/common/Breadcrumb.vue'
import Topic from '@/components/common/Topic.vue'
import Paragraph from '@/components/common/Paragraph.vue'
import Attachment from '@/components/common/Attachment.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Index',
  components: {
    Banner,
    Breadcrumb,
    Topic,
    Paragraph,
    Attachment
  },
  data () {
    return {
      staticText: {
        'zh-TW': {
          title: '場地租借'
        },
        'en-US': {
          title: 'Venue'
        }
      },
      content: [
        {
          'zh-TW': '教室借用系統',
          'en-US': 'Venue System',
          type: 'heading1'
        },
        {
          'zh-TW': '系統連結',
          'en-US': 'System Link',
          type: 'button',
          href: 'http://www.csie.ncku.edu.tw/Class2014/'
        },
        {
          'zh-TW': '場地設備借用申請須知',
          'en-US': 'Venue Hire instructions',
          type: 'heading1'
        },
        {
          'zh-TW': '申請資格',
          'en-US': 'Application qualification',
          type: 'heading2'
        },
        {
          'zh-TW': '政府機關、學校及經登記或立案核准之機構、法人、團體。',
          'en-US': 'Government agencies, schools, and approved filing corporation',
          type: 'text'
        },
        {
          'zh-TW': '申請方式',
          'en-US': 'Application method',
          type: 'heading2'
        },
        {
          'zh-TW': [
            '由網路看可用時段：網址 http://www.csie.ncku.edu.tw/Class2014',
            [
              '自行確認申請時段，',
              '並參考附件對應場地金額填寫場地使用申請表傳真06-2747076',
              '或e-mail教室系統管理人員 (林小姐z10611032@email.ncku.edu.tw)'
            ].join(''),
            '聯絡林小姐(06) 27575757-62500-15進行場地預訂',
            [
              '最晚請於場地三個工作天前匯款至本校專戶(如下說明四)，',
              '未匯款視同取消預訂，',
              '有疑問可聯絡 (06) 2757575-62500-16 (李小姐)'
            ].join(''),
            [
              '夜間及周末假日須額外請人員協助開關門，另收人事費用半天1000元全天2000元,',
              '收現金(僅幫忙開關門啟動教室設備)、下班時間原則上不便外借。'
            ].join('')
          ],
          'en-US': [
            'Find available time in the following web site: http://www.csie.ncku.edu.tw/Class2014',
            [
              '自行確認申請時段，',
              '並參考附件對應場地金額填寫場地使用申請表傳真06-2747076',
              '或e-mail教室系統管理人員 (林小姐z10611032@email.ncku.edu.tw)'
            ].join(''),
            '聯絡林小姐(06) 27575757-62500-15進行場地預訂',
            [
              '最晚請於場地三個工作天前匯款至本校專戶(如下說明四)，',
              '未匯款視同取消預訂，',
              '有疑問可聯絡 (06) 2757575-62500-16 (李小姐)'
            ].join(''),
            [
              'weekend needs to hire part-time employee to open/close door ( NTD 400/day , only cash ) ',
              'and off-duty hours is not included'
            ].join('')
          ],
          type: 'list'
        },
        {
          'zh-TW': '申請應備書面資料',
          'en-US': 'Prepare form',
          type: 'heading2'
        },
        {
          'zh-TW': '場地使用申請表(請參考附加檔案)。',
          'en-US': 'Venue hire form (reference attachment file).',
          type: 'text'
        },
        {
          'zh-TW': '繳費方式',
          'en-US': 'Payment',
          type: 'heading2'
        },
        {
          'zh-TW': [
            '請聯絡（06）2757575-62500-16（李小姐）',
            [
              '煩請於 借用場地三個工作天前匯款至本校專戶 (如下)，',
              '並直接傳真匯款單至本系，',
              '以利本系辦理後續收據申請及入帳相關事宜'
            ].join('')
          ],
          'en-US': [
            '請聯絡（06）2757575-62500-16（李小姐）',
            [
              'Please remit to the account (as following) three days before reservation date .',
              'In order to help us apply for receipt and transfer money, ',
              'please fax the cash remittance note to us.'
            ].join('')
          ],
          type: 'list'
        },
        {
          'zh-TW': [
            '匯款帳號',
            '帳戶名稱：國立成功大學401專戶',
            '帳戶號碼：00903607114-1',
            '台灣銀行、台南分行'
          ],
          'en-US': [
            '匯款帳號',
            'Account name：國立成功大學401專戶',
            'Account number：00903607114-1',
            'Bank of Taiwan, Tainan branch'
          ],
          type: 'description'
        },
        {
          'zh-TW': ['若未匯款則視同取消預訂！'],
          'en-US': ['Cancelation will be made if no remit is received!'],
          type: 'list'
        },
        {
          'zh-TW': '備註',
          'en-US': 'Remark',
          type: 'heading2'
        },
        {
          'zh-TW': '電腦教室設還原卡軟體需求請提早聯絡林先生(06)2757575-62500-18',
          'en-US': '電腦教室設還原卡軟體需求請提早聯絡林先生(06)2757575-62500-18',
          type: 'text'
        }
      ],
      attachments: [
        {
          href: '/assets/file/空間場地管理辦法-1080222-增修通過.pdf',
          name: '空間場地管理辦法-1080222-增修通過.pdf'
        },
        {
          href: '/assets/file/{更新}國立成功大學資訊工程學系場地設備借用管理要點1100513.pdf',
          name: '{更新}國立成功大學資訊工程學系場地設備借用管理要點1100513.pdf'
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
</style>
