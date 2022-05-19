var winWidth = window.outerWidth;

am4core.addLicense("CH200409466666130");
am4core.useTheme(am4themes_animated);
am4core.options.autoSetClassName = true;

var chart = am4core.create("chartdiv4", am4charts.XYChart);

// Add data
chart.data = [{
  "name": "동대전",
  "대덕구": 174922,
  "중구": 237425,
  "동구": 223368
}, {
  "name": "서대전",
  "유성구": 352604,
  "서구": 480780
}];

chart.legend = new am4charts.Legend();
chart.legend.position = "top";
chart.fontSize = 13;

// Create axes
var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "name";
categoryAxis.renderer.grid.template.opacity = 0;

var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
valueAxis.min = 0;
valueAxis.max = 900000;
valueAxis.renderer.grid.template.opacity = 0;
valueAxis.renderer.ticks.template.strokeOpacity = 0.5;
valueAxis.renderer.ticks.template.stroke = am4core.color("#495C43");
//valueAxis.renderer.ticks.template.length = 10;
valueAxis.renderer.line.strokeOpacity = 0.5;
valueAxis.renderer.baseGrid.disabled = true;
valueAxis.renderer.minGridDistance = 50;
valueAxis.fontSize = 9;


// Create series
function createSeries(field, name, color) {
  var series = chart.series.push(new am4charts.ColumnSeries());
  series.dataFields.valueX = field;
  series.dataFields.categoryY = "name";
  series.stacked = true;
  series.name = name;
  series.fill = color;
  series.strokeWidth = 0;
  series.hidden = true;
  
  var labelBullet = series.bullets.push(new am4charts.LabelBullet());
  labelBullet.locationX = 0.5;
  labelBullet.label.text = "{valueX}";
  labelBullet.label.fill = am4core.color("#222");
  labelBullet.label.fontSize = 11;
}

var series1 = createSeries("유성구","유성구","#78d6c3")
var series2 = createSeries("서구","서구","#68bead");
var series3 = createSeries("대덕구","대덕구","#caf1e9");
var series4 = createSeries("중구","중구","#b6e1d8");
var series5 = createSeries("동구","동구","#94cdc2");

chart.legend.itemContainers.template.events.on("hit", function(ev) {
  var index = ev.target.dataItem.index;

  $('.area').removeClass('on');
  $('#location-'+index).addClass('on');
}); 


