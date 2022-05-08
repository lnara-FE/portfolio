$(document).ready(function(){
//header slide 
var settings = function() {
    var settings1 = {
        slideWidth: 150, //1198 미만일때 
        touchEnabled: true,
        pager: false,
        auto: true, 
        autoControls: false,
        autoControlsCombine: false,
        maxSlides: 3,
        controls: false,
        moveSlides: 1,
    };
    var settings2 = {
            slideWidth: 300, //1198 초과일때 
            touchEnabled: true,
            pager: false,
            auto: true, 
            autoControls: false,
            autoControlsCombine: false,
            maxSlides: 6,
            controls: false,
            moveSlides: 1,
            autoHover: true,
    };
    return ($(window).width() < 1198) ? settings1 : settings2;
}

// settings1(1198 미만, true 일떄)
// settings2(1198 이상, false 일때)
  
var headerSli;

function tourLandingScript() {
    headerSli.reloadSlider(settings());
}

headerSli = $('.cn_bxslider').bxSlider(settings());

$(window).resize(tourLandingScript);
  
$('.slide-prev').click(function(){
    headerSli.goToPrevSlide();
    return false;  //<a> 링크 차단 
});
  
$('.slide-next').click(function(){
    headerSli.goToNextSlide();
    return false; //<a> 링크 차단 
});
  
$('.slide-stop').click(function(){ //중지버튼 눌렀을때 
    headerSli.stopAuto();
    $(".slide-stop").hide(); 
    $(".slide-play").show(); 
    return false;  //<a> 링크 차단 */
});
  
$('.slide-play').click(function(){ //시작버튼 눌렀을때
    headerSli.startAuto();
    $(".slide-play").hide(); 
    $(".slide-stop").show(); 
    return false;  //<a> 링크 차단 
});

$(".slide-play").hide(); //onload시 시작버튼 숨김
  
//section tab
var tabNews = $(function() {
    $('ul.cn_tab_nav li:first').addClass('current');
    $('.tab-contents:first').addClass('current');

    $('ul.cn_tab_nav li').click(function() {
        var activeTab = $(this).attr('data-tab');
        $('ul.cn_tab_nav li').removeClass('current');
        $('.tab-contents').removeClass('current');
        $(this).addClass('current');
        $('#' + activeTab).addClass('current');
    });
});
  
});
  