function fix() {
    localStorage.setItem('entry',document.getElementById('hi').value)
}
const userAction = async () => {
    const city_name = localStorage.entry
    const API_key = "3b5f0b5a5e04547e67c2e8d8926ef26a"
    const response = await fetch("http://api.openweathermap.org/data/2.5/weather?q="+city_name+"&appid="+API_key);
    const myJson = await response.json();
    console.log(myJson)
    document.getElementById('1').innerHTML = 'Temp: '+ String(Math.round((parseFloat(myJson.main.temp, 10) - 273.15) * 10) / 10) + ' degrees'
    document.getElementById('2').innerHTML = 'Weather: '+ myJson.weather[0].main
    document.getElementById('3').innerHTML = 'Wind speed: '+ myJson.wind.speed
    document.getElementById('4').innerHTML = 'Coord: '+ myJson.coord.lon + '  ' + myJson.coord.lat
    document.getElementById('5').innerHTML = 'Humidity: '+ myJson.main.humidity+'%'
}

function loadtime() {
    document.getElementById('hi').value = localStorage.entry
}

userAction()