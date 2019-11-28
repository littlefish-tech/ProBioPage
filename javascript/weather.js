//query url for pollen

function callweather() {
       
    var queryURL = "https://api.waqi.info/feed/here/?token=12f820d56fa3fd40bd4af15eae5097c9875e7bc5";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response){
        console.log(response)
        var weatherTemp = response.data.iaqi.t.v;
        console.log(weatherTemp);
        //Different ranges for AQI (air quality index)
       
        $(".weather").append(JSON.stringify(response.data.iaqi.t.v));
        //$("#pollen").append(notes);
        
    })
}
callweather()

