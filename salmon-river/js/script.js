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

const requestURL = '../json/employeedata.json';
fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.table(jsonObject); // temporary cecking for valid response and data parsing
        /*const cities = jsonObject['towns'];
        for (let i = 0; i < cities.length; i++) {
            if (cities[i].name == name) {
                let eventcard = document.createElement('section');
                let townnameh3 = document.createElement('h3');
                let eventdiv = document.createElement('div');
                for (let j = 0; j < cities[i].events.length; j++) {
                    eventdiv.innerHTML += cities[i].events[j] + "<br>";
                }
                townnameh3.textContent = cities[i].name + " Events";
                eventcard.appendChild(townnameh3);
                eventcard.appendChild(eventdiv);

                document.querySelector('div.jsonevents').appendChild(eventcard);
            }

        }*/
    })