function formatDate(date){
    let hours = currentTime.getHours();
if(hours < 10){
    hours = `0${hours}`;
}
let minutes = currentTime.getMinutes();
if(minutes < 10){
    minutes = `0${minutes}`;
}
let dayIndex = currentTime.getDay();

let days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

let day = days[dayIndex];
return `${day} ${hours}: ${minutes};`
     
}

function search(event){
    event.preventDefault();
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML=cityInput.value;
    let cityInput =document.querySelector("#city-input")
}

function convertFahrenheit(event){
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = 43;
}

function convertCelsius(event){
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = 16;
}

let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let fahrenheitLink = document.querySelector("#fahrenheit");
fahrenheitLink.addEventListener("click", convertFahrenheit);

let celsiusLink = document.querySelector("#celsius");
celsiusLink.addEventListener("click", convertCelsius);

 