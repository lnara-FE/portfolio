var winHeight = $(window).height(),
    winWidth = $(window).width();

$(document).ready(function(){
    $(".video_poster").on("click",function(){
        $(".video_poster").hide()
    })

    sliHorizontalFir();
    sliHorizontalSec();
    sliHorizontalThi();
    sliHorizontalFou();
    sliVerticalFir();
    sliVerticalSec();

    if(winWidth>959){
        $('.scrollbar-inner').scrollbar();
        //return false;
    }
})

$(window).on('resize', function() {
    if ($(this).width() != winWidth) {
        this.location.reload(false);
    }
    console.log('resize');
});

$(window).load(function(){
    $('.icon, .rep_tit, .bg, .bar, .art_tit').each(function(){
        $(this).addClass('ani')
    })
})

function sliHorizontalFir(){
    var slideHor = new Swiper('.slide_hor_cont.fir',{
        slidesPerView: 1,
        pagination: {
            el: '.pagination',
            type: 'fraction'
        }, 
        speed: 800,
        breakpoints: {
            959:{
                slidesPerView: 1.2,
                grabCursor: true,
                autoHeight: false,
                spaceBetween: 20,
                centeredSlides: true,
                speed: 400
            }
        }
    })
    var horSlidePrev = $('#horizontal_slide_fir .prev'),
        horSlideNext = $('#horizontal_slide_fir .next');

        horSlidePrev.on('click',function(){
            slideHor.slidePrev();
        })
        horSlideNext.on('click',function(){
            slideHor.slideNext();
        })
}

function sliHorizontalSec(){
    var slideHor = new Swiper('.slide_hor_cont.sec',{
        slidesPerView: 1,
        pagination: {
            el: '.pagination',
            type: 'fraction'
        }, 
        speed: 800,
        breakpoints: {
            959:{
                slidesPerView: 1.2,
                grabCursor: true,
                autoHeight: false,
                spaceBetween: 20,
                centeredSlides: true,
                speed: 400
            }
        }
    })
    var horSlidePrev = $('#horizontal_slide_sec .prev'),
        horSlideNext = $('#horizontal_slide_sec .next');

        horSlidePrev.on('click',function(){
            slideHor.slidePrev();
        })
        horSlideNext.on('click',function(){
            slideHor.slideNext();
        })
}

function sliHorizontalThi(){
    var slideHor = new Swiper('.slide_hor_cont.thi',{
        slidesPerView: 1,
        pagination: {
            el: '.pagination',
            type: 'fraction'
        }, 
        speed: 800,
        breakpoints: {
            959:{
                slidesPerView: 1.2,
                grabCursor: true,
                autoHeight: false,
                spaceBetween: 20,
                centeredSlides: true,
                speed: 400
            }
        }
    })
    var horSlidePrev = $('#horizontal_slide_thi .prev'),
        horSlideNext = $('#horizontal_slide_thi .next');

        horSlidePrev.on('click',function(){
            slideHor.slidePrev();
        })
        horSlideNext.on('click',function(){
            slideHor.slideNext();
        })
}

function sliHorizontalFou(){
    var slideHor = new Swiper('.slide_hor_cont.fou',{
        slidesPerView: 1,
        pagination: {
            el: '.pagination',
            type: 'fraction'
        }, 
        speed: 800,
        breakpoints: {
            959:{
                slidesPerView: 1.2,
                grabCursor: true,
                autoHeight: false,
                spaceBetween: 20,
                centeredSlides: true,
                speed: 400
            }
        }
    })
    var horSlidePrev = $('#horizontal_slide_fou .prev'),
        horSlideNext = $('#horizontal_slide_fou .next');

        horSlidePrev.on('click',function(){
            slideHor.slidePrev();
        })
        horSlideNext.on('click',function(){
            slideHor.slideNext();
        })
}

function sliVerticalFir(){
    var slideVer = new Swiper('.slide_ver_cont.fir',{
        slidesPerView: 'auto',
        speed: 800,
        autoHeight: false,
        pagination: {
            el: '.pagination',
            type: 'fraction'
        },
        breakpoints: {
            959:{
                slidesPerView: 1.2,
                grabCursor: true,
                autoHeight: false,
                spaceBetween: 20,
                centeredSlides: true,
                speed: 400
            }
        }
    })
    var verSlidePrev = $('#vertical_slide_fir .prev'),
        verSlideNext = $('#vertical_slide_fir .next');

        verSlidePrev.on('click',function(){
            slideVer.slidePrev();
        })
        verSlideNext.on('click',function(){
            slideVer.slideNext();
        })
}

function sliVerticalSec(){
    var slideVer = new Swiper('.slide_ver_cont.sec',{
        slidesPerView: 1,
        speed: 800,
        pagination: {
            el: '.pagination',
            type: 'fraction'
        },
        breakpoints: {
            959:{
                slidesPerView: 1.2,
                grabCursor: true,
                autoHeight: false,
                spaceBetween: 20,
                centeredSlides: true,
                speed: 400
            }
        }
    })
    var verSlidePrev = $('#vertical_slide_sec .prev'),
        verSlideNext = $('#vertical_slide_sec .next');

        verSlidePrev.on('click',function(){
            slideVer.slidePrev();
        })
        verSlideNext.on('click',function(){
            slideVer.slideNext();
        })
}


$(document).ready(function(){
// bottom layer Nav && topGo Button
    var layerNavBtn = '<div class="nav_btn_wrap" id="nav_btn_wrap_id"><button class="layer_nav_btn" id="layer_nav_btn_id"><span>??? ??????<br>?????? ?????????</span><i class="plus"></i></button></div>'

    var layerNav = '<!--layer nav start--><div class="layer_nav" id="layer_nav_id"><div class="layer_nav_tit"><h3 class="layer_nav_logo">?????????</h3><span>??? ?????? ?????? ?????????</span></div><div class="swiper-container" id="layer_nav_wrap"><ul class="layer_nav_cont swiper-wrapper"><li id="nav0" class="swiper-slide"><a href="//cbiz.chosun.com/interactive/antarctica/index.html"><span class="sub">????????????</span><p>?????? ???????????? ???????????????<br>???????????? ????????????</p></a></li><li id="nav1" class="swiper-slide"><a href="//news.chosun.com/interactive/antarctica/index2.html"><span class="sub">????????????</span><p>??? ????????? ????????? ?????????<br>????????? ??????</p></a></li><li id="nav2" class="swiper-slide"><a href="//news.chosun.com/interactive/antarctica/index3.html"><span class="sub">????????????</span><p>???????????? ?????? ?????????<br>????????????????? ???????????? ?????? ??????</p></a></li><li id="nav3" class="swiper-slide"><a href="//news.chosun.com/interactive/antarctica/index4.html"><span class="sub">????????????</span><p>???????????? ?????? ?????????<br>???????????? ?????????????????? ?????????</p></a></li></ul></div><a href="#" class="close_btn">??????</a></div><!--layer nav end-->'
    
    $('#fullpage').after(layerNavBtn,layerNav);

    var layerNavCont = $('#layer_nav_id'),
        layerNavClose = $('.layer_nav>.close_btn'),
        layerNavBtn = $('#nav_btn_wrap_id');

    layerNavClose.on('click',function(e){
        e.preventDefault();
        layerNavCont.removeClass('show');
        layerNavBtn.addClass('show');
    })

    layerNavBtn.on('click',function(e){
        e.preventDefault();
        layerNavCont.addClass('show');
        layerNavBtn.removeClass('show');
    })
    
    function layerNavSli(){
        var layerNavSlide = true;
          function initMSwiper() {
              var windowWidth = $(window).outerWidth();
              if ( (windowWidth < 960) && (layerNavSlide == true)) {
              //console.log('mobile')
                layerNavSlide = new Swiper('#layer_nav_wrap', {
                  scrollbarHide: true,
                  slidesPerView: 1.2,
                  grabCursor: true,
                  autoHeight: false,
                  spaceBetween: 20,
                  centeredSlides: true,
                  initialSlide: currentArt
              });
              } else if ((windowWidth > 959) && (layerNavSlide != true)) {
              //console.log('pc')
              layerNavSlide.destroy();
              layerNavSlide=true;
              $('.swiper-wrapper').removeAttr('style');
              $('.swiper-slide').removeAttr('style');
              }  else{
                  //none
              }
          }
          initMSwiper();
            $(window).resize(function() {
                initMSwiper();
            });
    }
    layerNavSli();

     function layerNavAct(){
        var nowURL = document.location.href

        if(typeof nowURL !== 'undefined'){
            if(nowURL.indexOf('index2.html')>-1){
                $('#nav1').addClass('current');
            }else if(nowURL.indexOf('index3.html')>-1){
                $('#nav2').addClass('current');
            }else if(nowURL.indexOf('index4.html')>-1){
                $('#nav3').addClass('current');
            }else {
                $('#nav0').addClass('current');
                
            }
        }else {

        }
    }
    layerNavAct(); 
})

//???????????? ????????????
var xmlHttp;

function srvTime() {
    if (window.XMLHttpRequest) {
        xmlHttp = new XMLHttpRequest();
        xmlHttp.open('HEAD', window.location.href.toString(), false);
        xmlHttp.setRequestHeader("Content-Type", "text/html");
        xmlHttp.send('');
        return xmlHttp.getResponseHeader("Date");
    } else if (window.ActiveXObject) {
        xmlHttp = new ActiveXObject('Msxml2.XMLHTTP');
        xmlHttp.open('HEAD', window.location.href.toString(), false);
        xmlHttp.setRequestHeader("Content-Type", "text/html");
        xmlHttp.send('');
        return xmlHttp.getResponseHeader("Date");
    }
}
function addZero(n){
return n < 10 ? "0" + n : n;
}
var st = srvTime();
var date = new Date(st);
var today = date.getFullYear() + addZero(date.getMonth()+1) + addZero(date.getDate());
var nowhour = date.getHours();
var utctime = date.toTimeString();
//???????????? ???????????? ???
//console.log(nowhour);

$(document).ready(function(){
    if ( nowhour > 5 && typeof onDawnAuto !== "undefined" && onDawnAuto == 1 ) {
        //console.log('open')
    } else {
        //console.log('close')
    }
})
