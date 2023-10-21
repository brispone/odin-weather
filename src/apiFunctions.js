async function getWeather(location) {
    try {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=ae28bb44103240b1884135919232010&q=${location}`);
        const weatherData = await response.json();

        if(!response.ok) {
            console.log(weatherData.error.message);
        } else {
            console.log(weatherData);
        }
    } catch (error) {
        console.log(error);
    }
}
export { getWeather };