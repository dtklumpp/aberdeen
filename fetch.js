function getWeather(){
    let weather = $('#weather');
    fetch("https://api.weather.gov/alerts/active?area=PA")
    .then(res => res.json())
    .then(json => {
        console.log(json);
        let features = json.features;
        for(let feature of features){
            if(feature.properties.areaDesc.includes("Philadelphia")){
                // console.log(feature.headline);

                weather.hide();
                weather.fadeIn(400);

                $('#place').text(feature.properties.areaDesc);
                $('#event').text(feature.properties.event);
                $('#headline').text(feature.properties.headline);
                $('#desc').text(feature.properties.description);

                // let head = $('<h3/>');
                // let par = $('<p/>');
                // let par2 = $('<p/>');
                // let par3 = $('<p/>');
                // head.text(feature.properties.areaDesc);
                // par.text(feature.properties.event);
                // par2.text(feature.properties.headline);
                // par3.text(feature.properties.description);
                // weather.append(head);
                // weather.append(par);
                // weather.append(par2);
                // weather.append(par3);
                break;
            }
        }
    })
    .catch(err => console.log(err));
}

let counter = 0;
$('.get-weather').on('click', () => {
    counter++;
    console.log("count: ",counter);
    getWeather();
})

$('.alt-forecast').on('click', () => {
    console.log('alt');
    fetch("https://api.weather.gov/gridpoints/PHI/46,77/forecast")
    // fetch("https://api.weather.gov/points/39.9996,-75.2730")
    .then(res => res.json())
    .then(json => {
        console.log(json);
        let forecast = $('#forecast');
        let periods = json.properties.periods;

        // let timer = 0;
        for(let period of periods){
            // console.log(feature.headline);
            // console.log('one period');
            // console.log(period);

            forecast.html("")
            forecast.hide();
            forecast.fadeIn(400);

            // $('#place').text(period.properties.areaDesc);
            // $('#event').text(period.properties.event);
            // $('#headline').text(period.properties.headline);
            // $('#desc').text(period.properties.description);

            //name
            //details
            //temperature
            //wind
            //humidity
            let name = $('<h3/>');
            let temperature = $('<p/>');
            let humidity = $('<p/>');
            let wind = $('<p/>');
            let details = $('<p/>');

            name.text(period.name);
            // console.log(period.name);
            temperature.text("temp: "+period.temperature);
            humidity.text("humidity: "+period.relativeHumidity.value);
            wind.text("winds "+period.windSpeed);
            details.text(period.detailedForecast);

            let entry = $('<div/>');

            entry.append(name);
            entry.append(temperature);
            entry.append(humidity);
            entry.append(wind);
            entry.append(details);

            // forecast.append(name);
            // forecast.append(temperature);
            // forecast.append(humidity);
            // forecast.append(wind);
            // forecast.append(details);
            setTimeout(() => {
                forecast.append(entry);
            }, 0);
            // timer = timer + 0;


            // let head = $('<h3/>');
            // let par = $('<p/>');
            // let par2 = $('<p/>');
            // let par3 = $('<p/>');
            // head.text(feature.properties.areaDesc);
            // par.text(feature.properties.event);
            // par2.text(feature.properties.headline);
            // par3.text(feature.properties.description);
            // weather.append(head);
            // weather.append(par);
            // weather.append(par2);
            // weather.append(par3);
        }

    })
    .catch(err => console.log(err));
})



//https://www.weather.gov/documentation/services-web-api#/
//https://openweathermap.org/api

// "https://api.weather.gov/gridpoints/TOP/32,81/forecast"

//"https://api.weather.gov/gridpoints/PHI/46,77/forecast"