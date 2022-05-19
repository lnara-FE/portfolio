var winWidth = $(window).width();

(function resizing(){
    $(window).on('resize', function() {
        if(winWidth < 960) {
            mobilePop();
        }
    });
})();

function ie_fixed(){
    if(navigator.userAgent.match(/Trident\/7\./)) { 
        // if IE
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

function mobilePop(){
    var infoBtn = $('#info_btn_id');
    var infoCloseBtn = $('#close_btn_id');
    var infoBox = $('.tit_box p');

    infoBtn.on('click',function(e){
        e.preventDefault();
        infoBox.css({display: "block"});
        $("html, body").css({"overflow":"hidden", "height":"100%"});
    })

    infoCloseBtn.on('click',function(e){
        e.preventDefault();
        infoBox.css({display: "none"});
        $("html, body").css({"overflow":"auto", "height":"auto"});
    })
}
mobilePop();

//Show button when scrolling (home, top btn)
function commonBtn(){
    

    var commonbtn = $('.home_ic');
  
    $(window).scroll(function(){
        var winTop = $(window).scrollTop();
  
        if(winWidth > 959 && winTop >= 1400){
          commonbtn.css({opacity : 1},300)
  
        }else if(winWidth <= 959){
            commonbtn.css({opacity : 1})
        }else {
          commonbtn.css({opacity : 0})
        }
    })
  }
  commonBtn();