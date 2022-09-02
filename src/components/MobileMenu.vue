<template>
  <!-- 모바일메뉴 -->
  <a href="#" class="mb-bt">
    <span></span>
  </a>
  <!-- 모바일 가림막 -->
  <div class="mb-dim"></div>
  <!-- 모바일 메뉴내용 -->
  <div class="mb-wrap">
    <a href="#" class="mb-close"></a>
    <div class="mb-sns">
      <ul class="mb-sns-list clearfix">
        <li><a href="#"><img :src="require('@/assets/images/sns_blog.png')" alt="blog"></a></li>
        <li><a href="#"><img :src="require('@/assets/images/sns_insta.png')" alt="instagram"></a></li>
        <li><a href="#"><img :src="require('@/assets/images/sns_facebook.png')" alt="facebook"></a></li>
      </ul>
    </div>
    <ul class="mb-menu">
      <li v-for="(item, index) in menudata" :key="index">
        <a :href="item.mainlink">{{item.mainstr}}</a>
        <ul class="mb-submenu">
          <li v-for="(subitem,subindex) in item.sub" :key="subindex">
            <a :href="subitem.sublink">{{subitem.substr}}</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  import $ from 'jquery'
  import {onMounted,computed} from 'vue'
  import {useStore} from 'vuex'
  export default {
    setup() {
      const store = useStore();
      const menudata = computed(() => store.getters.getMenuData);
      onMounted(() => {
        // 모바일 메뉴 기능
        // 1. 펼침메뉴 기능
        let mb_mainmenu = $('.mb-menu > li > a');
        let mb_submenu = $('.mb-submenu');

        $.each(mb_mainmenu, function (index) {
          $(this).click(function (event) {
            // href 막기
            event.preventDefault();

            // 클릭하면 현재 포커스 클래스가 있는지 검토
            let temp = $(this).hasClass('mb-menu-focus');
            if (temp == true) {

              // 포커스 적용해제
              $(this).removeClass('mb-menu-focus');
              // 아이콘 리버스 제거
              $(this).removeClass('mb-icon-rot');
              // 펼쳐진 해당 서브메뉴 닫기
              mb_submenu.eq(index).hide();
            } else {
              // 일단 모두 숨겨라
              mb_submenu.hide();
              //다른 메뉴의 포커스 색상 해제
              mb_mainmenu.removeClass('mb-menu-focus');
              mb_mainmenu.removeClass('mb-icon-rot');
              // 포커스 색상 적용하기
              $(this).addClass('mb-menu-focus');
              // 아이콘 리버스
              $(this).addClass('mb-icon-rot');
              // 클릭된 번호만 보여라
              mb_submenu.eq(index).show();
            }
          });
        });
        // 모바일 메뉴 보이기 & 숨기기 기능
        let mb_bt = $('.mb-bt');
        let mb_dim = $('.mb-dim');
        let mb_close = $('.mb-close');
        let mb_wrap = $('.mb-wrap');

        mb_bt.click(function (event) {
          event.preventDefault();
          mb_dim.show();
          mb_wrap.addClass('mb-wrap-open');
        });
        mb_close.click(function (event) {
          event.preventDefault();
          // 주메뉴 색상 제거
          mb_mainmenu.removeClass('mb-menu-focus');
          // 서브메뉴 모두 닫기
          mb_submenu.hide();
          // 사라지는 모션 실행
          mb_wrap.removeClass('mb-wrap-open');
          // 딤 제거
          mb_dim.hide();
        });
        // 반응처리
        $(window).resize(function () {
          // 화면의 너비
          let temp = $(window).width();
          if (temp > 700) {
            mb_submenu.hide();
            mb_mainmenu.removeClass('mb-menu-focus');
            mb_mainmenu.removeClass('mb-icon-rot');
            mb_wrap.removeClass('mb-wrap-open');
            mb_dim.hide();
          }
        });
      })
      return {
        menudata
      }
    }
  }
</script>

<style>
  /* 모바일 메뉴 */
  .mb-bt {
    position: fixed;
    left: 20px;
    top: 30px;
    display: none;
    width: 22px;
    height: 21px;
    z-index: 99997;
  }

  .mb-bt::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 3px;
    background: #51504e;
  }

  .mb-bt span {
    position: absolute;
    left: 0;
    top: 9px;
    display: block;
    width: 100%;
    height: 3px;
    background: #51504e;
  }

  .mb-bt::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 3px;
    background: #51504e;
  }

  /* 모바일 가림막 */
  .mb-dim {
    position: fixed;
    left: 0;
    top: 0;
    display: none;
    z-index: 9998;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, .7);
  }


  /* 모바일 메뉴내용 */
  .mb-wrap {
    position: fixed;
    left: -320px;
    top: 0;
    display: block;
    background: #fff;
    z-index: 99999;
    width: 320px;
    height: 100vh;
    transition: left 0.5s;
  }

  .mb-wrap-open {
    left: 0;
  }

  .mb-close {
    position: absolute;
    right: 20px;
    top: 20px;
    display: block;
    width: 22px;
    height: 21px;
    background: url('@/assets/images/btn_close2.png') no-repeat center;
    z-index: 9;
  }

  .mb-sns {
    position: relative;
    display: block;
    padding: 20px 20px;
  }

  .mb-sns-list {
    position: relative;
    display: block;
  }

  .mb-sns-list li {
    position: relative;
    display: block;
    float: left;
    margin: 0 2.5px;
  }

  .mb-sns-list li a {
    position: relative;
    display: block;
  }

  .mb-menu {
    position: relative;
    display: block;
  }

  .mb-menu>li {
    position: relative;
    display: block;
    border-bottom: 1px solid #eee;

  }

  .mb-menu>li>a {
    position: relative;
    display: block;
    line-height: 50px;
    color: #222;
    font-size: 16px;
    padding-left: 20px;
    font-weight: 500;
  }

  .mb-menu>li>a::after {
    content: '';
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    display: block;
    width: 13px;
    height: 9px;
    background: url('@/assets/images/lnb_bl.png') no-repeat center;
    transition: transform 0.5s;
  }

  .mb-icon-rot::after {
    transform: translateY(-50%) rotate(180deg) !important;
  }

  /* 포커스 유지 */
  .mb-menu-focus {
    color: #4abbc3 !important;
  }

  /* .mb-menu > li:hover > a {
  color:#4abbc3;
}
.mb-menu > li:hover .mb-submenu {
  display: block;
} */

  .mb-submenu {
    position: relative;
    display: none;
    background: #f2f2f2;
  }

  .mb-submenu>li {
    position: relative;
    display: block;
  }

  .mb-submenu>li>a {
    position: relative;
    display: block;
    color: #333;
    font-size: 16px;
    line-height: 30px;
    padding-left: 30px;
  }

  @media all and (max-width:700px) {
    .mb-bt {
      display: block;
    }
  }
</style>