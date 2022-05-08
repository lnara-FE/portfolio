<#-- Template Setting _ Start -->
<#include "common/content.common">
<#-- Template Setting _ End -->
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<title>${TITLE} - 전국은 지금 - ${CATEGORY_PATH}</title>
<meta name="title" content="${TITLE}" />
<meta name="description" content="${ART_DESC}">
<#include "common/news_keywords.common">      
<meta name="keywords" content="전국은 지금, 지자체, 기업 소식, 조선일보, 조선닷컴, chosun, 조선미디어, 일간지, 신문, 뉴스, 보도, 속보, 정치, 경제, 사회, 국제, 문화, 사설, 컬럼, News, Newspaper, Korea, South Korea, Rep.Korea">
<meta name="viewport" content="width=device-width, maximum-scale=1.0" />
<meta name="HITLOG" content="${SITE_ID};${CATEGORY_ID};${ID}">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<#include "common/facebook_meta_U1.common">
<meta property="article:publisher" content="https://www.facebook.com/chosun" />
<link rel="alternate" TYPE="application/rss+xml" TITLE="Chosun.com [RSS]" HREF="/site/data/rss/rss.xml">
<!--[if lt IE 9]><script src="http://news.chosun.com/dhtm/html5/html5shiv.min.js"></script><![endif]-->
<link rel="stylesheet" href="//news.chosun.com/dhtm18/css/art/cs_art_2018.css">
<link rel="stylesheet" href="//news.chosun.com/dhtm18/css/art/newsq_art_2018.css">
<link rel="stylesheet" href="//image.chosun.com/pan_countrynow/css/countrynow_2019_style.css" />
<link rel="stylesheet" href="//image.chosun.com/pan_countrynow/css/countrynow_2019_list_style.css" />

<script type="text/javascript" src="//m.chosun.com/jslib/kakao.min.js"></script>
<script type="text/javascript" src="//www.googletagservices.com/tag/js/gpt.js"></script>
<script type="text/javascript" src="//news.chosun.com/js/makePCookie.js"></script>
<script type="text/javascript" src="//news.chosun.com/dhtm/js/jquery-1.9.1.min.js"></script>
<script type="text/javascript" src="//news.chosun.com/svc/countrynow/js/list.js" charset="utf-8"></script>
</head>

<body>
<#include "common/header_var.common">
<#include "common/cat_mapping.common">

<#assign RELATED_ORGS = xml.content.extraInfo.relatedOrgs>
<#assign RELATED_ORGS_NAME = RELATED_ORGS.relatedOrg[0].name>
<#assign RELATED_ORGS_ID = RELATED_ORGS.relatedOrg[0].id>

<#assign SUMMARY = xml.content.summary.sumtext>
<#assign newsq_bg_div = "">
<#assign newsq_bg = "">

<#list PARAGRAPH as PAR>
	<#if (PARASLIDE[PAR.@no]["base"]?has_content)>
		<#assign _SLIDE = PARASLIDE[PAR.@no]["base"]>
		<#assign _templ = PARASLIDE_TEMPL[PAR.@no]["base"]>
		<#if _templ?has_content>	

				<#if (_SLIDE?has_content) && (_SLIDE.text == "newsq_bg")>
					<#list _SLIDE as _list>
					<#assign newsq_bg = "${_list.image}">
					</#list>
				<#elseif (_SLIDE?has_content) && (_SLIDE.text == "newsq_bg_blur")>
					<#list _SLIDE as _list>
					<#assign newsq_bg = "${_list.image}">
					<#assign newsq_bg_div = "blur">
					</#list>
				<#elseif (_SLIDE?has_content) && (_SLIDE.text == "newsq_bg_noblack")>
					<#list _SLIDE as _list>
					<#assign newsq_bg = "${_list.image}">
					<#assign newsq_bg_div = "noblack">
					</#list>
				</#if>
		</#if>
	</#if>
</#list>

<!-- for ORGS -->
<#assign title_res = TITLE?matches("(^\\[[^\\]]*\\])(.*)")>
<#if title_res>
	<#assign UPTITLE = title_res[0]?groups[1]?replace("[\\[\\]]", "", "r")>
	<#assign TITLE = title_res[0]?groups[2]?trim>
</#if>

<#if RELATED_ORGS_ID?has_content >
    <#assign UPTITLE = RELATED_ORGS_NAME>
    <#assign UPTITLE_LINK = "//news.chosun.com/svc/list_in/list_newsq_card.html?code=${RELATED_ORGS_ID}">
</#if>

<!-- ORGS CODE : ${UPTITLE} -->
<!-- ORGS LINK : ${UPTITLE_LINK} -->

<script>
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  
    ga('create', 'UA-58940796-56', 'auto'); //nationwide
    ga('require', 'displayfeatures');
    ga('require', 'linkid', 'linkid.js');
    ga('send', 'pageview');

    ga('create', 'UA-58940796-24', 'auto',{'name':'chosun_total'});
    ga('require', 'displayfeatures');
    ga('require', 'linkid', 'linkid.js');
    ga('chosun_total.send', 'pageview');
</script>

<a id="top"></a>

<div id="csWrap" class="${art_cat_type}">

<!-- GNB start -->
<script>
    //chosun.com simple gnb var
    var csmgsgnbWidth = "1200", //사이트 내 콘텐츠 너비값 (기본값 : 1196px)
        csmgsgnbLogin = "Y", //로그인 버튼 사용 여부 (기본값 : N)
        csmgsgnbSearch = "Y"; //검색 버튼 사용 여부 (기본값 : N)
</script>
<script src="//news.chosun.com/ui/js/csmgs_simple_gnb.js" charset="utf-8"></script>

<script src="//news.chosun.com/pan/pan_countrynow/dhtm/js/countrynow_sub_gnb_2019.js" charset="utf-8"></script>     
    
<header class="newsq_title">
        <#if (newsq_bg?length > 3)>
	<div class="newsq_title_bg ${newsq_bg_div}" style="background-image:url(<#if (newsq_bg?length > 3)>${newsq_bg}</#if>)"><span></span> 
        </div>
        </#if>

	<div class="news_title_cat">
    	<#include "common/title_category2011.common">
    	</div>
    <div class="news_title_text">

	<#if RELATED_ORGS_ID?has_content >
		<span class="news_title_q"><em><a href="//news.chosun.com/svc/list_in/list_wide.html?code=${RELATED_ORGS_ID}">${RELATED_ORGS_NAME}</a></em></span>
	<#elseif UPTITLE?has_content >   
		<span class="news_title_q onlytext"><em>${UPTITLE}</em></span>
	<#else>
		<span class="news_title_q onlytext"></span>  
	</#if>

    	<h1 id="news_title_text_id">${TITLE}</h1>
    	<h4 class="news_title_sum">${SUMMARY}</h4>
        <div class="news_title_author"><ul><#include "common/author.common"></ul></div>
    </div>
    <div class="c"></div>

</header>

<div id="csContent">

    <header class="news_title">
    <dl class="news_cat">
        <dd class="news_cat_other">
            <script src="//news.chosun.com/dhtm18/js/art/cs_art_cat_2018.js"></script>
        </dd>
    </dl><!-- news_cat -->
    <div class="news_title_text">
        <h1 id="news_title_text_id">${TITLE}</h1>
        <div class="news_title_author">
            <#include "common/quark.common">
            <#include "common/author.common">
        </div>
    </div><!-- news_title_text -->
    <ul class="news_title_tools" id="news_title_tools_id">
        <!-- 현재 기사가 스크랩되어 있다면 '.saved' 클래스를 추가 -->      
    </ul>
</header><!-- news_title -->

<div class="sticky_wrapper" id="sticky_wrapper_id">
<article class="news_article">
    <div class="news_body_all">
    <div class="news_left_aside" id="news_left_aside_id">
        <ul class="news_left_aside_sns">
            <li><a href="#news_cmt_id" class="count_cmt" title="">100자평 <span class="count" id="BBSCNT">0</span></a></li>
            <li><a onClick="javascript:csLike();" class="count_like" title="">좋아요 <span class="count" id="CSCNT">0</span></a></li>
            <li><a href="javascript:facebookOpen()" class="share_fb" title="">페이스북 공유</a></li>
            <li><a href="javascript:twitterOpen()" class="share_tw" title="">트위터 공유</a></li>
            <li><a href="javascript:kakaostoryOpen()" class="share_kas" title="">카카오스토리 공유</a></li>
            <div class="news_left_aside_sns_more" id="news_left_aside_sns_more_id">
                <li><a href="javascript:googleplusOpen()" class="share_gp" title="">구글플러스 공유</a></li>
                <li><a href="javascript:nblogOpen()" class="share_nblog" title="">네이버블로그 공유</a></li>                
            </div>
            <li><a href="${oghref}" class="share_url" id="share_url_id" title="">기사 URL공유</a><input type="text" class="art_share_url" id="art_share_url_id" readonly=""></li>
            <li><a href="#" class="share_more int_rotate" id="share_more_id" title="">공유 더보기</a></li>
        </ul>
    </div><!-- news_left_aside -->
    <div id="news_body_id" class="news_body">
        <div id="date_text" class="news_date"><#include "common/date_text.common"></div>
        <h3 class="news_subtitle">${SUBTITLE?replace("\n", "<br>")}</h3>

<!-- 기사 본문 start -->
<!-- ${EDIT_FROM.id} -->
<#assign para_no = 0>
<#list PARAGRAPH as PAR>

	<#if (PARACONTENT[PAR.@no]["article"]?has_content)>
        <div class="ext_rel_article">
		<#list PARACONTENT[PAR.@no]["article"] as _list>
            <dl class="ext_rel_item">
			<#if (_list.image?has_content)>
                <dd class="thumb">
				<#if (_list.link?has_content)>
                    <a href="${_list.link}" target="cs_new"><img src="${_list.image}" alt=""></a>
				<#else>
                    <img src="${_list.image}" alt="">
				</#if>
                </dd>
			</#if>
			<#if (_list.uptitle?has_content)>
                <dd class="uptit">${_list.uptitle}</dd>
			</#if>
			<#if (_list.text?has_content)>
                <dt>
				<#if (_list.link?has_content)>
                    <a href="${_list.link}" target="cs_new">${_list.text?replace("\n", "<br>")}</a>
				<#else>
                    ${_list.text}
				</#if>
                </dt>
			</#if>
            </dl>
		</#list>
        </div>
	</#if>

        <#if (IMAGES?has_content && IMAGES.image[PAR.image.@no?eval]?has_content && !isSlideImg(PARASLIDE, IMAGES.image[PAR.image.@no?eval].href) && !isRelImg(PARACONTENT, IMAGES.image[PAR.image.@no?eval].href))>
		<#assign IMAGE = IMAGES.image[PAR.image.@no?eval]>
		<#assign div = "news_imgbox">
		<#assign sty = "">
		<#if (IMAGE.width?eval > 960)>
			<#assign div = "news_imgbox big_img">
		<#elseif (IMAGE.width?eval < IMAGE.height?eval) && (IMAGE.width?eval > 600) && (IMAGE.align == "center")>
			<#assign div = "news_imgbox">
		<#elseif (IMAGE.width?eval < IMAGE.height?eval) && (IMAGE.align == "center")>
			<#assign div = "news_imgbox heightlong center">
			<#assign sty = "style=\"width:${IMAGE.width}px\"">
		<#elseif (IMAGE.width?eval < IMAGE.height?eval) && (IMAGE.align == "right")>
			<#assign div = "news_imgbox heightlong right">
		<#elseif (IMAGE.width?eval < IMAGE.height?eval) && (IMAGE.width?eval > 320) && (PAR.@no?eval != 0)>
			<#assign div = "news_imgbox heightlong">
		<#elseif (IMAGE.width?eval < 600) && (IMAGE.align == "center")>
			<#assign div = "news_imgbox under600 center">
			<#assign sty = "style=\"width:${IMAGE.width}px\"">
		<#elseif (IMAGE.width?eval < 600) && (IMAGE.align == "right")>
			<#assign div = "news_imgbox under600 right">
		<#elseif (IMAGE.width?eval < 300)>
			<#assign div = "news_imgbox under300">
			<#assign sty = "style=\"width:${IMAGE.width}px\"">
		<#elseif (IMAGE.width?eval < 600)>
			<#assign div = "news_imgbox under600">
		</#if>
        <div class="${div}" ${sty}><!-- img option modified under300 right 20150828 -->
            <figure>
		<#if (IMAGE.zoomin?has_content && IMAGE.zoomin == "true")>
                <span class="zoom_img"><a href="#" title=""><img src="${IMAGE.href}" alt=""><em>이미지 크게보기</em></a></span>
		<#elseif (IMAGE.alt?has_content && IMAGE.alt == "info")>
                <span class="info_img">

<#assign RSC = resource_2.xml.content.id>
<#assign res2_link=  "http://inside.chosun.com/site/data/html_dir/"+RSC?substring(0,4) + "/" + RSC?substring(4,6)+ "/" + RSC?substring(6,8)+ "/" + RSC + ".html">
<a href="${res2_link}" target="cs_new"><img src="${IMAGE.href}" alt=""><em>그래픽뉴스 크게보기</em></a></span>

		<#elseif (IMAGE.alt?has_content && IMAGE.alt == "snap")>
                <span class="info_img">

<#assign RSC = resource_2.xml.content.id>
<#assign res2_link=  "http://inside.chosun.com/site/data/html_dir/"+RSC?substring(0,4) + "/" + RSC?substring(4,6)+ "/" + RSC?substring(6,8)+ "/" + RSC + ".html">
<a href="${res2_link}" target="cs_new"><img src="${IMAGE.href}" alt=""><em>그래픽뉴스 크게보기</em></a></span>

        <#else>

<!-- img links has -->
<#if (IMAGE.link.href?has_content)>
<a href="${IMAGE.link.href}" target="${IMAGE.link.target?default(_top)}">
<img src="${IMAGE.href}" alt="${IMAGE.alt}">
</a>
<#else>
<!-- img links none -->
<img src="${IMAGE.href}" alt="${IMAGE.alt}">
</#if>

		</#if>
		<#if (IMAGE.comment?has_content)>
                <figcaption>${IMAGE.comment}</figcaption>
		</#if>
            </figure>
        </div>
    </#if>
    
	<#if (MEDIAS?has_content && MEDIAS.media[PAR.media.@no?eval]?has_content)>
		<#assign MEDIA = MEDIAS.media[PAR.media.@no?eval]>
		<#assign div_mov = "">
		<#if (MEDIA.width?eval > 640)>
			<#assign div_mov = "ext_mov_960">
		</#if>
        	<div class="ext_embed ${div_mov}" style="width:${MEDIA.width}px">
        	${MEDIA.tag_src}
		<#if (MEDIA.desc?has_content)><span class="desc">${MEDIA.desc}</span></#if>
        	</div>
	</#if>

	<#if (PARASLIDE[PAR.@no]["slide"]?has_content)>
		<#assign _SLIDE = PARASLIDE[PAR.@no]["slide"]>
		<#assign _templ = PARASLIDE_TEMPL[PAR.@no]["slide"]>
		<#if _templ?has_content>	
			<#include "modules/slide/" + _templ>
		</#if>
	</#if>
	<#if (PARASLIDE[PAR.@no]["thumb"]?has_content)>
		<#assign _SLIDE = PARASLIDE[PAR.@no]["thumb"]>
		<#assign _templ = PARASLIDE_TEMPL[PAR.@no]["thumb"]>
		<#if _templ?has_content>	
			<#include "modules/thumb/" + _templ>
		</#if>
	</#if>
	<#if (PARASLIDE[PAR.@no]["base"]?has_content)>
		<#assign _SLIDE = PARASLIDE[PAR.@no]["base"]>
		<#assign _templ = PARASLIDE_TEMPL[PAR.@no]["base"]>
		<#if _templ?has_content>	
			<#include "modules/base/" + _templ>
		</#if>
	</#if>
	<#if (PARASLIDE[PAR.@no]["vertical"]?has_content)>
		<#assign _SLIDE = PARASLIDE[PAR.@no]["vertical"]>
		<#assign _templ = PARASLIDE_TEMPL[PAR.@no]["vertical"]>
		<#if _templ?has_content>	
			<#include "modules/vertical/" + _templ>
		</#if>
	</#if>

	<#if (PARACONTENT[PAR.@no]["embed"]?has_content)>
        <div class="ext_embed">
		<#list PARACONTENT[PAR.@no]["embed"] as _list>
            ${_list.text}
		</#list>
        </div>
	</#if>

	<#if (PARACONTENT[PAR.@no]["image"]?has_content)>
		<#list PARACONTENT[PAR.@no]["image"] as _list>
        	<#if (_list.alt?has_content)>
                <#if (_list.alt == "info")>
                    <div class="ext_image ext_info">
                <#elseif (_list.alt == "slide")>
                    <div class="ext_image ext_slide">
                <#else>
                	<div class="ext_image"> 
                </#if>
            <#else>
                <div class="ext_image">
            </#if>
            <dl>
			<#if (_list.text?has_content)>
                <dt>
				<#if (_list.link?has_content)>
                    <a href="${_list.link}">${_list.text?replace("\n", "<br>")}</a>
				<#else>
                    ${_list.text?replace("\n", "<br>")}
				</#if>
                </dt>
			</#if>
			<#if (_list.image?has_content)>
                <dd class="image">
				<#if (_list.link?has_content)>
                    <a href="${_list.link}"><img src="${_list.image}"></a>
				<#else>
                    <img src="${_list.image}">
				</#if>
                </dd>
                <dd class="ico"><#if (_list.link?has_content)><a href="${_list.link}"></a></#if></dd>
			</#if>
            </dl>
		</div>
        </#list>
	</#if>

	<#if (PARACONTENT[PAR.@no]["link"]?has_content)>
        <div class="ext_rel_article">
		<#list PARACONTENT[PAR.@no]["link"] as _list>
            <dl class="ext_rel_item">
			<#if (_list.image?has_content)>
                <dd class="thumb">
				<#if (_list.link?has_content)>
                    <a href="${_list.link}" target="cs_new"><img src="${_list.image}" alt=""></a>
				<#else>
                    <img src="${_list.image}" alt="">
				</#if>
                </dd>
			</#if>
			<#if (_list.uptitle?has_content)>
                <dd class="uptit">${_list.uptitle}</dd>
			</#if>
			<#if (_list.text?has_content)>
                <dt>
				<#if (_list.link?has_content)>
                    <a href="${_list.link}" target="cs_new">${_list.text?replace("\n", "<br>")}</a>
				<#else>
                    ${_list.text}
				</#if>
                </dt>
			</#if>
            </dl>
		</#list>
        </div>
	</#if>

	<#if (PARACONTENT[PAR.@no]["quote"]?has_content)>
        <div class="ext_quote">
            <blockquote>
		<#list PARACONTENT[PAR.@no]["quote"] as _list>
                <p>${_list.text?replace("\n", "<br>")}</p>
			<#if (_list.speaker?has_content)>
                <em>${_list.speaker}</em>
			</#if>
		</#list>
            </blockquote>
        </div>
	</#if>

	<#if (PARACONTENT[PAR.@no]["summary"]?has_content)>
        <div class="ext_summary">
            <blockquote>
		<#list PARACONTENT[PAR.@no]["summary"] as _list>
                <p>${_list.text?replace("\n", "<br>")}</p>
		</#list>
            </blockquote>
        </div>
	</#if>


<#assign content = PAR.text?replace("\n", "<br>")?replace("</P><br><P>","</P><P>")?replace("<P>&nbsp;</P>", "")?replace("<div><br></div>", "")?replace("<div></div>", "")> 
<#if content?has_content> 
<div class="par">${content}</div> 
</#if>

	<#assign para_no = (para_no + 1)>
</#list>


<!-- 기사 본문 end -->

        <div class="news_like">
            <a onClick="javascript:csLike();" class="count_like">좋아요 <span class="count" id="CSCNT">0</span></a>
        </div>

        <#include "common/keyword.common">
        <#include "common/lang_link.common">
        <#include "common/rel_article.common">
        <#include "common/copyright.common">

<!-- base tpl update 20180605:v1 -->

    </div><!-- news_body -->
    <div class="clear"></div>
</div><!-- news_body_all -->
    

<#if RELATED_ORGS_ID?has_content >
<div class="nq_art_orgmore">
    <a href="//news.chosun.com/svc/list_in/list_newsq_card.html?code=${RELATED_ORGS_ID}"><span class="tagtit">${RELATED_ORGS_NAME}</span>의 다른 기사보기</a>
</div>
</#if>

<!-- 최신뉴스 start -->
<div class="cn_art_latest_wrap">
    <script type="text/javascript">getSideNewsList();</script>
</div><!-- cn_art_latest -->
<!-- 최신 뉴스 end -->


</article><!-- news_article -->

<div class="clear"></div>
</div><!-- sticky_wrapper -->

</div><!-- csContent -->


<script src="//news.chosun.com/pan/pan_countrynow/dhtm/js//cn_footer_2019.js" charset="utf-8"></script>


<div class="news_go" id="news_go_id">
    <a href="#" class="news_go_recent" id="news_go_recent_id"><span>내가 본 뉴스</span></a>
    <a href="#top" class="news_go_top" id="news_go_top_id"><span>맨 위로</span></a>   
</div><!-- news_go -->

<div class="news_recent_read" id="news_recent_read_id">
    <h4>내가 본 뉴스 <a href="#" class="close int_rotate" id="news_recent_read_closd_id" title="닫기">닫기</a></h4>
    <script src="//news.chosun.com/dhtm18/js/art/cs_art_recentnews_2018.js"></script>
</div><!-- news_recent_read -->

<div class="under_notice" id="under_notice"></div>

</div><!-- csWrap -->

<script type='text/javascript'>
var _like_siteid = "PAN";
var _like_artid = "${ID}";
var _like_catid = "${CATEGORY_ID}";
var _like_v = new Date().getTime();
document.write ("<scr"+"ipt type='text/javascript' src='http://like.chosun.com/like_art.js?v="+_like_v+"'></"+"script>");
</script>

<script src="//news.chosun.com/dhtm18/js/common/jquery.sticky-kit.min.js"></script>
<script src="//news.chosun.com/dhtm18/js/common/jquery.scrollbar.min.js"></script>
<script src="//news.chosun.com/dhtm18/js/common/jquery.bxslider.min_4212.js"></script>
<script src="//news.chosun.com/dhtm/js/screenfull.min.js"></script>
<script src="//news.chosun.com/dhtm18/js/art/cs_art_2018_pan.js"></script>


<!--[if lt IE 8]>
<script type="text/javascript" src="//news.chosun.com/dhtm/js/browser_update.js"></script>
<![endif]-->

<div class="mask_layer" id="mask_layer_id"></div>
<!-- TPL ver.New_20180913 -->

</body>
</html>
<#function isSlideImg _paraslide imgurl>
	<#assign idx = _paraslide?keys>
	<#list idx as ii>
		<#list _paraslide["" + ii]["slide"] as _slide>
			<#if (_slide.image == imgurl)>
				<#return true>
			</#if>
		</#list>
	</#list>   
	<#return false>
</#function>

<#function isRelImg _pararel imgurl>
	<#assign idx = _pararel?keys>
	<#list idx as ii>
		<#list _pararel["" + ii]["image"] as _rel>
			<#if (_rel.image == imgurl)>
				<#return true>
			</#if>
		</#list>
	</#list>   
	<#return false>
</#function>