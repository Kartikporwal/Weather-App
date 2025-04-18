var city= document.querySelector(".city")
var temp= document.querySelector(".temp")
var humidity= document.querySelector(".humidity")
var wind= document.querySelector(".wind")
var input= document.querySelector(".input")
var btn= document.querySelector(".btn")
var icon= document.querySelector(".weather-icon")
var dis= document.querySelector(".dis")

const apiKey =  "9d7ec16d1a02b736c0e1a014bdf3b2a4";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
console.log(apiUrl);

async function checkWeather(){
    var inputField = input.value
    const response = await fetch(apiUrl  + `${inputField}&appid=${apiKey}`);        
    var data = await response.json();

    console.log(data);
    console.log(data.name);
    
    var ic = data.weather[0].icon
    city.innerHTML = data.name;
    temp.innerHTML = data.main.temp + "°C";
    humidity.innerHTML = data.main.humidity + "%";
    wind.innerHTML = data.wind.speed + "Km/h";
    icon.src = `https://openweathermap.org/img/wn/${ic}@2x.png`;
    dis.textContent = data.weather[0].description    
}

btn.addEventListener("click",checkWeather)


    