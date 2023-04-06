// select HTML elements to edit
const currentTemp = document.querySelector('#temperature');
const windspeed = document.querySelector('#windspeed');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const Humidity= document.querySelector("#Humidity");
const Hightemperature = document.querySelector("#Hightemperature");
const Lowtemperature = document.querySelector("#Lowtemperature");

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-33.9258&lon=18.4232&units=metric&appid=c19f1da1cd37c68484ca5bb501e2b781';

//https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}&units=${units}&lang=${lang}`;

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    //console.log(data); 


    currentTemp.innerHTML = `<strong>${(data.main.temp * 9/5 + 32).toFixed(2)}</strong>`;
    windspeed.innerHTML = `<strong>${data.wind.speed.toFixed(2)}</strong>`;
    Humidity.innerHTML = `<strong>${data.main.humidity.toFixed(2)}</strong>`;

    Hightemperature.innerHTML = `<strong>${(data.main.temp_max * 9/5 + 32).toFixed(2)}</strong>`;
    Lowtemperature.innerHTML = `<strong>${(data.main.temp_min * 9/5 + 32).toFixed(2)}</strong>`;

    
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description;
    
    weatherIcon.setAttribute('src', iconsrc);weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
    
  });