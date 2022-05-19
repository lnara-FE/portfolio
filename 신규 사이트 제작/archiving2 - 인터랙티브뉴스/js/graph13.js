var winWidth = window.outerWidth;

am4core.addLicense("CH200409466666130");
am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv3", am4charts.XYChart);

chart.data = [{
    "year": "2005",
    "value": 25639
}, {
    "year": "2006",
    "value": 67065
}, {
    "year": "2007",
    "value": 99283
}, {
    "year": "2008",
    "value": 112379
}, {
    "year": "2009",
    "value": 122916
}, {
    "year": "2010",
    "value": 144706
}, {
    "year": "2011",
    "value": 164149
}, {
    "year": "2012",
    "value": 164149
}, {
    "year": "2013",
    "value": 166980
}, {
    "year": "2014",
    "value": 164149
}, {
    "year": "2015",
    "value": 167149
}, {
    "year": "2016",
    "value": 164154
}, {
    "year": "2017",
    "value": 160348
}, {
    "year": "2018",
    "value": 184077
}];

chart.autoResize = true;
chart.responsive.enabled = true;
chart.numberFormatter.numberFormat = "#,###억";
chart.cursor = new am4charts.XYCursor();
chart.cursor.lineY.opacity = 0;
chart.fontSize = 15;

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "year";
categoryAxis.renderer.grid.template.disabled = true;
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.minGridDistance = 30;


var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
//valueAxis.renderer.labels.template.disabled = true;
valueAxis.tooltip.disabled = true;


var series = chart.series.push(new am4charts.LineSeries());
//series.name = "대덕연구개발특구 연도별 매출"; 
series.dataFields.valueY = "value";
series.dataFields.categoryX = "year";
series.strokeWidth = 3;
series.stroke = am4core.color("#33AB91");
series.tooltipText = "{categoryX}년: [bold]{valueY}";
/* series.tooltip.getFillFromObject = false;
series.tooltip.background.fill = am4core.color("#33AB91"); */

var range = valueAxis.createSeriesRange(series);
range.value = 0;
range.endValue = 200000;
range.contents.fill = am4core.color("#33AB91");
range.contents.fillOpacity = 0.3; 

var circleBullet = series.bullets.push(new am4charts.CircleBullet());
circleBullet.circle.stroke = am4core.color("#33AB91");
circleBullet.circle.strokeWidth = 2;
circleBullet.strokeOpacity = 0.5;
circleBullet.fill = am4core.color("#fff");

/* chart.legend = new am4charts.Legend();
chart.legend.position = "top";
chart.legend.contentAlign = "center";
chart.legend.fontSize = 13; */

if(winWidth <= 959){
    chart.fontSize = 11;
    valueAxis.renderer.labels.template.disabled = true;
    categoryAxis.renderer.minGridDistance = 80;
}



  




