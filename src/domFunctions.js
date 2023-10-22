function updateDOM(weatherData, displayCelsius) {

    // Populate the weather info for current day

    const city = document.getElementById('city-name');
    const region = document.getElementById('region-country-name');
    const temp = document.getElementById('real-temp');
    const feelsLike = document.getElementById('feels-like');
    const conditionIcon = document.getElementById('condition-icon');
    const conditionText = document.getElementById('condition-text');
    const currentHumidity = document.getElementById('current-humidity');
    const currentChanceOfRain = document.getElementById('current-chance-of-rain');
    const currentWind = document.getElementById('current-wind');

    city.innerText = weatherData.city;
    region.innerText = weatherData.region + ", " + weatherData.country;
    if(displayCelsius) {
        temp.innerText = weatherData.temp_c + "°C";
        feelsLike.innerText = "Feels like " + weatherData.feelslike_c + "°C";
        currentWind.innerText = weatherData.wind_kph + " km/h";
    } else {
        temp.innerText = weatherData.temp_f + "°F";
        feelsLike.innerText = "Feels like " + weatherData.feelslike_f + "°F";
        currentWind.innerText = weatherData.wind_mph + " mph";
    }
    conditionIcon.src = weatherData.conditionIcon;
    conditionText.innerText = weatherData.condition;
    currentHumidity.innerText = weatherData.humidity + "%";
    currentChanceOfRain.innerText = weatherData.chanceOfRain + "%";

    // Populate the weather info for upcoming week forecast
    
    const forecastContent = document.getElementById('forecast-content');
    forecastContent.innerText = '';

    weatherData.forecast.forEach((day) => {
        const li = document.createElement('li');
        const forecastDayDiv = document.createElement('div');
        forecastDayDiv.classList.add('forecast-day');
        const dayOfWeek = document.createElement('p');
        const date = document.createElement('p');
        const forecastConditionIcon = document.createElement('img');
        forecastConditionIcon.classList.add('forecast-condition-icon');
        const highLow = document.createElement('div');
        highLow.classList.add('forecast-high-low');
        const chanceOfRain = document.createElement('div');
        chanceOfRain.classList.add('forecast-chance-of-rain');
        

        dayOfWeek.innerText = day.dayOfWeek;
        date.innerText = day.date;
        forecastConditionIcon.src = "https:" + day.conditionIcon;
        chanceOfRain.innerText = `Chance of rain: ${day.chanceOfRain}%`;
        if(displayCelsius) {
            highLow.innerText = `${day.maxtemp_c}°C / ${day.mintemp_c}°C`;
        }else {
            highLow.innerText = `${day.maxtemp_f}°F / ${day.mintemp_f}°F`;
        }

        forecastDayDiv.append(dayOfWeek, date);
        li.append(forecastDayDiv, forecastConditionIcon, highLow, chanceOfRain);
        forecastContent.append(li);
    });

}

export { updateDOM };