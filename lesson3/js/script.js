let lastModified = document.lastModified;
let date = new Date();

document.getElementById("timeUpdated").innerHTML = lastModified;
document.getElementById("currentYear").innerHTML = date.getFullYear();