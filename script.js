const urlBase = `https://api.openweathermap.org/data/2.5/weather`
const API_KEY = '550f7276f1afa4b5d83e52bc4fcd3f91'
const diffKelvin = 273.15

document.getElementById('searchButton').addEventListener('click', ()=>{
    const city = document.getElementById('cityInput').value

    if(city){
        fetchClima(city)
    }else{
        alert('ingrese una ciudad valida')
    }

})

function fetchClima(city){
    fetch(`${urlBase}?q=${city}&appid=${API_KEY}&lang=es`)
    .then(data => data.json())
    .then(data => showWeatherData(data))
}

function showWeatherData(data){
    const divResponse = document.getElementById('responseData')
    divResponse.innerHTML = ''

    const cityName = data.name
    const  countryName = data.sys.country
    const temperatura = data.main.temp
    const SensacionTermica = data.main.feels_like
    const humidity = data.main.humidity
    const description = data.weather[0].description
    const icon = data.weather[0].icon

    const cityInfo = document.createElement('h2')
    cityInfo.textContent = `${cityName}, ${countryName}`

    const tempInfo = document.createElement('p')
    tempInfo.textContent = `Temperatura: ${Math.floor(temperatura-diffKelvin)}°C ST: ${Math.floor(SensacionTermica-diffKelvin)}°C`

    const humidityInfo = document.createElement('p')
    humidityInfo.textContent = `humedad del ${humidity}%`

    const iconInfo = document.createElement('img')
    iconInfo.src = ` https://openweathermap.org/img/wn/${icon}@2x.png`

    const descriptionInfo = document.createElement('p')
    descriptionInfo.textContent = `Descripcion es: ${description}`

    divResponse.appendChild(cityInfo)
    divResponse.appendChild(tempInfo)
    divResponse.appendChild(humidityInfo)
    divResponse.appendChild(iconInfo)
    divResponse.appendChild(descriptionInfo)

}