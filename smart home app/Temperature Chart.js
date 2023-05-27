document.addEventListener('DOMContentLoaded', function () {
    var ctx = document.getElementById('myChartTemp').getContext('2d');
    var gradient = ctx.createLinearGradient(0, 0, 0, 225);
    gradient.addColorStop(0, 'rgba(255, 177, 103, 0.9)');
    gradient.addColorStop(1, 'rgba(215, 227, 244, 0.7)');
    // Line chart
    new Chart(document.getElementById('myChartTemp'), {
        type: 'line',
        data: {
            labels: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
            ],
            datasets: [
                {
                    label: 'Temp (℃)',
                    fill: true,
                    backgroundColor: gradient,
                    borderColor: '#F4A460',
                    tension: 0.4,
                    data: [
                        18, 22, 24, 26, 30, 32, 28, 24, 22,
                    ],
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
