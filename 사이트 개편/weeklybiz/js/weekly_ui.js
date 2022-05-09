$(function(){
  weeklyMainSlide();
  slideCurrentBg();
  weeklyPaperSlide();
  weeklyTalkMobile(); 
  weeklyCollaboMobile();
  //weeklyNewsletter();
  //weeklyLoginPop();
});


function weeklyMainSlide(){
//메인 슬라이드
mainSlide = new Swiper('#main_slide_container_id',{
  speed: 500,
  loop: true,
  autoHeight: false,
  slidesPerView: 3,
  centeredSlides: true,
  navigation: {
  nextEl: '.btn_next',
  prevEl: '.btn_prev',
},
  breakpoints: {
  // when window width is <= 739px
  739: {
      loop: false,
      scrollbarHide: true,
      slidesPerView: 1,
      centeredSlides: false,
      spaceBetween: 16
  }
  }
});
}

function slideCurrentBg(){
// 메인 슬라이드 current background
  $(".slide_current_bg").css("background-image", "url(" + $('.main_slide .swiper-slide-active img').attr('src') + ")");
  $("#main_slide_control div").click(function(){
  var imageUrl = $('.main_slide .swiper-slide-active img').attr('src');
  $(".slide_current_bg").css("background-image", "url(" + imageUrl + ")");
  });
}

//날짜별 지면보기 슬라이드
function weeklyPaperSlide(){
  paperSlide = new Swiper('.paper_slide',{
  //speed: 200,
  loop: true,
  autoHeight: false,
  slidesPerView: 3,
  centeredSlides: true,
  navigation: {
  nextEl: '.btn_next',
  prevEl: '.btn_prev',
  },
});
}

function weeklyTalkMobile(){
//메인 모바일 슬라이드  - weeklytalk
var weeklyTalkSli = true;
  function initSwiper() {
      var windowWidth = $(window).outerWidth();
      if ( (windowWidth < 739) && (weeklyTalkSli == true)) {
      //console.log('mobile')
          weeklyTalkSli = new Swiper('#weekly_talk_id', {
          freeMode: true,
          scrollbarHide: true,
          slidesPerView: 'auto',
          grabCursor: true,
          autoHeight: false,
          spaceBetween: 20,
      });
      } else if ((windowWidth > 740) && (weeklyTalkSli != true)) {
      //console.log('pc')
      weeklyTalkSli.destroy();
      weeklyTalkSli = true;
      $('.swiper-wrapper').removeAttr('style');
      $('.swiper-slide').removeAttr('style');
      }  else{
          //none
      }
  }
  initSwiper();

  $(window).resize(function() {
      initSwiper();
  });
}

function weeklyCollaboMobile(){
//메인 모바일 슬라이드  - collabo
 var collaboSli = true;
     function initSwiper() {
         var windowWidth = $(window).outerWidth();
         if ( (windowWidth < 739) && (collaboSli == true)) {
             collaboSli = new Swiper('#collabo_id', {
              freeMode: true,
              scrollbarHide: true,
              slidesPerView: 'auto',
              grabCursor: true,
              autoHeight: false,
              spaceBetween: 10,
         });
         } else if ((windowWidth > 740) && (collaboSli != true)) {
         collaboSli.destroy();
         collaboSli = true;
         $('.swiper-wrapper').removeAttr('style');
         $('.swiper-slide').removeAttr('style');
         } else{
             //none
         }
     }
     initSwiper();

   $(window).resize(function() {
       initSwiper();
   });
}  

//refresh page on browser resize
/* $(window).bind('resize', function(e){
  //console.log('window resized..');
  this.location.reload(false); 
});
 */

/*
function weeklyNewsletter(){

 var user_email = $('#mail_form'),
 reqLetterPop = $('.letter_req_pop'),
 reqLetterClose = $('.req_letter_close')

 reqLetterClose.on('click',function(){
 reqLetterPop.css("display","none");

 });

 //정규식 - 이메일 유효성 검사
 $('#mail_bt').on('click', function(){
     var regEmail = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

     if(!user_email.val()){
         alert('이메일 주소를 입력 해 주세요');
         user_email.focus();
         return false;
     }else {
         if(!regEmail.test(user_email.val())){
             alert('이메일 주소가 유효하지 않습니다');
             user_email.focus();
             return false;
         }else{
             alert('이메일이 정상 입력 되었습니다');
             user_email.focus();
             reqLetterPop.css("display","block");
             return false;
         }
     }
   });  
} */

/* 
function weeklyLoginPop(){
 //로그인 팝업 
 var loginPop = '<div class="login_pop" id="login_pop_id"><div class="inner"><strong>4차 산업혁명 리더를 위한 \'WEEKLY BIZ\' 지금 구독신청하세요.</strong><a class="login_btn" href="javascript:void(0)">구독신청</a><a class="pop_close_btn" id="pop_close_btn_id" href="javascript:void(0)">닫기</a></div><!-- login_pop inner end --></div>';

 $('.main_wrap').append(loginPop); 
} */

