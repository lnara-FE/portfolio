/*------------------전역변수------------------*/
var winWidth = $(window).width();
var content = $("#art_cont_id");
var leftMargin = $(".art_cont_inner").offset().left;
var $popupBg = $("#pop_bg_id");
var class_name = "show";

/*------------------함수정의 및 호출------------------*/

//Reload when browser resizing
(function resizing() {
    $(window).on("resize", function () {
        contPosition();
        commonBtn();
        fullBgFunc("#full_bg_fir");
        fullBgFunc("#full_bg_sec");
        fullBgFunc("#full_bg_graph1");
        fullSizFunc(".fixed_img_bg");
        fullSizFunc(".scale_img_wrap");
        fullSizFunc(".scroll_img");
    });
})();

function ie_fixed() {
    if (navigator.userAgent.match(/Trident\/7\./)) {
        // if IE
        $("body").on("mousewheel", function (e) {
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

//cont top margin
function contPosition() {
    var tit_h = $(".art_tit_inner").height();
    var tit_wrap_h = $(".art_tit").height() - 80;
    var num = tit_h - tit_wrap_h;

    if (winWidth > 959) {
        content.css({ marginTop: num });
    } else {
        content.css({ marginTop: 0 });
    }
}
contPosition();

//Show button when scrolling (home, top btn)
function commonBtn() {
    var commonbtn = $(".btn");

    $(window).scroll(function () {
        var winTop = $(window).scrollTop();

        if (winWidth > 959 && winTop > 900) {
            commonbtn.css({ opacity: 1 }, 300);
        } else if (winWidth < 959 && winTop > 300) {
            commonbtn.css({ opacity: 1 }, 300);
        } else {
            commonbtn.css({ opacity: 0 });
        }
    });
}
commonBtn();

//Popup
function popupFunc(element) {
    /*------------지역변수 정의---------------*/
    var btn = $(element);
    var closeBtn = $("#close_btn_id");
    var $popCont = $("#popup_cont_id");
    var $popContItem = $(".pop_item");

    /*------------이벤트 정의---------------*/
    btn.on("click", function (e) {
        e.preventDefault();

        var target = $(this).attr("id");
        var targetCont = $("." + target);
        var $this = $(this);

        btnFunc(target, targetCont, $this);
    });

    closeBtn.on("click", function (e) {
        e.preventDefault();
        closeBtnFun();
    });

    $popupBg.on("click", function () {
        closeBtnFun();
    });

    /*------------함수정의---------------*/
    function btnFunc(target, targetCont, $this) {
        $("html").css({ overflow: "hidden" });
        $popCont.on("scroll touchmove mousewheel", function (e) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        });

        $popCont.addClass(class_name);
        $popupBg.addClass(class_name);
        targetCont.addClass(class_name);

        //area flicker effect
        if (target.indexOf("area") != -1) {
            $("html").css({ overflow: "auto" });
            $popCont.off("scroll touchmove mousewheel");

            $popupBg.removeClass(class_name);
            $areaCont.removeClass(class_name);
            $areaCaption.removeClass(class_name);

            $this.addClass(class_name);
            targetCont.addClass(class_name);
        }
    }

    function closeBtnFun() {
        $("html").css({ overflow: "auto" });
        $popCont.off("scroll touchmove mousewheel");

        $popupBg.removeClass(class_name);
        $popCont.removeClass(class_name);
        $popContItem.removeClass(class_name);
    }
}
popupFunc(".c_btn");
popupFunc(".feed_item");

//map flicker effect
function popupAreaFunc() {
    var $areaBtn = $(".popup.area .legend li");
    var $areaCont = $(".area");
    var $areaCaption = $(".popup.area .img_caption");

    $areaBtn.on("click", function () {
        var $this = $(this);
        var target = $(this).attr("id");
        var targetCont = $("." + target);

        areaBtnFun($this, target, targetCont);
    });

    function areaBtnFun($this, target, targetCont) {
        $areaBtn.removeClass(class_name);
        $this.addClass(class_name);

        $areaCont.removeClass(class_name);
        $areaCaption.removeClass(class_name);
        targetCont.addClass(class_name);
    }
}
popupAreaFunc();

//Tab
function tabFunc(element) {
    var tabBtn = $(element);
    var tabCont = $(".tab_cont_item");

    tabBtn.on("click", function () {
        var target = $(this).attr("id");
        var targetCont = $("." + target);
        var $this = $(this);

        tabActive(target, targetCont, $this);
    });

    function tabActive(target, targetCont, $this) {
        tabBtn.removeClass(class_name);
        $this.addClass(class_name);

        tabCont.removeClass(class_name);
        targetCont.addClass(class_name);
    }
}
tabFunc(".tab .tab_nav>li");
tabFunc(".timeline_tab .tab_nav>li");

//Scroll animation
function scrollAni() {
    $(".scroll-fade").each(function () {
        var $this = this;
        var inview = new Waypoint({
            element: $this,
            handler: function (direction) {
                $(this.element).animate({ top: 0, opacity: 1 }, 500);
            },
            offset: "95%",
        });
    });

    $(".motion_graph").each(function () {
        var $this = this;
        var inview = new Waypoint({
            element: $this,
            handler: function (direction) {
                $(this.element).addClass("active");
            },
            offset: "85%",
        });
    });

    $(".interview").each(function () {
        var $this = this;
        var inview = new Waypoint({
            element: $this,
            handler: function (direction) {
                $(this.element).addClass("active");
            },
            offset: "70%",
        });
    });

    $(window).scroll(function () {
        $("section").each(function (index) {
            var $this = this;
            var inview = new Waypoint({
                element: $this,
                handler: function (direction) {
                    $(".pin").removeClass("active");
                    $(".pin:eq(" + index + ")").addClass("active");
                    //console.log(index);
                },
                offset: "15%",
            });
        });
    });
}
scrollAni();

function scrollAniImg(element) {
    var controller = new ScrollMagic.Controller();
    var txt = element.find(".txt_box");
    var img = element.find(".img_item");

    var scene = new ScrollMagic.Scene({
        triggerElement: element[0],
        triggerHook: 0,
        duration: "150%",
    })
        .setPin(element)
        .on("enter", function () {
            element.find(".img_holder").addClass("fixed");
            element.find(".img_holder").removeClass("bottom");
            if (controller.info("scrollDirection") == "REVERSE") {
                console.log("reverse");
            }
        })
        .on("leave", function () {
            element.find(".img_holder").removeClass("fixed");
            if (controller.info("scrollDirection") == "FORWARD") {
                element.find(".img_holder").addClass("bottom");
            }
        })
        //.addIndicators()
        .addTo(controller);

    for (i = 1; i < txt.length; i++) {
        var scene_txt = new ScrollMagic.Scene({
            triggerElement: txt.eq(i)[0],
            triggerHook: 0.3,
        })
            .on("enter", function () {
                element
                    .find(".img-ob")
                    .fadeOut()
                    .eq($(this.triggerElement()).index() - 1)
                    .fadeIn();
            })
            .on("leave", function () {
                element
                    .find(".img-ob")
                    .fadeOut()
                    .eq($(this.triggerElement()).index() - 1)
                    .fadeOut();
            })
            //.addIndicators()
            .addTo(controller);
    }
}

//PC - parallax scrolling background
function fullSizFunc(element) {
    var fullSizItem = $(element);

    if (winWidth > 959) {
        fullSizItem.css({ width: winWidth, left: -leftMargin });
    } else {
        fullSizItem.css({ width: "100%", left: 0 });
    }
}
fullSizFunc(".fixed_img_bg");
fullSizFunc(".scale_img_wrap");
fullSizFunc(".scroll_img");

//Images left, right align
function fullBgFunc(element) {
    var $this = $(element);
    var fullBg = $this.find(".full_bg");
    var fullBgTypeH = $this.outerHeight();
    var itemMargin = $(".item").offset().left;

    fullBg.css({ width: winWidth, height: fullBgTypeH, left: -itemMargin });
}
$(window).on("load", function () {
    fullBgFunc("#full_bg_fir");
    fullBgFunc("#full_bg_sec");
    fullBgFunc("#full_bg_graph1");
});

//Images slide
function slideItem(element) {
    var $this = $(element);
    var slide = new Swiper($this, {
        slidesPerView: 1,
        autoplay: {
            delay: 5000,
        },
        //autoHeight: true,
        pagination: {
            el: ".pagination",
            clickable: true,
        },
        speed: 800,
    });
}
slideItem("#fir_sli");
slideItem("#sec_sli");

function imgAccordion() {
    var imgAccItem = $(".img_acc_item");

    imgAccItem.on("click", function () {
        var $this = $(this);

        imgAccItem.removeClass("active");
        $this.addClass("active");
    });
}
imgAccordion();

function timelineSli() {
    var timelineCont = new Swiper(".timeline_cont", {
        loop: false,
        autoHeight: true,
        effect: "fade",
        fadeEffect: {
            crossFade: true,
        },
    });

    var timelineDate = new Swiper(".timeline_date", {
        centeredSlides: true,
        slidesPerView: 3,
        touchRatio: 0.2,
        slideToClickedSlide: true,
        loop: false,
        breakpoints: {
            959: {
                slidesPerView: 3,
            },
        },
        navigation: {
            nextEl: ".timeline_next_btn",
            prevEl: ".timeline_prev_btn",
        },
    });

    timelineCont.controller.control = timelineDate;
    timelineDate.controller.control = timelineCont;
}

function floating_map() {
    var $floatMap = $(".floating_map");
    var $floatMapWrap = $floatMap.find(".map_wrap");
    var $mapClose = $floatMap.find(".close_btn");
    var $mapOpen = $floatMap.find(".floating_map_btn");
    var pin = $(".pin>a");

    $mapClose.on("click", function (e) {
        e.preventDefault();
        $floatMapWrap.fadeOut();
        $mapOpen.fadeIn();

        if (winWidth < 959) {
            $popupBg.removeClass(class_name);
        }
    });

    $mapOpen.on("click", function (e) {
        e.preventDefault();
        $floatMapWrap.fadeIn();
        $mapOpen.fadeOut();

        if (winWidth < 959) {
            $popupBg.addClass(class_name);
            $popupBg.on("click", function () {
                //팝업 bg 클릭시,
                $floatMapWrap.fadeOut();
                $mapOpen.fadeIn();
            });
        }
    });

    pin.on("click", function () {
        $(".pin").removeClass("active");
        $(this).parent(".pin").addClass("active");
    });

    $(window).on("scroll", function () {
        var showFloatMap = $(window).scrollTop();
        if (winWidth > 959 && showFloatMap > 900) {
            $floatMap.fadeIn(500);
        } else if (winWidth < 959 && showFloatMap > 300) {
            $floatMap.fadeIn(500);
        } else {
            $floatMap.fadeOut(50);
        }
    });
}
floating_map();

function interviewFunc() {
    var interviewItem = $(".interview ul li.touch");

    interviewItem.on("click", function () {
        $(this).removeClass("touch");
    });
}
interviewFunc();

//Eraser interative
function canvasEraser(target, imgSrc) {
    var drawCanvas = document.getElementById(target);
    var wrapper = drawCanvas.parentElement;
    var ctx = drawCanvas.getContext("2d");
    var canvasImg = new Image();
    canvasImg.src = imgSrc;

    canvasImg.onload = function () {
        var canvasWidth = wrapper.offsetWidth;
        var canvasHeight = canvasImg.height * (canvasWidth / canvasImg.width);

        drawCanvas.width = canvasWidth;
        drawCanvas.height = canvasHeight;
        ctx.drawImage(canvasImg, 0, 0, canvasWidth, canvasHeight); //canvas에 drawImage( img, x, y )로 이미지를 그립니다. img는 이미지 소스이며 x, y는 이미지가 들어갈 좌표입니다.
        ctx.globalCompositeOperation = "destination-out";
    };

    var isDraw = false; //추가 마우스 움직임 여부
    var pDraw = $("#" + target)
        .parent()
        .offset();
    var currP = null;

    // Mouse Event
    $("#" + target).bind("mousedown", function (e) {
        if (e.button === 0) {
            e.preventDefault();
            ctx.beginPath();
            isDraw = true;
        }
    });
    $("#" + target).bind("mousemove", function (e) {
        var event = e.originalEvent;
        e.preventDefault();
        currP = { X: event.offsetX, Y: event.offsetY };
        if (isDraw) {
            draw_line(currP);
        }
    });
    $("#" + target).bind("mouseup", function (e) {
        e.preventDefault();
        isDraw = false;
    });
    $("#" + target).bind("mouseleave", function (e) {
        isDraw = false;
    });

    // Touch Event
    $("#" + target).bind("touchstart", function (e) {
        if (e.cancelable) {
            e.preventDefault();
            ctx.beginPath();
        }
    });
    $("#" + target).bind("touchmove", function (e) {
        if (e.cancelable) {
            e.preventDefault();
            var event = e.originalEvent;
            currP = {
                X: event.touches[0].pageX - pDraw.left,
                Y: event.touches[0].pageY - pDraw.top,
            };
            draw_line(currP);
        }
    });
    $("#" + target).bind("touchend", function (e) {
        if (e.cancelable) {
            e.preventDefault();
        }
    });

    // draw line setting
    function draw_line(p) {
        if (window.matchMedia("(max-width: 1366px)").matches) {
            ctx.lineWidth = 100;
        } else {
            ctx.lineWidth = 200;
        }
        ctx.lineCap = "round";
        ctx.lineTo(p.X, p.Y);
        ctx.moveTo(p.X, p.Y);
        ctx.stroke();
    }
}
// reset canvas
$(document).on("click", ".reset_canvas", function (e) {
    e.preventDefault();

    var $canvas = $(this).parents(".eraser").find(".canvas_wrap canvas");

    canvasEraser($canvas.attr("id"), $canvas.attr("data-img"));
});

function cardGame() {
    // 카드 맞추기 요소
    var gameState = "";
    var cardFirstId = "";
    var cardSecondId = "";

    $(document).on("click", ".card_item", function () {
        // already 2 card opened, disable 3rd card open
        if (cardSecondId != "") return;
        // ignore try to open opened card
        if ($(this).hasClass("opened")) return;

        // open selected card
        $(this).addClass("opened");

        if (cardFirstId == "") {
            cardFirstId = this.id;
        } else {
            // ignore try to open opened card
            if (cardFirstId == cardSecondId) return;

            var cardFirstSrc = $("#" + cardFirstId)
                .find(".back img")
                .attr("src");
            var cardSecondSrc = $(this).find(".back img").attr("src");
            cardSecondId = this.id;

            // find img match or not
            if (cardFirstSrc == cardSecondSrc) {
                $("#" + cardFirstId).addClass("matched");
                $("#" + cardSecondId).addClass("matched");

                var index = $(this).attr("name");

                setTimeout(function () {
                    $popupBg.addClass(class_name);
                    $(".popup_cont").addClass(class_name);
                    $(".pop_item").eq(index).addClass(class_name);
                }, 1500);

                console.log("matched");

                cardFirstId = "";
                cardSecondId = "";
            } else {
                setTimeout(resetCard, 1500);
            }
        }
    });

    $(document).on("click", ".matched", function () {
        var index = $(this).attr("name");

        setTimeout(function () {
            $popupBg.addClass(class_name);
            $(".popup_cont").addClass(class_name);
            $(".pop_item").eq(index).addClass(class_name);
        }, 1000);
    });

    $(document).on("click", ".reset_card", function (e) {
        e.preventDefault();

        $(".card_item").removeClass("opened");
        $(".card_item").removeClass("matched");
    });

    // reset selected card
    function resetCard() {
        $("#" + cardFirstId).removeClass("opened");
        $("#" + cardSecondId).removeClass("opened");

        cardFirstId = "";
        cardSecondId = "";
    }
}
cardGame();
