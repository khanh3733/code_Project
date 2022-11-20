const search = document.querySelector('.search');
const city = document.querySelector('.city');
const country = document.querySelector('.country');
const value = document.querySelector('.value');
const sortDesc = document.querySelector('.sort-desc');
const visibility = document.querySelector('.visibility span');
const wind = document.querySelector('.wind span');
const sun = document.querySelector('.sun span');
var time = document.querySelector('.time');
var content = document.querySelector('.content')
var weather = document.getElementById('weather')
var body = document.querySelector('body')

async function changeWeatherUL(){
    let capital = search.value.trim()
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=416bc7e8e3af7c109259ac754167038f`
    let data = await fetch(apiURL).then(res => res.json())

    if (data.cod == 200){
        content.classList.remove('hide')
        city.innerText = data.name
        country.innerText = data.sys.country
        visibility.innerText = data.visibility + 'm'
        wind.innerText = data.wind.speed + ' (m/s)'
        sun.innerText =  data.main.humidity + '%'
        value.innerText = (data.main.temp - 273.15).toFixed(0)
        sortDesc.innerText = data.weather[0].main
        time.innerText = new Date().toLocaleString('vi')
        if((data.main.temp - 273.15) < 17 ){
            weather.style.background = 'url(cold.png) no-repeat center/cover'
            body.style.background = 'linear-gradient(to top, rgba(0,0,0,0.7),rgba(0,0,0,0.8)), url(./cold.png) no-repeat center/cover'
        }
        if((data.main.temp - 273.15) < 25 ){
            weather.style.background = 'url(cool.png) no-repeat center/cover'
            body.style.background = 'linear-gradient(to top, rgba(0,0,0,0.7),rgba(0,0,0,0.8)), url(./cool.png) no-repeat center/cover'
        }
        if((data.main.temp - 273.15) > 25 ){
            weather.style.background = 'url(hot.png) no-repeat center/cover'
            body.style.background = 'linear-gradient(to top, rgba(0,0,0,0.7),rgba(0,0,0,0.8)), url(./hot.png) no-repeat center/cover'
        }
        

    }else{
        content.classList.add('hide');
    }
}

changeWeatherUL()

search.addEventListener('keypress',function(e){
    if(e.code === 'Enter'){
        changeWeatherUL()
    }
})