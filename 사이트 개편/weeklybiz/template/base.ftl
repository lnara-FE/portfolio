<#-- Template Setting _ Start -->
<#include "common/content2019.common">
<#-- Template Setting _ End -->
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>${TITLE} - WEEKLY BIZ > ${CATEGORY_PATH}</title>
    <meta name="title" content="${TITLE}" />
    <meta name="description" content="${ART_DESC}">
    <#include "common/news_keywords2019.common">  
    <meta name="keywords" content="조선일보 위클리비즈, 위클리비즈, WEEKLY BIZ"> 
    <meta name="viewport" content="width=device-width, maximum-scale=1.0" />
    <meta name="HITLOG" content="${SITE_ID};${CATEGORY_ID};${ID}">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <#include "common/facebook_meta2019.common">
    <!--[if lt IE 9]><script src="http://news.chosun.com/dhtm/html5/html5shiv.min.js"></script><![endif]-->
    <link href="//weeklybiz.chosun.com/site/data/rss/rss.xml" rel="alternate" type="application/rss+xml" title="Chosun.com [RSS]">
    <link rel="amphtml" href="https://weeklybiz.chosun.com/m/news/article.amp.html?contid=${ID}">
    <link rel="stylesheet" href="//weeklybiz.chosun.com/dhtm2019/css/swiper.min.css"/>
    <link rel="stylesheet" href="//news.chosun.com/dhtm18/css/art/cs_art_2018.css">
    <link rel="stylesheet" href="//weeklybiz.chosun.com/dhtm2019/css/newsq_art_2019.css">
    <link rel="stylesheet" href="//weeklybiz.chosun.com/dhtm2019/css/weekly_article_style.css">

    <script type="text/javascript" src="//news.chosun.com//dhtm/js/common/collecter.js"></script>
    <script type="text/javascript" src="//www.googletagservices.com/tag/js/gpt.js"></script>
    <script type="text/javascript" src="//news.chosun.com/js/makePCookie.js"></script>
    <script type="text/javascript" src="//news.chosun.com/dhtm/js/jquery-1.9.1.min.js"></script>
    <script type="text/javascript" src="//weeklybiz.chosun.com/dhtm2019/js/swiper.min.js"></script>
    <script type="text/javascript" src="//weeklybiz.chosun.com/dhtm2019/js/kakao.min.js"></script>
    <!--swiper v4.5-->
    <script type="text/javascript" src="//weeklybiz.chosun.com/svc/js/article_2019.js"></script>
</head>

<body>
<#include "common/header_var2019.common">
<#include "common/cat_mapping2019.common">  

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

<!-- ORGS CODE :  -->
<!-- ORGS LINK :  -->

<script type="text/javascript">
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
 
    ga('create', 'UA-58940796-50', 'auto'); //Weekly Biz

    <#if (AUTHOR?has_content)>
        <#list AUTHOR as author>
            <#if (author.byline_text?has_content || author.byline_text.length >1)>
                <#if (author.name?has_content || author.name.length > 1)>
                    ga('set', 'contentGroup1', '${author.name}');
                    ga('set', 'dimension5', '${author.name}');
                <#else>
                ga('set', 'contentGroup1', '${author.name}');	
                ga('set', 'dimension5', '${author.byline_text}');
                </#if>
            <#else>
                <#if (author.name?has_content || author.name.length > 1)>
                    ga('set', 'contentGroup1', '${author.name}');
                    ga('set', 'dimension5', '${author.name}');
                </#if>
            </#if>
            <#break>
        </#list>
    </#if>

    ga('set', 'dimension6', '${c1}'); //1뎁스카테고리명

    ga('require', 'displayfeatures');
    ga('require', 'linkid', 'linkid.js');
    ga('send', 'pageview');

    ga('create', 'UA-58940796-24', 'auto',{'name':'chosun_total'});
    ga('require', 'displayfeatures');
    ga('require', 'linkid', 'linkid.js');
    ga('chosun_total.send', 'pageview');
</script>

<a id="top"></a>

<div id="csWrap" class="">

<!-- GNB start -->
<script>
    //chosun.com simple gnb var
    var csmgsgnbWidth = "1200", //사이트 내 콘텐츠 너비값 (기본값 : 1196px)
        csmgsgnbLogin = "N", //로그인 버튼 사용 여부 (기본값 : N)
        csmgsgnbSearch = "N"; //검색 버튼 사용 여부 (기본값 : N)
</script>

<script src="//news.chosun.com/ui/js/csmgs_simple_gnb.js"></script> 
<!--pc chosun simple gnb -->

<script src="//weeklybiz.chosun.com/dhtm2019/js/weeklybiz_gnb_pkg.js"></script>
<!--weeklybiz main gnb-->
<script src="//weeklybiz.chosun.com/dhtm2019/js/weeklybiz_art_gnb_pkg.js"></script>
<!--weeklybiz article gnb-->

 <header class="newsq_title">
    <#if (newsq_bg?length > 3)>
	<div class="newsq_title_bg ${newsq_bg_div}" style="background-image:url(<#if (newsq_bg?length > 3)>${newsq_bg}</#if>)"><span></span> 
        </div>
        </#if>
    <div class="art_tit_menu"><strong><a href="//weeklybiz.chosun.com/svc/wb_list.html?catid=${CATEGORY_ID}" onclick="ga('send', 'event', 'Article', 'ArtTitle', 'Art_List');">${CATEGORY_NAME}</a></strong>
        <span>
        <#if (TITLE_KEYWORD?has_content)>
            <#assign keyword = '#${TITLE_KEYWORD}'>
            <a href="//weeklybiz.chosun.com/svc/wb_keyword.html?keyword=${TITLE_KEYWORD}" onclick="ga('send', 'event', 'Article', 'ArtTitle', 'Art_Hashtag');">${TITLE_KEYWORD}</a>
        </#if>
    </span>
    </div>
    <div class="news_title_cat">
        <#--  <#include "common/title_category2011.common">  -->
    </div>
    <div class="news_title_text">
        <!--<span class="news_title_q"><em></em></span>-->            
        <h1 id="news_title_text_id">${TITLE}</h1>
        <#--  <h4 class="news_title_sum">${SUMMARY}</h4>   -->
        <div class="news_title_author">
             <ul><#include "common/author2019.common"></ul>  
        </div>
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
            <h1 id="news_title_text_id"></h1>
            <div class="news_title_author"></div>
        </div><!-- news_title_text -->

        <div class="news_pdf"><a href="#" onclick="ga('send', 'event', 'Article', 'ArtTitle', 'Art_PDF');">pdf보기</a></div>

        <!--article tool pc-->
        <ul class="news_title_tools" id="news_title_tools_id">
            <!-- 현재 기사가 스크랩되어 있다면 '.saved' 클래스를 추가 -->  
        </ul>
    </header><!-- news_title -->

    <div class="sticky_wrapper" id="sticky_wrapper_id">
        <article class="news_article">
            <div class="news_body_all">
                <div class="news_left_aside" id="news_left_aside_id">
                    <ul class="news_left_aside_sns">
                        <li><a href="#news_cmt_id" class="count_cmt" title="" onclick="ga('send', 'event', 'Article', 'ArtShare', 'Art_Comment');">100자평 <span class="count" id="BBSCNT">0</span></a></li>
                        <li><a onClick="javascript:csLike(); ga('send', 'event', 'Article', 'ArtShare', 'Art_Like');" class="count_like" title="">좋아요 <span class="count" id="CSCNT">0</span></a></li>
                        <li><a href="javascript:facebookOpen()" class="share_fb" title="" onclick="ga('send', 'event', 'Article', 'ArtShare', 'Art_Facebook');">페이스북 공유</a></li>
                        <li><a href="javascript:twitterOpen()" class="share_tw" title="" onclick="ga('send', 'event', 'Article', 'ArtShare', 'Art_Twitter');">트위터 공유</a></li>
                        <#--  <li><a href="javascript:kakaostoryOpen()" class="share_kas" title="">카카오스토리 공유</a></li>   -->
                        <li><a href="#" class="share_kas" title="" onclick="ga('send', 'event', 'Article', 'ArtShare', 'Art_Kakao');">카카오톡 공유</a></li> 
                        <div class="news_left_aside_sns_more" id="news_left_aside_sns_more_id">
                            <li><a href="javascript:nblogOpen()" class="share_nblog" title="">네이버블로그 공유</a></li>                
                        </div>
                        <li><a href="" class="share_url" id="share_url_id" title="" onclick="ga('send', 'event', 'Article', 'ArtShare', 'Art_URL');">기사 URL공유</a><input type="text" class="art_share_url" id="art_share_url_id" readonly="" onclick="ga('send', 'event', 'Article', 'ArtShare', 'Art_URL');"></li>
                        <li><a href="#" class="share_more int_rotate" id="share_more_id" title="">공유 더보기</a></li>
                    </ul>
                </div><!-- news_left_aside -->
                <div id="news_body_id" class="news_body">
                <div id="date_text" class="news_date"><#include "common/date_text2019.common"></div>
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
                    <#if (IMAGE.width?eval < IMAGE.height?eval) && (IMAGE.width?eval > 600) && (IMAGE.align == "center")>
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
            <!-- old link <a href="http://inside.chosun.com/chosun/rel_inside.html?wid=${ID}&gid=${resource_2.xml.content.id}"><img src="${IMAGE.href}" alt=""> -->

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
                <div class="bottom_art_tool clear_fix">
                    <div class="bottom_share">
                        <a href="#" id="share_id" class="share" onclick="ga('send', 'event', 'Article', 'ArtShare', 'Art_Share_BT');">기사 공유</a>
                    </div>
                    <div class="news_like">
                        <a onClick="javascript:csLike(); ga('send', 'event', 'Article', 'ArtShare', 'Art_Like_BT');" class="count_like">
                            <span class="mlike_tit">좋아요</span>
                            <span class="count" id="CSCNT">0</span>
                        </a>
                    </div>
                </div>
                

                <#include "common/keyword2019.common">
                <#--  <#include "common/lang_link.common">  -->
                <#include "common/rel_article2019.common">
                <#include "common/copyright_weeklybiz2019.common">
                <!-- base tpl update 20180605:v1 -->

            </div><!-- news_body -->


            <div class="news_missart" id="news_missart_id">
                <h3 class="missart_tit">놓치면 안되는 기사</h3>
                <div class="missart_container swiper-container">
                    <div class="missart_item_wrap swiper-wrapper">
                        <div class="missart_item swiper-slide">
                            <span class="thumb"><a href=""><img src="" alt=""></a></span>
                            <p class="missart_txt"><a href=""></a></p>
                        </div>
                        <div class="missart_item swiper-slide">
                            <span class="thumb"><a href=""><img src="" alt=""></a></span>
                            <p class="missart_txt"><a href=""></a></p>
                        </div>
                        <div class="missart_item swiper-slide">
                            <span class="thumb"><a href=""><img src="" alt=""></a></span>
                            <p class="missart_txt"><a href=""></a></p>
                        </div>
                    </div>
                </div>
                <a href="javascript:void(0)" class="miss_close_btn" id="miss_close_btn_id" type="button">팝업 닫기</a>
            </div>
            <div class="clear"></div>
        </div><!-- news_body_all -->


        <!-- CMT changed ver2 start / not use -->
        <!-- CMT changed ver2 end / not use -->
            <div class="weekly_rec_wrap">
                <h3 class="tit">WEEKLY BIZ 추천기사</h3>
                <div class="weekly_rec">
                    <dl class="weekly_rec_item">
                        <dd class="thumb">
                            <a href="#">
                                <img src="" alt="">
                            </a>
                        </dd>
                        <dd class="pack">
                            <a class="cate" href=""><span></span></a>
                            <a class="tag" href=""><span></span></a>
                        </dd>
                        <dt><a href="#"></a></dt>
                    </dl>
                    <dl class="weekly_rec_item">
                        <dd class="thumb">
                            <a href="#"><img src="" alt=""></a>
                        </dd>
                        <dd class="pack">
                            <a class="cate" href=""><span></span></a>
                            <a class="tag" href=""><span></span></a>
                        </dd>
                        <dt><a href="#"></a></dt>
                    </dl>
                    <dl class="weekly_rec_item">
                        <dd class="thumb">
                            <a href="#"><img src="" alt=""></a>
                        </dd>
                        <dd class="pack">
                            <a class="cate" href=""><span></span></a>
                            <a class="tag" href=""><span></span></a>
                        </dd>
                        <dt>
                            <a href="#"></a>
                        </dt>
                    </dl>
                    <dl class="weekly_rec_item">
                        <dd class="thumb">
                            <a href=""><img src="" alt=""></a>
                        </dd>
                        <dd class="pack">
                            <a class="cate" href=""><span></span></a>
                            <a class="tag" href=""><span></span></a>
                        </dd>
                        <dt>
                            <a href="#"></a>
                        </dt>
                    </dl>
                    <dl class="weekly_rec_item">
                        <dd class="pack">
                            <a class="cate" href=""><span></span></a>
                            <a class="tag" href=""><span></span></a>
                        </dd>
                        <dt>
                            <a href=""></a>
                        </dt>
                    </dl>
                    <dl class="weekly_rec_item">
                        <dd class="thumb">
                            <a href="">
                                <img src="" alt="">
                            </a>
                        </dd>
                        <dd class="pack">
                            <a class="cate" href=""><span></span></a>
                            <a class="tag" href=""><span></span></a>
                        </dd>
                        <dt>
                            <a href="#"></a>
                        </dt>
                    </dl>
                </div>
                <!--weekly_rec end-->
            </div>
            <!-- weekly_rec_wrap end -->


            <div class="idea_art_wrap">
                <h3 class="tit">${TITLE_KEYWORD}</h3>
                <a class="more" href="#" onclick="ga('send', 'event', 'Article', 'ArtRelated', 'Art_RelHash');">더보기</a>
                <div class="idea_art_slide swiper-container">
                    <div class="idea_art clear_fix swiper-wrapper">
                        <dl class="idea_art_item swiper-slide">
                            <dd class="thumb"><a href=""><img src="" alt=""></a></dd>
                            <dt><a href=""></a></dt>
                        </dl>
                        <dl class="idea_art_item swiper-slide">
                            <dd class="thumb"><a href=""><img src="" alt=""></a></dd>
                            <dt><a href=""></a></dt>
                        </dl>
                        <dl class="idea_art_item swiper-slide">
                            <dd class="thumb"><a href=""><img src="" alt=""></a></dd>
                            <dt><a href=""></a></dt>
                        </dl>
                    </div>
                </div>
            </div>
            <script>getHashList('${TITLE_KEYWORD}');</script>
            <!--idea_art_wrap-->

            <div class="article_bottom">
                <div class="article_bottom_ad">
                    <script type="text/javascript" src="//weeklybiz.chosun.com/dhtm2019/js/article_bottom_ad.js"></script>
                </div>
            </div>
            <!--article_bottom end-->

            <!-- CMT changed ver2 start -->
            <#assign cmtView = false>
            <#if xml.content.commentBbs="Y">
                <#assign cmtView = true>
            </#if>

            <#if ( cmtView = true )>
                <!-- cmt yes! yes! yes! -->
                <div id="news_cmt_id" class="news_cmt">
                    <a name='bbs'></a>
                    <script type='text/javascript'>
                    var _100_SiteID = "WEEKLYBIZ";
                    var _100_ArtID = "${ID}";
                    var _100_Ver = new Date().getTime();
                    document.write ("<scr"+"ipt type='text/javascript' src='//m100.chosun.com/svc/guest/comment_news.js?v="+_100_Ver+"' charset='euc-kr'></"+"script>");
                    </script>
                </div><!-- news_cmt -->
            <#else>
                <!-- cmt no! no! no! -->
            </#if>
            <!-- CMT changed ver2 end -->

        </article><!-- news_article -->
        <div class="clear"></div>
    </div><!-- sticky_wrapper -->

    <div id="_popIn_recommend"></div>
    <script type="text/javascript">
        (function() {
    
            var pa = document.createElement('script'); pa.type = 'text/javascript'; pa.charset = "utf-8"; pa.async = true;
    
            pa.src = window.location.protocol + "//api.popin.cc/searchbox/weeklybiz.js";
    
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(pa, s);
    
        })(); 
    </script>
    <!--popin ad end-->

    <div class="news_aside">
        <div class="news_aside_ad">
            <script type="text/javascript" src="//weeklybiz.chosun.com/dhtm2019/js/article_right_ad.js"></script>
        </div>
    </div>
    <!--news_aside end-->

    <!--footer area -->
    <script src="//weeklybiz.chosun.com/dhtm2019/js/weeklybiz_footer_pkg.js"></script>
    <!--footer area end-->

</div><!-- csContent -->

    <div class="news_go" id="news_go_id">
        <a href="#" class="news_go_recent" id="news_go_recent_id" onclick="ga('send', 'event', 'Article', 'ArtBtn', 'Art_BtnWatched');"><span>내가 본 뉴스</span></a>
        <a href="#top" class="news_go_top" id="news_go_top_id" onclick="ga('send', 'event', 'Article', 'ArtBtn', 'Art_BtnTop');"><span>맨 위로</span></a>   
    </div><!-- news_go -->

    <div class="news_recent_read" id="news_recent_read_id">
        <h4>내가 본 뉴스 <a href="#" class="close int_rotate" id="news_recent_read_closd_id" title="닫기">닫기</a></h4>
        <script src="//news.chosun.com/dhtm18/js/art/cs_art_recentnews_2018.js"></script>
    </div><!-- news_recent_read -->

    <div class="under_notice" id="under_notice"></div>

</div><!-- csWrap -->

<script type='text/javascript'>
var _like_siteid = "WEEKLYBIZ";
var _like_artid = "${ID}";
var _like_catid = "${CATEGORY_ID}";
var _like_v = new Date().getTime();
document.write ("<scr"+"ipt type='text/javascript' src='//like.chosun.com/like_art.js?v="+_like_v+"'></"+"script>");
</script>

<script src="//news.chosun.com/dhtm18/js/common/jquery.sticky-kit.min.js"></script>
<script src="//news.chosun.com/dhtm18/js/common/jquery.scrollbar.min.js"></script>
<script src="//news.chosun.com/dhtm18/js/common/jquery.bxslider.min_4212.js"></script>
<script src="//news.chosun.com/dhtm/js/screenfull.min.js"></script>
<script src="//weeklybiz.chosun.com/dhtm2019/js/weekly_art_2019_pan.js"></script>
 
<!--[if lt IE 8]>
<script type="text/javascript" src="//news.chosun.com/dhtm/js/browser_update.js"></script>
<![endif]-->

<div class="mask_layer" id="mask_layer_id"></div>
<!-- TPL ver.New_20180913 -->

<script type="text/javascript" src="//weeklybiz.chosun.com/svc/js/weeklyBizRead.js"></script>

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
