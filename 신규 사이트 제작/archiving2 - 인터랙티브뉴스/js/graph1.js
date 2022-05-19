var winWidth = window.outerWidth;

am4core.addLicense("CH200409466666130");
am4core.useTheme(am4themes_animated);

am4core.options.autoSetClassName = true;

var chart = am4core.create("chartdiv", am4charts.XYChart);

// Add data
chart.data = [{
  "year": "2010",
  "value": 419400
}, {
  "year": "2011",
  "value": 426800
}, {
  "year": "2012",
  "value": 434300
}, {
  "year": "2013",
  "value": 442000
}, {
  "year": "2014",
  "value": 449500
}, {
  "year": "2015",
  "value": 460500
}, {
  "year": "2016",
  "value": 470800
}, {
  "year": "2017",
  "value": 481500
}, {
  "year": "2018",
  "value": 495600
}, {
  "year": "2019",
  "value": 513000
},{
  "year": "2020",
  "value": 529100
}];

chart.autoResize = true;
chart.responsive.enabled = true;
chart.legend = new am4charts.Legend();
chart.legend.position = "top";
chart.legend.contentAlign = "center";
chart.legend.fontSize = 13;
chart.background.fill = "#fff";


// Create axes
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "year";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.grid.template.disabled = true;
categoryAxis.renderer.minGridDistance = 10;
categoryAxis.tooltip.disabled = true;
categoryAxis.fontSize = 15;


var paretoValueAxis = chart.yAxes.push(new am4charts.ValueAxis());
paretoValueAxis.min = 350000;
paretoValueAxis.max = 550000;
paretoValueAxis.cursorTooltipEnabled = false;
paretoValueAxis.fontSize = 15;

if(winWidth <= 959){
  categoryAxis.fontSize = 10;
  paretoValueAxis.renderer.labels.template.disabled = true;
}

var paretoSeries = chart.series.push(new am4charts.LineSeries())
paretoSeries.name = "최근 10년 평택시 인구 추이"; 
paretoSeries.dataFields.valueY = "value";
paretoSeries.dataFields.categoryX = "year";
paretoSeries.yAxis = paretoValueAxis;
paretoSeries.tooltipText = "{categoryX}년도: {valueY.formatNumber('#,###')}명";
paretoSeries.strokeWidth = 2;
paretoSeries.stroke = new am4core.InterfaceColorSet().getFor("alternativeBackground");
paretoSeries.strokeOpacity = 0.5;

var circleBullet = paretoSeries.bullets.push(new am4charts.CircleBullet());
circleBullet.circle.stroke = new am4core.InterfaceColorSet().getFor("alternativeBackground");
circleBullet.circle.strokeWidth = 2;
circleBullet.strokeOpacity = 0.5;

// Cursor
chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "panX";