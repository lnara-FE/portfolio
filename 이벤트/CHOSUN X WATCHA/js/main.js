//popup show/hide
var ticketBtn = $('#ticket-btn-id');
var closeBtn = $('.popup-close');

ticketBtn.on('click',function(e){
    e.preventDefault();
    $('.popup').show();
    $('html, body').css('overflow','hidden');
})

closeBtn.on('click',function(e){
    e.preventDefault();
    $('.popup').hide();
    $('html, body').css('overflow','auto');
})


var footerH = $('#footer2020').outerHeight();
var $btn = $('.bt-tvchosun');

$(window).on('scroll',function(){
    var winTop = $(window).scrollTop();
    var val = $(document).height() - $(window).height() - footerH;

    if(winTop >= val){
        $btn.addClass('pos');
    }else{
        $btn.removeClass('pos');
    }
})
