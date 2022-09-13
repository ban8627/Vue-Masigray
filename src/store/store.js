import {
  createStore
} from 'vuex'
// 모든 Vue 화면에서 공유되어질 state (데이터) 관리 목적

import axios from 'axios';
export default createStore({
  // state: 데이터 모아서 관리하는 객체
  state: {
    menuData: [
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
      axios.get('./data/menu.json')
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
      // console.log('step4 : getters',state.menuData)
      return state.menuData
    },
    getStoreData(state) {
      return state.storeData
    }
  }
})