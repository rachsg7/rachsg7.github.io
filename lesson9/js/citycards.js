const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.table(jsonObject); // temporary cecking for valid response and data parsing
        const cities = jsonObject['towns'];
        for (let i = 0; i < cities.length; i++) {
            if (cities[i].name == "Fish Haven" || cities[i].name == "Preston" || cities[i].name == "Soda Springs") {
                let card = document.createElement('section');
                let h2 = document.createElement('h2');
                let h3 = document.createElement('h3');
                let yearFounded = document.createElement('p');
                let population = document.createElement('p');
                let rainfall = document.createElement('p');
                let cityimg = document.createElement('img');
                let classname = cities[i].name;
                classname = classname.replace(' ', '');

                h2.textContent = cities[i].name;
                h3.textContent = cities[i].motto;
                yearFounded.textContent = "Year Founded: " + cities[i].yearFounded;
                population.textContent = "Population: " + cities[i].currentPopulation;
                rainfall.textContent = "Annual Rainfall: " + cities[i].averageRainfall;
                cityimg.setAttribute('src', "images/" + cities[i].photo);
                cityimg.setAttribute('alt', cities[i].name);

                card.className = classname;
                card.appendChild(h2);
                card.appendChild(h3);
                card.appendChild(yearFounded);
                //card.appendChild(yearFounded);
                card.appendChild(population);
                card.appendChild(rainfall);
                card.appendChild(cityimg);

                document.querySelector('div.citycards').appendChild(card);
            }

        }
    })