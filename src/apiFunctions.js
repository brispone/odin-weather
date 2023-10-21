async function getWeather(location) {
    try {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=ae28bb44103240b1884135919232010&q=${location}`);
        const weatherData = await response.json();
        const processedData = processData(weatherData);

        if(!response.ok) {
            console.log(weatherData.error.message);
        } else {
                        return processedData;
        }
    } catch (error) {
        console.log(error);
    }
}

function processData(data) {
    const last_updated = data.current.last_updated;
    const temp_c = data.current.temp_c;
    const temp_f = data.current.temp_f;
    const feelslike_c = data.current.feelslike_c;
    const feelslike_f = data.current.feelslike_f;
    const condition = data.current.condition.text;
    const wind_mph = data.current.wind_mph;
    const wind_kph = data.current.wind_kph;
    const humidity = data.current.humidity;
    const location = data.location.name;
    const localtime = data.location.localtime;


    return {
        last_updated,
        temp_c,
        temp_f,
        feelslike_c,
        feelslike_f,
        condition,
        wind_mph,
        wind_kph,
        humidity,
        location,
        localtime
    }
}

export { getWeather, processData };