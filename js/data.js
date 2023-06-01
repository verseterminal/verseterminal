/*
mouse,0
cow,1
tiger,2
rabbit,3
dragon,4
snake,5
horse,6
sheep,7
monkey,8
chick,9
dog,10
pig,11
*/

/*
type
*/

const qnaList = [
  {
    q: '관심분야를 선택하세요.(복수 선택 가능)',
    a: [
      { answer: '기획/아이디어', type: [1] },
      { answer: '광고/마케팅', type: [2]},
      { answer: '논문/리포트', type: [3]},
      { answer: '영상/UCC/사진', type: [4]},
      { answer: '디자인/캐릭터/웹툰', type: [5]},
      { answer: '웹/모바일/IT', type: [1]},
      { answer: '게임/소프트웨어', type: [2]},
      { answer: '과학/공학', type: [3]},
      { answer: '예체능/미술/음악', type: [4]},
      { answer: '취업/창업', type: [5]},
      { answer: '기타', type: [1]},
    ]
  },
  {
    q: '맡고싶은역할(주 역할)을 선택하세요.',
    a: [
      { answer: '아이디어 기획', type: [1] },
      { answer: '자료조사 및 분석', type: [2]},
      { answer: '회의록 등 자료정리', type: [3]},
      { answer: '콘텐츠 디자인', type: [4]},
      { answer: '발표자료 만들기', type: [5]},
      { answer: '발표하기', type: [1]},
      { answer: '프로그래밍', type: [2]},
      { answer: '팀장', type: [3]},
      { answer: '논문작성', type: [4]},
      { answer: '기타', type: [5]},
    ]
  },
  {
    q: '맡고싶은역할(부 역할)을 선택하세요.',
    a: [
      { answer: '아이디어 기획', type: [1] },
      { answer: '자료조사 및 분석', type: [2]},
      { answer: '회의록 등 자료정리', type: [3]},
      { answer: '콘텐츠 디자인', type: [4]},
      { answer: '발표자료 만들기', type: [5]},
      { answer: '발표하기', type: [1]},
      { answer: '프로그래밍', type: [2]},
      { answer: '팀장', type: [3]},
      { answer: '논문작성', type: [4]},
      { answer: '기타', type: [5]},
    ]
  },
  {
    q: '자신이 생각하는 자신의 능력치를 선택하세요.',
    a: [
      { answer: '상', type: [1] },
      { answer: '중', type: [1]},
      { answer: '하', type: [1]},
    ]
  },
  {
    q: '관련 공모전경험이 있는지 선택하세요.',
    a: [
      { answer: '없음', type: [3] },
      { answer: '1~3회', type: [3]},
      { answer: '3~6회', type: [4]},
      { answer: '7회 이상', type: [5]},
    ]
  }
]

const infoList = [
  {
    name:'ㄱ',
    desc:'ㄱ'
  },
  {
    name: 'ㄴ',
    desc: 'ㄴ'
  },
  {
    name: 'ㄷ',
    desc: 'ㄷ'
  },
  {
    name: 'ㄹ',
    desc: 'ㄹ'
  },
  {
    name: 'ㅁ',
    desc: 'ㅁ'
  },
]
