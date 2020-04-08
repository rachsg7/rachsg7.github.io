// Menu hamburger
const hambutton = document.getElementsByClassName('ham')[0];
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
    document.getElementsByClassName('navigation')[0].classList.toggle('responsive');
}

// Getting dates
let lastModified = document.lastModified;
let date = new Date();
let year = date.getFullYear();

// Copyright year in footer
document.getElementById("currentYear").innerHTML = date.getFullYear();

// JSON

if ((document.getElementById('thispage').text) == 'River Guide') {
    const requestURL = 'https://rachsg7.github.io/salmon-river/json/employeedata.json';
    fetch(requestURL)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonObject) {
            //console.table(jsonObject); // temporary checking for valid response and data parsing
            const employees = jsonObject['employees'];
            for (let i = 0; i < employees.length; i++) {
                // Create each section of card
                let card = document.createElement('section');
                let name = document.createElement('h3');
                let photo = document.createElement('img');
                let cert = document.createElement('div');
                let years = document.createElement('div');
                let email = document.createElement('div');
                let bio = document.createElement('p');

                // Set content of each section of the card
                name.textContent = employees[i].name;
                photo.setAttribute('src', 'images/' + employees[i].photo);
                photo.setAttribute('alt', employees[i].name);
                cert.textContent = "Certification Level: " + employees[i].certification;
                years.textContent = "Years at company: " + employees[i].years;
                email.textContent = "Email: " + employees[i].email;
                bio.textContent = employees[i].bio;

                // Add the content to the card
                card.appendChild(name);
                card.appendChild(photo);
                card.appendChild(cert);
                card.appendChild(years);
                card.appendChild(email);
                card.appendChild(bio);

                // Display card
                document.querySelector('div.employees').appendChild(card);
            }
        })
}

// Weather on home page

if ((document.getElementById('thispage').text) == 'Home') {
    const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5606338&units=imperial&APPID=1021b827abc373236d00eb9d78264b55';
    fetch(apiURL)
        .then((response) => response.json())
        .then((jsObject) => {
            console.log(jsObject);
            document.getElementById('currenttemp').innerHTML = jsObject.main.temp + "&#176;F";
            document.getElementById('hightemp').innerHTML = jsObject.main.temp_max + "&#176;F";
            document.getElementById('lowtemp').innerHTML = jsObject.main.temp_min + "&#176;F";
            document.getElementById('humidity').textContent = jsObject.main.humidity + "%";
            document.getElementById('windspeed').textContent = jsObject.wind.speed + " mph";
        })
}