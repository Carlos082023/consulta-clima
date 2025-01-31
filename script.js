const BASE_URL = `https://api.openweathermap.org/data/2.5/weather`;
const API_KEY = '550f7276f1afa4b5d83e52bc4fcd3f91';
const KELVIN_DIFF = 273.15;

document.getElementById('searchButton').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value;

    if (city) {
        fetchWeather(city);
    } else {
        alert('Please enter a valid city');
    }
});

function fetchWeather(city) {
    fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&lang=es`)
        .then(response => response.json())
        .then(data => displayWeatherData(data));
}

function displayWeatherData(data) {
    const responseContainer = document.getElementById('responseData');
    responseContainer.innerHTML = '';

    const cityName = data.name;
    const countryName = data.sys.country;
    const temperature = data.main.temp;
    const feelsLike = data.main.feels_like;
    const humidity = data.main.humidity;
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;

    const cityInfo = document.createElement('h2');
    cityInfo.textContent = `${cityName}, ${countryName}`;

    const tempInfo = document.createElement('p');
    tempInfo.textContent = `Temperatura: ${Math.floor(temperature - KELVIN_DIFF)}°C | ST: ${Math.floor(feelsLike - KELVIN_DIFF)}°C`;

    const humidityInfo = document.createElement('p');
    humidityInfo.textContent = `Humedad: ${humidity}%`;

    const iconInfo = document.createElement('img');
    iconInfo.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    const descriptionInfo = document.createElement('p');
    descriptionInfo.textContent = `Descripcion: ${description}`;

    responseContainer.appendChild(cityInfo);
    responseContainer.appendChild(tempInfo);
    responseContainer.appendChild(humidityInfo);
    responseContainer.appendChild(iconInfo);
    responseContainer.appendChild(descriptionInfo);
}
