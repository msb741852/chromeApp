
const API_KEY = "8d5239160dee3a59639f541c87fc9698";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    
    console.log(url);
    fetch(url).then(response => response.json()).then(data => {
        const city = document.querySelector("#weather span:first-child");
        const temp = document.querySelector("#weather span:nth-child(2)");
        const weather = document.querySelector("#weather img");        

        city.innerText = data.name;
        temp.innerText = `${Math.round(data.main.temp)}°C`;
        // http://openweathermap.org/img/wn/10d@2x.png
        // temp.innerText = `${data.weather[0].icon}`
        weather.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);