// AQICN API

const apiToken = '?token=9b70335e4e5cbd899ff97e04a91cdc89140428a5';
const apiURL = 'https://api.waqi.info/feed'

const main = document.querySelector('main');
const inputWrapper = document.querySelector('.inputWrapper');
const inputCity = document.querySelector('.inputCity');

const cityName = document.querySelector('.cityName');
const aqiAverage = document.querySelector('.aqiAverage');
const aqiLevel = document.querySelector('.aqiLevel');

const info = document.querySelector('.info');

const temp = document.querySelector('.temp');
const pm25 = document.querySelector('.pm25');
const pm10 = document.querySelector('.pm10');
const o3 = document.querySelector('.o3');
const no2 = document.querySelector('.no2');
const so2 = document.querySelector('.so2');

const buttonSearch = document.querySelector('.buttonSearch');

buttonSearch.addEventListener('click', () => FetchAPI());

inputCity.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        buttonSearch.click();
        inputCity.value = '';
    } 
})

inputCity.addEventListener('focus', () => {
    inputWrapper.style.outline = '1px solid white'
})

inputCity.addEventListener('blur', () => {
    inputWrapper.style.outline = 'none'
})

window.addEventListener('load', () => FetchAPI())

async function FetchAPI () {
    let city = inputCity.value || 'here';

    let data = await fetch(apiURL + '/' + city + '/' + apiToken); 

    let response = await data.json();
    
    console.log(response);
    
    renderAQI(response);

    inputCity.value = '';

}


function renderAQI (response) {

    if (response.status === 'ok') {

        cityName.innerHTML = response.data.city.name;

        aqiAverage.innerHTML = response.data.aqi;

        // AQI Level

        if (response.data.aqi > 0 && response.data.aqi <= 50) {
        aqiLevel.innerHTML = 'Good';
        main.style.background = 'linear-gradient(180deg, rgba(79,150,202,1) 0%, rgba(240,246,246,1) 100%)'

        } else if (response.data.aqi > 50 && response.data.aqi <= 100) {
        aqiLevel.innerHTML = 'Moderate';
        main.style.background = 'linear-gradient(180deg, rgba(105,152,186,1) 0%, rgba(235,233,228,1) 100%)'
        } else if (response.data.aqi > 100 && response.data.aqi <= 150) {
        aqiLevel.innerHTML = 'Unhealthy for Sensitive Groups';
        main.style.background = 'linear-gradient(180deg, rgba(131,156,174,1) 0%, rgba(225,221,206,1) 100%)'
        } else if (response.data.aqi > 150 && response.data.aqi <= 200) {
        aqiLevel.innerHTML = 'Unhealthy';
        main.style.background = 'linear-gradient(180deg, rgba(122,134,142,1) 0%, rgba(212,207,187,1) 100%)'
        } else if (response.data.aqi > 200 && response.data.aqi <= 300) {
        aqiLevel.innerHTML = 'Very Unhealthy';
        main.style.background = 'linear-gradient(180deg, rgba(139,139,139,1) 0%, rgba(183,178,162,1) 100%)'
        } else if (response.data.aqi > 300) {
        aqiLevel.innerHTML = 'Hazardous';
        main.style.background = 'linear-gradient(180deg, rgba(153,152,149,1) 0%, rgba(130,125,109,1) 100%)'
        } else {
        aqiLevel.innerHTML = 'No Data';
        main.style.background = 'linear-gradient(180deg, rgba(79,150,202,1) 0%, rgba(240,246,246,1) 100%)'
        }

        // Details
        temp.innerHTML = Math.round(response.data.iaqi.t.v) + '°C';
        pm25.innerHTML = Math.round(response.data.iaqi.pm25.v);
        pm10.innerHTML = Math.round(response.data.iaqi.pm10.v);
        o3.innerHTML = Math.round(response.data.iaqi.o3.v);
        no2.innerHTML = Math.round(response.data.iaqi.no2.v);
        so2.innerHTML = Math.round(response.data.iaqi.so2.v);

    } else {
        // Handle if response status not OK
        cityName.innerHTML = 'Unknown Station'
        
        aqiAverage.innerHTML = '0';

        aqiLevel.innerHTML = '-';

        temp.innerHTML = '-';
        pm25.innerHTML = '-';
        pm10.innerHTML = '-';
        o3.innerHTML = '-';
        no2.innerHTML = '-';
        so2.innerHTML = '-';

    }
    
}
