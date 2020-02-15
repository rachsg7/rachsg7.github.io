/**
 * Calculates wind chill based on current temperature and wind speed
 * If temperature is greater than 50, or wind speed is less than 3 mph,
 * it returns the temperature because there is no wind chill
 */
function windChill() {
    let windSpeed = document.getElementById('windSp').innerHTML;
    windSpeed = parseFloat(windSpeed);
    let temperature = document.getElementById('temp').innerHTML;
    temperature = parseFloat(temperature);
    if (temperature <= 50 && windSpeed >= 3) {
        let windspeedExponent = Math.pow(windSpeed, 0.16);
        let windChill = (35.74 + 0.6215 * temperature - 35.75 * windspeedExponent + 0.4275 * temperature * windspeedExponent).toFixed(0);
        return windChill;
    } else {
        return temperature;
    }

}
// Wind Chill calculation
document.getElementById("windch").innerHTML = windChill() + "&#xb0;F";