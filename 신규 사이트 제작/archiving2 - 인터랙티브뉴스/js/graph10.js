var winWidth = window.outerWidth;

am4core.addLicense("CH200409466666130");
am4core.useTheme(am4themes_animated);

am4core.options.autoSetClassName = true;

var chart = am4core.create("chartdiv", am4charts.XYChart);

// Add data
chart.data = [{
  "year": "2001",
  "value": 184239
}, {
  "year": "2002",
  "value": 173141
}, {
  "year": "2003",
  "value": 191780
}, {
  "year": "2004",
  "value": 212489
}, {
  "year": "2005",
  "value": 185607
}, {
  "year": "2006",
  "value": 202428
}, {
  "year": "2007",
  "value": 223208
}, {
  "year": "2008",
  "value": 272302
}, {
  "year": "2009",
  "value": 272555
}, {
  "year": "2010",
  "value": 235860
},{
  "year": "2011",
  "value": 351370
},{
  "year": "2012",
  "value": 375177
},{
  "year": "2013",
  "value": 415180
},{
  "year": "2014",
  "value": 267010
},{
  "year": "2015",
  "value": 288547
},{
  "year": "2016",
  "value": 332150
},{
  "year": "2017",
  "value": 346796
},{
  "year": "2018",
  "value": 353617
},{
  "year": "2019",
  "value": 386501
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
categoryAxis.fontSize = 11;


var paretoValueAxis = chart.yAxes.push(new am4charts.ValueAxis());
//paretoValueAxis.renderer.opposite = true;
paretoValueAxis.min = 0;
paretoValueAxis.max = 450000;
paretoValueAxis.cursorTooltipEnabled = false;
paretoValueAxis.fontSize = 11;

if(winWidth <= 959){
  categoryAxis.renderer.minGridDistance = 50;
  paretoValueAxis.renderer.labels.template.disabled = true;
}


var paretoSeries = chart.series.push(new am4charts.LineSeries())
paretoSeries.name = "관광객 추세"; 
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