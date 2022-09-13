<template>
  <div class="wrap">
    <ModalView/>
    <GoTop />
    <MobileMenu/>
    <FixView />
    <HeaderView/>
    <VisualView />
    <ItemsView />
    <BevarageView />
    <FranchiView/>
    <snsView />
    <FooterView />
  </div>
</template>

<script>
import GoTop from '@/components/GoTop.vue';
import ModalView from '@/components/ModalView.vue';
import FixView from '@/components/FixView.vue';
import MobileMenu from '@/components/MobileMenu.vue';
import HeaderView from '@/components/HeaderView.vue';
import FooterView from '@/components/FooterView.vue';
import FranchiView from '@/components/FranchiView.vue';
import ItemsView from '@/components/ItemsView.vue';
import BevarageView from '@/components/BevarageView.vue';
import snsView from '@/components/snsView.vue';
import VisualView from '@/components/VisualView.vue';

// 공통으로 관리되는 state 를 참조
// 여기서는 actions 를 호출하는 용도로 사용
// vuex 를 참조하는 객체를 접근하려고 하면 아래 구문으로 접근한다.
import { useStore } from 'vuex'

export default {
  name: 'App',
  components: {
    ModalView,
    GoTop,
    MobileMenu,
    FixView,
    HeaderView,
    VisualView,
    ItemsView,
    BevarageView,
    FranchiView,
    snsView,
    FooterView
  },
  setup(){
    // 외부 menu.json 을 불러오기 위해 actions 를 활용한다.
    const store = useStore()
    // actions 의 메소드(function)을 사용할때
    // store.dispatch('메소드)
    // console.log('step1:disfetch')
    store.dispatch('fetchMenudata');
    return{
    }
  }
}
</script>

<style>
@charset 'utf-8';
@import url('@/assets/masigray/css/nanumsquare/nanumsquare.css');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline-style: none;
}
ul,
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: #333;
}
img {
  vertical-align: top;
  border: 0;
}
html {
  font-size: 16px;
  overflow-x: hidden;
}
body {
  font-family: 'NanumSquare', 'Malgun Gothic', '맑은 고딕', "돋움", Verdana, sans-serif;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: -0.5px;
  line-height: 1.6;
  color: #888;
  min-width:360px;
  overflow-x: hidden;
}
/* 공통(재사용) */
.inner {
  position: relative;
  display: block;
  width: 100%;
  max-width: 1000px;
  
  margin: 0 auto;
}
/* float를 해제 */
.clearfix::after {
  content: '';
  position: relative;
  display: block;
  width: 100%;
  clear: both;
}
/* layout */
.wrap {
  position: relative;
  display: block;
}
</style>
