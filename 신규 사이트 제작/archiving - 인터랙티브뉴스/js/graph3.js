am4core.addLicense("CH200409466666130");

am4core.useTheme(am4themes_animated);
am4core.options.autoSetClassName = true;

var chart = am4core.create("chartdiv", am4charts.XYChart);


chart.data = [{
    "year": "2012",
    "value": 115388
  }, {
    "year": "2014",
    "value": 158844
  }, {
    "year": "2016",
    "value": 246793
  },{
    "year": "2019",
    "value": 346275,
    "disabled": false
  }];

chart.dateFormatter.dateFormat = "yyyy";
chart.autoResize = true;
//chart.numberFormatter.numberFormat = "#.";

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "year";
categoryAxis.renderer.grid.template.disabled = true;
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.minGridDistance = 30;


var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.renderer.labels.template.disabled = true;

var series = chart.series.push(new am4charts.LineSeries());
series.id = 'g1'
series.dataFields.valueY = "value";
series.dataFields.categoryX = "year";
series.name = "Sales";
series.strokeWidth = 3;
series.strokeDasharray = "5,4";

var range = valueAxis.createSeriesRange(series);
range.value = 0;
range.endValue = 346275;
range.contents.fill = am4core.color("#268cf3");
range.contents.fillOpacity = 0.1;

// Add simple bullet
var bullet = series.bullets.push(new am4charts.LabelBullet());
bullet.locationX = 0.5;
bullet.label.text = "{value}명";
bullet.label.fill = am4core.color("#222222");
bullet.label.fontSize = 13; 
bullet.label.truncate = false;
bullet.label.dy = 15;
bullet.label.dx = 0;


var bullet2 = series.bullets.push(new am4charts.CircleBullet());
bullet2.disabled = true;
bullet2.propertyFields.disabled = "disabled";
bullet2.paddingTop = 2;

var secondCircle = bullet2.createChild(am4core.Circle);
secondCircle.radius = 6;
secondCircle.fill = am4core.color("#268cf3");

bullet2.events.on("inited", function(event){
  animateBullet(event.target.circle);
})

function animateBullet(bullet) {
  var animation = bullet.animate([{ property: "scale", from: 1, to: 5 }, { property: "opacity", from: 1, to: 0 }], 1000, am4core.ease.circleOut);
  animation.events.on("animationended", function(event){
    animateBullet(event.target.object);
  })
}

function lineEffect(series){
  var animation2 = series.animate([{property: "opacity", from: 0, to: 1 }],1000, am4core.ease.quadIn)
  animation2.events.on("animationended", function(event){
    lineEffect(event.target.object);
  })
}
