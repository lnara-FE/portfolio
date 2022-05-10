var urlinput = document.getElementById("art_share_url_id");

// toggle share layer
$(".share_ic").click(function(e) {
  e.preventDefault();

  $("#art_share_mask_id").show();
  $("#art_share_layer_id").show();

  var artUrl = document.location.href;
  urlinput.value = artUrl;

  setKakao();
});
$("#art_share_layer_close_id, #art_share_mask_id").click(function(e) {
  e.preventDefault();

  $("#art_share_layer_id").hide();
  $("#art_share_mask_id").hide();
});

//share url copy
function urlCopy() {
  urlinput.select();
  document.execCommand("copy");
  alert("URL이 복사되었습니다.");
}
$("#art_share_urlbtn_id").click(function(e) {
  e.preventDefault();

  urlCopy();
});

//sns share
function windowOpen() {
  var nUrl;
  var nWidth;
  var nHeight;
  var nLeft;
  var nTop;
  var nScroll;
  nUrl = arguments[0];
  nWidth = arguments[1];
  nHeight = arguments[2];
  nScroll = arguments.length > 3 ? arguments[3] : "no";
  nLeft = arguments.length > 4 ? arguments[4] : screen.width / 2 - nWidth / 2;
  nTop = arguments.length > 5 ? arguments[5] : screen.height / 2 - nHeight / 2;

  winopen = window.open(
    nUrl,
    "pbml_win",
    "left=" +
      nLeft +
      ",top=" +
      nTop +
      ",width=" +
      nWidth +
      ",height=" +
      nHeight +
      ",scrollbars=" +
      nScroll +
      ",toolbar=no,location=no,directories=no,status=no,menubar=no,resizable=no"
  );
}

function _getArticleTitle() {
  var metas = document.getElementsByTagName("META");
  var titl = "";
  for (var i = 0; i < metas.length; i++) {
    if (metas[i].name && metas[i].name == "description") {
      titl = metas[i].content;
      break;
    }
  }
  if (titl == "") titl = document.title;

  return titl;
}
function _getArticleLink() {
  var link = document.location.href;
  link = typeof ArtURL != "undefined" ? ArtURL : link;

  return link;
}

//facebook
function facebookOpen() {
  var titl = encodeURIComponent(_getArticleTitle());
  var link = _getArticleLink();
  link +=
    (link.indexOf("?") != -1 ? "&" : "?") +
    "utm_source=facebook&utm_medium=shareM&utm_campaign=Mnews";
  link = encodeURIComponent(link);
  var url = "http://www.facebook.com/sharer.php?u=" + link + "&t=" + titl;
  windowOpen(url, 900, 450, "no");
  _getHitlogLinkNew("FB");
}

//twitter
function twitterOpen() {
  var titl = _getArticleTitle();
  titl = titl.replace(/'/gi, "´");
  titl = titl.replace(/"/gi, "˝");
  titl = encodeURIComponent(titl);

  var link = _getArticleLink();
  link +=
    (link.indexOf("?") != -1 ? "&" : "?") +
    "utm_source=twitter&utm_medium=shareM&utm_campaign=Mnews";
  link = encodeURIComponent(link);
  var url = "http://twitter.com/share?text=" + titl + "&url=" + link;
  windowOpen(url, 800, 400, "no");
  _getHitlogLinkNew("TW");
}

//kakao
function setKakao() {
  var msg_title = _getArticleTitle(),
    msg_link = _getArticleLink(),
    msg_image = "";
  var metas = document.getElementsByTagName("META");
  var nowURL = window.location.href;

  for (var i = 0; i < metas.length; i++) {
    if (
      metas[i].getAttribute("property") &&
      metas[i].getAttribute("property") == "kaoimg"
    ) {
      msg_image = metas[i].content;
      break;
    }
  }
  msg_link +=
    (msg_link.indexOf("?") != -1 ? "&" : "?") +
    "utm_source=kakaotalk&utm_medium=shareM&utm_campaign=Mnews";

  if(nowURL.indexOf('biz') > -1){
    // 사용할 앱의 Javascript 키를 설정해 주세요.
    Kakao.init("5f93c9f967917335329376f24c0e79bf");
  }else {
    // 사용할 앱의 Javascript 키를 설정해 주세요.
    Kakao.init("083e60c65fd6ac9b77ed95e6b9e5d51e");
  }
    
  // 카카오톡 링크 버튼을 생성합니다. 처음 한번만 호출하면 됩니다.
  Kakao.Link.createDefaultButton({
    container: ".btn_kat",
    objectType: "feed",
    content: {
      title: msg_title,
      description: "기사 보기",
      imageUrl: msg_image,
      link: {
        mobileWebUrl: document.location.href,
        webUrl: msg_link
      }
    }
  });
}
