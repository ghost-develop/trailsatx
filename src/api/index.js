const axios = require('axios');
const api_key = '';

// let url = (`api.openweathermap.org/data/2.5/weather?q={city name}&appid=${api_key}`);
// let url = ('api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}')

let latAndLong = {
    latitude: '',
    longitude: '',
}

async function getLocation() {
    if (!navigator.geolocation) {
        console.log("Your browser does not support Geolocation");
        return;
    }
    async function success(position) {
        latAndLong.latitude = position.coords.latitude;
        latAndLong.longitude = position.coords.longitude;
        console.log(`api.openweathermap.org/data/2.5/weather?lat=${latAndLong.latitude}&lon=${latAndLong.longitude}&appid=${api_key}`)
    }
    async function error() {
        console.log("Cannot get location")
    }
    navigator.geolocation.getCurrentPosition(success, error);
}

export const fetchWeatherData = async () => {  
    try {
        await getLocation();
        const { data } = await axios.get(`api.openweathermap.org/data/2.5/weather?lat=${latAndLong.latitude}&lon=${latAndLong.longitude}&appid=${api_key}`);
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}



