var winWidth = window.outerWidth;

am4core.addLicense("CH200409466666130");
am4core.useTheme(am4themes_animated);

am4core.options.autoSetClassName = true;

var chart = am4core.create("chartdiv2", am4charts.XYChart);

// Add data
chart.data = [{
    "year": "2012",
    "value": 4.43
}, {
    "year": "2013",
    "value": 4.62
}, {
    "year": "2014",
    "value": -0.81
}, {
    "year": "2015",
    "value": 4.06
}, {
    "year": "2016",
    "value": 2.14
}, {
    "year": "2017",
    "value": 10.97
}, {
    "year": "2018",
    "value": 2.63
}, {
    "year": "2019",
    "value": 0.92
}, {
    "year": "2020",
    "value": 4.80
}];


chart.autoResize = true;
chart.responsive.enabled = true;

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "year";
categoryAxis.renderer.grid.template.disabled = true;
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.minGridDistance = 30;

if(winWidth < 959){
    categoryAxis.fontSize = 13;
}else {
    categoryAxis.fontSize = 17;
}

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.renderer.labels.template.disabled = true;

var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.valueY = "value";
series.dataFields.categoryX = "year";
series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
series.columns.template.fillOpacity = .5;
series.columns.template.fill = am4core.color("#268cf3");
series.columns.template.adapter.add("fill", function(fill, target) {
    if (target.dataItem && (target.dataItem.valueY < 0)) {
      return am4core.color("#a55");
    }
    else {
      return fill;
    }
});

var bullet = series.bullets.push(new am4charts.LabelBullet());
bullet.locationX = 0.5;
bullet.label.text = "{value}%";
bullet.label.fill = am4core.color("#222222");
bullet.label.fontSize = 13; 
bullet.label.truncate = false;
bullet.label.dy = -10;

var columnTemplate = series.columns.template;
columnTemplate.strokeWidth = 0;