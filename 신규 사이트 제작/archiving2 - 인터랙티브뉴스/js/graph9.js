var winWidth = window.outerWidth;

am4core.addLicense("CH200409466666130");
am4core.useTheme(am4themes_animated);

am4core.options.autoSetClassName = true;

var chart = am4core.create("chartdiv", am4charts.XYChart);

// Add data
chart.data = [{
  "year": "2014",
  "value": 278,
  "value2": 265
}, {
  "year": "2015",
  "value": 318,
  "value2": 322
}, {
  "year": "2016",
  "value": 314,
  "value2": 417
}, {
  "year": "2017",
  "value": 320,
  "value2": 535
}, {
  "year": "2018",
  "value": 317,
  "value2": 798
}, {
  "year": "2019",
  "value": 301,
  "value2": 751
},{
  "year": "2020",
  "value": 267,
  "value2": 728
}];

chart.autoResize = true;
chart.responsive.enabled = true;

chart.legend = new am4charts.Legend();
chart.legend.position = "top";
chart.legend.contentAlign = "center";
chart.legend.fontSize = 13;
chart.legend.marginBottom = 10;

// Create axes
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "year";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.grid.template.disabled = true;
categoryAxis.renderer.minGridDistance = 10;
categoryAxis.tooltip.disabled = true;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.renderer.minGridDistance = 50;
valueAxis.cursorTooltipEnabled = false;
valueAxis.min = 0;
valueAxis.max= 800;

if(winWidth <= 959){
  valueAxis.renderer.labels.template.disabled = true;
  categoryAxis.fontSize = 11;
}



// Create series
var series = chart.series.push(new am4charts.ColumnSeries());
series.name = "경주시 평단가"; 
series.sequencedInterpolation = true;
series.dataFields.valueY = "value";
series.dataFields.categoryX = "year";
series.tooltipText = "{name} {valueY}[/]";
series.columns.template.strokeWidth = 0;
series.tooltip.pointerOrientation = "vertical";

series.columns.template.column.cornerRadiusTopLeft = 10;
series.columns.template.column.cornerRadiusTopRight = 10;
series.columns.template.column.fillOpacity = 0.8;
series.columns.template.fill = am4core.color("#c2d0cd");

// on hover, make corner radiuses bigger
var hoverState = series.columns.template.column.states.create("hover");
hoverState.properties.cornerRadiusTopLeft = 0;
hoverState.properties.cornerRadiusTopRight = 0;
hoverState.properties.fillOpacity = 1;

var paretoValueAxis = chart.yAxes.push(new am4charts.ValueAxis());
paretoValueAxis.renderer.opposite = true;
paretoValueAxis.min = 0;
paretoValueAxis.max = 850;
paretoValueAxis.strictMinMax = true;
paretoValueAxis.renderer.grid.template.disabled = true;
paretoValueAxis.numberFormatter = new am4core.NumberFormatter();
paretoValueAxis.numberFormatter.numberFormat = "#"
paretoValueAxis.cursorTooltipEnabled = false;
paretoValueAxis.fontSize = 0;

var paretoSeries = chart.series.push(new am4charts.LineSeries())
paretoSeries.name = "횡리단길 평단가"; 
paretoSeries.dataFields.valueY = "value2";
paretoSeries.dataFields.categoryX = "year";
paretoSeries.yAxis = paretoValueAxis;
paretoSeries.tooltipText = "{name} {valueY}[/]";
paretoSeries.strokeWidth = 3;
paretoSeries.stroke = am4core.color("#33AB91")
//paretoSeries.strokeOpacity = 0.5;

var circleBullet = paretoSeries.bullets.push(new am4charts.CircleBullet());
circleBullet.circle.stroke = am4core.color("#33AB91");
circleBullet.circle.strokeWidth = 2;
circleBullet.strokeOpacity = 0.5;
circleBullet.fill = am4core.color("#fff");

// Cursor
chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "panX";