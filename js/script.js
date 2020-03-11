let submit = document.querySelector('.submit').onclick = getWeather;

let temp = document.querySelector('#temp');
let mintemp = document.querySelector('#mintemp');
let maxtemp = document.querySelector('#maxtemp');
let windspeed = document.querySelector('#windspeed');
let humidity = document.querySelector('#humidity');
let city = document.querySelector('#city');
let country = document.querySelector('#country');
let weather = document.querySelector('#weather');
let icom = document.querySelector('#icon');
let inputcountryCode = "";

function getWeather() {

    let inputcountry = document.querySelector('#inputcountry').value;
    let inputcity = document.querySelector('#inputcity').value;

    fetch(`https://restcountries.eu/rest/v2/name/${inputcountry}`)
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            inputcountryCode = data[0]['alpha2Code'];
            country.innerHTML = data[0]['name'];
        })

    const url = `http://api.openweathermap.org/data/2.5/weather?q=${inputcity},${inputcountryCode}&appid=d6cb377ca8fb81b3c71e2c81848f3e25`;

    fetch(url)
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            temp.innerHTML = (data.main.temp - 273).toFixed(1);
            weather.innerHTML = data.weather[0]['description'];
            icon.src = `https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png`;
            city.innerHTML = data.name;
            windspeed.innerHTML = data.wind.speed;
            mintemp.innerHTML = (data.main.temp_min - 273).toFixed(1);
            maxtemp.innerHTML = (data.main.temp_max - 273).toFixed(1);
            humidity.innerHTML = data.main.humidity;
        })
        .catch(function () {
            //errors
        });
};