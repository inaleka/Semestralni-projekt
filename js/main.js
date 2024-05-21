const API_KEY = '572dcf998f37c9a7c97cbfeec2eaa00a';

const form = document.querySelector('#form');
const input = document.querySelector('.form__input');


form.onsubmit = submitHandler;

async function submitHandler(e){
    e.preventDefault();


    if(!input.value.trim()){        
        console.log('Enter city name');
        return
    }
    
    const cityInfo = await getGeo(input.value.trim());

    const weatherInfo = await getWeather(cityInfo[0]['lat'],cityInfo[0]['lon']);
    console.log(weatherInfo);
    
    console.log(weatherInfo.name);
    console.log(weatherInfo.main.temp);
    console.log(weatherInfo.main.humidity);
    console.log(weatherInfo.wind.speed);
    console.log(weatherInfo.weather[0]['main']);

    const weatherData = {
        name: weatherInfo.name,
        temp: weatherInfo.main.temp,
        humidity: weatherInfo.main.humidity,
        speed: weatherInfo.wind.speed,
        main: weatherInfo.weather[0]['main']
    };
    
}

async function getGeo(name){
    const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=5&appid=${API_KEY}`;
    const response = await fetch(geoUrl);
    const data = await response.json();
    return data;
}

async function getWeather(lat, lon){
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    const response = await fetch(weatherUrl);
    const data = await response.json();
    return data;
}
