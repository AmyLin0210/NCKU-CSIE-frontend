<template lang="pug">
banner(
  :title="i18n[currentLanguage].title"
  imageSrc="banner/about/intro.jpg"
)
section.content
  breadcrumb(route="/about/intro")
  section#intro
    topic(:topic="i18n[currentLanguage].index.intro")
    paragraph(:content="intro")
  section#history
    topic(:topic="i18n[currentLanguage].index.history")
    section.legend
      legend-icon(color='blue')
      p {{i18n[currentLanguage].history.dean}}
    section.legend
      legend-icon(color='red')
      p {{i18n[currentLanguage].history.event}}
    ul.list
      template(v-for="(obj, idx) in history" :key="`history-${idx}`")
        template(v-if="obj.type === 'dean'")
          li.dean
            //- Check whether it is until now
            time.duration {{`${obj.from} - ${(obj.to === 'now')? i18n[currentLanguage].history.now : obj.to}`}}
            span.legend
              legend-icon(color='blue' direction='left')
              span.name {{obj[`${currentLanguage}`]}}
        template(v-else)
          li.event
            time.time {{obj.time}}
            span.legend
              legend-icon(color='red' direction='right')
              span.context {{obj[currentLanguage]}}
  section#develop
    topic(:topic="i18n[currentLanguage].index.develop")
    paragraph(:content="develop.intro")
    template(v-for="(obj, idx) in develop.article" :key="`develop-${idx}`")
      article.develop-block(:class="(idx%2 === 0) ? 'develop-block-left' : 'develop-block-right'")
        section.develop-paragraph
          paragraph(:content="obj.paragraph")
        img.develop-image(:src="require(`@/assets/image/${obj.image}`)")
  section#education
    topic(:topic="i18n[currentLanguage].index.education")
    template(v-for="(obj, idx) in education" :key="`education-${idx}`")
      article.education-block
        section.education-paragraph
          paragraph(:content="obj.paragraph")
        img.education-image(:src="require(`@/assets/image/${obj.image}`)")
  section#course
    topic(:topic="i18n[currentLanguage].index.course")
    paragraph(:content="course")
  section#equipment
    topic(:topic="i18n[currentLanguage].index.equipment")
    paragraph(:content="equipment")
</template>

<script>
import Banner from '@/components/common/Banner.vue'
import Breadcrumb from '@/components/common/Breadcrumb.vue'
import Topic from '@/components/common/Topic.vue'
import Paragraph from '@/components/common/Paragraph.vue'
import LegendIcon from '@/components/about/LegendIcon.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Index',
  components: {
    Banner,
    Breadcrumb,
    Topic,
    Paragraph,
    LegendIcon
  },
  data () {
    return {
      i18n: {
        'zh-TW': {
          title: '系所介紹',
          index: {
            intro: '系所介紹',
            history: '本系歷史',
            develop: '發展方向',
            education: '教育目標',
            course: '課程介紹',
            equipment: '設備介紹'
          },
          history: {
            dean: '歷屆所長/系主任',
            event: '系所歷史與沿革',
            now: '迄今'
          }
        },
        'en-US': {
          title: 'Introduction',
          index: {
            intro: 'Introduction',
            history: 'History',
            develop: 'Developing Directions',
            education: 'Education & Research',
            course: 'Course Introduction',
            equipment: 'Equipment'
          },
          history: {
            dean: 'History of the Deans',
            event: 'Major Events',
            now: 'Now'
          }
        }
      },
      history: [
        {
          type: 'dean',
          'zh-TW': '張燕光教授',
          'en-US': 'Prof. Yeim-Kuan Chang',
          from: '2021.2',
          to: 'now'
        },
        {
          type: 'dean',
          'zh-TW': '高宏宇教授',
          'en-US': 'Prof. Hung-Yu Kao',
          from: '2017.8',
          to: '2021.1'
        },
        {
          type: 'dean',
          'zh-TW': '謝孫源教授',
          'en-US': 'Prof. Sun-Yuan Hsieh',
          from: '2015.8',
          to: '2017.8'
        },
        {
          type: 'dean',
          'zh-TW': '陳培殷教授',
          'en-US': 'Prof. Pei-Yin Chen',
          from: '2012.8',
          to: '2015.7'
        },
        {
          type: 'dean',
          'zh-TW': '鄭憲宗教授',
          'en-US': 'Prof. Sheng-Tzong Cheng',
          from: '2009.8',
          to: '2012.7'
        },
        {
          type: 'event',
          'zh-TW': '製造資訊與系統研究所整合至本系',
          'en-US': 'Integration of the Institute of Manufacturing Information and Systems',
          time: '2011.8'
        },
        {
          type: 'dean',
          'zh-TW': '黃崇明教授',
          'en-US': 'Prof. Chung-Ming Huang',
          from: '2006.8',
          to: '2009.7'
        },
        {
          type: 'event',
          'zh-TW': '增設醫學資訊研究所',
          'en-US': 'Establishment of the Institute of Medical Informatics',
          time: '2006'
        },
        {
          type: 'dean',
          'zh-TW': '李強教授',
          'en-US': 'Prof. Chiang Lee',
          from: '2005.8',
          to: '2006.7'
        },
        {
          type: 'dean',
          'zh-TW': '朱治平教授',
          'en-US': 'Prof. Chih-Ping Chu',
          from: '2002.8',
          to: '2005.7'
        },
        {
          type: 'event',
          'zh-TW': '擴增大學部為兩班',
          'en-US': 'Expanding the university department for two classes',
          time: '2002.8'
        },
        {
          type: 'dean',
          'zh-TW': '吳宗憲教授',
          'en-US': 'Prof. Chung-Hsien Wu',
          from: '1999.8',
          to: '2002.7'
        },
        {
          type: 'dean',
          'zh-TW': '孫永年教授',
          'en-US': 'Prof. Yung-Nien Sun',
          from: '1996.8',
          to: '1999.7'
        },
        {
          type: 'event',
          'zh-TW': '成立大學部',
          'en-US': 'Establishment of undergraduate program',
          time: '1997.8'
        },
        {
          type: 'dean',
          'zh-TW': '王駿發教授',
          'en-US': 'Prof. Jun-Fa Wang',
          from: '1990.8',
          to: '1996.7'
        },
        {
          type: 'event',
          'zh-TW': '成立博士班',
          'en-US': 'Establishment of Ph.D. program',
          time: '1992.8'
        },
        {
          type: 'dean',
          'zh-TW': '孔令洋教授',
          'en-US': 'Prof. Ling-Yang Kong',
          from: '1987.8',
          to: '1990.7'
        },
        {
          type: 'event',
          'zh-TW': '成立碩士班',
          'en-US': 'Establishment of the department',
          time: '1987.8'
        }
      ],
      intro: [
        {
          'zh-TW': '本系歷史',
          'en-US': 'History',
          href: '#history',
          type: 'link'
        },
        {
          'zh-TW': '發展方向',
          'en-US': 'Developing Directions',
          href: '#develop',
          type: 'link'
        },
        {
          'zh-TW': '教育目標',
          'en-US': 'Education & Research',
          href: '#education',
          type: 'link'
        },
        {
          'zh-TW': '課程介紹',
          'en-US': 'Course Info',
          href: '#course',
          type: 'link'
        },
        {
          'zh-TW': '設備介紹',
          'en-US': 'Equipment',
          href: '#equipment',
          type: 'link'
        }
      ],
      develop: {
        intro: [
          {
            'zh-TW': [
              '第一波的資訊科技在二十世紀末達到最高點，並在網際網路泡沫幻滅後的二十一世紀初，',
              '揭開第二波資訊科技的序幕。第二波的資訊科技重點在哪？',
              '搜尋技術和引擎？無所不在的計算和通訊？嵌入式系統？生物及醫學資訊？無人可知，無人可曉。',
              '為因應此第二波資訊科技的發展，本系/所將致力於培育新一代資訊科技人才、積極研究和開發電腦軟/硬體及資訊應用相關技術。',
              '結合國內產官學研之各項資源，並與國際接軌，提升國內之產業技術，在政府「五年五百億邁向頂尖大學」計畫的資助下，',
              '邁向國際一流資訊工程系所。本系所中長程發展計畫分三方面說明：'
            ].join(''),
            'en-US': [
              'Following the trend of information technology that is being promoted by the government,',
              'the information industry in Taiwan is flourishing.',
              'To meet the demand of talents in society and elevate the level of information industry,',
              'The CSIE Department engages itself in the cultivation of information engineering talents',
              'as well as in the research and development of technology related to computing software and hardware engineering.',
              'Besides,',
              'The CSIE Department makes use of its research facilities',
              'to provide services to the industrial and business sectors and the government,',
              'establishing communication channels between the academic circle and the industrial and business sector.',
              'It is intended to help industries and businesses upgrade their level',
              'in hopes to further increasing national and global competitiveness.',
              'We also expect and aim to advance our department',
              'to be an international first-class academic palace',
              'under the support of the Program for Promoting Academic Excellence of Universities of MOE.',
              'The long-term development plan of the department is described in three aspects:'
            ].join(' '),
            type: 'text'
          }
        ],
        article: [
          {
            paragraph: [
              {
                'zh-TW': '一、教學方面',
                'en-US': '1. Teaching Aspects',
                type: 'heading2'
              },
              {
                'zh-TW': '主要發展重點在於：',
                'en-US': 'The points are:',
                type: 'text'
              },
              {
                'zh-TW': [
                  '提升授課品質，符合並取得 IEET 和華盛頓公約的大學工程教育認證。',
                  '加強師資陣容，提高學生專業領域的深度和廣度。',
                  '充實教學研究設備，滿足師生教學研究所需。',
                  '修建系館教學和研究空間，提供優良學習環境。'
                ],
                'en-US': [
                  [
                    'Improve the quality of the lectures,',
                    'and meet and obtain the university engineering education certification',
                    'of IEET and Washington Convention.'
                  ].join(' '),
                  [
                    'Strengthen the faculty lineup',
                    'and increase the depth and breadth of students\' professional skills.'
                  ].join(' '),
                  'Enrich teaching and research equipment to meet the needs of teachers and students.',
                  [
                    'The teaching and research space of the department building',
                    'will be built to provide an excellent learning environment.'
                  ].join(' ')
                ],
                type: 'list'
              },
              {
                'zh-TW': [
                  '為提升南台灣地區資訊人才質與量的競爭力，本系將責無旁貸的擔負起此火車頭的責任。',
                  '因此預計在五年內大學部由二班增至三班，學生總數將達一千人；而師資方面，亦將師資員額增聘至40名以上；',
                  '而在空間方面，在五年內將完成新系館的增建，',
                  '以供應新增的大學部教學教室、實驗室、研究生實驗室及新聘教師的辦公室等空間使用。',
                  '由此建立中／南台灣最佳及最具規模之資訊工程教育環境。'
                ].join(''),
                'en-US': [
                  'In order to enhance students\' competitiveness in Southern Taiwan,',
                  'the department will be responsible for leading the improvement.',
                  'Therefore,',
                  'The number of classes will increase from two to three,',
                  'and the total number of students will reach one thousand within five years.',
                  'In terms of teachers,',
                  'the number of teachers will be increased to more than 40.',
                  'In terms of space,',
                  'it will be completed within five years.',
                  'The expandtion of the new department building will be used',
                  'to supply additional classrooms for university departments,',
                  'laboratories and newly hired teachers.',
                  'We will be the best and largest computer science and information engineering department',
                  'in Central/Southern Taiwan.'
                ].join(' '),
                type: 'text'
              }
            ],
            image: 'intro/teach.png'
          },
          {
            paragraph: [
              {
                'zh-TW': '二、研究方面',
                'en-US': '2. Researching Aspect',
                type: 'heading2'
              },
              {
                'zh-TW': '主要發展重點在於：',
                'en-US': 'The points are:',
                type: 'text'
              },
              {
                'zh-TW': [
                  '加強學術研究能力、提升研究水準。',
                  '積極爭取產官學合作研究計畫，提升師生研究能力及系譽。',
                  '配合南科，提供資訊技術支援及培育產業高級技術人才。'
                ],
                'en-US': [
                  'Improving academic research capabilities and standards',
                  [
                    'Actively strive for the joint research project of production,',
                    'government and study,',
                    'and improve the research ability and reputation of teachers and students.'
                  ].join(' '),
                  [
                    'Cooperate with Southern Taiwan Science Park',
                    'to provide information technology support and cultivate technical talents.'
                  ].join(' ')
                ],
                type: 'list'
              },
              {
                'zh-TW': [
                  '本系所的研究發展廣佈於資訊工程的主要研究，',
                  '包含積體電路、電腦輔助設計、資訊安全、計算機系統、人工智慧、電腦網路、',
                  '多媒體系統、軟體工程+物件導向系統、分散式系統+作業系統設計、',
                  '編譯系統、 資料庫系統、語音處理、影像與圖像技術。',
                  '在這些領域中均深受肯定，成效良好。'
                ].join(''),
                'en-US': [
                  'The research and development of the department',
                  'is widely distributed in the main research area of computer science and information engineering,',
                  'including',
                  'Information Security',
                  'Computer Organization',
                  'Artificial Intelligence',
                  'Computer Network',
                  'Multimedia System',
                  'Software Engineering + Object-Oriented System',
                  'Distributed System + Operating System Design',
                  'Compiler',
                  'Database System',
                  'Digital Voice Processing',
                  'and Image Processing.',
                  'We are well recognized in these areas and have achieved good results.'
                ].join(' '),
                type: 'text'
              }
            ],
            image: 'intro/research.png'
          },
          {
            paragraph: [
              {
                'zh-TW': '三、國際化方面',
                'en-US': '3. Global Aspect',
                type: 'heading2'
              },
              {
                'zh-TW': '主要發展重點在於：',
                'en-US': 'The points are:',
                type: 'text'
              },
              {
                'zh-TW': [
                  '積極參與及主辦國際學術會議，加強國際交流，提升國際地位。',
                  '爭取美、歐、日國際學術合作計畫及與 國際一流電子資訊公司之國際產學合作計畫。',
                  '聘請國外學者專家到本系/所進行短期講學，獲取最先進的資訊科技新知和潮流。',
                  '實施英語授課，增加學生國際競爭力。',
                  '招收外籍學生至本系就讀，提升本系國際知名度。'
                ],
                'en-US': [
                  [
                    'Actively participate in and host international academic conferences,',
                    'strengthen international exchanges,',
                    'and enhance international reputation.'
                  ].join(' '),
                  [
                    'Strive for international academic programs in the United States, Europe and Japan.',
                    'Also cooperate with world-class electronic information companies.'
                  ].join(' '),
                  [
                    'Employ foreign scholars and experts to the department',
                    'for short-term lectures to obtain the most advanced information technology knowledge and trends.'
                  ].join(' '),
                  'Implement English classes to increase students\' international competitiveness.',
                  'Enrolling foreign students to the department, improving international reputation.'
                ],
                type: 'list'
              }
            ],
            image: 'intro/international.png'
          }
        ]
      },
      education: [
        {
          paragraph: [
            {
              'zh-TW': '一、教育學生基礎專業知識及終身學習之能力',
              'en-US': '1. Professional Knowledge and Lifelong Learning Skills',
              type: 'heading2'
            },
            {
              'zh-TW': [
                '畢業生應具備基礎專業數學及資訊理論知識之基本能力',
                '畢業生應具備理論推導及實驗數據分析歸納之能力',
                '畢業生應具備終身學習之能力'
              ],
              'en-US': [
                'Graduates should have basic skills in advanced mathematics and information theory.',
                'Graduates should have the ability to theoretically derive and analyze experimental data.',
                'Graduates should have the ability of lifelong learning skills.'
              ],
              type: 'list'
            }
          ],
          image: 'intro/learn.png'
        },
        {
          paragraph: [
            {
              'zh-TW': '二、教育學生運用專業知識解決問題之能力',
              'en-US': '2. Apply Expertise to Solve Information Application Problems',
              type: 'heading2'
            },
            {
              'zh-TW': [
                '畢業生應具備發掘、分析及解決資訊應用問題之能力',
                '畢業生應具備資訊工程設計、創新、測試及驗證之能力',
                '畢業生應具備系統整合之能力'
              ],
              'en-US': [
                'Graduates should have the ability to discover, analyze and solve information application problems.',
                'Graduates should have the ability to design, innovate, test and validate.',
                'Graduates should have the ability to integrate different systems.'
              ],
              type: 'list'
            }
          ],
          image: 'intro/solve.png'
        },
        {
          paragraph: [
            {
              'zh-TW': '三、教育學生優質團隊合作之能力',
              'en-US': '3. Coworking with Team',
              type: 'heading2'
            },
            {
              'zh-TW': [
                '畢業生應具備科技人文素養及資訊工程倫理之精神',
                '畢業生應具備良好溝通技巧及國際觀',
                '畢業生應具備負責之工作態度及團隊合作之能力'
              ],
              'en-US': [
                'Graduates should have the spirit of scientific and humanistic literacy and information engineering ethics.',
                'Graduates should have good communication skills and global vision.',
                'Graduates should have a responsible attitude for work and teamwork ability.'
              ],
              type: 'list'
            }
          ],
          image: 'intro/cowork.png'
        }
      ],
      course: [
        {
          'zh-TW': '教育目標與核心能力',
          'en-US': 'Educational Objectives and Core Skills',
          type: 'heading1'
        },
        {
          'zh-TW': '資訊工程學系之教育目標',
          'en-US': 'Educational Objectives (Bachelor)',
          type: 'heading2'
        },
        {
          'zh-TW': '系所教育目標',
          'en-US': 'Educational Objectives',
          type: 'text'
        },
        {
          'zh-TW': [
            '教育學生基礎專業知識及終身學習之能力',
            '教育學生運用專業知識解決資訊應用問題之能力',
            '教育學生優質團隊合作之能力'
          ],
          'en-US': [
            'Basic professional knowledge and life-learning ability.',
            'Solve computer information problems based on professional knowledge.',
            'Great team work ability.'
          ],
          type: 'list'
        },
        {
          'zh-TW': '學生核心能力',
          'en-US': 'Core Skills',
          type: 'text'
        },
        {
          'zh-TW': [
            '畢業生應具備基礎專業數學及資訊理論知識之基本能力',
            '畢業生應具備資訊理論推導及實驗設計、數據分析歸納之能力',
            '畢業生應具備培養學習興趣及持續學習之能力',
            '畢業生應具備獨立、創新思維及發掘、分析、解決資訊相關問題之能力',
            '畢業生應具備資訊系統設計、測試及驗證之能力',
            '畢業生應具備資訊系統整合之能力',
            '畢業生應具備科技人文素養及資訊工程倫理之精神',
            '畢業生應具備良好溝通技巧及國際觀',
            '畢業生應具備負責之工作態度及有效團隊合作之能力'
          ],
          'en-US': [
            'Basic mathematics and computer information theory.',
            'Information theory inferrer, experiment design and data analysis.',
            'Keep interesting in learning.',
            'Think independently and innovationally, analyze and solve problems.',
            'Computer information system design, test and verification.',
            'Computer information system integration.',
            'Humane technology accomplishment and computer science and information engineering ethics.',
            'Good communication skill and global view.',
            'Responsible attitude and efficient team cooperation.'
          ],
          type: 'list'
        },
        {
          'zh-TW': '資訊工程所之教育目標',
          'en-US': 'Educational Objectives (Master)',
          type: 'heading2'
        },
        {
          'zh-TW': '系所教育目標',
          'en-US': 'Educational Objectives',
          type: 'text'
        },
        {
          'zh-TW': [
            '教育學生具備資訊專業知識及終身學習之能力',
            '教育學生具備獨立研究、設計及創新之能力',
            '教育學生優質團隊合作及國際觀之能力'
          ],
          'en-US': [
            'Basic professional knowledge and life-learning ability.',
            'Independent research、design and innovation.',
            'Excellent team work ability and global view.'
          ],
          type: 'list'
        },
        {
          'zh-TW': '學生核心能力',
          'en-US': 'Core Skills',
          type: 'text'
        },
        {
          'zh-TW': [
            '畢業生應具備資訊專業理論知識',
            '畢業生應具備資訊專業理論推導、分析、歸納之能力',
            '畢業生應具備專業簡報及論文撰寫之能力',
            '畢業生應具備資訊領域獨立發掘問題、策劃實驗、解決問題之能力',
            '畢業生應具備資訊領域設計、驗證及實作整合之能力',
            '畢業生應具備資訊領域創新思考之能力',
            '畢業生應具備科技人文素養、資訊工程倫理與終身學習的態度',
            '畢業生應具備專業外語能力及良好國際觀',
            '畢業生應具備良好溝通協調與團隊合作之能力'
          ],
          'en-US': [
            'Professional computer information theory knowledge.',
            'Professional computer information theory inferrer, experiment design and data analysis.',
            'Professional presentation and paper writing.',
            'Discover problems, plan experiment and solve problems independently in computer information.',
            'Computer information system design verification and integration.',
            'Creative thinking in computer information.',
            'Humane technology accomplishment and computer science, information engineering ethics and life-learning ability.',
            'English communication skill and global view.',
            'Good communication skill and team cooperation.'
          ],
          type: 'list'
        },
        {
          'zh-TW': '課程設計',
          'en-US': 'Course Design',
          type: 'heading1'
        },
        {
          'zh-TW': '資訊系課程之組成',
          'en-US': 'Design Principle',
          type: 'heading2'
        },
        {
          'zh-TW': [
            '本學系之成立乃為培養資訊工業人才，因此課程設計之原則，',
            '除了配合目前工商業界人力需求外，更考慮中長期資訊工業發展之趨勢，',
            '本學系課程規劃原則如下：'
          ].join(''),
          'en-US': [
            'This department is established to train students about computer science and information engineering.',
            'As a result,',
            'the course is designed according to following principles:'
          ].join(' '),
          type: 'text'
        },
        {
          'zh-TW': ['理論與實務課程相配合'],
          'en-US': ['Theory complemented with implementation'],
          type: 'list'
        },
        {
          'zh-TW': [
            [
              '大學教育為通才教育，故於低年級課程特別加強各項基礎理論之紮根工作，以培養學生之基本學能；',
              '高年級逐次加強資訊技術與實用課程，俾能滿足資訊工業發展之需要。'
            ].join('')
          ],
          'en-US': [
            [
              'University education is a general education.',
              'Therefore, in the freshman courses, the basic theories are especially strengthened to cultivate students.',
              'The senior grades class are stepping up difficulties and paricipate practice courses',
              'to meet the needs of the information industry.'
            ].join('')
          ],
          type: 'description'
        },
        {
          'zh-TW': ['資訊技術與資訊應用課程並重'],
          'en-US': ['Computer science and information technology and its application'],
          type: 'list'
        },
        {
          'zh-TW': [
            [
              '本系課程教育即在於培育學生開發之能力。因此，一、二年級以重視資訊技術與應用課程之均衡性為主。',
              '而三、四年級則再依學生性向及本系發展方向，分成十二項主題，',
              '分別設計資訊技術與應用兩系列之核心及專題課程，此外並配合研究所開設之特色課程，',
              '俾利學生能循專精方向發展。'
            ].join('')
          ],
          'en-US': [
            [
              'Our Education goal is to cultivate development ability.',
              'Therefore, the first and second grades focus on the balance of information technology and applied courses.',
              'In the third and fourth grades, according to the student interest,',
              'course are divided into 12 topics respectively, all of them are focus on not just technology but also applications.',
              'In addition, in conjunction with the special courses offered by the institute,',
              'the students can learn specialties according to their interest.'
            ].join(' ')
          ],
          type: 'description'
        },
        {
          'zh-TW': ['著重實作實習課程'],
          'en-US': ['Emphasize on implementation and laboratory work'],
          type: 'list'
        },
        {
          'zh-TW': [
            [
              '本系中各項資訊課程均設計適當之實作教材，並提供各類型軟、硬體設備，',
              '使學生充份有效地從實作中學習，並可將理論與實用作一印證。',
              '三年級的學生並可選修專題製作，以培養學生獨立研究並完成一作品之經驗，',
              '俾利於畢業後迅速投入工商業界或繼續深造。',
              '本學系教學與課程委員會依據目前資訊科技發展之重要項目，將課程作有系統之整合，',
              '而提出以下面十二項資訊技術為目標之建議課程。'
            ].join('')
          ],
          'en-US': [
            [
              'All the courses in the department are designed with practical teaching materials,',
              'and provide various types of soft and hardware equipment,',
              'so that students can effectively learn from the implementation,',
              'and can apply to both the theory and practice fields.',
              'Students in the third grade also need to participate graduate project',
              'to cultivate students\' independent research ability and gain some experience from work,',
              'So after graduation, they will quickly fit into the business community or continue their studies.',
              'The department\'s committee has systematically integrated the courses',
              'based on the current important projects in the research area or industry,',
              'and proposed the following twelve topics targeting information technologies.'
            ].join(' ')
          ],
          type: 'description'
        },
        {
          'zh-TW': '十二項資訊技術',
          'en-US': 'Twelve topics',
          type: 'heading2'
        },
        {
          'zh-TW': [
            '積體電路電腦輔助設計',
            '資訊安全',
            '計算機系統',
            '人工智慧',
            '電腦網路',
            '多媒體系統',
            '軟體工程+物件導向系統',
            '分散式系統+作業系統設計',
            '編譯系統',
            '資料庫系統',
            '語音處理',
            '影像與圖像技術'
          ],
          'en-US': [
            'Computer-Aided VLSI Design',
            'Information Security',
            'Computer Organization',
            'Artificial Intelligence',
            'Computer Network',
            'Multimedia System',
            'Software Engineering + Object-Oriented System',
            'Distributed System + Operating System Design',
            'Compiler',
            'Database System',
            'Digital Voice Processing',
            'Image Processing'
          ],
          type: 'list'
        },
        {
          'zh-TW': '課程發展與改進之流程',
          'en-US': 'Courses Development and Improvement Process',
          type: 'heading2'
        },
        {
          'zh-TW': [
            '資訊系的課程發展機制是先訂立本系課程規劃委員會設置辦法，組成「課程規劃委員會」，',
            '由課程委員討論並擬定資訊系課程，擬定每門課所應培養之學生核心能力以提供給授課教師作為其教學目標，',
            '並定期執行在課程安排上的修正作業。'
          ].join(''),
          'en-US': [
            'The courses development mechanism of the department are first to set up a "Course Planning Committee",',
            'and committee members will discuss and formulate the courses',
            'to formulate the core skills of each student to learn.',
            'As for improving, revisions are performed on a regular schedule.'
          ].join(' '),
          type: 'text'
        },
        {
          'zh-TW': [
            '為了要持續檢討教學方式及改進課程內容，在學期的每一個階段都會進行教學活動的評量（於教學活動評量章節介紹）',
            '以及對學生的學習成效進行追蹤（於學習成效追蹤章節介紹）。',
            '在每一學期結束時，便由系辦收集並整理本學期的課程資料，並將召開諮詢委員會議。',
            '諮詢委員根據各項數據所呈現的結果，對課程的內容及安排提出建議，',
            '同時審視每門課程的實行是否確實達成規定的教育目標及學生核心能力，判斷是否有需要調整的地方。'
          ].join(''),
          'en-US': [
            'In order to continuously review the teaching methods and improve the content of the course,',
            'the evaluation of teaching activities (introduction in the evaluation section of teaching activities)',
            'and the tracking of the learning outcomes of students will be carried out at each stage of the semester',
            '(introduced in the learning effectiveness tracking section).',
            'At the end of each semester, the department will collect and organize the course materials for the semester',
            'and will hold an advisory committee meeting.',
            'Based on the results presented in the various data,',
            'the advisory committee advises on the content and arrangement of the course,',
            'and examines whether the implementation of each course actually meets the prescribed educational goals',
            'and core competencies of the students,',
            'and determines whether there is a need for adjustment.'
          ].join(' '),
          type: 'text'
        },
        {
          'zh-TW': [
            '在課程規劃委員會會議中，便可參考諮詢委員提出的建議，',
            '修正下一學期（年）課程安排的順序、授課的內容和方式，以及與教育目標之間的關連性。',
            '經由系務會議討論通過後，一方面將決議結果交予各教師，作為往後教學改進上的參考；',
            '另一方面則交由系辦的課務負責人，排定下學期的開課課表。'
          ].join(''),
          'en-US': [
            'At the course planning committee meeting,',
            'you can refer to the advice of the advisory committee to correct the order of the next semester course arrangement,',
            'the content and method of the course, and the relevance to the educational goals.',
            'After discussion and approval through the department meeting,',
            'the results of the resolution will be given to the teachers as a reference for the improvement of the teaching;',
            'on the other hand, the department heads will be assigned to the class schedule for the next semester.'
          ].join(' '),
          type: 'text'
        },
        {
          'zh-TW': '本系課程發展與改進流程圖',
          'en-US': 'Course Development and Improvement Flow Chart',
          type: 'heading2'
        },
        {
          src: 'intro/course-improve.png',
          type: 'image'
        },
        {
          'zh-TW': '課程介紹與課程特色',
          'en-US': 'Course development and features',
          type: 'heading2'
        },
        {
          'zh-TW': [
            '為契合本系教育目標一，低年級課程設計的理念主要是建立學生的基礎知識，',
            '以資訊入門課程（例如程式設計與計算機概論）給予學生初步概念，引導學生逐步進入資訊領域。',
            '同時學校方面也安排了許多通識教育（如國文、歷史、以及各領域的通識課程）',
            '和數學及基礎科學課程（如微積分、線性代數及普通物理學）供低年級的學生修習，',
            '讓其在接受專業訓練之餘，也能多方涉獵各領域的新知以增廣見聞。',
            '學生有了基礎知識之後，在二年級之後的課程，強調的是資訊技術的專研與應用，',
            '一方面提供進階的數學課程； 另一方面提供多樣性的資訊工程專業課程：'
          ].join(''),
          'en-US': [
            'For fresh students, we provide courses which introduces the basic theory of computer science and information engineering',
            '(e.g. basic program design and computer organization).',
            'Besides, we also have general education (e.g. Mandarin and History)',
            'and basic mathematics course (e.g. Calculus, Linear Algebra and general physics).',
            'With basic knowledge in computer science and information engineering,',
            'students can choose diverse extended mathematics courses',
            'and computer information technology application courses in our department:'
          ].join(' '),
          type: 'text'
        },
        {
          'zh-TW': [
            [
              '由於資訊領域和數學可說是息息相關，為培養學生的專業數學能力，',
              '相關的數學類科目均列為必修課程（例如離散數學、工程數學及機率與統計等）。'
            ].join(''),
            [
              '在工程專業課程部分，可分為軟體和硬體兩部份。',
              '資訊系學生程式設計的技巧與開發軟體的能力一向為外界所器重，',
              '為建立學生對於軟體技術的了解與實作能力，',
              '系上開授許多軟體相關課程（如程式語言、演算法、資料結構及計算理論等）。',
              '同時我們也期許資訊系學生具備硬體相關知識和實際操作的訓練，',
              '故提供硬體相關課程（如數位系統導論與實驗、計算機組織及微算機原理與應用等）。'
            ].join(''),
            [
              '除了必修的軟硬體課程，因應學生對於不同資訊領域的興趣不一，',
              '在選修課程部分，授課教師會根據其專精的研究領域當作授課內容，',
              '讓學生吸收各方面的知識（如三維繪圖與遊戲設計、人工智慧、視窗程式設計及無線通訊網路等）。',
              '當學生擁有數學及基礎科學能力且建立專業的資訊工程背景之後，',
              '我們希望學生能應用其所學的知識來解決資訊類別的問題，這也是教育目標2所期許的重點。',
              '因此三年級的學生需修習專題製作，學生按照其興趣選擇某一個議題深入研究，',
              '不論是演算法的開發或是軟硬體系統的實作等，在其獨立學習、研究直到完成作品所經歷的過程中，',
              '學生可培養出發現並分析問題的能力，並訓練其運用本身知識來著手解決問題的能力。',
              '在學習的過程中，除了奠定每位學生本身專業知識的基礎之外，',
              '教育目標3所著重的是將個人的優秀才能融入團隊合作裡，並訓練良好的溝通技巧。',
              '這是因為資訊類別的工作往往是需要結合眾人的力量才能完成，光憑一己之力是不足夠的。',
              '為了訓練學生表達意見以及和他人共同合作的技巧，許多課程的期中或期末project都是以分組方式進行。',
              '小組裡的成員對負責的project要進行多次討論、詳細分工、並整合成最後的作品和撰寫科技報告，並在課堂上作簡報呈現。',
              '在團隊合作的過程中，每位學生都能學習到組織能力、表達能力和與他人的溝通能力，',
              '並訓練其敬業的工作態度與合作精神。'
            ].join('')
          ],
          'en-US': [
            [
              'Computer science related mathematics courses',
              '(e.g. discrete mathematics, engineering mathematics and probability and statistics).'
            ].join(' '),
            [
              'We divide engineering into software and hardware.',
              'Software courses include programming language, algorithm and data structure.',
              'Hardware include digital system and computer organization and application.'
            ].join(' '),
            [
              'Despite the basic and extended courses,',
              'professors in our department will teach application courses about their research fields',
              '(e.g. computer graphics and game design, artificial intelligence and wireless communication).',
              'It aids to train students to implement their basic knowledge in computer science and solve the problems.',
              'To make sure that every student is equipped with computer science knowledge and great programming language skill,',
              'every graduate student needs to come up with a project which is related to computer science and information engineering.'
            ].join(' ')
          ],
          type: 'list'
        },
        {
          'zh-TW': '課程地圖',
          'en-US': 'Course Map',
          type: 'heading1'
        },
        {
          'zh-TW': '課程地圖連結',
          'en-US': 'Link to Course Map',
          href: 'http://course-query.acad.ncku.edu.tw/crm/course_map/department.php?dept=F7',
          type: 'button'
        },
        {
          'zh-TW': '教學活動評量',
          'en-US': 'Teaching Activities and Evaluation System',
          type: 'heading1'
        },
        {
          'zh-TW': '教學活動及評量機制',
          'en-US': 'Teaching Activities and Evaluation System',
          type: 'heading2'
        },
        {
          'zh-TW': ['培養方式'],
          'en-US': ['Training Method'],
          type: 'list'
        },
        {
          'zh-TW': [
            [
              '本系經由多次委員會對學生核心能力之培養方式進行討論修正，',
              '有直接教學法、討論教學法、協同教學法、合作學習法、發表教學法、欣賞教學法等共六種方式，',
              '往後期望能以這六種方式繼續培養學生在畢業時須具備之學生核心能力養成方法說明及其與欲養成之核心能力關聯性。'
            ].join('')
          ],
          'en-US': [
            [
              'The Department has discussed and revised the training methods of students\' core competencies through many committees.',
              'There are six methods, including direct teaching method,',
              'discussion teaching method, collaborative teaching method,',
              'cooperative learning method, publishing teaching method and appreciation teaching method.',
              'In these six ways, we can continue to develop the description of the core competencies of students',
              'who must graduate with their core competencies and their core competencies.'
            ].join(' ')
          ],
          type: 'description'
        },
        {
          'zh-TW': ['評量方法'],
          'en-US': ['Evaluation Method'],
          type: 'list'
        },
        {
          'zh-TW': [
            [
              '經由多次會議對學生核心能力之評量方式進行討論修正，有紙筆測驗、課堂問答、個別晤談、指定作業、實作表現、專題研究、',
              '書面報告、口頭報告、學生自評、同儕互評、行為觀察、檔案評量、上課表現、課堂出席、其他等共十五種方式，',
              '往後期望以這十五種方式之評量結果，評量培養之成效。'
            ].join('')
          ],
          'en-US': [
            [
              'Through several meetings,',
              'the assessment of the core competence of students is discussed and revised.',
              'There are paper and pencil tests, classroom questions and answers,',
              'individual interviews, designated assignments, performance, special studies,',
              'written reports, oral reports, student self-assessments, peer-to-peer evaluations.',
              'Fifteen ways, behavioral observation, file evaluation, class performance,',
              'class attendance, and others are expected.',
              'In the future, we hope to evaluate the results of these 15 ways.'
            ].join(' ')
          ],
          type: 'description'
        },
        {
          'zh-TW': ['評量結果'],
          'en-US': ['Evaluation Result'],
          type: 'list'
        },
        {
          'zh-TW': [
            [
              '本系目前將陸續蒐集每門課程之各項教學及學習成果紀錄，如講義、考卷、作業、報告等等，',
              '可充分顯現本系學生之學習成果。',
              '在持續改善方面，本系除蒐集教學及學習成果紀錄，',
              '並輔以教師自評表、學生期中問卷調查表、學生期末問卷調查表、應屆畢業生學習滿意度問卷調查表、',
              '系友學習滿意度問卷調查表、業界對本系畢業生滿意度調查表，',
              '作為本系持續改善教學工作之依據，以利檢視教學設計和教學成效評量的方法與結果。'
            ].join('')
          ],
          'en-US': [
            [
              'With the help of questionnaire survey,',
              'we can evaluate the learning result of students and adjust the directions of course development.',
              'The grades that students get in the courses are also taken into consideration',
              'to know whether the exams and homework are too difficult or not.',
              'In this way, we can make sure that students can keep up with course schedule and learn professional knowledge we expect.'
            ].join(' ')
          ],
          type: 'description'
        },
        {
          'zh-TW': '學習成效追蹤',
          'en-US': 'Learning Result Track',
          type: 'heading1'
        },
        {
          'zh-TW': '教師評量方法',
          'en-US': 'Professor Evaluation',
          type: 'heading2'
        },
        {
          'zh-TW': [
            '本校為提昇本校教學、研究與服務品質，維持本校教育水準，',
            '因此在教學評量的教師方面本校專任教師評量要點任教授或副教授滿五年者，接受第一次評量；',
            '任助理教授或講師滿三年者，接受第一次評量。',
            '而本系的教師評量方面則是在每學期結束前將會發送一份「教師自評表」，',
            '調查對象為本系之專任教師實施調查時間為每學期一次且每項課程之授課老師皆須接受自我評量調查，',
            '實施方式本系為了確保問卷回收率則是採用紙筆填寫之方式，而此問卷內容則是朝老師的無奈來思考，',
            '站在老師的角度，老師會想從這份問卷中表達哪些想法，',
            '盼授課教師能藉此機會瞭解自己的教學狀況及與學生互動關係之情形。',
            '因此這份問卷的實施結果是希望讓本系教師針對所教授課程能自我參考，',
            '且能持續有效的進行檢討與改善教學、輔導及評量，提高教學成效。',
            '此外，本系工程認證推動委員會及課程委員會於定期的會議中，',
            '將對各門課程之教學級規劃所遭遇之問題提出修正及檢討，',
            '並將彙整結果提供給諮詢委員會，作為在修訂系教育目標時之參考。'
          ].join(''),
          'en-US': [
            'In Cheng Kung University,',
            'we have a self-evaluation for professors to review whether their courses design is appropriate or not',
            'and adjust their directions to improve learning effect.'
          ].join(' '),
          type: 'text'
        },
        {
          'zh-TW': '學生學習成果統計與檢討',
          'en-US': 'Students Learning Result Statics and Review',
          type: 'heading2'
        },
        {
          'zh-TW': [
            '本系利用教學問卷調查之方式收集學生對於學習的成果，',
            '藉由此方式可讓本系教師更瞭解學生的學習成果為何，',
            '也讓教師暸解何種課程是現在學生最想學、學生最需要具備的相關知識。',
            '例如透過A類問卷實際調查的結果，',
            '我們可以知道學生對於老師的教學表現、課程安排、教學是否有效，',
            '這門課是否值得學習及學生的建議都將清楚的知道，',
            '本系也可藉由此資料的收集而持續改進缺點。',
            '而本系除了有大一學生至大三學生A類問卷學生期中問卷調查表調查成果之外，',
            '還包含了B類學生期末問卷調查表之調查成果、',
            'C類應屆畢業生學習滿意度問卷調查表之調查成果及D類系友學習滿意度問卷調查表之統計結果，',
            '從各類問卷中可發現學生的要求及所需要的教學資訊為何。'
          ].join(''),
          'en-US': [
            'We also have a questionnaire for students to evaluate whether the course contents meet their expectation or not.',
            'Students can convey their learning statics and opinions on the course contents',
            'through the questionnaire in an anonymous way.',
            'This helps professors change their teaching directions to a way which students can learn more efficiently.'
          ].join(' '),
          type: 'text'
        },
        {
          'zh-TW': '學習成效持續改善機制',
          'en-US': 'Learning Effectiveness Improvement Mechanism',
          type: 'heading2'
        },
        {
          'zh-TW': [
            '本系教授教師則需在工程認證推動委員會及課程委員的定期會議中，',
            '除了將各門課程之學生學習成果做檢討之外也需將所遭遇之問題提出修正及檢討規劃，',
            '而且針對教學品質不定期舉辦討論會議，藉以鼓勵相關人士持續參與改善機制且必須持續的改善，',
            '以改進教學品質，進而達到一流大學之要求。'
          ].join(''),
          'en-US': [
            'In addition to the review of the student learning outcomes of each course,',
            'the professors of the department are required to review the problems encountered in the course,',
            'and regular discussion sessions are held to encourage people',
            'to continue to participate in the improvement mechanism',
            'and must continue to improve in order to improve the quality of teaching',
            'and thus meet the requirements of top universities.'
          ].join(' '),
          type: 'text'
        },
        {
          'zh-TW': '教學改善機制流程圖',
          'en-US': 'Teaching Improvement Mechanism Flow Chart',
          type: 'heading2'
        },
        {
          src: 'intro/teach-improve.png',
          type: 'image'
        },
        {
          'zh-TW': '中華工程教育學會',
          'en-US': 'Institute of Engineering Education Taiwan',
          type: 'heading1'
        },
        {
          'zh-TW': '中華工程教育學會連結',
          'en-US': 'Link to Institute of Engineering Education Taiwan',
          href: 'http://www.ieet.org.tw/tw/',
          type: 'button'
        }
      ],
      equipment: [
        {
          'zh-TW': '硬體介紹',
          'en-US': 'Hardware',
          type: 'heading1'
        },
        {
          src: 'intro/equipment_8.jpg',
          type: 'image'
        },
        {
          src: 'intro/equipment_7.jpg',
          type: 'image'
        },
        {
          src: 'intro/equipment_6.jpg',
          type: 'image'
        },
        {
          src: 'intro/equipment_5.jpg',
          type: 'image'
        },
        {
          src: 'intro/equipment_4.jpg',
          type: 'image'
        },
        {
          src: 'intro/equipment_3.jpg',
          type: 'image'
        },
        {
          src: 'intro/equipment_2.jpg',
          type: 'image'
        },
        {
          src: 'intro/equipment_1.jpg',
          type: 'image'
        },
        {
          'zh-TW': '軟體介紹',
          'en-US': 'Software',
          type: 'heading1'
        },
        {
          'zh-TW': '國立成功大學校園授權軟體',
          'en-US': 'NCKU FTP Server',
          href: 'https://www.cc.ncku.edu.tw/download/',
          type: 'button'
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

#history {
  > .legend {
    // [ layout ]
    display: flex;
    align-items: center;

    > p {
      // [ position ]
      margin-left: 10px;

      // [ skin ]
      font-size: 20px;
      line-height: 20px;
    }
  }

  > .list {
    // [ layout ]
    display: block;
    line-height: 0;

    // [ position ]
    margin: {
      top: 30px;
      bottom: 20px;
    }
    width: 100%;
    height: auto;

    > .dean {
      // [ position ]
      position: relative;
      left: 10%;

      // [ layout ]
      display: block;
      line-height: 0;

      // [ skin ]
      width: 40%;
      height: auto;
      transform: translateX( 1px );

      > .duration {
        // [ layout ]
        display: block;
        text-align: left;
        line-height: 16px;

        // [ skin ]
        width: 100%;
        min-height: 16px;
        height: auto;
        border-right: 2px solid #aaaaaa;
        padding-bottom: 6px;
        font-size: 16px;

        @media screen and ( min-width: $break-point-sm ) {
          // [ layout ]
          line-height: 24px;

          // [ skin ]
          min-height: 24px;
          font-size: 24px;
        }
      }

      > .legend {
        // [ position ]
        position: relative;

        // [ layout ]
        display: block;

        // [ skin ]
        width: 100%;
        height: auto;
        border: {
          top: 1px solid #399dff;
          right: 2px solid #aaaaaa;
        }
        padding: {
          top: 6px;
          bottom: 20px;
        }

        > .name {
          // [ layout ]
          display: block;
          margin-right: 30%;
          text-align: left;
          line-height: 12px;

          // [ skin ]
          width: 70%;
          min-height: 12px;
          height: auto;
          font-size: 12px;
          @media screen and ( min-width: $break-point-sm ) {
            // [ layout ]
            line-height: 20px;

            // [ skin ]
            min-height: 20px;
            font-size: 20px;
          }
        }
      }

      &:first-child {
        > .duration {
          // [ skin ]
          border-right: 0;
        }
      }

      &:last-child {
        > .legend {
          // [ skin ]
          border-right: 0;
        }
      }
    }

    > .event {
      // [ position ]
      position: relative;
      left: 50%;

      // [ layout ]
      display: block;
      line-height: 0;

      // [ skin ]
      width: 40%;
      height: auto;
      transform: translateX( -1px );

      > .time {
        // [ layout ]
        display: block;
        text-align: right;
        line-height: 16px;

        // [ skin ]
        width: 100%;
        min-height: 16px;
        height: auto;
        border-left: 2px solid #aaaaaa;
        padding-bottom: 6px;
        font-size: 16px;
        @media screen and ( min-width: $break-point-sm ) {
          // [ layout ]
          line-height: 24px;

          // [ skin ]
          min-height: 24px;
          font-size: 24px;
        }
      }

      > .legend {
        // [ position ]
        position: relative;

        // [ layout ]
        display: block;

        // [ skin ]
        width: 100%;
        height: auto;
        border: {
          top: 1px solid #ea6d55;
          left: 2px solid #aaaaaa;
        }
        padding: {
          top: 6px;
          bottom: 20px;
        }

        > .context {
          // [ layout ]
          display: block;
          margin-left: 30%;
          text-align: right;
          line-height: 12px;

          // [ skin ]
          width: 70%;
          min-height: 12px;
          height: auto;
          font-size: 12px;
          @media screen and ( min-width: $break-point-sm ) {
            // [ layout ]
            line-height: 20px;

            // [ skin ]
            min-height: 20px;
            font-size: 20px;
          }
        }
      }

      &:first-child {
        > .time {
          // [ skin ]
          border-left: 0;
        }
      }

      &:last-child {
        > .legend {
          // [ skin ]
          border-left: 0;
        }
      }
    }
  }
}

.education-block {
  // [ layout ]
  display: grid;

  grid-template-areas:
    'paragraph'
    'image';

  align-items: center;

  // [ position ]
  width: 100%;
  height: fit-content;

  grid-template-areas:
    'paragraph'
    'image';

  @media screen and (min-width: $break-point-lg){
    grid-template: {
      areas: 'paragraph image';
      columns: 50% 50%;
    };
  }

  > .education-paragraph {
    // [ lauout ]
    grid-area: paragraph;
  }

  > .education-image {
    // [ layout ]
    display: flex;
    grid-area: image;
    justify-self: center;

    // [ position ]
    width: 80%;
    max-width: 500px;
    height: auto;

    @media screen and (min-width: $break-point-lg){
      max-width: none;
    }
  }
}

.develop-block {
  // [ layout ]
  display: grid;
  align-items: center;

  &-left {
    // [ layout ]
    grid-template-areas:
      'paragraph'
      'image';
  }

  &-right {
    // [ layout ]
    grid-template-areas:
      'paragraph'
      'image';
  }

  @media screen and (min-width: $break-point-lg){
    &-left {
      // [ layout ]
      grid-template: {
        areas: 'paragraph image';
        columns: 1fr 1fr;
      };
    }

    &-right {
      // [ layout ]
      grid-template: {
        areas: 'image paragraph';
        columns: 1fr 1fr;
      };
    }
  }

  > .develop-paragraph {
    // [ lauout ]
    grid-area: paragraph;
  }

  > .develop-image {
    // [ layout ]
    display: flex;
    grid-area: image;
    justify-self: center;

    // [ position ]
    width: 80%;
    max-width: 500px;
    height: auto;

    @media screen and (min-width: $break-point-lg){
      max-width: none;
    }
  }
}
</style>
