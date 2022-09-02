import {
  createStore
} from 'vuex'
// 모든 Vue 화면에서 공유되어질 state (데이터) 관리 목적

import axios from 'axios';
export default createStore({
  // state: 데이터 모아서 관리하는 객체
  state: {
    menuData: [{
        mainstr: '마시그래이',
        mainlink: '#',
        sub: [{
            substr: '회사소개',
            sublink: '#'
          },
          {
            substr: '연혁',
            sublink: '#'
          },
          {
            substr: 'CEO인사말',
            sublink: '#'
          },
          {
            substr: 'BI / 비전',
            sublink: '#'
          },
          {
            substr: '오시는길',
            sublink: '#'
          },
        ]
      },
      {
        mainstr: '메뉴',
        mainlink: '#',
        sub: [{
            substr: '신메뉴',
            sublink: '#'
          },
          {
            substr: '커피',
            sublink: '#'
          },
          {
            substr: '음료',
            sublink: '#'
          },
          {
            substr: '디저트',
            sublink: '#'
          },
          {
            substr: 'MD상품',
            sublink: '#'
          }
        ]
      },
      {
        mainstr: '프랜차이즈',
        mainlink: '#',
        sub: [{
            substr: '가맹안내',
            sublink: '#'
          },
          {
            substr: '가맹절차',
            sublink: '#'
          },
          {
            substr: '매장인테리어',
            sublink: '#'
          },
          {
            substr: '커피 아카데미',
            sublink: '#'
          },
          {
            substr: '가맹상담신청',
            sublink: '#'
          }
        ]
      },
      {
        mainstr: '매장안내',
        mainlink: '#',
        sub: [{
          substr: '매장안내',
          sublink: '#'
        }]
      },
      {
        mainstr: '공지사항',
        mainlink: '#',
        sub: [{
            substr: '공지사항',
            sublink: '#'
          },
          {
            substr: '이벤트',
            sublink: '#'
          }
        ]
      },
      {
        mainstr: '고객의소리',
        mainlink: '#',
        sub: [{
            substr: 'FAQ',
            sublink: '#'
          },
          {
            substr: 'Q&amp;A',
            sublink: '#'
          },
          {
            substr: '케이터링',
            sublink: '#'
          }
        ]
      }
    ],
    storeData: [{
        link: '#',
        title: '합천점',
        pic: require('@/assets/images/shop1.jpg')
      },
      {
        link: '#',
        title: '신천점',
        pic: require('@/assets/images/shop2.jpg')
      },
      {
        link: '#',
        title: '복현푸르지오점',
        pic: require('@/assets/images/shop3.jpg')
      },
      {
        link: '#',
        title: '대곡점',
        pic: require('@/assets/images/shop4.jpg')
      }
    ]
  },
  // actions: 서버 및 파일연동, 성공/실패 체크후 mutations 실행
  actions: {
    // 메뉴 데이터 json 로딩
    fetchMenudata({
      commit
    }) {
    // 외부에 있는 메뉴데이터.json 파일을 불러온다.
      axios.get('/data/menu.json')
        .then(response => {
          // 서버 또는 파일이 결과 발생하면
          // console.log('axios 사용',response.data)
          // console.log('step2 : axios',response.data)
        // mutations 을 실행한다.
          // (context) => context.commit();
          commit('MENU_DATA_INIT',response.data);

        })
        .catch(err => console.log(err))
    }
  },
  // mutations: state(데이터) 업데이트 자리
  mutations: {
    MENU_DATA_INIT(state,payload) {
      state.menuData = payload
      // console.log('step3 : mutations',payload)
    }
  },
  // getters: state 출력(컴포넌트) 전달 computed 처리 자리
  getters: {
    getMenuData(state) {
      // console.log('step4 : getters',)
      return state.menuData
    },
    getStoreData(state) {
      return state.storeData
    }
  }
})