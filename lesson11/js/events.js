let name = document.getElementById('thispage').text;

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        //console.table(jsonObject); // temporary cecking for valid response and data parsing
        const cities = jsonObject['towns'];
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

        }
    })