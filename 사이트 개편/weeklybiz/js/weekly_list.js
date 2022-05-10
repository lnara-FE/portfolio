$(document).ready(function(){
    
var rangNewsTab = $(function(){
    $('ul.tab_nav li:first').addClass('current'); //시작시 많이 본 뉴스 nav current 걸고 시작
    $('.tab-contents:first').addClass('current'); //시작시 많이 본 뉴스 cont current 걸고 시작

    $('ul.tab_nav li').click(function(){
    var activeTab = $(this).attr('data-tab');
        $('ul.tab_nav li').removeClass('current');
        $('.tab-contents').removeClass('current');
        $(this).addClass('current');
        $('#' + activeTab).addClass('current');
    });
});



var weeklySelect = $(function(){
    var calendar = $('.date_picker_calendar');
    var dropBox = $('ul.select') 

    // weeklySelectBox slide 
    $('.default_text, li.option').click(function(){
         //default_text, li.option 클릭 시, 
        $('.date_picker_calendar').removeClass('vis');
        if(dropBox.hasClass('vis')){
            $('ul.select').removeClass('vis');
        }else {
            $('ul.select').addClass('vis');
        }
    });

    // weeklySelectBox cakebdar slide
    $('.calendar_pick').click(function(){ //호별선택 텍스트 및 달력 아이콘 영역 클릭 시,
        if(calendar.hasClass('vis')){
            $('.date_picker_calendar').removeClass('vis');
        }else {
            $('.date_picker_calendar').addClass('vis');
        }
    });

    //weeklySelectBox default_text 변경 code
    $('ul li.option').click(function(){
        $('ul li.option').removeClass('current');
            var text = $(this).html();
            if($(this).hasClass('current')){
                $(this).removeClass('current');
            }else{
                $(this).addClass('current');
            }
            $('.default_text').html(text);
        });
    });

});