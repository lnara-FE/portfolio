var winWidth = window.outerWidth;

am4core.addLicense("CH200409466666130");
am4core.useTheme(am4themes_animated);

am4core.options.autoSetClassName = true;

var chart = am4core.create("chartdiv2", am4charts.XYChart);

// Add data
chart.data = [{
    "year": "2005",
    "value": 23558
}, {
    "year": "2006",
    "value": 37224
}, {
    "year": "2007",
    "value": 40338
}, {
    "year": "2008",
    "value": 41638
}, {
    "year": "2009",
    "value": 45526
}, {
    "year": "2010",
    "value": 55614
}, {
    "year": "2011",
    "value": 62689
}, {
    "year": "2012",
    "value": 54321
}, {
    "year": "2013",
    "value": 67054
}, {
    "year": "2014",
    "value": 67390
}, {
    "year": "2015",
    "value": 69673
}, {
    "year": "2016",
    "value": 69613
}, {
    "year": "2017",
    "value": 72671
}, {
    "year": "2018",
    "value": 75700
}];


chart.autoResize = true;
chart.responsive.enabled = true;
chart.fontSize = 15;

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "year";
categoryAxis.renderer.grid.template.disabled = true;
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.minGridDistance = 30;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
//valueAxis.renderer.labels.template.disabled = true;

var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.valueY = "value";
series.dataFields.categoryX = "year";
series.columns.template.tooltipText = "{categoryX}년: [bold]{valueY}명";
series.columns.template.fillOpacity = .5;
series.columns.template.fill = am4core.color("#31B590");

/* var bullet = series.bullets.push(new am4charts.LabelBullet());
bullet.locationX = 0.5;
bullet.label.text = "{value}명";
bullet.label.fill = am4core.color("#222222");
bullet.label.fontSize = 11; 
bullet.label.truncate = false;
bullet.label.dy = -10; */

var columnTemplate = series.columns.template;
columnTemplate.strokeWidth = 0;

if(winWidth <= 959){
    chart.fontSize = 13;
    valueAxis.renderer.labels.template.disabled = true;
    categoryAxis.renderer.minGridDistance = 80;
}