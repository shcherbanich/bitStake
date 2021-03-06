'use strict';
var myLineChart;
var arr = [];
function adddata(val, min, max){
    myLineChart.data.datasets[0].data = val;
    myLineChart.update();
}
// [5, 0.6, 3, 2.2, 2.4, 1.9, 2, 1, 1.8, 3.1, 3, 3.8, 6, 6, 4, 3.6, 2, 5, 4.8,4.5, 6.2, 5.9, 9.4]

$(document).ready(function () {
    var canvas = document.getElementById('myChart');
    canvas.height = '143px';
    canvas.width = '80vw';
    var data = {
        labels: [' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' '],
        datasets: [
            {
                fill: true,
                lineTension: 0.5,
                backgroundColor: "rgba(102,0,128,1)",
                borderColor: "rgba(102,0,128,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                cubicInterpolationMode: 'default',
                borderJoinStyle: 'miter',
                borderWidth: 0,
                pointBorderWidth: 0,
                pointBackgroundColor: 'rgba(255,150,0,0.5)',
                pointHoverRadius: 0,
                pointHoverBorderWidth: 0,
                pointRadius: 0,
                pointHitRadius: 0,
                data: [0.5, 0.6, 1.3, 2.2, 2.4, 1.9, 1.2, 1, 1.8, 3.1, 3, 3.8, 4.6, 4.6, 4, 3.6, 4.2, 5, 4.8,4.5, 6.2, 5.9, 9.4],
            }
        ]
    };

    var option = {
        showLines: true,
        legend: {
            display: false
        },
        scales: {
            xAxes: [{

                gridLines: {

                    display: false,
                    drawBorder: false,
                    drawOnChartArea: false,
                    drawTicks: false,
                    zeroLineColor: "black",
                    zeroLineWidth: 0
                },
                scaleLabel: {
                    display: false,
                },
                ticks: {
                    min: 0,
                    max: 5,
                    stepSize: 1,
                    showLabelBackdrop: false
                },
                angleLines: {
                    display: false
                },
            }],
            yAxes: [{
                ticks: {
                    callback: function(value, index, values) {
                        return null;
                    }
                }
            }]
        },
    };
    myLineChart = new Chart (canvas, {
        type: 'line',
        data:data,
        options:option
    });
    canvas.parentNode.style.height = '163px';

    // arr.push($('.kard-name-links a'));
    // arr = arr[0];
    //
    // $('.kard-name-links a').each(function () {
    //     var len = arr.length;
    //     var self = $(this);
    //     for(var i = 0; i<len; i++){
    //         self.data(i);
    //     }
    // });

});