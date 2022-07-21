

let weatherList = [];


const url = "https://api.openweathermap.org/data/2.5/onecall?lat=38.98&lon=-77.09&appid=8b105de9275cec2d21ec79d875c65805";
let results = null;    /* ABOVE api Key thats after the '=' I got from the website under my account */

async function getWeather() {
    const response = await fetch(url);
    weatherList = await response.json();
    // output(weatherList);
    // output(current.pressure)
    console.log(url)

};
getWeather(); let current = JSON.parse(current.humidity).textcontent;
console.log(current)
document.querySelector("#weather").innerHTML = weatherList;