import { getWeather, processData } from './apiFunctions.js';

async function fetchAndLogWeather() {
    const weatherData = await getWeather("london");
    console.log(weatherData);
}

fetchAndLogWeather();