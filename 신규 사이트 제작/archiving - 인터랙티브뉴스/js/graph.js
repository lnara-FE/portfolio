am4core.addLicense("CH200409466666130");
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);

// Add data
chart.data = [{
    "year": "'00",
    "value1": 47.8,
    "value2": 37.2,
    "value3": 11.5,
    "value4": 3.5
},{
    "year": "'05",
    "value1": 52.7,
    "value2": 32.2,
    "value3": 13.5,
    "value4": 1.6
},{
    "year": "'10",
    "value1": 58.4,
    "value2": 27.9,
    "value3": 12.6,
    "value4": 1.1
},{
    "year": "'15",
    "value1": 59.9,
    "value2": 24.3,
    "value3": 14.6,
    "value4": 1.2
},{
    "year": "'16",
    "value1": 60.1,
    "value2": 23.8,
    "value3": 14.9,
    "value4": 1.2
},{
    "year": "'17",
    "value1": 60.6,
    "value2": 23.1,
    "value3": 15.0,
    "value4": 1.2
},{
    "year": "'18",
    "value1": 61.4,
    "value2": 22.4,
    "value3": 15.0,
    "value4": 1.2
}];

chart.legend = new am4charts.Legend();
chart.legend.position = "top";
chart.legend.contentAlign = "center";
chart.legend.maxwidth = 90;
chart.maskBullets = false; 

chart.legend.itemContainers.template.events.on("hit", function(ev) {
    var seriesColumn = ev.target.dataItem.dataContext.columns.template;
    seriesColumn.isActive = !seriesColumn.isActive; 

    var graph_info = document.getElementById('graph_info_id');
    graph_info.style.display ="none";
});

// Create axes
var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "year";
categoryAxis.renderer.grid.template.opacity = 0;
categoryAxis.fontSize = 13;

var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
valueAxis.min = 0;
valueAxis.max = 100;
//valueAxis.renderer.grid.template.opacity = 0;
valueAxis.renderer.ticks.template.strokeOpacity = 0.5;
valueAxis.renderer.ticks.template.stroke = am4core.color("#495C43");
valueAxis.renderer.ticks.template.length = 10;
valueAxis.renderer.line.strokeOpacity = 0.5;
valueAxis.renderer.baseGrid.disabled = true;
//valueAxis.renderer.minGridDistance = 20;
valueAxis.renderer.grid.template.disabled = true;
valueAxis.renderer.labels.template.disabled = true;

// Create series
function createSeries(field, name, color) {
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueX = field;
    series.dataFields.categoryY = "year";
    series.stacked = true;
    series.name = name;
    series.fill = color;
    series.strokeWidth = 0;
    series.hidden = 'true';
    
    var labelBullet = series.bullets.push(new am4charts.LabelBullet());
    labelBullet.locationX = 0.5;
    labelBullet.label.text = "{valueX}";
    labelBullet.label.fill = am4core.color("#222222");
    labelBullet.label.horizontalCenter = "right";
    labelBullet.label.fontSize = 13; 
    labelBullet.label.truncate = false;
    labelBullet.label.dx = 15;
}

createSeries("value1", "아파트", "#7F6F7E");
createSeries("value2", "단독주택", "#A6A6A6");
createSeries("value3", "연립·다세대", "#7C7C7C");
createSeries("value4", "비거주용","#EE7C2E");




