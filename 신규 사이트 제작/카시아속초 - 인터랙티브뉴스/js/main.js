/*------------------전역변수------------------*/
var winWidth = $(window).width();
var class_name = "active"

//scroll animation
AOS.init({
  offset: 50,
  duration: 800,
  easing: "ease-in-out",
  anchorPlacement: "center center"
});

//title img slide
function titBtSlide(){
    var slide = new Swiper("#title-bg-slide",{
        slidePerView: 1,
        effect: "fade",
        autoHeight: false,
        autoplay: {
            delay: 1500
        },
        speed: 800
    })
}
titBtSlide();

//basic img slide 
function imgSlide(){
    var slide = new Swiper("#img-slide-id",{
        slidePerView: 1,
        autoplay: {
            delay: 2000
        },
        speed: 800,
        pagination: {
            el: '.pagination',
            clickable: true
        }, 
    })
}
imgSlide();

//img accordion
function imgAccordion(){
    var imgAccItem = $(".img-acc-item");
  
    imgAccItem.on("click",function(){
      var $this = $(this);
  
      imgAccItem.removeClass("active");
      $this.addClass("active");
    })
}
imgAccordion();

// top, home button scroll event
function commonBtn(){
    var topBtn = $('.btn-top');
    var homeBtn = $('.btn-site');
    var lastScrollTop = 0;
    var delta = 10;

    if(winWidth > 959){
    //PC
    $(window).scroll(function(){
        var winTop = $(window).scrollTop();
        if(winTop > 900){
            topBtn.css({opacity : 1}, 300)
            homeBtn.css({opacity : 1}, 300)
        }else {
            topBtn.css({opacity : 0})
            homeBtn.css({opacity : 0})
        }
    })
    }else {
    //M
    $(window).scroll(function(){
        var winTop = $(window).scrollTop();
        var st = $(this).scrollTop(); //현재 스크롤 값 저장

        if (Math.abs(lastScrollTop - st) <= delta) return;

        if((st > lastScrollTop) && (lastScrollTop > 0) && (winTop > 300)){
            //scroll down
            topBtn.css({opacity : 1}, 300)
        }else {
            //scroll up
            if(st < 300){
                topBtn.css({opacity : 0})
                homeBtn.css({opacity : 0})
            }else {
                homeBtn.css({opacity : 1},300)
            }
        }
        lastScrollTop = st; 
    })
    }
}
commonBtn();

//img popup
function popupFunc(element){
    /*------------지역변수 정의---------------*/
    var btn = $(element);
    var closeBtn = $('#close_btn_id');
    var $popCont = $('.img-popup-cont');
    var $popContItem = $('.img-popup-item');
    var $popupBg = $('#pop-bg-id');
    
     /*------------이벤트 정의---------------*/
    btn.on("click",function(e){
      e.preventDefault();
  
      var target = $(this).attr('id'); 
      var targetCont = $('.'+ target);
      var $this = $(this);
      
      btnFunc(target, targetCont, $this);
    })
    
    closeBtn.on("click",function(e){
      e.preventDefault();
      closeBtnFun();
    })
  
    $popupBg.on("click",function(){
      closeBtnFun();
    })  
  
    /*------------함수정의---------------*/
    function btnFunc(target, targetCont, $this){
      $('html').css({overflow: 'hidden'})
      $popCont.on('scroll touchmove mousewheel', function(e) {     
        e.preventDefault();     
        e.stopPropagation();     
        return false; 
      });

      $popupBg.addClass(class_name);
      $popCont.addClass(class_name);
      targetCont.addClass(class_name);
    }
    
    function closeBtnFun(){
      $('html').css({overflow: 'auto'})
      $popCont.off('scroll touchmove mousewheel');
  
      $popupBg.removeClass(class_name);
      $popCont.removeClass(class_name);
      $popContItem.removeClass(class_name);
    }
}
popupFunc('.img-popup-btn');

//mobile cassiz-home btn text change
function btnTextChange(){
    if(winWidth <= 959){
        $('.btn-site').text('카시아 홈');
    }else {
        $('.btn-site').text('카시아 속초 홈페이지 가기');
    }
}
btnTextChange();
  
//resize 
$(window).on('resize', function() {
if ($(this).width() != winWidth) {
    this.location.reload(false);
}
});

//fixed img 
function ie_fixed(){
    if(navigator.userAgent.match(/Trident\/7\./)) { // if IE
        $('body').on("mousewheel", function (e) {
            // remove default behavior
            e.preventDefault(); 
  
            //scroll without smoothing
            var wheelDelta = event.wheelDelta;
            var currentScrollPosition = window.pageYOffset;
            window.scrollTo(0, currentScrollPosition - wheelDelta);
        });
    }
}
ie_fixed();

