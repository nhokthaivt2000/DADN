//update value interface each second 
setInterval(() => {
    $.getJSON("https://io.adafruit.com/api/v2/jackson300802/feeds/bbc-led", function (data) {
        console.log(data.last_value);
        document.getElementById("Nhiet_do").innerHTML = data.last_value
    })
}, 10000);

//update cua mo
//document.getElementById('door').addEventListener("keyup", opened())
let count = 0
function opened() {
    if (document.getElementById('remember').checked) {
        $.ajax({
            url: "https://io.adafruit.com/api/v2/jackson300802/feeds/door/data",
            dataType: "json",
            type: "post",
            headers: {
                'Content-Type': 'application/json',
                'Content-Type': 'application/json',
                'X-AIO-Key': 'aio_YGgZ93ZTlFEJJoacbMg1ytjztmyQ'
            },
            data: JSON.stringify({ "value": "ONN" }),
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
            url: "https://io.adafruit.com/api/v2/jackson300802/feeds/door/data",
            dataType: "json",
            type: "post",
            headers: {
                'Content-Type': 'application/json',
                'Content-Type': 'application/json',
                'X-AIO-Key': 'aio_YGgZ93ZTlFEJJoacbMg1ytjztmyQ'
            },
            data: JSON.stringify({ "value": "closed" }),
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
