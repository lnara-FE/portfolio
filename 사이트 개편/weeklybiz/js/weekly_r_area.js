//weekly 2019 list & search right area 공통 js

$(document).ready(function(){
    rangNewsTab();

    function rangNewsTab(){
    $('ul.tab_nav li:first').addClass('current'); //시작시 많이 본 뉴스 nav current 걸고 시작
    $('.tab-contents:first').addClass('current'); //시작시 많이 본 뉴스 cont current 걸고 시작
    
        $('ul.tab_nav li').click(function(){
        var activeTab = $(this).attr('data-tab');
            $('ul.tab_nav li').removeClass('current');
            $('.tab-contents').removeClass('current');
            $(this).addClass('current');
            $('#' + activeTab).addClass('current');
        });
    }

    //날짜별 지면보기 슬라이드
    weeklyPaperSlide();
      function weeklyPaperSlide(){
        paperSlide = new Swiper('.paper_slide',{
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
});
