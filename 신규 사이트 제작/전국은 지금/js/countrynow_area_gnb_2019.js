// javascript for countrynow area gnb 201904

document.write('<div class="cn_menubox"><ul class="cn_menu"><li><a href="#" id="s_area" class="current"><span>수도권</span></a></li><li><a href="#" id="c_area"><span>충청</span></a></li><li><a href="#" id="y_area"><span>영남</span></a></li><li><a href="# id="h_area"><span>호남</span></a></li><li><a href="#" id="g_area"><span>강원</span></a></li><li><a href="#" id="j_area"><span>제주</span></a></li></ul></div> <!--cn_menubox end-->');

$(document).ready(function(){
    if ( typeof CatID !== 'undefined' ) {
        var secID = CatID.substring(0, 3);
        if ( secID =="W11" ) {
            $('#s_area').addClass('current');
        } else if ( secID =="W12" ) {
            $('#c_area').addClass('current');
        } else if ( secID =="W13" ) {
            $('#y_area').addClass('current');
        } else if ( secID =="W14" ) {
            $('#h_area').addClass('current');
        } else if ( secID =="W15" ) {
            $('#g_area').addClass('current');
        } else if (secID =="W16"){
            $('#j_area').addClass('current');
        }
    }
});
// end
