//update value interface each second
// import * as gasChart from "./Gas Chart.js"
console.log(12);
setInterval(() => {
    $.getJSON("https://io.adafruit.com/api/v2/hjilklong/feeds/bbc-temp", function (data) {
        console.log(data.last_value);
        document.getElementById("temp").innerHTML = data.last_value + "℃";
    });
    $.getJSON("https://io.adafruit.com/api/v2/hjilklong/feeds/bbc-gas", function (data) {
        console.log(data.last_value);
        document.getElementById("gas").innerHTML = data.last_value + "PPM";
    });
    $.getJSON("https://io.adafruit.com/api/v2/hjilklong/feeds/door", function (data) {
        console.log(data.last_value);
        if (data.last_value == "OPEN")
            document.getElementById("door").checked = true;
        else document.getElementById("door").checked = false;
    });
    $.getJSON("https://io.adafruit.com/api/v2/hjilklong/feeds/bbc-led", function (data) {
        console.log(data.last_value);
        if (data.last_value == "ON")
            document.getElementById("light").checked = true;
        else document.getElementById("light").checked = false;
    });
    // $.getJSON("https://io.adafruit.com/api/v2/hjilklong/feeds/computer", function (data) {
    //     console.log(data.last_value);
    //      if (data.last_value == "ON")
    //         document.getElementById("computer").checked = true;
    //     else document.getElementById("computer").checked = false;
    // })
    // $.getJSON("https://io.adafruit.com/api/v2/hjilklong/feeds/router", function (data) {
    //     console.log(data.last_value);
    //      if (data.last_value == "ON")
    //         document.getElementById("router").checked = true;
    //     else document.getElementById("router").checked = false;
    // })

}, 5000);

//update cua mo
//document.getElementById('door').addEventListener("keyup", opened())
let count = 0
function Door() {
    if (document.getElementById('door').checked) {
        $.ajax({
            url: "https://io.adafruit.com/api/v2/hjilklong/feeds/door/data",
            dataType: "json",
            type: "post",
            headers: {
                'Content-Type': 'application/json',
                'Content-Type': 'application/json',
                'X-AIO-Key': 'aio_zyZf428nfTGdIvBvsQnCpf32kuOg'
            },
            data: JSON.stringify({ "value": "OPEN" }),
            processData: false,
            success: function (data, textStatus, jQxhr) {
                //alert('ONN');
            },
            error: function (jQxhr, textStatus, errorThrown) {
                console.log(errorThrown);
            },
        })
    } else {
        $.ajax({
            url: "https://io.adafruit.com/api/v2/hjilklong/feeds/door/data",
            dataType: "json",
            type: "post",
            headers: {
                'Content-Type': 'application/json',
                'Content-Type': 'application/json',
                'X-AIO-Key': 'aio_zyZf428nfTGdIvBvsQnCpf32kuOg'
            },
            data: JSON.stringify({ "value": "CLOSE" }),
            processData: false,
            success: function (data, textStatus, jQxhr) {
                //alert('ONN');
            },
            error: function (jQxhr, textStatus, errorThrown) {
                console.log(errorThrown);
            },
        })
    }
}

function Light() {
    if (document.getElementById('light').checked) {
        $.ajax({
            url: "https://io.adafruit.com/api/v2/hjilklong/feeds/bbc-led/data",
            dataType: "json",
            type: "post",
            headers: {
                'Content-Type': 'application/json',
                'Content-Type': 'application/json',
                'X-AIO-Key': 'aio_zyZf428nfTGdIvBvsQnCpf32kuOg'
            },
            data: JSON.stringify({"value": "ON"}),
            processData: false,
            success: function (data, textStatus, jQxhr) {
                //alert('ONN');
            },
            error: function (jQxhr, textStatus, errorThrown) {
                console.log(errorThrown);
            },
        })
    } else {
        $.ajax({
            url: "https://io.adafruit.com/api/v2/hjilklong/feeds/bbc-led/data",
            dataType: "json",
            type: "post",
            headers: {
                'Content-Type': 'application/json',
                'Content-Type': 'application/json',
                'X-AIO-Key': 'aio_zyZf428nfTGdIvBvsQnCpf32kuOg'
            },
            data: JSON.stringify({ "value": "OFF" }),
            processData: false,
            success: function (data, textStatus, jQxhr) {
                //alert('ONN');
            },
            error: function (jQxhr, textStatus, errorThrown) {
                console.log(errorThrown);
            },
        })

    }
}
// function setConnect() {
//     if (document.getElementById('router').checked) {
//         $.ajax({
//             url: "https://io.adafruit.com/api/v2/hjilklong/feeds/router/data",
//             dataType: "json",
//             type: "post",
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Content-Type': 'application/json',
//                 'X-AIO-Key': 'aio_zyZf428nfTGdIvBvsQnCpf32kuOg'
//             },
//             data: JSON.stringify({"value": "ON"}),
//             processData: false,
//             success: function (data, textStatus, jQxhr) {
//                 //alert('ONN');
//             },
//             error: function (jQxhr, textStatus, errorThrown) {
//                 console.log(errorThrown);
//             },
//         })
//     } else {
//         $.ajax({
//             url: "https://io.adafruit.com/api/v2/hjilklong/feeds/router/data",
//             dataType: "json",
//             type: "post",
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Content-Type': 'application/json',
//                 'X-AIO-Key': 'aio_zyZf428nfTGdIvBvsQnCpf32kuOg'
//             },
//             data: JSON.stringify({ "value": "OFF" }),
//             processData: false,
//             success: function (data, textStatus, jQxhr) {
//                 //alert('ONN');
//             },
//             error: function (jQxhr, textStatus, errorThrown) {
//                 console.log(errorThrown);
//             },
//         })

//     }
// }
// function Start() {
//     if (document.getElementById('computer').checked) {
//         $.ajax({
//             url: "https://io.adafruit.com/api/v2/hjilklong/feeds/computer/data",
//             dataType: "json",
//             type: "post",
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Content-Type': 'application/json',
//                 'X-AIO-Key': 'aio_zyZf428nfTGdIvBvsQnCpf32kuOg'
//             },
//             data: JSON.stringify({"value": "ON"}),
//             processData: false,
//             success: function (data, textStatus, jQxhr) {
//                 //alert('ONN');
//             },
//             error: function (jQxhr, textStatus, errorThrown) {
//                 console.log(errorThrown);
//             },
//         })
//     } else {
//         $.ajax({
//             url: "https://io.adafruit.com/api/v2/hjilklong/feeds/computer/data",
//             dataType: "json",
//             type: "post",
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Content-Type': 'application/json',
//                 'X-AIO-Key': 'aio_zyZf428nfTGdIvBvsQnCpf32kuOg'
//             },
//             data: JSON.stringify({ "value": "OFF" }),
//             processData: false,
//             success: function (data, textStatus, jQxhr) {
//                 //alert('ONN');
//             },
//             error: function (jQxhr, textStatus, errorThrown) {
//                 console.log(errorThrown);
//             },
//         })

//     }
// }