import './style.css';
import { getWeather } from './apiFunctions.js';
import { updateDOM } from './domFunctions';

let displayCelsius = true;
let currentLocationData = {};

async function fetchAndLogWeather(searchTerm) {
    const weatherData = await getWeather(searchTerm);
    currentLocationData = weatherData;
    updateDOM(weatherData, displayCelsius);
}

fetchAndLogWeather("new york");

const displayUnitsButton = document.getElementById('display-units-button');
const searchInput = document.getElementById('search-bar');

searchInput.addEventListener('submit', (event)=> {
    event.preventDefault();
    const searchTerm = document.getElementById('query').value;
    fetchAndLogWeather(searchTerm);
    searchInput.reset();
});

displayUnitsButton.addEventListener('click', ()=> {
    if(displayCelsius) {
        displayCelsius = false;
        displayUnitsButton.innerText = 'Show °C';
    } else {
        displayCelsius = true;
        displayUnitsButton.innerText = 'Show °F';
    }
    updateDOM(currentLocationData, displayCelsius);
});