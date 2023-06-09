// type='module';
import count from './main.js';
// require('./main.js');

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
let count = 0;
$('.get-weather').on('click', () => {
    counter++;
    count++;
    console.log("count: ",counter);
    console.log("count: ",count);
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
        let staggered = 1000;
        forecast.html("")
        // forecast.hide();
        for(let period of periods){
            // console.log(feature.headline);
            // console.log('one period');
            // console.log(period);

            // forecast.html("")
            // forecast.hide();
            // forecast.fadeIn(400);

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


            // setTimeout(() => {
            //     forecast.append(entry);
            // }, 0);
            forecast.append(entry);

            // timer = timer + 0;

            entry.hide();
            entry.fadeIn(staggered);
            staggered += 1000;


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
        // forecast.fadeIn(100);


    })
    .catch(err => console.log(err));
})


//original way
$('.test-jq').on('click', () => {
    console.log('test-jq');
    fetch("https://api.weather.gov/gridpoints/PHI/46,77/forecast")
    .then(res => res.json())
    .then(json => {
        let display = $('#display');
        let periods = json.properties.periods;
        for(let period of periods){
            // display.html("");

        }
    })
})










$('.open-weather').on('click', () => {
    counter++;
    openWeather();
})

function openWeather(){
    fetch("https://api.openweathermap.org/data/3.0/onecall?lat=39.99&lon=-75.27&appid=01f643ba97215cb02bea5c9cc71a762a")
    .then(res => res.json())
    .then(json => {
        console.log(json);
        let temp = json.current.temp;
        let fahr = Math.floor(100*((((temp - 273.15) + 40) * 9/5) - 40))/100;

        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date+' '+time;

        let display = $('<div/>');
        display.toggle();

        display.text(dateTime+": TEMP(f): "+fahr);
        $('#open-forecast').prepend(display);
        display.fadeIn();


        // $('#open-forecast').text("temperature: "+fahr)
    })
}

//https://www.weather.gov/documentation/services-web-api#/
//https://openweathermap.org/api

// "https://api.weather.gov/gridpoints/TOP/32,81/forecast"

//"https://api.weather.gov/gridpoints/PHI/46,77/forecast"


// fetch('URL', {
//     method: POST,
//     headers: {
//         "content-type": "application/json",
//         "authorization": 'JWT token maybe?'
//     },
//     body: JSON.stringify(data),
// })

//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

