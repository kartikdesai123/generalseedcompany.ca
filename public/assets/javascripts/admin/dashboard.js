var Dashboard = function () {

//    var Charts = function () {
//        var data = {
//            'startDate': $('.filter_option option:selected').attr('data-startDate'),
//            'endDate': $('.filter_option option:selected').attr('data-EndDate'),
//        }
//        $('.salesChartDate').text('  ( ' + data['startDate'] + ' -' + data['endDate'] + ') ');
//
//        var url = adminurl + 'dashboard/getPaymentChartData';
//        ajaxcall(url, data, function (output) {
//            output = JSON.parse(output);
////            console.log(output);
////            console.log(output[0]['value']);
////            return false;
//            var linechart = AmCharts.makeChart("payment_chart", {
//                "type": "serial",
//                "theme": "light",
//                "pathToImages": App.getGlobalPluginsPath() + "amcharts/amcharts/images/",
//                "autoMargins": true,
//                "marginLeft": 30,
//                "marginRight": 8,
//                "marginTop": 10,
//                "marginBottom": 26,
//                "fontFamily": 'Open Sans',
//                "color": '#888',
//                "dataProvider": output,
////                "dataProvider": [{
////                        "day": "1 Days",
////                        "value": 0.3
////                    }, {
////                        "day": "3 Days",
////                        "value": 0.1
////                    }, {
////                        "day": "6 Days",
////                        "value": 66
////                    }],
//                "valueAxes": [{
//                        "axisAlpha": 5,
//                        "position": "left",
//                        "unit": " $",
////                        "duration": "mm",
////                        "durationUnits": {
////                            "mm": "$"
////                        },
//                    }],
//                "graphs": [{
//                        "id": "g1",
//                        "balloonText": "[[category]]<br><b><span style='font-size:14px;'>[[value]]</span>" + " $" + "</b>",
//                        "bullet": "round",
//                        "bulletSize": 8,
//                        "lineColor": "#d1655d",
//                        "lineThickness": 2,
//                        "negativeLineColor": "#637bb6",
//                        "type": "smoothedLine",
//                        "valueField": "value",
//                    }],
////            "dataDateFormat": "YYYY",
//                "categoryField": "day",
//                "categoryAxis": {
////                "minPeriod": "YYYY",
////                "parseDates": true,
//                    "minorGridAlpha": 50,
//                    "minorGridEnabled": true
//                },
//                "export": {
//                    "enabled": true
//                },
//            });
//
//            $('#payment_chart').closest('.portlet').find('.fullscreen').click(function () {
//                linechart.invalidateSize();
//            });
//        });
//
//    }

    var handel_counter = function () {
        $('body').on('click', '.btn_go', function () {
            var data = {
                'startDate': $('.filter_option option:selected').attr('data-startDate'),
                'endDate': $('.filter_option option:selected').attr('data-EndDate'),
            }
            ajaxcall(adminurl + 'dashboard/getDashboardData', data, function (output) {
                output = JSON.parse(output);
//                console.log(output);
                $('.total_payment_cls').attr('data-value', output['total_payment']['paymentAmount']);
                $('.total_payment_cls').counterUp();
            });
            Charts();
        });
        $('body').on('change', '.filter_option', function () {
            if ($('.filter_option option:selected').val() == 'custom') {
                $('.showDataPicker').show();
            } else {
                $('.showDataPicker').hide();
            }
        });
        $('body').on('change', '.dataFilter', function () {
            var fromDate = $('.from_date').val();
            var dsplit = fromDate.split("/");
            var toDate = $('.to_date').val();
            var tosplit = toDate.split("/");
            $(".filter_option option:selected").attr("data-startDate", dsplit[2] + '-' + dsplit[0] + '-' + dsplit[1]);
            $(".filter_option option:selected").attr("data-EndDate", tosplit[2] + '-' + tosplit[0] + '-' + tosplit[1]);
        });
    };
    return {
        //main function to initiate the module
        init: function () {
//            Charts();
//            handel_counter();
        },
    };
}();
