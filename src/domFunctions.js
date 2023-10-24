function updateDOM(weatherData, displayCelsius) {

    // Populate the weather info for current day

    const city = document.getElementById('city-name');
    const region = document.getElementById('region-country-name');
    const currentDay = document.getElementById('current-day');
    const currentDate = document.getElementById('current-date');
    const temp = document.getElementById('real-temp');
    const feelsLike = document.getElementById('feels-like');
    const conditionIcon = document.getElementById('condition-icon');
    const conditionText = document.getElementById('condition-text');
    const currentHumidity = document.getElementById('current-humidity');
    const currentChanceOfRain = document.getElementById('current-chance-of-rain');
    const currentWind = document.getElementById('current-wind');

    city.innerText = weatherData.city;
    region.innerText = weatherData.region + ", " + weatherData.country;
    currentDay.innerText = weatherData.currentDayOfWeek;
    currentDate.innerText = weatherData.currentDate;
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

    weatherData.forecast.forEach((day, index) => {
        const li = document.createElement('li');
        const forecastDayDiv = document.createElement('div');
        forecastDayDiv.classList.add('forecast-day');
        const dayOfWeek = document.createElement('p');
        const date = document.createElement('p');
        const forecastConditionIcon = document.createElement('img');
        forecastConditionIcon.classList.add('forecast-condition-icon');
        const highLow = document.createElement('div');
        highLow.classList.add('forecast-high-low');
        const highTemp = document.createElement('p');
        highTemp.classList.add('forecast-high-temp');
        const lowTemp = document.createElement('p');
        lowTemp.classList.add('forecast-low-temp');
        const chanceOfRain = document.createElement('div');
        chanceOfRain.classList.add('forecast-chance-of-rain');
        const chanceOfRainHeader = document.createElement('p');
        chanceOfRainHeader.classList.add('forecast-cor-header');
        const chanceOfRainNumber = document.createElement('p');
        chanceOfRainNumber.classList.add('forecast-cor-number');
        

        dayOfWeek.innerText = day.dayOfWeek;
        date.innerText = day.date;
        forecastConditionIcon.src = "https:" + day.conditionIcon;
        chanceOfRainHeader.innerText = 'Chance of rain';
        chanceOfRainNumber.innerText = day.chanceOfRain + '%';
        if(displayCelsius) {
            highTemp.innerText = `${day.maxtemp_c}°C`;
            lowTemp.innerText = `${day.mintemp_c}°C`;
        }else {
            highTemp.innerText = `${day.maxtemp_f}°F`;
            lowTemp.innerText = `${day.mintemp_f}°F`;
        }

        forecastDayDiv.append(dayOfWeek, date);
        highLow.append(highTemp, lowTemp);
        chanceOfRain.append(chanceOfRainHeader, chanceOfRainNumber);
        li.append(forecastDayDiv, forecastConditionIcon, highLow, chanceOfRain);
        forecastContent.append(li);

        if(index < 6) { // If we are noit yet on the last item of the forecast array
            li.classList.add('not-last');
        }
    });

}

export { updateDOM };