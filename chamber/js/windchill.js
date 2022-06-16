let temperature = parseInt(document.querySelector("#temp").textContent); // stores the text in variable t
let windSpeed = parseInt(document.querySelector("#windSpeed").textContent);//stores the text in variable s
let windchill = "";

// if (windSpeed > 3 && temperature <= 50) { //checks if under 50 or less degrees and 3mph windspeed, if it is both then it calculates wind chill
//     windchill = windChill(temperature, windSpeed); //sets t to temp and s to speed in the function
//     windchill = `${windchill}&#176;F`; // using template literal to show the temperature in faranheght degrees
// } else {
//     windchill = "N/A"; // if not below a certain temperature of 49 or less it will not hav a windchill
// }
// // output
// document.querySelector("#wchill").innerHTML = windchill; //innerHTML and not textContent because textContent shows the &#176;

// function windChill(temp, speed) { //function to calculate windchill in fahrenheit
//     let wc = 35.74 + 0.6215 * temp - 35.75 * speed ** 0.16 + 0.4275 * temp * speed ** 0.16
//     // let celsius = (wc - 32) / 1.8;
//     return Math.floor(wc); // rounds winchill down to closest integer
// };


if (windSpeed > 5 && temperature <= 0) {
    windchill = windChill(windSpeed, temperature);
    windchill = `${windchill}&#8451;`;
} else {
    windchill = "N/A";
};

// output
document.querySelector("#wchill").innerHTML = windchill;

function windChill(speed, temp) { //function to calculate windchill in fahrenheit
    let wc = 13.12 + (.6215 * temp) - (11.37 * speed ** 0.16) + (.3965 * temp * speed ** 0.16);

    return Math.floor(wc);
    // let wc = 35.74 + 0.6215 * temp - 35.75 * speed ** 0.16 + 0.4275 * temp * speed ** 0.16
    // let celsius = (wc - 32) / 1.8;
    // rounds winchill down to closest integer
};