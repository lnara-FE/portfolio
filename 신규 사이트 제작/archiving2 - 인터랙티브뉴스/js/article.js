var winWidth = $(window).width();
var content = $(".art-content");
var leftMargin = $(".art-content-inner").offset().left;

//resizing
$(window).on("resize", function () {
    if ($(this).width() != winWidth) {
        this.location.reload(false);
    }
});

function fullSizFunc() {
    var fullSizItem = $(".s-full");

    if (winWidth >= 959) {
        fullSizItem.css({ width: winWidth, left: -leftMargin });
    }
}
fullSizFunc();

/* 패펄랙스 background ie 흔들림 현상 막기 */
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

function contentPos() {
    var titleHight = $(".art-title-inner").outerHeight();
    var num = $(window).height() - titleHight;

    if (winWidth >= 959) {
        content.css({ marginTop: -num });
    }
}
contentPos();

/* home, top 버튼 노출 */
function commonBtn() {
    var commonbtn = $(".btn");

    $(window).on("scroll", function () {
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

/* 스크롤 fade-in 효과 */
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

    $(".highlight").each(function () {
        var $this = this;
        var inview = new Waypoint({
            element: $this,
            handler: function (direction) {
                $(this.element).animate({ backgroundPositionY: "100%" }, 700);
            },
            offset: "85%",
        });
    });

    $(".link-guide").each(function () {
        var $this = this;
        var inview = new Waypoint({
            element: $this,
            handler: function (direction) {
                $(this.element).animate({ opacity: 0 }, 700);
            },
            offset: "5%",
        });
    });
}
scrollAni();

/* before&after 슬라이더 요소 */
function bfSlider() {
    var active = false;
    var wrapper = document.querySelector(".bf-slider-wrap");
    var scroller = document.querySelector(".scroller");
    var after = document.querySelector(".before");

    scroller.addEventListener("mousedown", function () {
        active = true;
        scroller.classList.add("scrolling");
    });

    document.body.addEventListener("mouseup", function () {
        active = false;
        scroller.classList.remove("scrolling");
    });

    document.body.addEventListener("mouseleave", function () {
        active = false;
        scroller.classList.remove("scrolling");
    });

    document.body.addEventListener("mousemove", function (e) {
        if (!active) return;

        var x = e.pageX;
        x -= document.querySelector(".bf-slider-wrap").getBoundingClientRect().left;
        scrolllt(x);
        //console.log('mousemove')
    });

    scroller.addEventListener("touchstart", function () {
        active = true;
        scroller.classList.add("scrolling");
    });

    scroller.addEventListener("touchend", function () {
        active = false;
        scroller.classList.remove("scrolling");
    });

    scroller.addEventListener("touchcancel", function () {
        active = false;
        scroller.classList.add("scrolling");
    });

    scroller.addEventListener("touchmove", function (e) {
        if (!active) return;

        var x = e.touches[0].pageX;
        x -= document.querySelector(".bf-slider-wrap").getBoundingClientRect().left;
        scrolllt(x);
        //console.log('touchmove')
    });

    function scrolllt(x) {
        var transform = Math.max(0, Math.min(x, wrapper.offsetWidth));
        after.style.width = transform + "px";
        scroller.style.left = transform - 25 + "px";
    }

    winWidth >= 959 ? scrolllt(360) : scrolllt(200);
}

/* 타임라인 슬라이드 요소 */
function timelineSli() {
    var timelineCont = new Swiper(".timeline-cont", {
        loop: false,
        autoHeight: false,
        effect: "fade",
        fadeEffect: {
            crossFade: true,
        },
    });

    var timelineDate = new Swiper(".timeline-date", {
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
            nextEl: ".btn-timeline-next",
            prevEl: ".btn-timeline-prev",
        },
    });

    timelineCont.controller.control = timelineDate;
    timelineDate.controller.control = timelineCont;
}

function imgGallery(element) {
    var btnPar = $(element);
    var btn = btnPar.find(".pin");
    var item = btnPar.find(".img-gallery-item");
    var class_name = "on";

    btn.on("click", function () {
        var $this = $(this);
        var target = $(this).attr("data-name");
        var targetCont = $('.img-gallery-item[data-name="' + target + '"]');

        btnFunc(target, targetCont, $this);
    });

    function btnFunc(target, targetCont, $this) {
        btn.removeClass(class_name);
        item.removeClass(class_name);

        $this.addClass(class_name);
        targetCont.addClass(class_name);
    }
}

/* 3가지 타입 이미지 슬라이드 */
function imgSlide() {
    $(".basic-slide").each(function (index, element) {
        var $this = $(this);
        $this.addClass("slide-" + index);

        var swiper = new Swiper(".slide-" + index, {
            slidesPerView: 1,
            autoplay: {
                delay: 5000,
            },
            loop: true,
            navigation: {
                nextEl: ".next",
                prevEl: ".prev",
            },
            pagination: {
                el: ".pagination",
                clickable: true,
            },
            speed: 800,
        });
    });

    $(".group-slide").each(function (index, element) {
        var $this = $(this);
        $this.addClass("g-slide-" + index);

        var swiper = new Swiper(".g-slide-" + index, {
            slidesPerView: 3,
            spaceBetween: 20,
            autoplay: {
                delay: 5000,
            },
            navigation: {
                nextEl: ".next",
                prevEl: ".prev",
            },
            pagination: {
                el: ".pagination",
                clickable: true,
            },
            speed: 959,
            breakpoints: {
                640: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
            },
        });
    });

    $(".slide-img").each(function () {
        var $this = $(this);
        var arrow = $this.find(".arrow");
        var $img = $this.find(".swiper-slide img").outerHeight();

        arrow.css({ top: $img / 2 });
    });
}
imgSlide();

function tabFunc() {
    var tabBtn = $(".tab-nav li");
    var tabCont = $(".tab-cont-item");
    var class_name = "on";

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
tabFunc();

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
$(document).on("click", ".reset-canvas", function (e) {
    e.preventDefault();

    var $canvas = $(this).parents(".eraser").find(".canvas-wrap canvas");

    canvasEraser($canvas.attr("id"), $canvas.attr("data-img"));
});

/* 스크롤 이미지 확대 요소 */
function spreadImgScroll(element) {
    var $wrap = $(element);

    $(window).on("scroll", function () {
        moveScroll();
    });
    $("body").on("touchmove", function () {
        moveScroll();
    });

    function moveScroll() {
        var scrollTop = $(window).scrollTop();

        if (scrollTop > $wrap.offset().top * 1 - $(window).height()) {
            var offset = Math.max(0, scrollTop - ($wrap.offset().top * 1 - $(window).height() / 2));

            $wrap.find(".d-left").css({ transform: "translate(-" + offset + "px, 0px)" });
            $wrap.find(".d-right").css({ transform: "translate(" + Math.abs(offset) + "px, 0px)" });
        }
    }
}

/* 스크롤 이미지 고정 요소 */
function wideImgScroll(element) {
    var controller = new ScrollMagic.Controller();
    var txt = element.find(".txt-box");
    var img = element.find(".img-item");

    var scene = new ScrollMagic.Scene({
        triggerElement: element[0],
        triggerHook: 0,
        duration: (img.length + 1) * 50 + "%",
    })
        .setPin(element)
        .on("enter", function () {
            element.find(".img-holder").addClass("fixed");
            element.find(".img-holder").removeClass("bottom");
        })
        .on("leave", function () {
            element.find(".img-holder").removeClass("fixed");
            if (controller.info("scrollDirection") == "FORWARD") {
                element.find(".img-holder").addClass("bottom");
            }
        })

        //.addIndicators()
        .addTo(controller);

    for (i = 1; i < txt.length; i++) {
        var scene_txt = new ScrollMagic.Scene({
            triggerElement: txt.eq(i)[0],
            triggerHook: 0.5,
        })
            .on("enter", function () {
                element
                    .find(".img-ob")
                    .fadeOut()
                    .eq($(this.triggerElement()).index() - 1)
                    .fadeIn();
            })
            .on("leave", function () {
                element.find(".img-ob").fadeOut();
                if ($(this.triggerElement()).index() - 2 != -1) {
                    element
                        .find(".img-ob")
                        .eq($(this.triggerElement()).index() - 2)
                        .fadeIn();
                }
            })
            //.addIndicators()
            .addTo(controller);
    }
}

function popupFunc(element) {
    /*------------지역변수 정의---------------*/
    var btnPar = $(element);
    var btn = btnPar.find(".pin");
    var closeBtn = btnPar.find(".close-btn");
    var $popCont = btnPar.find(".popup-cont");
    var $popContItem = btnPar.find(".popup-item");
    var $popupBg = $("#popup-bg-id");
    var class_name = "on";

    /*------------이벤트 정의---------------*/
    btn.on("click", function (e) {
        e.preventDefault();
        var target = $(this).attr("data-name");
        var targetCont = $('.popup-item[data-name="' + target + '"]');
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
    }

    function closeBtnFun() {
        $("html").css({ overflow: "auto" });
        $popCont.off("scroll touchmove mousewheel");

        $popupBg.removeClass(class_name);
        $popCont.removeClass(class_name);
        $popContItem.removeClass(class_name);
    }
}
popupFunc("#pin-popup-id");
popupFunc("#feed-popup-id");
popupFunc("#round-popup-id");

function popupAreaFunc(element) {
    var areaPar = $(element);
    var $areaBtn = areaPar.find(".legend li");
    var $areaCont = areaPar.find(".area");
    var $areaCaption = areaPar.find(".img-caption");
    var class_name = "on";

    $areaBtn.on("click", function () {
        var $this = $(this);
        var target = $(this).attr("data-name");
        var targetCont = $('[data-name="' + target + '"]');

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
popupAreaFunc("#area-popup-id");

function scaleImg() {
    var grayItem = $(".scale-img-item");

    if (winWidth <= 959) {
        grayItem.on("click", function () {
            var $this = $(this);

            grayItem.removeClass("on");
            $this.addClass("on");
        });
    }
}
scaleImg();

function imgAccordion() {
    var imgAccItem = $(".img-acc-item");

    imgAccItem.on("click", function () {
        var $this = $(this);

        imgAccItem.removeClass("on");
        $this.addClass("on");
    });
}
imgAccordion();
