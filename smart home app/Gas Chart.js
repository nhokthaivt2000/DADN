var a;
// var dataGas = [() => {
//     for (var i = 0; i < 6; i++){
//         var a = new Date();
//         a.setMinutes(a.getMinutes() - i * 5);

//     }
// }];
var dataGas = [];
var labelGas = [];
setTimeout(() => {
    $.getJSON("https://io.adafruit.com/api/v2/hjilklong/feeds/bbc-gas/data", function (data) {
        console.log(data);
        for (var i = 0; i < 12; i++) {
            dataGas.push(+data[i].value);
            var q = new Date(data[i].created_at);
            labelGas.push(((q.getHours() < 10) ? "0" : "") + q.getHours() + ":" + ((q.getMinutes() < 10) ? "0" : "") + q.getMinutes());
        }
        dataGas.reverse();
        labelGas.reverse();
    });
    
    console.log(dataGas);
    console.log(labelGas);
    // dataGas.reverse();
    // labelGas.reverse();
    a.update();
},1);

// console.log(dataGas);
// console.log(new Date());
// console.log(new Date().toLocaleString("vi", { TimeZone: "Vietnam" }));


document.addEventListener('DOMContentLoaded', function () {
    var ctx = document.getElementById('myChartGas').getContext('2d');
    var gradient = ctx.createLinearGradient(0, 0, 0, 225);
    gradient.addColorStop(0, 'rgba(255, 177, 103, 0.9)');
    gradient.addColorStop(1, 'rgba(215, 227, 244, 0.7)');
    // Line chart
    a = new Chart(document.getElementById('myChartGas'), {
        type: 'line',
        data: {
            labels: labelGas,
            datasets: [
                {
                    label: 'Temp (℃)',
                    fill: true,
                    backgroundColor: gradient,
                    borderColor: '#F4A460',
                    tension: 0.4,
                    data: dataGas,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: false,
            },
            tooltips: {
                intersect: false,
            },
            hover: {
                intersect: true,
            },
            plugins: {
                filler: {
                    propagate: false,
                },
            },
            layout:{
                padding: {
                    left: 10,
                    bottom: 20,
                },
            },
            scales: {
                xAxes: [
                    {
                        reverse: false,
                        gridLines: {
                            color: 'rgba(0,0,0,0.0)',
                        },

                        grid: {
                            color: 'white',
                            borderColor: 'white',
                            tickColor: 'white',
                        },
                    },
                ],
                yAxes: [
                    {
                        ticks: {
                            stepSize: 2,
                        },
                        borderDash: [3, 3],
                        gridLines: {
                            color: 'rgba(0,0,0,0.0)',
                        },
                        grid: {
                            color: 'white',
                            borderColor: 'white',
                            tickColor: 'white',
                        },
                    },
                ],
            },
        },
    });
});


// var day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var d = new Date().getDay();
// console.log(d);
// console.log(a.data.dataGasets[0].data);
// setTimeout(function () {
//     if (day[d] != a.data.labels[6]) {
//         for (var i = 1; i <= d; i++) {
//             a.data.labels.shift();
//             a.data.labels.push(day[i]);
//         }
//     }
// },1)
// var currentTime = new Date();
// var lastTime;
// console.log(((currentTime.getHours() < 10) ? "0" : "") + currentTime.getHours() + ":" + ((currentTime.getMinutes() < 10) ? "0" : "") + currentTime.getMinutes());
// function getCurrentTime(q) {
//     return ((q.getHours() < 10) ? "0" : "") + q.getHours() + ":" + ((q.getMinutes() < 10) ? "0" : "") + q.getMinutes();
// }


// $.getJSON("https://io.adafruit.com/api/v2/hjilklong/feeds/bbc-gas/data", function (data) {
//     console.log(data);
//     console.log(data[0].created_at);
//     var q = new Date(data[0].created_at);
//     // q.setMinutes(q.getMinutes());
//     // console.log(q);
//     console.log(((q.getHours() < 10) ? "0" : "") + q.getHours() + ":" + ((q.getMinutes() < 10) ? "0" : "") + q.getMinutes());

// });


var currentTime = new Date();
setInterval(() => {    
    currentTime = new Date();
    if (currentTime.getMinutes() % 5 == 0 && (((currentTime.getHours() < 10) ? "0" : "") + currentTime.getHours() + ":" + ((currentTime.getMinutes() < 10) ? "0" : "") + currentTime.getMinutes()) != labelGas[5]
    || !(currentTime.getHours() == labelGas[5].substring(0, 2) && currentTime.getMinutes() - labelGas[5].substring(3) <= 5)) {
        console.log(currentTime.getMinutes());
        console.log(currentTime.getMinutes() % 5);
        labelGas.shift();
        labelGas.push(((currentTime.getHours() < 10) ? "0" : "") + currentTime.getHours() + ":" + ((currentTime.getMinutes() < 10) ? "0" : "") + currentTime.getMinutes());
        console.log(labelGas);
    }
    
    $.getJSON("https://io.adafruit.com/api/v2/hjilklong/feeds/bbc-gas", function (data) {
        dataGas[5] = data.last_value;
        // a.data.dataGasets[0].data[b.data.labels.indexOf(day[d])] = Math.floor(Math.random() * 50);
    });
    // console.log(a.data.dataGasets[0].data[a.data.labels.indexOf(day[d])]);
    // console.log(a.data.dataGasets[0].data[a.data.labels.indexOf('Fri')]);
    // console.log(a.data.labels);
    a.update();
}, 5000);

// function addData(chart, label, data) {
//     chart.data.labels.push(label);
//     chart.data.dataGasets.forEach((dataGaset) => {
//         dataGaset.data.push(data);
//     });
//     chart.update();
// }

// function removeData(chart) {
//     chart.data.labels.pop();
//     chart.data.dataGasets.forEach((dataGaset) => {
//         dataGaset.data.pop();
//     });
//     chart.update();
// }