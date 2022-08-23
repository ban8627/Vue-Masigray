<template>
  <!-- go top -->
  <button class="gotop"></button>
</template>

<script>
  import $ from 'jquery';
  import {
    onMounted
  } from 'vue';
export default {
setup(){
  onMounted(()=>{
      // 위로가기
  let go_top = $('.gotop');
  go_top.click(function(){
    $('html').animate({
      scrollTop:0
    },1000)
  });
  })
}
}
</script>

<style scoped>
/* scoped 현재에서만 쓰인다 다른곳에서 읽지 않음 */
.gotop {
  position: fixed;
  right:20px;
  bottom:50px;
  display: block;
  width:50px;
  height:50px;
  background: url('@/assets/images/btn_top_off.png') no-repeat center;
  background-size: cover;
  border:0;
  cursor: pointer;
  z-index: 999;
}
</style>