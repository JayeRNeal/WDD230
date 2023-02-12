const currentTemp = document.querySelector('#temperature');
const windspeed = document.querySelector('#windspeed');
const weatherIcon = document.querySelector('#weather-icon');
const Humidity= document.querySelector("#Humidity");

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-33.9258&lon=18.4232&units=metric&appid=c19f1da1cd37c68484ca5bb501e2b781';

const temp = parseFloat(document.getElementById('temperature').textContent);
const windspeedmph = parseInt(document.getElementById('windspeed').textContent);


fetch(url)
  .then((response) => response.json())
  .then((data) => {

    currentTemp.innerHTML = `<strong>${(data.main.temp * 9/5 + 32).toFixed(2)}</strong>`;
    windspeed.innerHTML = `<strong>${data.wind.speed.toFixed(2)}</strong>`;
    Humidity.innerHTML = `<strong>${data.main.humidity.toFixed(2)}</strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description;
    
    weatherIcon.setAttribute('src', iconsrc);weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
    
  });

function wind(temperature, windspeedmph) {
  document.getElementById("windchill").innerHTML =  (35.74 + (0.6215 * temperature) - (35.75 * (windspeedmph ** 0.16)) + (0.4275 * temperature * (windspeedmph ** 0.16))).toFixed(2);
} 
if (temp <= 50 && windspeedmph > 3.0) {
   wind(temp,windspeedmph)}
else {
  document.getElementById("windchill").innerHTML= "N/A "
}
