<template lang="pug">
banner(
  :title="i18n[currentLanguage].title"
  imageSrc="banner/research/research-group.jpg"
)
section.content
  breadcrumb(
    :breadcrumbList="[ \
      {text: i18n[currentLanguage].breadcrumb.home, route: `/?languageId=${currentLanguageId}`}, \
      {text: i18n[currentLanguage].breadcrumb.research, route: `/research?languageId=${currentLanguageId}`}, \
      {text: i18n[currentLanguage].title, route: `/research/research-group?languageId=${currentLanguageId}`} \
    ]"
  )
  topic(:topic="i18n[currentLanguage].title")
  paragraph(:content="content")

</template>

<script>
import Banner from '@/components/common/Banner.vue'
import Breadcrumb from '@/components/common/Breadcrumb.vue'
import Topic from '@/components/common/Topic.vue'
import Paragraph from '@/components/common/Paragraph.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Index',
  components: {
    Banner,
    Breadcrumb,
    Topic,
    Paragraph
  },
  data () {
    return {
      i18n: {
        'zh-TW': {
          title: '研究群',
          breadcrumb: {
            home: '首頁',
            research: '學術研究'
          }
        },
        'en-US': {
          title: 'Research Group',
          breadcrumb: {
            home: 'Home',
            research: 'Research'
          }
        }
      },
      content: [
        {
          'zh-TW': '1. 數位生活科技與軟體技術',
          'en-US': '1. E-life Digital Technology and Software Technology',
          type: 'title'
        },
        {
          'zh-TW': '1.1 數位生活科技',
          'en-US': '1.1 E-life Digital Technology',
          type: 'subtitle'
        },
        {
          'zh-TW': [
            '郭耀煌老師',
            '陳培殷老師',
            '蘇文鈺老師',
            '林英超老師',
            '蔡佩璇老師'
          ],
          'en-US': [
            'Prof. Yau-Hwang Kuo',
            'Prof. Pei-Yin Chen',
            'Prof. Wen Yu Su',
            'Prof. Ing-Chao Lin',
            'Prof. Pei-Hsuan Tsai'
          ],
          type: 'list'
        },
        {
          'zh-TW': '1.2 軟體工程',
          'en-US': '1.2 Software Engineering',
          type: 'subtitle'
        },
        {
          'zh-TW': [
            '郭淑美老師',
            '李信杰老師'
          ],
          'en-US': [
            'Prof. Shu-Mei Guo',
            'Prof. Shin-Jie Lee'
          ],
          type: 'list'
        },
        {
          'zh-TW': '1.3 量子資訊、網路安全、演算法',
          'en-US': '1.3 Quantum Information, Network Security, and Algorithms',
          type: 'subtitle'
        },
        {
          'zh-TW': [
            '黃宗立老師',
            '郭淑美老師',
            '謝孫源老師'
          ],
          'en-US': [
            'Prof. Tzone-Lih Hwang',
            'Prof. Shu-Mei Guo',
            'Prof. Sun-Yuan Hsieh'
          ],
          type: 'list'
        },
        {
          'zh-TW': '2.計算、通訊與網路',
          'en-US': '2. Computation, Communication and Network',
          type: 'title'
        },
        {
          'zh-TW': '2.1 高速網路、多媒體串流',
          'en-US': '2.1 High Speed Network, and Multimedia Streaming',
          type: 'subtitle'
        },
        {
          'zh-TW': [
            '黃宗立老師',
            '許靜芳老師',
            '黃崇明老師',
            '蘇銓清老師',
            '鄭憲宗老師',
            '蕭宏章老師',
            '張燕光老師',
            '陳奇業老師'
          ],
          'en-US': [
            'Prof. Tzone-Lih Hwang',
            'Prof. Ching-Fang Hsu',
            'Prof. Chung-Ming Huang',
            'Prof. Chuan-Ching Sue',
            'Prof. Sheng-Tzong Cheng',
            'Prof. Hung-Chang Hsiao',
            'Prof. Yeim-Kuan Chang',
            'Prof. Chi-Yeh Chen'
          ],
          type: 'list'
        },
        {
          'zh-TW': '2.2 無線通訊、行動寬頻網路',
          'en-US': '2.2 Wireless Communications, and Mobile Broadband Network',
          type: 'subtitle'
        },
        {
          'zh-TW': [
            '黃宗立老師',
            '蔡孟勳老師',
            '黃崇明老師',
            '鄭憲宗老師',
            '藍崑展老師'
          ],
          'en-US': [
            'Prof. Tzone-Lih Hwang',
            'Prof. Meng-Hsun Tsai',
            'Prof. Chung-Ming Huang',
            'Prof. Sheng-Tzong Cheng',
            'Prof. Kun-chan Lan'
          ],
          type: 'list'
        },
        {
          'zh-TW': '2.3 雲端計算、高效能計算',
          'en-US': '2.3 Cloud Computing, and High Performance Computing',
          type: 'subtitle'
        },
        {
          'zh-TW': [
            '蕭宏章老師',
            '黃宗立老師',
            '張大緯老師',
            '蘇文鈺老師',
            '林英超老師',
            '謝孫源老師',
            '張燕光老師'
          ],
          'en-US': [
            'Prof. Hung-Chang Hsiao',
            'Prof. Tzone-Lih Hwang',
            'Prof. David Chang',
            'Prof. Wen Yu Su',
            'Prof. Ing-Chao Lin',
            'Prof. Sun-Yuan Hsieh',
            'Prof. Yeim-Kuan Chang'
          ],
          type: 'list'
        },
        {
          'zh-TW': '3.資料與知識工程',
          'en-US': '3. Data and Knowledge Engineering',
          type: 'title'
        },
        {
          'zh-TW': '3.1 資料探勘、行動運算、網際網路與社群網路',
          'en-US': '3.1 Data Mining, Mobile Data Management, and Web and Social Network',
          type: 'subtitle'
        },
        {
          'zh-TW': [
            '李強老師',
            '蔣榮先老師',
            '盧文祥老師',
            '高宏宇老師',
            '莊坤達老師'
          ],
          'en-US': [
            'Prof. Chiang Lee',
            'Prof. Jung-Hsien Chiang',
            'Prof. Wen-Hsiang Lu',
            'Prof. Hung-Yu Kao',
            'Prof. Kun-Ta Chuang'
          ],
          type: 'list'
        },
        {
          'zh-TW': '3.2 知識工程與管理、資料庫管理系統',
          'en-US': '3.2 Knowledge Engineering and Management, and Database Management System',
          type: 'subtitle'
        },
        {
          'zh-TW': [
            '陳裕民老師',
            '陳朝鈞老師'
          ],
          'en-US': [
            'Prof. Yuh-Min Chen',
            'Prof. Chao-Chun Chen'
          ],
          type: 'list'
        },
        {
          'zh-TW': '4.多媒體',
          'en-US': '4. Multimedia',
          type: 'title'
        },
        {
          'zh-TW': '4.1 信號處理、影像處理',
          'en-US': '4.1 Signal Processing, and Image Processing',
          type: 'subtitle'
        },
        {
          'zh-TW': [
            '孫永年老師',
            '連震杰老師',
            '吳宗憲老師',
            '王士豪老師',
            '陳響亮老師',
            '吳明龍老師',
            '郭淑美老師',
            '蘇文鈺老師',
            '朱威達老師'
          ],
          'en-US': [
            'Prof. Yung-Nien Sun',
            'Prof. Jenn-Jier James Lien',
            'Prof. Chung-Hsien Wu',
            'Prof. Shyh-Hau Wang',
            'Prof. Shang-Liang Chen',
            'Prof. Ming-Long Wu',
            'Prof. Shu-Mei Guo',
            'Prof. Wen Yu Su',
            'Prof. Wei-Ta Chu'
          ],
          type: 'list'
        },
        {
          'zh-TW': '4.2 電腦視覺、電腦繪圖',
          'en-US': '4.2 Computer Vision,and Computer Graphics',
          type: 'subtitle'
        },
        {
          'zh-TW': [
            '孫永年老師',
            '李同益老師',
            '郭淑美老師',
            '連震杰老師'
          ],
          'en-US': [
            'Prof. Yung-Nien Sun',
            'Prof. Tong-Yee Lee',
            'Prof. Shu-Mei Guo',
            'Prof. Jenn-Jier James Lien'
          ],
          type: 'list'
        },
        {
          'zh-TW': '4.3 人工智慧、機器學習與圖形辨識、語音辨識、人機互動、多媒體雲端計算',
          'en-US': '4.3 Artificial Intelligent, Machine Learning and Pattern Recognition,Speech Recognition, Human-Computer Interaction, and Multimedia Cloud Computing',
          type: 'subtitle'
        },
        {
          'zh-TW': [
            '孫永年老師',
            '吳宗憲老師',
            '郭淑美老師',
            '蘇文鈺老師',
            '連震杰老師'
          ],
          'en-US': [
            'Prof. Yung-Nien Sun',
            'Prof. Chung-Hsien Wu',
            'Prof. Shu-Mei Guo',
            'Prof. Wen Yu Su',
            'Prof. Jenn-Jier James Lien'
          ],
          type: 'list'
        },
        {
          'zh-TW': '5.架構與嵌入式系統',
          'en-US': '5.Architecture and Embedded System',
          type: 'title'
        },
        {
          'zh-TW': '5.1 單晶片、嵌入式系統',
          'en-US': '5.1 SoC, and Embedded System',
          type: 'subtitle'
        },
        {
          'zh-TW': [
            '郭耀煌老師',
            '陳培殷老師',
            '蘇文鈺老師',
            '連震杰老師',
            '楊中平老師',
            '梁勝富老師',
            '張大緯老師',
            '林英超老師'
          ],
          'en-US': [
            'Prof. Yau-Hwang Kuo',
            'Prof. Pei-Yin Chen',
            'Prof. Wen Yu Su',
            'Prof. Jenn-Jier James Lien',
            'Prof. Chung-Ping Young',
            'Prof. Sheng-Fu Liang',
            'Prof. David Chang',
            'Prof. Ing-Chao Lin'
          ],
          type: 'list'
        },
        {
          'zh-TW': '5.2 結構與系統',
          'en-US': '5.2 Architecture and System',
          type: 'subtitle'
        },
        {
          'zh-TW': [
            '郭耀煌老師',
            '蘇文鈺老師',
            '張燕光老師',
            '楊中平老師',
            '張大緯老師',
            '林英超老師'
          ],
          'en-US': [
            'Prof. Yau-Hwang Kuo',
            'Prof. Wen Yu Su',
            'Prof. Yeim-Kuan Chang',
            'Prof. Chung-Ping Young',
            'Prof. David Chang',
            'Prof. Ing-Chao Lin'
          ],
          type: 'list'
        },
        {
          'zh-TW': '5.3 設計自動化',
          'en-US': '5.3 Design Automation',
          type: 'subtitle'
        },
        {
          'zh-TW': [
            '蘇文鈺老師',
            '張大緯老師',
            '林英超老師'
          ],
          'en-US': [
            'Prof. Wen Yu Su',
            'Prof. David Chang',
            'Prof. Ing-Chao Lin'
          ],
          type: 'list'
        },
        {
          'zh-TW': '6.生醫工程',
          'en-US': '6.Biomedical Engineering',
          type: 'title'
        },
        {
          'zh-TW': '6.1 生物資訊、生醫資訊檢索、生醫智慧系統',
          'en-US': '6.1 Bioinformatics, Biomedical Information Retrieval, and Intelligent System of Biomedicine',
          type: 'subtitle'
        },
        {
          'zh-TW': [
            '郭耀煌老師',
            '蔣榮先老師',
            '蘇文鈺老師',
            '謝孫源老師',
            '盧文祥老師',
            '高宏宇老師',
            '蔡佩璇老師'
          ],
          'en-US': [
            'Prof. Yau-Hwang Kuo',
            'Prof. Jung-Hsien Chiang',
            'Prof. Wen Yu Su',
            'Prof. Sun-Yuan Hsieh',
            'Prof. Wen-Hsiang Lu',
            'Prof. Hung-Yu Kao',
            'Prof. Pei-Hsuan Tsai'
          ],
          type: 'list'
        },
        {
          'zh-TW': '6.2 生醫訊號處理、生醫影像處理、醫學影像系統',
          'en-US': '6.2 Biomedical Signal Processing, Biomedical Imaging Processing, and Medical Imaging Instrument',
          type: 'subtitle'
        },
        {
          'zh-TW': [
            '孫永年老師',
            '郭耀煌老師',
            '吳宗憲老師',
            '郭淑美老師',
            '蘇文鈺老師',
            '連震杰老師',
            '王士豪老師',
            '梁勝富老師',
            '吳明龍老師'
          ],
          'en-US': [
            'Prof. Yung-Nien Sun',
            'Prof. Yau-Hwang Kuo',
            'Prof. Chung-Hsien Wu',
            'Prof. Shu-Mei Guo',
            'Prof. Wen Yu Su',
            'Prof. Jenn-Jier James Lien',
            'Prof. Shyh-Hau Wang',
            'Prof. Sheng-Fu Liang',
            'Prof. Ming-Long Wu'
          ],
          type: 'list'
        },
        {
          'zh-TW': '6.3 生醫資訊系統、醫用人機介面設計、生醫資訊網路、生醫檢測晶片設計',
          'en-US': '6.3 Information System Design for Biomedicine, Human-Machine Interface Design for Biomedicine, Network Application for Biomedicine, and Biochips Design and Applications',
          type: 'subtitle'
        },
        {
          'zh-TW': [
            '吳宗憲老師',
            '蘇文鈺老師',
            '王士豪老師',
            '藍崑展老師',
            '張大緯老師',
            '梁勝富老師',
            '蔡佩璇老師'
          ],
          'en-US': [
            'Prof. Chung-Hsien Wu',
            'Prof. Wen Yu Su',
            'Prof. Shyh-Hau Wang',
            'Prof. Kun-chan Lan',
            'Prof. David Chang',
            'Prof. Sheng-Fu Liang',
            'Prof. Pei-Hsuan Tsai'
          ],
          type: 'list'
        },
        {
          'zh-TW': '7.製造工程',
          'en-US': '7.Manufacturing Engineering',
          type: 'title'
        },
        {
          'zh-TW': '7.1 製造系統與管理—製造管理、半導體生產自動化、智慧型製造系統',
          'en-US': '7.1 Manufacturing Systems and Management—Manufacturing Management, Semiconductor Production and Automation, and Intelligent Manufacturing Systems',
          type: 'subtitle'
        },
        {
          'zh-TW': [
            '鄭芳田老師',
            '楊大和老師'
          ],
          'en-US': [
            'Prof. Fan-Tien Cheng',
            'Prof. Taho Yang'
          ],
          type: 'list'
        },
        {
          'zh-TW': '7.2 E化製造、資訊與機電整合、半導體生產自動化',
          'en-US': '7.2 E-Manufacturing, Information and Mechatronics,and Semiconductor Manufacturing Automation',
          type: 'subtitle'
        },
        {
          'zh-TW': [
            '鄭芳田老師',
            '陳響亮老師'
          ],
          'en-US': [
            'Prof. Fan-Tien Cheng',
            'Prof. Shang-Liang Chen'
          ],
          type: 'list'
        },
        {
          'zh-TW': '7.3 商業智慧、製造演算法、整合製造資訊系統、醫院自動化資訊系統',
          'en-US': '7.3 Business Intelligence, Manufacturing Algorithm, Integrated Manufacturing Database System, and Hospital Automations and Information Systems',
          type: 'subtitle'
        },
        {
          'zh-TW': [
            '陳裕民老師',
            '謝孫源老師',
            '陳朝鈞老師',
            '蔡佩璇老師'
          ],
          'en-US': [
            'Prof. Yuh-Min Chen',
            'Prof. Sun-Yuan Hsieh',
            'Prof. Chao-Chun Chen',
            'Prof. Pei-Hsuan Tsai'
          ],
          type: 'list'
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
  width: 90%;
  margin: {
    left: auto;
    right: auto;
    bottom: 30px;
  }
}
</style>
