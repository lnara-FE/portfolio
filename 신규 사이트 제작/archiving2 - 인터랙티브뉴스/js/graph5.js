var winWidth = window.outerWidth;

am4core.addLicense("CH200409466666130");
am4core.useTheme(am4themes_animated);

am4core.options.autoSetClassName = true;

var container = am4core.create("chartdiv1", am4core.Container);
container.width = am4core.percent(100);
container.height = am4core.percent(100);
container.layout = "horizontal";

function createChart(data){
    var chart = container.createChild(am4charts.XYChart);
    chart.autoResize = true;
    chart.responsive.enabled = true;

    chart.data = data;

    /* chart.legend = new am4charts.Legend();
    chart.legend.position = "top";
    chart.legend.contentAlign = "center";
    chart.legend.fontSize = 13; */

    // Create axes
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "year";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.grid.template.disabled = true;
    categoryAxis.renderer.minGridDistance = 10;
    categoryAxis.tooltip.disabled = true;

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.cursorTooltipEnabled = false;
    valueAxis.min = 0;
    

    // Create series
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.name = "군산 인구 수"; 
    series.sequencedInterpolation = true;
    series.dataFields.valueY = "value";
    series.dataFields.categoryX = "year";
    series.tooltipText = "[{categoryX}: bold]{valueY}[/]";
    series.columns.template.strokeWidth = 0;
    series.tooltip.pointerOrientation = "vertical";

    series.columns.template.column.cornerRadiusTopLeft = 10;
    series.columns.template.column.cornerRadiusTopRight = 10;
    series.columns.template.column.fillOpacity = 0.8;
    series.columns.template.fill = am4core.color("#e5f1ef");
    series.columns.template.adapter.add("fill", function(fill, target) {
        if ((target.dataItem.categoryX == "1899") || (target.dataItem.categoryX == "1915")) {
            return am4core.color("#c2d0cd");
        }else {
            return fill;
        }
    });

    if(winWidth <= 959){
      valueAxis.renderer.labels.template.disabled = true;
    }
  

    series.columns.template.events.on("hit", function(ev, target) {
    var item = ev.target.dataItem.component.tooltipDataItem.dataContext;

    if(item.year == '1899'){
        chart.closeAllPopups();
        chart.openPopup('<p>군산항 개항</p>');
    }else if(item.year == '1915'){
        chart.closeAllPopups();
        chart.openPopup('<div><strong>1910</strong><p>군산부 창설</p></div> <div><strong>1913</strong><p>이리(익산)-군산선 개통</p></div>')
    }else{
        chart.closeAllPopups();
    }
    },this);

    // on hover, make corner radiuses bigger
    var hoverState = series.columns.template.column.states.create("hover");
    hoverState.properties.cornerRadiusTopLeft = 0;
    hoverState.properties.cornerRadiusTopRight = 0;
    hoverState.properties.fillOpacity = 1;

    axisBreak = valueAxis.axisBreaks.create();
    axisBreak.startValue = 15000;
    axisBreak.endValue = 45000;
    axisBreak.breakSize = 0.05;

    // Cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = "panX";
}

createChart([{
  "year": "1899",
  "value": 588
}, {
  "year": "1915",
  "value": 10965
}, {
  "year": "1920",
  "value": 14138,
}, {
  "year": "1925",
  "value": 21027
}, {
  "year": "1930",
  "value": 25961
}, {
  "year": "1935",
  "value": 41077
}, {
  "year": "1940",
  "value": 52923
}, {
  "year": "1944",
  "value": 58000
}])


