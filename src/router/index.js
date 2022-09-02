import { createRouter, createWebHistory } from 'vue-router'
// router 는 링크 기능이다. 
// 모든 vue 에서 export 하기 위함. router 라는 객체에다가 기능을 저장
const router = createRouter(
  {
    // 웹브라우저 주소를 깨끗하게( # 없게 보이도록 한다.)
    history: createWebHistory(),

    routes: [
      {
        path: '/',
        name: 'Home',
        components:''
      }
    ]
  }
);
// 외부로 내보내서 사용
export default router;