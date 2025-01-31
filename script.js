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
    .then(data => console.log(data))
}