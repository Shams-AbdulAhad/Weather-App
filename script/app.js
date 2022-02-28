//DOM Manipulation
//import {getCity,getWeather} from './forcast.js';
const cityForm=document.querySelector('form');
const icon=document.querySelector('.iconi');

const updatecity=async (city)=>{
    const cityDetails=await getCity(city)
    const weather=await getWeather(cityDetails.Key)
    return {cityDetails,weather}
}
cityForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const city=cityForm.city.value.trim();
    cityForm.reset();
    updatecity(city)
        .then(data=>updateUI(data))
        .catch(err=>console.log(err))
    
})


const card=document.querySelector('.card');
const details=document.querySelector('.details');
const updateUI=(data)=>{
    const {cityDetails,weather}=data;
    console.log(cityDetails,weather)
    details.innerHTML=`<h5 class="my-5">${cityDetails.LocalizedName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4"> 
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>` 
    const time = document.querySelector('.time');

let timesource=null;
if(weather.IsDayTime){
    timesource='images/day.svg';
}else{
    timesource='images/night.svg';
}

time.setAttribute('src', timesource);

let iconSource = `images/icons/${weather.WeatherIcon}.svg`

icon.setAttribute('src', iconSource)
const card = document.querySelector('.card');
if(card.classList.contains('d-none')){
    card.classList.remove('d-none')
}



} 

