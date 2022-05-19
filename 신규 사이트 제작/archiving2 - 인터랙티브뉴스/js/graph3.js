var winWidth = window.outerWidth;

am4core.addLicense("CH200409466666130");

am4core.useTheme(am4themes_animated);

am4core.options.autoSetClassName = true;

var container = am4core.create("chartdiv1", am4core.Container);
container.width = am4core.percent(100);
container.height = am4core.percent(100);
container.layout = "horizontal";

var iconPath = "M421.976,136.204h-23.409l-0.012,0.008c-0.19-20.728-1.405-41.457-3.643-61.704l-1.476-13.352H5.159L3.682,74.507 C1.239,96.601,0,119.273,0,141.895c0,65.221,7.788,126.69,22.52,177.761c7.67,26.588,17.259,50.661,28.5,71.548  c11.793,21.915,25.534,40.556,40.839,55.406l4.364,4.234h206.148l4.364-4.234c15.306-14.85,29.046-33.491,40.839-55.406  c11.241-20.888,20.829-44.96,28.5-71.548c0.325-1.127,0.643-2.266,0.961-3.404h44.94c49.639,0,90.024-40.385,90.024-90.024  C512,176.588,471.615,136.204,421.976,136.204z M421.976,256.252h-32c3.061-19.239,5.329-39.333,6.766-60.048h25.234  c16.582,0,30.024,13.442,30.024,30.024C452,242.81,438.558,256.252,421.976,256.252z"

function createChart(data,year) {

  // Create chart
  var chart = container.createChild(am4charts.SlicedChart);
  chart.autoResize = true;
  chart.responsive.enabled = true;

  // Add data
  chart.data = data;

  var chartTit = year;

  var title = chart.titles.create();
  title.text = chartTit+"년";
  title.fontSize = 20;
  title.marginBottom = 10;
  title.position = "bottom";

  // Add and configure Series
  var series = chart.series.push(new am4charts.PictorialStackedSeries());
  series.dataFields.value = "value";
  series.dataFields.category = "name";
  //series.alignLabels = true;
  // this makes only A label to be visible
  series.maskSprite.path = iconPath;
  series.labels.template.disabled = true;
  series.ticks.template.disabled = true;
  series.ticks.template.locationX = 1;
  series.ticks.template.locationY = 0;
  series.labelsContainer.width = 100;
  series.fontSize = 12;
  series.slices.template.tooltipText = "{value}%";
  series.dataFields.hidden = "hidden";



  chart.legend = new am4charts.Legend();
  chart.legend.position = "top";
  chart.legend.marginBottom = 20;

  var marker = chart.legend.markers.template.children.getIndex(0);
  chart.legend.markers.template.width = 20;
  chart.legend.markers.template.height = 20;
  marker.cornerRadius(20,20,20,20);

  if(winWidth <= 959){
    series.alignLabels = false;
    chart.legend.fontSize = 9;
    title.fontSize = 15;
  }
};

function am4themes_myTheme(target) {
  if (target instanceof am4core.ColorSet) {
    target.list = [
      am4core.color("#c1b2ab"),
      am4core.color("#704F3C")
    ];
  }
}

am4core.useTheme(am4themes_myTheme);

createChart([{
  "year": "2007년",
  "name": "원두 커피",
  "value": 5,
  "hidden": true
}, {
  "year": "2007년",
  "name": "인스턴트 커피",
  "value": 95,
  "hidden": true
}],2007);

createChart([{
  "year": "2019년",
  "name": "원두 커피",
  "value": 39,
  "hidden": true
}, {
  "year": "2019년",
  "name": "인스턴트 커피",
  "value": 61,
  "hidden": true
}], 2019);