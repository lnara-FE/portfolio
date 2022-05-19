var winWidth = window.outerWidth;

am4core.addLicense("CH200409466666130");

am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);

chart.data = [{
    "year": "2014",
    "value": 988
  }, {
    "year": "2015",
    "value": 1358
  }, {
    "year": "2016",
    "value": 1316
  },{
    "year": "2017",
    "value": 1508
  }, {
    "year": "2018",
    "value": 1365
  }, {
    "year": "2019",
    "value": 1354
  },{
    "year": "2020년 1분기",
    "value": 174
  }];

//chart.dateFormatter.dateFormat = "yyyy";
chart.autoResize = true;
chart.responsive.enabled = true;
chart.numberFormatter.numberFormat = "#만";
chart.cursor = new am4charts.XYCursor();
chart.cursor.lineY.opacity = 0;

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "year";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.grid.template.disabled = true;
categoryAxis.renderer.minGridDistance = 10;
categoryAxis.tooltip.disabled = true;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.min = 0;
valueAxis.renderer.minGridDistance = 50;
valueAxis.tooltip.disabled = true;

if(winWidth <= 959){
    valueAxis.renderer.labels.template.disabled = true;
    categoryAxis.fontSize = 9;
}


var series = chart.series.push(new am4charts.LineSeries());
series.name = "여수 관광객 수 추이"; 
series.dataFields.valueY = "value";
series.dataFields.categoryX = "year";
series.strokeWidth = 3;
//series.strokeDasharray = "5,4";
series.stroke = am4core.color("#33AB91");
series.tooltipText = "{categoryX}년 {valueY}";

var range = valueAxis.createSeriesRange(series);
range.value = 0;
range.endValue = 2000;
range.contents.fill = am4core.color("#33AB91");
range.contents.fillOpacity = 0.3;

// Add simple bullet
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