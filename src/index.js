import './style.css';
import { getWeather } from './apiFunctions.js';
import { updateDOM } from './domFunctions';

let displayCelsius = true;
let currentLocationData = {};

async function fetchAndLogWeather(searchTerm) {

    const loader = document.querySelector('#content .loader');
    const dailyContent = document.getElementById('daily');
    const weeklyContent = document.getElementById('weekly');

    // hide page content and show loader
    dailyContent.classList.toggle('hidden');
    weeklyContent.classList.toggle('hidden');
    loader.classList.toggle('hidden');
    
    const weatherData = await getWeather(searchTerm);
    currentLocationData = weatherData;
    updateDOM(weatherData, displayCelsius);
    // hide loader and show content again
    loader.classList.toggle('hidden');
    dailyContent.classList.toggle('hidden');
    weeklyContent.classList.toggle('hidden');
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