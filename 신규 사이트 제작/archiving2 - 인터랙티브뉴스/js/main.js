var winWidth = $(window).width();
var $footer = $("footer");
var $homeBtn = $(".home_ic");
var leftMargin = $(".lc-map-inner").offset().left;

$("#fullpage").fullpage({
    anchors: ["intro", "content"],
    keyboardScrolling: false,
    recordHistory: false,
    scrollOverflow: false,
    normalScrollElements: ".lc-map-list",
    afterLoad: function (anchorLink, index) {
        history.pushState(null, null, "index.html");
    },
    onLeave: function (anchorLink, index) {
        if (index === $("#fullpage .section").length) {
            $footer.addClass("show");
        } else {
            $footer.removeClass("show");
        }
    },
});

if (winWidth <= 959) {
    $(".lc-map-list").append($homeBtn);
    $(".lc-map-list").append($footer);
}

$(".scrollbar-inner").scrollbar();

function mapActive() {
    var land = $(".land");
    var pin = $(".pin");
    var lcName = $(".lc-name");
    var lcArtList = $(".lc-map-list");
    var refreshBtn = $("#btn-refresh-id");
    var allBtn = $("#all-btn");

    land.on("click", function () {
        var $this = $(this);
        var target = $this.attr("data-name");

        activeBtn($this, target);
    });

    pin.on("click", function () {
        var $this = $(this);
        var target = $this.attr("data-name");

        activeBtn($this, target);
    });

    lcName.on("click", function () {
        var $this = $(this);
        var target = $this.attr("data-name");

        activeBtn($this, target);
    });

    refreshBtn.on("click", function (e) {
        e.preventDefault();

        //reset func
        refreshFunc();
    });

    allBtn.on("click", function () {
        //reset func
        refreshFunc();
    });

    function activeBtn($this, target) {
        var activeLand = $('.land[data-name="' + target + '"]');
        var activeArt = $('.art-item[data-name="' + target + '"]').position().top;

        $(".on").removeClass("on");
        land.find("path").css({ fill: "#fff" });

        //?????? ?????? ????????? ??????, ?????? ???, ?????? ??????, ?????? ?????? ????????? active
        $('[data-name="' + target + '"]').addClass("on");

        //active ?????? ?????? ??????
        if (activeLand.hasClass("yet") == true) {
            activeLand.find("path").css({ fill: "#c2d0cd" });
        } else {
            activeLand.find("path").css({ fill: "#27c7a7" });
        }

        //????????? ?????? ????????? ????????? ?????? ??????
        lcArtList.stop().animate({ scrollTop: activeArt }, 500);
    }

    function refreshFunc() {
        $(".on").removeClass("on");
        land.find("path").css({ fill: "#fff" });
        allBtn.addClass("on");

        lcArtList.animate({ scrollTop: 0 }, 500);
    }
}
mapActive();

//????????? ??????????????? ??????????????? swiper ??????
function navSlide() {
    var swiper = new Swiper(".swiper-container", {
        speed: 300,
        freeMode: true,
        slidesPerView: "auto",
    });
}
if (winWidth <= 959) {
    navSlide();
}

//????????? ?????? ????????? ?????? ??????
function mobilePop() {
    var infoBtn = $("#info-btn-id");
    var infoCloseBtn = $("#close-btn-id");
    var infoBox = $(".intro-desc");

    infoBtn.on("click", function (e) {
        e.preventDefault();
        infoBox.css({ display: "block" });
        $("html, body").css({ overflow: "hidden", height: "100%" });
    });

    infoCloseBtn.on("click", function (e) {
        e.preventDefault();
        infoBox.css({ display: "none" });
        $("html, body").css({ overflow: "auto", height: "auto" });
    });
}
mobilePop();

// ?????? ?????? ??????
function srvTime() {
    if (window.XMLHttpRequest) {
        xmlHttp = new XMLHttpRequest();
        xmlHttp.open("HEAD", window.location.href.toString(), false);
        xmlHttp.setRequestHeader("Content-Type", "text/html");
        xmlHttp.send("");
        return xmlHttp.getResponseHeader("Date");
    } else if (window.ActiveXObject) {
        xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
        xmlHttp.open("HEAD", window.location.href.toString(), false);
        xmlHttp.setRequestHeader("Content-Type", "text/html");
        xmlHttp.send("");
        return xmlHttp.getResponseHeader("Date");
    }
}
function addZero(n) {
    return n < 10 ? "0" + n : n;
}

var st = srvTime();
var date = new Date(st);
var today = date.getFullYear() + "" + addZero(date.getMonth() + 1) + "" + addZero(date.getDate());
var nowhour = date.getHours();
var utctime = date.toTimeString();

function articleOpen() {
    var prevtarget = "gyeongnam"; //?????? ?????? ??????
    var opentarget = "jeju"; //?????? ?????? ??????

    var openArt = $('.art-item[data-name="' + opentarget + '"]'); //??????1?????? ????????? 2??? ????????? ??????, css ????????? :first, :last ?????? ??????
    var openPin = $('.pin[data-name="' + opentarget + '"]');
    var openMap = $('.land[data-name="' + opentarget + '"]');
    var prevArt = $('[data-name="' + prevtarget + '"]');

    prevArt.removeClass("new");

    //?????? ??????, ?????????
    openArt.removeClass("yet");
    openArt.addClass("new");

    openPin.removeClass("yet");
    openPin.addClass("new");

    openMap.removeClass("yet");
    openMap.addClass("new");
}

if (nowhour >= 6 && today == "20201204") {
    //articleOpen();
}
