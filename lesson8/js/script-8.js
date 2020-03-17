// Adjust Rating
function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}

// Menu hamburger
const hambutton = document.getElementsByClassName('ham')[0];
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
    document.getElementsByClassName('navigation')[0].classList.toggle('responsive');
}

// Getting dates
let lastModified = document.lastModified;
let date = new Date();
let day = date.getDay();
let dayofMonth = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

// Using for the full day in the footer
function getFullDay() {
    let fullDate = "";
    switch (day) {
        case 0:
            fullDate += "Sunday, ";
            break;
        case 1:
            fullDate += "Monday, ";
            break;
        case 2:
            fullDate += "Tuesday, ";
            break;
        case 3:
            fullDate += "Wednesday, ";
            break;
        case 4:
            fullDate += "Thursday, ";
            break;
        case 5:
            fullDate += "Friday, ";
            break;
        case 6:
            fullDate += "Saturday, ";
    }
    fullDate += dayofMonth + " ";

    switch (month) {
        case 0:
            fullDate += "January ";
            break;
        case 1:
            fullDate += "February ";
            break;
        case 2:
            fullDate += "March ";
            break;
        case 3:
            fullDate += "April ";
            break;
        case 4:
            fullDate += "May ";
            break;
        case 5:
            fullDate += "June ";
            break;
        case 6:
            fullDate += "July ";
            break;
        case 7:
            fullDate += "August ";
            break;
        case 8:
            fullDate += "September ";
            break;
        case 9:
            fullDate += "October ";
            break;
        case 10:
            fullDate += "November ";
            break;
        case 11:
            fullDate += "December ";
            break;
    }
    fullDate += year + ".";
    return fullDate;
}

document.getElementById("currentDate").innerHTML = getFullDay();
document.getElementById("timeUpdated").innerHTML = lastModified;
document.getElementById("currentYear").innerHTML = date.getFullYear();