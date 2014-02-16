$(document).ready(function () {
    $('#inputGet').click(function () {
        // Request the JSON and process it
        $.ajax({
            type: 'GET',
            url: "http://api.openweathermap.org/data/2.5/weather?q=" + $('#inputCity').val() + "," + $('#inputCountry').val() +"&units=metric",
            success: function (data) {
                var weatherObject = data;
                console.log(data);
                console.log(weatherObject.main.temp);
                $('#inputTemp').val(weatherObject.main.temp);
            },
            dataType: 'jsonp'
        });
    });
});
