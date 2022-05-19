var winWidth = window.outerWidth;

am4core.addLicense("CH200409466666130");
am4core.useTheme(am4themes_animated);

am4core.options.autoSetClassName = true;

var chart = am4core.create("chartdiv", am4charts.XYChart);

// Add data
chart.data = [{
  "area": "하남",
  "value": 13.3
}, {
  "area": "용인",
  "value": 11.1
}, {
  "area": "수원",
  "value": 9.4
}, {
  "area": "구리",
  "value": 8.2
}, {
  "area": "화성",
  "value": 7.2
}, {
  "area": "평택",
  "value": 6.5
}, {
  "area": "오산",
  "value": 5.6
}, {
  "area": "고양",
  "value": 5.2
}, {
  "area": "안양",
  "value": 5.1
}, {
  "area": "의왕",
  "value": 4.8
},{
  "area": "남양주",
  "value": 4.1
},{
  "area": "인천",
  "value": 4
},{
  "area": "부천",
  "value": 2
},{
  "area": "과천",
  "value": -7.9
}];

chart.autoResize = true;
chart.responsive.enabled = true;

// Create axes
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "area";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.grid.template.disabled = true;
categoryAxis.renderer.minGridDistance = 10;
categoryAxis.tooltip.disabled = true;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.renderer.minGridDistance = 50;
valueAxis.cursorTooltipEnabled = false;


// Create series
var series = chart.series.push(new am4charts.ColumnSeries());
series.name = "전세지수 변동률"; 
series.sequencedInterpolation = true;
series.dataFields.valueY = "value";
series.dataFields.categoryX = "area";
series.tooltipText = "[{categoryX}: bold]{valueY}[/]";
series.columns.template.strokeWidth = 0;
series.tooltip.pointerOrientation = "vertical";

series.columns.template.column.cornerRadiusTopLeft = 10;
series.columns.template.column.cornerRadiusTopRight = 10;
series.columns.template.column.fillOpacity = 0.8;
series.columns.template.fill = am4core.color("#31B590");
series.columns.template.adapter.add("fill", function(fill, target) {
    if ((target.dataItem.categoryX == "하남")) {
      return am4core.color("#11775F");
    } else if((target.dataItem.categoryX == "과천")){
        return am4core.color("#979797");
    }else {
      return fill;
    }
});

if(winWidth <= 959){
  valueAxis.renderer.labels.template.disabled = true;
  categoryAxis.fontSize = 9;
}


// on hover, make corner radiuses bigger
var hoverState = series.columns.template.column.states.create("hover");
hoverState.properties.cornerRadiusTopLeft = 0;
hoverState.properties.cornerRadiusTopRight = 0;
hoverState.properties.fillOpacity = 1;

// Cursor
chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "panX";