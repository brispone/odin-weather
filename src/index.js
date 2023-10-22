import './style.css';
import { getWeather } from './apiFunctions.js';

async function fetchAndLogWeather(searchTerm) {
    const weatherData = await getWeather(searchTerm);
    console.log(weatherData);
}

const searchInput = document.getElementById('search-bar');

searchInput.addEventListener('submit', (event)=> {
    event.preventDefault();
    const searchTerm = document.getElementById('query').value;
    fetchAndLogWeather(searchTerm);
    searchInput.reset();
});