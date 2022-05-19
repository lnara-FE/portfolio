var winWidth = window.outerWidth;

am4core.addLicense("CH200409466666130");
am4core.useTheme(am4themes_animated);

am4core.options.autoSetClassName = true;

var chart = am4core.create("chartdiv", am4charts.XYChart);

// Add data
chart.data = [{
  "year": "2010",
  "visits": 8797658,
  "expenses": 12.54
}, {
  "year": "2011",
  "visits": 9794796,
  "expenses": 11.33
}, {
  "year": "2012",
  "visits": 11140028,
  "expenses": 13.73
}, {
  "year": "2013",
  "visits": 12175550,
  "expenses": 9.30
}, {
  "year": "2014",
  "visits": 14201516,
  "expenses": 16.64
}, {
  "year": "2015",
  "visits": 13231651,
  "expenses": -6.83
}, {
  "year": "2016",
  "visits": 17241823,
  "expenses": 30.31
}, {
  "year": "2017",
  "visits": 13335758,
  "expenses": -22.65
}, {
  "year": "2018",
  "visits": 15346879,
  "expenses": 15.08
}, {
  "year": "2019",
  "visits": 17502756,
  "expenses": 14.05
},{
  "year": "2020",
  "visits": 2041417,
  "expenses": -88.34
}];

chart.autoResize = true;
chart.responsive.enabled = true;

chart.legend = new am4charts.Legend();
chart.legend.position = "top";
chart.legend.contentAlign = "center";
chart.legend.fontSize = 13;

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
valueAxis.min= 2000000

if(winWidth < 959){
  valueAxis.fontSize = 0;
  categoryAxis.fontSize = 9;
}else {
  valueAxis.fontSize = 15;
  categoryAxis.fontSize = 15;
}


// Create series
var series = chart.series.push(new am4charts.ColumnSeries());
series.name = "입국자 수"; 
series.sequencedInterpolation = true;
series.dataFields.valueY = "visits";
series.dataFields.categoryX = "year";
series.tooltipText = "[{categoryX}: bold]{valueY}[/]";
series.columns.template.strokeWidth = 0;
series.tooltip.pointerOrientation = "vertical";

series.columns.template.column.cornerRadiusTopLeft = 10;
series.columns.template.column.cornerRadiusTopRight = 10;
series.columns.template.column.fillOpacity = 0.8;
series.columns.template.fill = am4core.color("#f1eddd");
series.columns.template.adapter.add("fill", function(fill, target) {
    if ((target.dataItem.categoryX == "2015") || (target.dataItem.categoryX == "2020")) {
      return am4core.color("#a55");
    } else if((target.dataItem.categoryX == "2014")){
        return am4core.color("#268cf3");
    }else {
      return fill;
    }
});

series.columns.template.events.on("hit", function(ev, target) {
  var item = ev.target.dataItem.component.tooltipDataItem.dataContext;

  if(item.year == '2014'){
      chart.closeAllPopups();
      chart.openPopup('<strong>왜 이렇게 올랐을까?</strong> <p>2014년 신한류 붐과 K팝의 부상으로 입국자 수가 증가했다.</p>');
  }else if(item.year == '2015'){
      chart.closeAllPopups();
      chart.openPopup('<strong>왜 이렇게 내려갔을까?</strong> <p>2015년 6월 한국, 메르스 발생으로 입국자 수가 하락했다.</p>')
  }else if(item.year == '2020'){
      chart.closeAllPopups();  
      chart.openPopup('<strong>왜 이렇게 내려갔을까?</strong> <p>2020년 1월 코로나19 전 세계 확산 시작으로 입국자 수가 하락했다.</p>')
  }else{
      chart.closeAllPopups();
  }
},this);


// on hover, make corner radiuses bigger
var hoverState = series.columns.template.column.states.create("hover");
hoverState.properties.cornerRadiusTopLeft = 0;
hoverState.properties.cornerRadiusTopRight = 0;
hoverState.properties.fillOpacity = 1;

var paretoValueAxis = chart.yAxes.push(new am4charts.ValueAxis());
paretoValueAxis.renderer.opposite = true;
//paretoValueAxis.min = 0;
paretoValueAxis.max = 100;
paretoValueAxis.strictMinMax = true;
paretoValueAxis.renderer.grid.template.disabled = true;
paretoValueAxis.numberFormatter = new am4core.NumberFormatter();
paretoValueAxis.numberFormatter.numberFormat = "#'%'"
paretoValueAxis.cursorTooltipEnabled = false;
paretoValueAxis.fontSize = 0;

var paretoSeries = chart.series.push(new am4charts.LineSeries())
paretoSeries.name = "전년 대비 증감률"; 
paretoSeries.dataFields.valueY = "expenses";
paretoSeries.dataFields.categoryX = "year";
paretoSeries.yAxis = paretoValueAxis;
paretoSeries.tooltipText = "{name}: {valueY.formatNumber('#.0')}%[/]";
paretoSeries.strokeWidth = 2;
paretoSeries.stroke = new am4core.InterfaceColorSet().getFor("alternativeBackground");
paretoSeries.strokeOpacity = 0.5;

var circleBullet = paretoSeries.bullets.push(new am4charts.CircleBullet());
circleBullet.circle.stroke = new am4core.InterfaceColorSet().getFor("alternativeBackground");
circleBullet.circle.strokeWidth = 2;
//circleBullet.circle.dy = -3;
circleBullet.strokeOpacity = 0.5;

// Cursor
chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "panX";


