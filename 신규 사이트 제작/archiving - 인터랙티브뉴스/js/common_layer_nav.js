document.write(
    '<div class="layer_nav" id="layer_nav_id"> <div class="layer_nav_wrap"> <div class="layer_nav_tit"> <h3 class="layer_nav_logo"><img src="images/layer_nav_logo_2x.png" alt="2020 여기 타임캡슐에 담다"></h3> <span>더 많은 이야기</span> </div><div class="swiper-container" id="layer_nav_conatiner"> <ul class="swiper-wrapper"> <li class="swiper-slide" id="nav1"> <a href="//cbiz.chosun.com/interactive/archiving//article1.html"> <p class="title">‘천당 아래 분당’ 신화, 수도권의 지도는 매일 바뀐다</p></a> <img src="//image.chosun.com/interactive/archiving//article1.jpg" alt=""> </li><li class="swiper-slide" id="nav2"> <a href="//cbiz.chosun.com/interactive/archiving//article2.html"> <p class="title">욕망의 아파트는 진화하고 있다. 4.0 시대로</p></a> <img src="//image.chosun.com/interactive/archiving//article2.jpg" alt=""> </li><li class="swiper-slide" id="nav3"> <a href="//cbiz.chosun.com/interactive/archiving//article3.html"> <p class="title">도심의 변신은 무죄… 을지로는 더이상 공구거리가 아니다</p></a> <img src="//image.chosun.com/interactive/archiving//article3.jpg" alt=""> </li><li class="swiper-slide" id="nav4"> <a href="//cbiz.chosun.com/interactive/archiving//article4.html"> <p class="title">공항 옆 논밭 마곡의 환골탈태···한국 R&D의 심장이 됐다</p></a> <img src="//image.chosun.com/interactive/archiving//article4.jpg" alt=""> </li><li class="swiper-slide" id="nav5"> <a href="//cbiz.chosun.com/interactive/archiving//article5.html"> <p class="title">세계 5위 공항 품은 영종도의 2020년, 비행기는 날고 싶다</p></a> <img src="//image.chosun.com/interactive/archiving//article6.jpg" alt=""> </li><li class="swiper-slide" id="nav6"> <a href="//cbiz.chosun.com/interactive/archiving//article6.html"> <p class="title">균형발전 실험장 세종시의 등장에 공무원의 24시는 짧아졌다 </p></a> 7<img src="//image.chosun.com/interactive/archiving//article5.jpg" alt=""> </li><li class="swiper-slide" id="nav7"> <a href="//cbiz.chosun.com/interactive/archiving//article7.html"> <p class="title">광명의 천지개벽, 철도는 도시의 얼굴을 바꾼다</p></a> <img src="//image.chosun.com/interactive/archiving//article7.jpg" alt=""> </li><li class="swiper-slide" id="nav8"> <a href="//cbiz.chosun.com/interactive/archiving//article8.html"> <p class="title">115년 ‘금단의 땅’ 용산···기지는 공원이 되어 돌아온다</p></a> <img src="//image.chosun.com/interactive/archiving//article8.jpg" alt=""> </li><li class="swiper-slide" id="nav9"> <a href="//cbiz.chosun.com/interactive/archiving//article9.html"> <p class="title">연남동 뜨고 명동 진 2020년 서울, SNS는 상권 지도를 다시 그린다</p></a> <img src="//image.chosun.com/interactive/archiving//article9.jpg" alt=""> </li><li class="swiper-slide" id="nav10"> <a href="//cbiz.chosun.com/interactive/archiving//article10.html"> <p class="title">난개발의 대명사에서 스카이라인 뽐내는 도시로. 부산은 다시 뛴다</p></a> <img src="//image.chosun.com/interactive/archiving//article10.jpg" alt=""> </li></ul> <div class="arrows_container"> <div class="nav_prev">prev</div><div class="nav_next">next</div></div></div><a href="//cbiz.chosun.com/interactive/archiving2/" target="_blank" class="btn_home">시즌2 바로가기</a> </div></div>'
);

function layerNavSli() {
    var layerNav = new Swiper("#layer_nav_conatiner", {
        slidesPerView: 4,
        slidesPerGroup: 2,
        spaceBetween: 15,
        speed: 800,
        initialSlide: currentArt,
        navigation: {
            nextEl: ".nav_next",
            prevEl: ".nav_prev",
        },
        breakpoints: {
            959: {
                scrollbarHide: true,
                slidesPerView: 1.2,
                slidesPerGroup: 1,
                grabCursor: true,
                autoHeight: false,
                centeredSlides: true,
            },
        },
    });
}
layerNavSli();

function layerNavAct() {
    var nowURL = document.location.href;
    var currentArtNum = String(currentArt + 1);

    if (typeof nowURL !== "undefined") {
        var currentIndex = "article" + currentArtNum + ".html";
        var currentNav = "#nav" + currentArtNum;

        if (nowURL.indexOf(currentIndex) > -1) {
            $(currentNav).addClass("current");
        } else {
        }
    }
}
layerNavAct();
