export const questions = [
  {
    number: 'Q1',
    question: '데이트가 없는<br>주말에 나는',
    choices: [
      { text: '단톡에 연락해서 친구들과 약속을 잡는다', value: 'i' },
      { text: '침대랑 하루 종일 물아일체가 된다', value: 'e' }
    ]
  },
  {
    number: 'Q2',
    question: '데이트 룩을<br>고를 때 나는',
    choices: [
      { text: '나가기 직전 마음에 드는 옷을 입는다', value: 's' },
      { text: '전날부터 머리부터 발끝까지 세팅해 둔다', value: 'n' }
    ]
  },
  {
    number: 'Q3',
    question: '친구의 소개에<br>소개팅에 나온 나는?',
    choices: [
      { text: '먼저 말 걸면서 분위기를 띄운다', value: 'f' },
      { text: '말을 걸어올 때까지 기다리고 본다', value: 't' }
    ]
  },
  {
    number: 'Q4',
    question: '데이트 중<br>맛있어 보이는 밥집을<br>발견한 나는',
    choices: [
      { text: '같판에서 맛집의 기운이 느껴진다 맛집 각이야', value: 'j' },
      { text: '유명하고 리뷰도 많으니까 맛은 보장되어 있겠군', value: 'p' }
    ]
  },
  {
    number: 'Q5',
    question: '썸 중에 연인이<br>집에 놀러 온다고<br>했을 때 나는',
    choices: [
      { text: '보이는 곳만 일단 급하게 치워둔다', value: '' },
      {
        text: '쓰레기 버리기부터 화장실 청소까지 싹 한다', value: '' }
    ]
  },
  {
    number: 'Q6',
    question: '오늘 본 영화를<br>궁금해하는<br>연인에게 나는',
    choices: [
      { text: '주인공이 좀비 바이러스가 퍼져서 치료하기 위한 이야기야', value: '' },
      { text: '좀비랑 싸우는데 주인공이 완전 멋져! 보는 내내 소름돋았어', value: '' }
    ]
  },
  {
    number: 'Q7',
    question: '연인과 사소한 일로<br>다퉜을 때 나는',
    choices: [
      { text: '나!!진짜!!너무!!!화났어!!!!!!!!', value: '' },
      { text: 'ㅇㅇ점은 꼭 고쳤으면 좋겠어. 이렇게 하면 되잖아', value: '' }
    ]
  },
  {
    number: 'Q8',
    question: '데이트 중 길에서<br>연인의 친구를<br>만난다면 나는',
    choices: [
      { text: '자연스럽게 웃으며 대화한다', value: '' },
      { text: '무생물이 되어 조용히 있는다 ', value: '' }
    ]
  },
  {
    number: 'Q9',
    question: '축 처진 연인이<br>우울하다고<br>말했을 때 나는',
    choices: [
      { text: '왜 우울해? 뭐 때문에 우울한 거야?', value: '' },
      { text: '5초 만에 감정이입 완료.. 같이 글썽거린다', value: '' }
    ]
  },
  {
    number: 'Q10',
    question: '연인에게 줄 선물을<br>고르게 된 나는',
    choices: [
      { text: '실용성은 없어도 예쁘고 기억에 남을 선물', value: '' },
      { text: '연인에게 요즘 가장 필요할 것 같은 선물', value: '' }
    ]
  },
]
export const results = [
  {
    title: '단호박 먹은 연애불도저',
    character: '/images/result_character1.png',
    results: [
      '혼자서 멘탈 케어가 가능해요!<br>소속이 없어도, 벌이가 불안정해도 저는 지금이 좋아요!',
      '일에 대한 욕심이 많아요.<br>행복한 야근이라고 할 수 있어요!',
      '자유로운 환경에서 더 잘해요!<br>하지만 누구보다 스스로 시간 관리가 철저해요:)',
      '리더십 있다는 소리를 자주 들어요.<br>추진력이 있는 편이죠~ (뿌듯)'
    ],
    jobs: ['프리랜서', '창업가'],
    lectureImg: '/images/result_lecture1.png',
    lectureUrl: 'https://bit.ly/3Wr0kt6'
  },
  {
    title: '망상에 사는 철벽금사빠',
    character: '/images/result_character2.png',
    results: [
      '나는야 회사 사람들 멘탈 지킴이!<br>언제나 토닥토닥 으샤으샤 응원하며 다니는 파워 인싸!',
      '여러 사람과 협업이 필요한 직무에 찰떡!',
      '진행력 갑! 추진력 갑!<br>빠른 속도로 동시에 여러 업무를 해결할 수 있어요.',
      '회사 행사나 크리스마스 이벤트,<br>회사사람들 생일까지 우리가 다 챙길게요'
    ],
    jobs: ['마케터', '기획자'],
    lectureImg: '/images/result_lecture2.png',
    lectureUrl: 'https://bit.ly/3SZl1t9'
  },
  {
    title: '단호박 먹은 연애불도저',
    character: '/images/result_character3.png',
    results: [
      '이것저것 관심이 많은 편이에요.<br>모든 게 궁금해요!',
      '섬세함이 장점으로<br>업무를 센스 있게 처리한다는 말을 자주 들어요.',
      '가끔은 거절을 잘 못해서 일이 몰릴 때가 있지만..!<br>전 괜찮아요~ (프로긍정러)',
      '업무에 예민할 때도 있지만,<br>그래서 결과물은 완벽하죠!'
    ],
    jobs: ['디자이너', '예술가'],
    lectureImg: '/images/result_lecture3.png',
    lectureUrl: 'https://bit.ly/3DWlesG'
  },
  {
    title: '눈치력 만렙 연애집사`',
    character: '/images/result_character4.png',
    results: [
      '전략적으로 계획을 세우는 걸 좋아해요!',
      '평소 경제와 사회 이슈에 관심이 매우 많아요.',
      '꿈이 커요!<br>크게 성공할 수 있는 한 방을 이뤄낼 거예요~',
      '일할 땐 일하고! 놀 땐 놀고!<br>뭐든 확실한 게 좋아요.'
    ],
    jobs: ['부동산<br>투자자', '주식<br>투자자'],
    lectureImg: '/images/result_lecture4.png',
    lectureUrl: 'https://bit.ly/3fvoTo5'
  },
  {
    title: '귀차니즘 만렙 프로긍정러',
    character: '/images/result_character5.png',
    results: [
      '저는 위선과 가식이 없어요.<br>진실만 말하죠. (진지)',
      '혼자서 더 잘해요.<br>솔로 워커 최고!',
      '관심 분야가 생기면 끝도 없이 깊어져요.<br>다만 이외에 모든 것엔 관심이 없어요.',
      '(이상) <<<<<< (현실)<br>가끔 이성에게 상처를 줄 때가 있어요, 그게 아닌데...'
    ],
    jobs: ['개발자', '데이터분석가'],
    lectureImg: '/images/result_lecture5.png',
    lectureUrl: 'https://bit.ly/3U0O3Kj'
  },
  {
    title: '뒤끝 오지는 사랑집착꾼',
    character: '/images/result_character6.png',
    results: [
      '취미가 100개!<br>이것저것 다재다능해요~',
      '한가하냐고요?<br>원래 백수가 젤 바쁜 거에요!',
      '결혼사진에 친구들이 다 들어갈 수 있을까요?',
      '가끔이지만, 갓생살기 도전해요!'
    ],
    jobs: ['돈 많은 백수', '유튜버'],
    lectureImg: '/images/result_lecture6.png',
    lectureUrl: 'https://bit.ly/3fzdinR'
  }
]
export const mbtis = {
  entj: 0,
  entp: 0,
  estp: 0,
  esfp: 1,
  esfj: 1,
  enfj: 1,
  infp: 2,
  isfp: 2,
  isfj: 2,
  infj: 2,
  estj: 3,
  istp: 3,
  intj: 4,
  intp: 4,
  istj: 4,
  enfp: 5
}
