var winWidth = window.outerWidth;

am4core.addLicense("CH200409466666130");
am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv2", am4charts.XYChart);

chart.data = [{
    "year": "2017년1분기",
    "value": 9.2
}, {
    "year": "2017년2분기",
    "value": 9.6
}, {
    "year": "2017년3분기",
    "value": 14.2
}, {
    "year": "2017년4분기",
    "value": 15.7
}, {
    "year": "2018년1분기",
    "value": 14.2
}, {
    "year": "2018년2분기",
    "value": 22.9
}, {
    "year": "2018년3분기",
    "value": 22.9
}, {
    "year": "2018년4분기",
    "value": 25.1
}, {
    "year": "2019년1분기",
    "value": 25.2
}, {
    "year": "2019년2분기",
    "value": 25.1
}, {
    "year": "2019년3분기",
    "value": 25.1
}, {
    "year": "2019년4분기",
    "value": 26.5
},{
    "year": "2020년1분기",
    "value": 20.9
},{
    "year": "2020년2분기",
    "value": 27.6
}]

chart.autoResize = true;
chart.responsive.enabled = true;
chart.cursor = new am4charts.XYCursor();
chart.cursor.lineY.opacity = 0;

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "year";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.grid.template.disabled = true;
categoryAxis.renderer.minGridDistance = 150;
categoryAxis.tooltip.disabled = true;

if(winWidth <= 959){
    categoryAxis.renderer.minGridDistance = 80;
    categoryAxis.fontSize = 9;
}



var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
//valueAxis.renderer.labels.template.disabled = true;
valueAxis.min = 0;
valueAxis.renderer.minGridDistance = 100;
valueAxis.tooltip.disabled = true;
valueAxis.propertyFields.disabled = "disabled";

if(winWidth <= 959){
    valueAxis.renderer.labels.template.disabled = true;
}

var series = chart.series.push(new am4charts.LineSeries());
series.name = "군산지역 소규모 상가 공실률"; 
series.dataFields.valueY = "value";
series.dataFields.categoryX = "year";
series.strokeWidth = 3;
//series.strokeDasharray = "5,4";
series.stroke = am4core.color("#33AB91");
series.tooltipText = "{categoryX}: [bold]{valueY}%";

var range = valueAxis.createSeriesRange(series);
range.value = 0;
range.endValue = 100;
range.contents.fill = am4core.color("#33AB91");
range.contents.fillOpacity = 0.3;

var bullet = series.bullets.push(new am4charts.LabelBullet());
bullet.locationX = 0.5;
bullet.label.text = "{value}";
bullet.label.fontSize = 13; 
bullet.label.truncate = false;
bullet.label.dy = 15;
bullet.label.dx = 5;

var circleBullet = series.bullets.push(new am4charts.CircleBullet());
circleBullet.circle.stroke = am4core.color("#33AB91");
circleBullet.circle.strokeWidth = 2;
circleBullet.strokeOpacity = 0.5;
circleBullet.fill = am4core.color("#fff");

/* chart.legend = new am4charts.Legend();
chart.legend.position = "top";
chart.legend.contentAlign = "center";
chart.legend.fontSize = 13; */


  




