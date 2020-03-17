const apiURL = 'https://api.openweathermap.org/data/2.5/weather?lat=42.03&lon=-111.39&units=imperial&APPID=1021b827abc373236d00eb9d78264b55';

function windChill(temperature, windSpeed) {
    temperature = parseFloat(temperature);
    windSpeed = parseFloat(windSpeed);
    if (temperature <= 50 && windSpeed >= 3) {
        let windspeedExponent = Math.pow(windSpeed, 0.16);
        let windChillf = (35.74 + 0.6215 * temperature - 35.75 * windspeedExponent + 0.4275 * temperature * windspeedExponent).toFixed(0);
        return windChillf;
    } else {
        return "N/A";
    }

}

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('currentweather').textContent = jsObject.weather[0].main;
        document.getElementById('high').innerHTML = jsObject.main.temp_max + "&#176;F";
        document.getElementById('humidity').textContent = jsObject.main.humidity + "%";
        document.getElementById('windSp').textContent = jsObject.wind.speed + " mph";
        document.getElementById("windch").innerHTML = windChill(jsObject.main.temp, jsObject.wind.speed) + "&#176;F";
    })

const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=lat=42.03&lon=-111.39&units=imperial&APPID=1021b827abc373236d00eb9d78264b55';
fetch(forecastURL)
    .then((response) => response.json())
    .then((jsObject2) => {
        console.log(jsObject2);
        let day = 1;

        for (let i = 0; i < jsObject2.list.length && day < 7; i++) {
            if (jsObject2.list[i].dt_txt.includes("18:00:00")) {
                let forecastHigh = jsObject2.list[i].main.temp;
                const imagesrc = 'https://openweathermap.org/img/w/' + jsObject2.list[i].weather[0].icon + '.png';
                const desc = jsObject2.list[i].weather[0].description;
                let imgID = 'imgday' + day;

                document.getElementById('imgday' + day).src = imagesrc;
                document.getElementById('imgday' + day).alt = desc;
                /** I have no idea why I couldn't get these to work but they would not set the src to anything. */
                //document.getElementById('imgday' + day).textContent = imagesrc;
                //document.getElementById('imgday' + day).setAttribute = ('src', imagesrc);
                //document.getElementById('imgday' + day).setAttribute = ('alt', desc);
                document.getElementById('tempday' + day).innerHTML = forecastHigh + "&#xb0;F";


                day++;
            }
        }
    })