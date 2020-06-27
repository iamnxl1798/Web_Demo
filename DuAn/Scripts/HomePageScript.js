
var duKienThang;
var duKienNam;
var thucTeThang;
var thucTeNam;
var sanLuongTrongNgay;
var percentThang;
var percentNam;
var formatThang;
var formatNam;
var chart1;
var chart2;
var chart3;

var setValue = function (duKienT, duKienN, thucTeT, thucTeN, sanLuong,percentT,percentN,formatT,formatN) {
    duKienThang = duKienT;
    duKienNam = duKienN;
    thucTeThang = thucTeT;
    thucTeNam = thucTeN;
    sanLuongTrongNgay = sanLuong;
    percentThang = percentT;
    percentNam = percentN;
    formatThang = formatT;
    formatNam = formatN;
    runMain();
}
function runMain() {


    if (duKienThang != null && duKienThang != 0) {
        if (chart1 != null) {
            chart1.dispose();
        }
        $("#chart1Label").val('Không có dữ liệu để hiển thị');
        am4core.ready(function () {

            // Themes begin
            am4core.useTheme(am4themes_animated);
            // Themes end



            // Create chart instance
            chart1 = am4core.create("insert_chart", am4charts.RadarChart);

            // Add data
            chart1.data = [{
                "category": "Tháng",
                "value": thucTeThang,
                "full": duKienThang
            }];

            // Make chart not full circle
            chart1.radius = am4core.percent(95);
            chart1.startAngle = 160;
            chart1.endAngle = 380;
            chart1.innerRadius = am4core.percent(70);
            chart1.logo.disabled = true;
            chart1.paddingTop = 0;
            chart1.marginTop = 0;

            // Set number format

            // Create axes
            var categoryAxis = chart1.yAxes.push(new am4charts.CategoryAxis());
            categoryAxis.dataFields.category = "category";
            categoryAxis.renderer.grid.template.location = 0;
            categoryAxis.renderer.grid.template.strokeOpacity = 0;
            categoryAxis.renderer.minGridDistance = 10;
            categoryAxis.disabled = true;

            var valueAxis = chart1.xAxes.push(new am4charts.ValueAxis());
            valueAxis.renderer.grid.template.strokeOpacity = 0;
            valueAxis.min = 0;
            valueAxis.max = 100;
            valueAxis.strictMinMax = true;
            valueAxis.disabled = true;


            // Create series
            var series1 = chart1.series.push(new am4charts.RadarColumnSeries());
            series1.dataFields.valueX = "full";
            series1.dataFields.categoryY = "category";
            series1.clustered = false;
            series1.columns.template.fill = new am4core.InterfaceColorSet().getFor("alternativeBackground");
            series1.columns.template.fillOpacity = 0.08;
            series1.columns.template.cornerRadiusTopLeft = 20;
            series1.columns.template.strokeWidth = 0;
            series1.columns.template.radarColumn.cornerRadius = 10;

            var series2 = chart1.series.push(new am4charts.RadarColumnSeries());
            series2.dataFields.valueX = "value";
            series2.dataFields.categoryY = "category";
            series2.clustered = false;
            series2.columns.template.strokeWidth = 0;
            series2.columns.template.tooltipText = "{category}: [bold]{value}MW[/]";
            series2.columns.template.radarColumn.cornerRadius = 20;

            series2.columns.template.adapter.add("fill", function (fill, target) {
                return chart1.colors.getIndex(target.dataItem.index);
            });
            var label = chart1.seriesContainer.createChild(am4core.Label);
            label.textAlign = "middle";
            label.horizontalCenter = "middle";
            label.verticalCenter = "middle";
            label.adapter.add("text", function (text, target) {
                return "[font-size:18px]" + percentThang + "%[/]\n[bold font-size:18px]" + formatThang + " MW[/]";
            })

            // Add cursor

        }); // end am4core.ready()
    }
    else {
        $("chart1Label").val("Không có dữ liệu để hiển thị");
    }

    if (duKienNam != null && duKienNam != 0) {
        if (chart2 != null) {
            chart2.dispose();
        }
        $("chart2Label").val('');
        am4core.ready(function () {

            // Themes begin
            am4core.useTheme(am4themes_animated);
            // Themes end



            // Create chart instance
            chart2 = am4core.create("insert_chart2", am4charts.RadarChart);

            // Add data
            chart2.data = [{
                "category": "Năm",
                "value": thucTeNam,
                "full": duKienNam
            }];

            // Make chart not full circle
            chart2.radius = am4core.percent(95);
            chart2.startAngle = 160;
            chart2.endAngle = 380;
            chart2.innerRadius = am4core.percent(70);
            chart2.logo.disabled = true;
            chart2.paddingTop = 0;
            chart2.marginTop = 0;

            // Set number format

            // Create axes
            var categoryAxis = chart2.yAxes.push(new am4charts.CategoryAxis());
            categoryAxis.dataFields.category = "category";
            categoryAxis.renderer.grid.template.location = 0;
            categoryAxis.renderer.grid.template.strokeOpacity = 0;
            categoryAxis.renderer.minGridDistance = 10;
            categoryAxis.disabled = true;

            var valueAxis = chart2.xAxes.push(new am4charts.ValueAxis());
            valueAxis.renderer.grid.template.strokeOpacity = 0;
            valueAxis.min = 0;
            valueAxis.max = 100;
            valueAxis.strictMinMax = true;
            valueAxis.disabled = true;


            // Create series
            var series1 = chart2.series.push(new am4charts.RadarColumnSeries());
            series1.dataFields.valueX = "full";
            series1.dataFields.categoryY = "category";
            series1.clustered = false;
            series1.columns.template.fill = new am4core.InterfaceColorSet().getFor("alternativeBackground");
            series1.columns.template.fillOpacity = 0.08;
            series1.columns.template.cornerRadiusTopLeft = 20;
            series1.columns.template.strokeWidth = 0;
            series1.columns.template.radarColumn.cornerRadius = 10;

            var series2 = chart2.series.push(new am4charts.RadarColumnSeries());
            series2.dataFields.valueX = "value";
            series2.dataFields.categoryY = "category";
            series2.clustered = false;
            series2.columns.template.strokeWidth = 0;
            series2.columns.template.tooltipText = "{category}: [bold]{value}MW[/]";
            series2.columns.template.radarColumn.cornerRadius = 20;

            series2.columns.template.adapter.add("fill", function (fill, target) {
                return chart2.colors.getIndex(target.dataItem.index);
            });
            var label = chart2.seriesContainer.createChild(am4core.Label);
            label.textAlign = "middle";
            label.horizontalCenter = "middle";
            label.verticalCenter = "middle";
            label.adapter.add("text", function (text, target) {
                return "[font-size:18px]" + percentNam + "%[/]\n[bold font-size:18px]" + formatNam + " MW[/]";
            })

            // Add cursor

        }); // end am4core.ready()
    }
    else {
        document.getElementById("chart2Label").innerHTML = "Không có dữ liệu để hiển thị";
    }

    if (sanLuongTrongNgay != null) {
        if (chart3 != null) {
            chart3.dispose();
        }
        $("chart3Label").val('');
        am4core.ready(function () {

            // Themes begin
            am4core.useTheme(am4themes_animated);
            // Themes end

            /**
             * Chart design taken from Samsung health app
             */

            chart3 = am4core.create("sanLuongTrongNgay", am4charts.XYChart);
            chart3.hiddenState.properties.opacity = 0; // this creates initial fade-in
            var dataChart = sanLuongTrongNgay;
            chart3.data = dataChart;

            chart3.zoomOutButton.disabled = false;
            chart3.logo.disabled = true;

            var dateAxis = chart3.xAxes.push(new am4charts.ValueAxis());
            dateAxis.renderer.grid.template.strokeOpacity = 0;
            dateAxis.renderer.minGridDistance = 10;
            dateAxis.tooltip.hiddenState.properties.opacity = 1;
            dateAxis.tooltip.hiddenState.properties.visible = true;
            dateAxis.startLocation = 0.5;
            dateAxis.endLocation = 0.5;
            dateAxis.min = 0;
            dateAxis.max = 49;
            dateAxis.renderer.labels.template.adapter.add("text", function (text, target) {
                return text.match('49|50') ? "" : text;
            });
            dateAxis.cursorTooltipEnabled = false;



            var valueAxis = chart3.yAxes.push(new am4charts.ValueAxis());
            valueAxis.renderer.labels.template.fillOpacity = 0.3;
            valueAxis.renderer.grid.template.strokeOpacity = 0;
            valueAxis.min = 0;



            var series = chart3.series.push(new am4charts.ColumnSeries);
            series.dataFields.valueY = "GiaTri";
            series.dataFields.valueX = "ChuKy";
            series.columns.template.tooltipText = "[bold]{valueY}[/]";
            series.tooltip.pointerOrientation = "horizontal";
            series.sequencedInterpolation = true;
            series.tooltip.pointerOrientation = "vertical";
            series.tooltip.hiddenState.properties.opacity = 1;
            series.tooltip.hiddenState.properties.visible = true;
            var columnTemplate = series.columns.template;
            columnTemplate.width = 20;
            columnTemplate.strokeOpacity = 0;
            chart3.responsive.enabled = true;
            chart3.useDefault = false;
            chart3.responsive.rules.push({
                relevant: function (target) {
                    if (target.pixelWidth < 400) {
                        dateAxis.renderer.minGridDistance = 20;
                        columnTemplate.width = 2;
                        return false;
                    }
                    else if (target.pixelWidth >= 400 && target.pixelWidth <= 600) {
                        dateAxis.renderer.minGridDistance = 20;
                        columnTemplate.width = 5;
                        return false;
                    }
                    else if (target.pixelWidth > 600 && target.pixelWidth <= 1100) {
                        columnTemplate.width = 10;
                        return false;
                    }
                    else if (target.pixelWidth > 1100) {
                        columnTemplate.width = 20;
                        return false;
                    }
                    return false;
                }
            });
            chart3.cursor = new am4charts.XYCursor();



            var label = chart3.plotContainer.createChild(am4core.Label);
        }); // end am4core.ready()
    }
    else {
        document.getElementById("chart3Label").innerHTML = "Không có dữ liệu để hiển thị";
    }
}