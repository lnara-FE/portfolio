// 2019.06 WEEKLYBIZ New Gnb JavaScript 
document.write(
'<header>'+
    '<div class="main_gnb clear_fix">'+
        '<div class="header_top clear_fix">'+
            '<div class="inner">'+
                /* '<div class="sound_ban"><a href="http://weeklybiz.chosun.com/svc/wb_voice.html" target="_blank" onclick="ga(\'send\', \'event\', \'GNB\', \'Link\', \'VoiceNews\');">위클리비즈 보이스 뉴스</a></div>'+ */
                '<div class="sound_ban new"><a href="javascript:void(0)">위빔</a></div>'+
                '<h1><a href="https://weeklybiz.chosun.com/"><img src="//image.chosun.com/weeklybiz/imges2019//logo_2x.png" alt="위클리비즈"></a></h1>'+ 
                '<ul class="link">'+
                    '<li><a href="https://members.chosun.com/subscription/appendweeklybiz.jsp" target="_blank">WEEKLY BIZ 구독하기</a></li>'+
                    '<li><a href="https://membership.chosun.com/login/index_n.jsp?returl=" id="logLink">로그인</a></li>'+
                '</ul>'+
                '<ul class="link m">'+
                    '<li><a href="https://members.chosun.com/subscription/appendweeklybiz.jsp" target="_blank">구독하기</a></li>'+
                    '<li><a href="https://membership.chosun.com/join/regist/mobileN/login_m.jsp?returl=" id="tabLogLink">로그인</a></li>'+
                '</ul>'+
                '<div class="csh_search">'+
                    '<a href="javascript:void(0)" id="csh_search_id" title="Search" class="search_open" rel="nofollow">검색</a>'+
                        //<!--검색 버튼-->
                        //<!--classname - search_open (닫혀있을때)-->
                        //<!--classname - search_close (검색창 열려있을때)-->
                '</div>'+
            '</div>'+
        '</div>'+
        //<!--header_top end--> 
        '<div class="header_bottom">'+
            '<div class="inner">'+
                '<ul class="menu clear_fix">'+
                    '<li id="tp_home"><a href="#">Home</a></li>'+
                    '<li id="tp_articles"><a href="#">All Articles</a></li>'+
                    '<li id="tp_interview"><a href="#">Interview</a></li>'+
                    '<li id="tp_analysis"><a href="#">Analysis</a></li>'+
                    '<li id="tp_opinion"><a href="#">Opinion</a></li>'+
                    '<li id="tp_culture"><a href="#">Culture</a></li>'+
                    '<li id="tp_trend"><a href="#">Trend</a></li>'+
                '</ul>'+
                '<ul class="tag clear_fix">'+
                    '<li><a href="#">#Webly</a></li>'+
                    '<li><a href="#">#Cover Story</a></li>'+
                    '<li><a href="#">#Interview in Depth</a></li>'+
                '</ul>'+
                '<ul class="m_text_btn clear_fix">'+
                    '<li><a href="#">알립니다</a></li>'+
                    '<li><a href="//cdb.chosun.com/search/pdf/i_wb/weeklybiz.jsp">지면보기</a></li>'+
                    '<li><a href="https://members.chosun.com/subscription/appendweeklybiz.jsp">구독하기</a></li>'+
                '</ul>'+
                '<div class="mobile_login_box">'+
                    '<ul class="profile_info">'+
                        '<li class="profile_img"><a href="#"><img src="//news.chosun.com/test_2010/nara_css/weekly_test/images/KakaoTalk_20190603_101204577.jpg" alt="프로필 이미지"></a></li>'+
                        '<li class="profile_name"><a href="#">김조선</a></li>'+
                    '</ul>'+
                    '<ul class="login_text_btn">'+
                        '<li><a href="https://membership.chosun.com/joinN/registUser.jsp?site=chosun" id="memberLink">회원가입</a></li>'+
                        '<li><a href="https://membership.chosun.com/join/regist/mobileN/login_m.jsp?returl=" id="mLogLink">로그인</a></li>'+
                    '</ul>'+
                '</div>'+
                '<div class="m_chosun_logo"><a href="//www.chosun.com?utm_source=csmedia&utm_medium=wbmenu&utm_campaign=www"><img src="//image.chosun.com/weeklybiz/imges2019//m_chosun_2x.png" alt="chosun.com"></a></div>'+
                '<div class="sound_ban_mobile new">'+
                    '<a a href="javascript:viod(0)">위빔</a>'+
                '</div>'+
            '</div>'+
        '</div>'+

        '<div class="weekly_mmenu"><a href="javascript:void(0)" class="m_menu_open" id="weekly_mmenu_btn_id">위클리비즈 메뉴</a></div>'+

        '<div class="searh_area_bg" id="searh_area_bg_id"></div>'+
        //<!-- 검색 backgroud bg -->
        '<div class="csh_search_area" id="csh_search_area_id">'+
            '<h4 class="hide">Search</h4>'+
            '<div class="csh_search_inputbox">'+
                '<form method="get" id="id_searchForm" name="id_searchForm" action="//weeklybiz.chosun.com/svc/wb_search.html?query=" target="_self" accept-charset="utf-8" onsubmit="goSearch(); return false">'+
                    '<fieldset>'+
                        '<legend>통합검색</legend>'+
                        '<span class="InputOutline">'+
                            '<input type="text" value="" class="searchTerm" id="query" name="query" title="검색어 입력" placeholder="검색어를 입력하세요." autocomplete="off">'+
                            '<input type="submit" alt="Search" title="Search" class="searchBtn" value="Search">'+
                            '<a href="javascript:clearQuery();" class="input_close" id="search_close_id">닫기</a>'+
                        '</span>'+
                        '<input type="hidden" name="pageconf" id="pageconf" value="total">'+
                    '</fieldset>'+
                '</form>'+
            '</div>'+
        '</div>'+
    '</div>'+
'</header>'+
'<div class="mask_layer" id="mask_layer_id"></div>'
//<!-- mobile menu mask layer -->
) ;

function gnbMenuActive(){
    var nowURL = window.location.href;
    if ( typeof CatID !== 'undefined' ){
        var secID = CatID.substring(0, 1);
        if (secID == '0') {
            $('#tp_articles').addClass('current');
        } else if (secID == '1') {
            $('#tp_interview').addClass('current');
        } else if (secID == '2') {
            $('#tp_analysis').addClass('current');
        } else if (secID == '3') {
            $('#tp_opinion').addClass('current');
        } else if (secID == '4') {
            $('#tp_culture').addClass('current');
        } else if (secID == '5') {
            $('#tp_trend').addClass('current');
        } else {
            $('li').removeClass('current');
        }
    } else {
        if(nowURL.indexOf('search') > -1 || nowURL.indexOf('pdf') > -1 || nowURL.indexOf('keyword') > -1 || nowURL.indexOf('query') > -1){
            $('li').removeClass('current');
        }else {
            $('#tp_home').addClass('current');
        }
    };
}
gnbMenuActive();  


//main_gnb animaiton 
$(function() {
    var menu = $('ul.menu li');
    menu.click(function() {
        menu.removeClass('current');
        $(this).addClass('current');
    });
});  
      
      
//mobile menu event 
var mobileMenuBtn = $('#weekly_mmenu_btn_id'), //mobile menu button
    mobileMenu = $('.header_bottom'), //mobile menu
    mobileMask = $('.mask_layer'); // mobile menu mask bg

mobileMenuBtn.on('click', function(e){
    e.preventDefault();

    if(mobileMenu.hasClass('vis'), mobileMask.hasClass('vis'), mobileMenuBtn.hasClass('m_menu_close')) {
        mobileMenu.removeClass('vis'),
        mobileMask.removeClass('vis'),
        mobileMenuBtn.removeClass('m_menu_close'),
        mobileMenuBtn.addClass('m_menu_open'),
        mobileMenuBtn.css({position: 'absolute'});
    }else {
        mobileMenu.addClass('vis'),
        mobileMask.addClass('vis'),
        mobileMenuBtn.addClass('m_menu_close'),
        mobileMenuBtn.removeClass('m_menu_open'),
        mobileMenuBtn.css({position: 'fixed'});
    }
});

//스크롤시 moible menu close 
$(window).scroll(function () { 
    mobileMask.removeClass('vis'),
    mobileMenu.removeClass('vis'),
    mobileMenuBtn.removeClass('m_menu_close'),
    mobileMenuBtn.addClass('m_menu_open'),
    mobileMenuBtn.css('position', 'absolute')
});

//mobile menu open시에 다른 영역 클릭시 close
mobileMask.on('click',function(){
    mobileMask.removeClass('vis'),
    mobileMenu.removeClass('vis'),
    mobileMenuBtn.removeClass('m_menu_close'),
    mobileMenuBtn.addClass('m_menu_open')
});


// search 
var searchOpenBtn = $('#csh_search_id'),// 검색 버튼
    searchOpenlayer = $('#csh_search_area_id'), // 검색 레이어
    searOpenbg = $('#searh_area_bg_id'), //검색 흰색 반투명bg
    searchCloseBtn = $('#search_close_id'); // 검색 레이어에 X 닫기버튼
        
    //setOpenbg = $('#menu_area_bg'), //메뉴검은 반투명bg
    
searchOpenBtn.on('click', function (e) {
    e.preventDefault();
        wrapWindowByMask();
    if (searchOpenlayer.hasClass('vis'), searOpenbg.hasClass('vis'),searchOpenBtn.hasClass('search_close')) {
    searchOpenlayer.removeClass('vis'), searOpenbg.removeClass('vis'), searchOpenBtn.removeClass('search_close'), searchOpenBtn.addClass('search_open');
    } else {
    searchOpenlayer.addClass('vis'), searOpenbg.addClass('vis'), searchOpenBtn.addClass('search_close'), searchOpenBtn.removeClass('search_open');
    /* setTimeout(function() {
        $('#query').focus();}, 450); */
    }
});
/* searchCloseBtn.on('click', function (e) {
    e.preventDefault();
    searchOpenlayer.removeClass('vis'), searOpenbg.removeClass('vis'),searchOpenBtn.removeClass('search_close');
});  */

// 검색 레이어
searOpenbg.on('click',function(){
    if(searOpenbg.hasClass('vis')){
        searOpenbg.removeClass('vis'),
        searchOpenlayer.removeClass('vis'),
        searchOpenBtn.removeClass('search_close');
    }
});

function clearQuery(){
    $('input[type=text][name=query]').val('');
};
    
function wrapWindowByMask() {
    var maskHeight = $(document).height() - 303;
    var maskWidth = $(window).width();

    searOpenbg.css({ 'width': maskWidth, 'height': maskHeight });
    //setOpenbg.css({ 'width': maskWidth, 'height': maskHeight });
    //setOpenbg.fadeIn(0);
    //setOpenbg.fadeTo('slow', 0.6);
};

//검색관련
function goSearch() {
    var f = document.getElementById('id_searchForm');

    if(f.query.value == ''){
        alert('검색어를 입력하세요.');
        f.query.focus();
        return false;
    }

    f.submit();
    //document.charset = 'utf-8';
    //document.charset = 'euc-kr';
};
