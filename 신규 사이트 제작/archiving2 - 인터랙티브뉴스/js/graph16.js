var winWidth = window.outerWidth;

am4core.addLicense("CH200409466666130");
am4core.useTheme(am4themes_animated);
am4core.options.autoSetClassName = true;

var chart = am4core.create("chartdiv", am4charts.XYChart);

chart.data = [{
    "year": "2019년1월",
    "value": 1130843    
}, {
    "year": "2019년2월",
    "value": 1110817
}, {
    "year": "2019년3월",
    "value": 1164834
}, {
    "year": "2019년4월",
    "value": 1298026
}, {
    "year": "2019년5월",
    "value": 1323866
}, {
    "year": "2019년6월",
    "value": 1307217
}, {
    "year": "2019년7월",
    "value": 1310076
}, {
    "year": "2019년8월",
    "value": 1421455
}, {
    "year": "2019년9월",
    "value": 1181516
}, {
    "year": "2019년10월",
    "value": 1422312
},{
    "year": "2019년11월",
    "value": 1323551
},{
    "year": "2019년12월",
    "value": 1291623
},{
    "year": "2020년1월",
    "value": 1250046
},{
    "year": "2020년2월",
    "value": 628804
},{
    "year": "2020년3월",
    "value": 480762
},{
    "year": "2020년4월",
    "value": 542258
},{
    "year": "2020년5월",
    "value": 768102
},{
    "year": "2020년6월",
    "value": 863417
},{
    "year": "2020년7월",
    "value": 992476
},{
    "year": "2020년8월",
    "value": 1133095
},{
    "year": "2020년9월",
    "value": 729677
},{
    "year": "2020년10월",
    "value": 1078243
}];

chart.autoResize = true;
chart.responsive.enabled = true;
chart.cursor = new am4charts.XYCursor();
chart.cursor.lineY.opacity = 0;
chart.fontSize = 15;

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "year";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.grid.template.disabled = true;
categoryAxis.renderer.minGridDistance = 120;


var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
//valueAxis.renderer.labels.template.disabled = true;
valueAxis.tooltip.disabled = true;

var series = chart.series.push(new am4charts.LineSeries());
series.dataFields.valueY = "value";
series.dataFields.categoryX = "year";
series.strokeWidth = 3;
series.stroke = am4core.color("#33AB91");
series.tooltipText = "[bold]{valueY}명";

var range = valueAxis.createSeriesRange(series);
range.value = 0;
range.endValue = 1500000;
range.contents.fill = am4core.color("#33AB91");
range.contents.fillOpacity = 0.3; 

var circleBullet = series.bullets.push(new am4charts.CircleBullet());
circleBullet.circle.stroke = am4core.color("#33AB91");
circleBullet.circle.strokeWidth = 2;
circleBullet.strokeOpacity = 0.5;
circleBullet.fill = am4core.color("#fff");

if(winWidth <= 959){
    chart.fontSize = 9;
    valueAxis.renderer.labels.template.disabled = true;
    categoryAxis.renderer.minGridDistance = 80;
}