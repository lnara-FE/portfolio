// 2019.06 WEEKLYBIZ New Gnb JavaScript 

document.write(
'<div class="csh_art_min" id="csh_art_min_id">'+
    '<div class="head_inner">'+
        '<a href="https://weeklybiz.chosun.com/" class="csh_min_logo">weeklybiz</a>'+
        '<div class="csh_min_title">'+
            '<a href="" class="csh_min_cat" id="csh_min_cat_id">'+ C1_rp +'</a>'+
            '<span class="csh_min_title_text" id="csh_min_title_text_id">'+ ArtTitleMin +'</span>'+
        '</div>'+
        '<div class="csh_min_count">'+
            '<a href="#news_cmt_id" class="count_cmt_min" title="">100자평<span class="count" id="BBSCNT">0</span></a>'+
            '<a href="javascript:csLike()" class="count_like" title="">좋아요<span class="count" id="CSCNT">0</span></a>'+
        '</div>'+
        '<div class="mini_art_sns">'+
            '<ul>'+
                '<li><a class="kakao" href="javascript:void(0)">카카오톡 공유</a></li>'+
                '<li><a class="facebook" href="javascript:facebookOpen()">페이스북 공유</a></li>'+
                '<li><a class="twitter" href="javascript:twitterOpen()">트위터 공유</a></li>'+
            '</ul>'+
        '</div>'+
    '</div><!-- head_inner -->'+
    '<div class="news_progress"><span class="news_progress_bar" id="news_progress_bar_id"></span></div>'+
'</div><!--weeklybiz_art_gnb end-->'
)   


function proBar() {
    var wintop = $(window).scrollTop(),
        docheight = $('#csWrap').height(),
        winheight = $(window).height(),
        //artfixed = $('#mcsg_art_fixed_id'),
        titheight = 50;
    //console.log(wintop);
    var totalScroll = (wintop/(docheight-winheight))*100;
    //console.log("total scroll" + totalScroll);
    $("#news_progress_bar_id").css("width",totalScroll+"%");
    if ( wintop > titheight ) {
        //artfixed.addClass('onview');
    } else {
        //artfixed.removeClass('onview');
    };
}

$(window).load(function(){
    //progress bar
    proBar()

    $(window).scroll(function(){
        //progress bar
        proBar()
    });
});

//jquery win.scroll functions start
$(window).scroll(function(){
    var newsGo = $('#news_go_id, #csh_art_min_id'),
        docScroll = $(window).scrollTop(),
        recentRead = $('#news_recent_read_id'),
        recentBtn = $('#news_go_recent_id, #news_recent_read_closd_id');
    if ( docScroll >= 250 ) {
        newsGo.addClass('vis');
    } else {
        newsGo.removeClass('vis');
        $(recentRead, recentBtn).removeClass('vis');
    }
    //page scroll mov fixed
    if ( $("iframe[src*='youtube.com']").length ) {
        //   var gnb_art_min = $('#csh_art_min_id');
        var gnb_scroll = $(window).scrollTop();
        //   var gnb_art_all = $('#csh_all_id');
        var movbox = $('.ext_embed:eq(0)'),
            movboxTop = 810,
            movboxTop = movbox.offset().top,
            movboxTop = movboxTop + 320;

        //console.log( movboxTop );

        if (gnb_scroll >= movboxTop){
            //gnb_art_min.addClass('fixed');
            movbox.addClass('fixed');
        }
        else {
            // gnb_art_min.removeClass('fixed');
            // gnb_art_all.removeClass('fixed').hide();
            // $('#csh_all_trig_id, #csh_all_trig_id_2').removeClass('csh_all_trig_on').addClass('csh_all_trig_off');
            movbox.removeClass('fixed');
        }
    }
});


