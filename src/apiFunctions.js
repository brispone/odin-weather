import { getDayOfWeek } from "./getDayOfWeek";

async function getWeather(location) {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=ae28bb44103240b1884135919232010&q=${location}&days=8`);
        
        if(!response.ok) {
            const errorData = await response.json();
            const errorMessage = errorData.error.message;
            throw new Error(errorMessage);
        } 

        const weatherData = await response.json();
        const processedData = processData(weatherData);

        return processedData;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

function processData(data) {
    const last_updated = data.current.last_updated;
    const temp_c = data.current.temp_c;
    const temp_f = data.current.temp_f;
    const feelslike_c = data.current.feelslike_c;
    const feelslike_f = data.current.feelslike_f;
    const condition = data.current.condition.text;
    const conditionIcon = "https:" + data.current.condition.icon;
    const wind_mph = data.current.wind_mph;
    const wind_kph = data.current.wind_kph;
    const humidity = data.current.humidity;
    const chanceOfRain = data.forecast.forecastday[0].day.daily_chance_of_rain;
    const city = data.location.name;
    const region = data.location.region;
    const country = data.location.country;
    const currentDate = data.forecast.forecastday[0].date;
    const currentDayOfWeek = getDayOfWeek(currentDate);
    const localtime = data.location.localtime;

    const forecast = [];

    for(let i=1; i<8; i++) {
        const dayObject = {
            date: data.forecast.forecastday[i].date,
            dayOfWeek: getDayOfWeek(data.forecast.forecastday[i].date),
            maxtemp_c: data.forecast.forecastday[i].day.maxtemp_c,
            maxtemp_f: data.forecast.forecastday[i].day.maxtemp_f,
            mintemp_c: data.forecast.forecastday[i].day.mintemp_c,
            mintemp_f: data.forecast.forecastday[i].day.mintemp_f,
            chanceOfRain: data.forecast.forecastday[i].day.daily_chance_of_rain,
            conditionIcon: data.forecast.forecastday[i].day.condition.icon
        }

        forecast.push(dayObject);
    }

    return {
        last_updated,
        temp_c,
        temp_f,
        feelslike_c,
        feelslike_f,
        condition,
        conditionIcon,
        wind_mph,
        wind_kph,
        humidity,
        chanceOfRain,
        city,
        region,
        country,
        localtime,
        currentDate,
        currentDayOfWeek,
        forecast
    }
}

export { getWeather };