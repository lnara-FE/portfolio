// javascript for countrynow sub gnb 201904

document.write('<header class="sub_header"> <div class="inner clear_fix"> <h1 class="cn_title"> <a href="//image.chosun.com/pan_countrynow/index.html">전국은지금</a> </h1> <ul class="cn_sub_gnb clear_fix"> <li> <a href="//image.chosun.com/pan_countrynow/area_list.html" id="l_now">지자체 <span>NOW</span></a> </li><li> <a href="//image.chosun.com/pan_countrynow/news_list.html" id="b_now">기업<span>은 NOW</span></a> </li></ul> </div></header>');

$(document).ready(function(){
  if ( typeof CatID !== 'undefined' ) {
    var secID = CatID.substring(0, 3);
    if ( secID =="W17" ) {
        $('#b_now').addClass('current');
    } else {
      $('#l_now').addClass('current');
    }
  }
});
// end
