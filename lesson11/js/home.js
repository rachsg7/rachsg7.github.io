const fishhavenurl = 'https://api.openweathermap.org/data/2.5/weather?lat=42.03&lon=-111.39&units=imperial&APPID=1021b827abc373236d00eb9d78264b55';
const prestonurl = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=1021b827abc373236d00eb9d78264b55';
const sodaspringsurl = 'https://api.openweathermap.org/data/2.5/weather?lat=42.65&lon=-111.6&units=imperial&APPID=1021b827abc373236d00eb9d78264b55';


fetch(prestonurl)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('preston-now').innerHTML = jsObject.main.temp + "&#176;F";
    })

fetch(sodaspringsurl)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('sodasprings-now').innerHTML = jsObject.main.temp + "&#176;F";
    })

fetch(fishhavenurl)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('fishhaven-now').innerHTML = jsObject.main.temp + "&#176;F";
    })