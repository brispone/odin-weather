(()=>{"use strict";const e=document.getElementById("search-bar");e.addEventListener("submit",(t=>{t.preventDefault(),async function(e){const t=await async function(e){try{const t=await fetch(`http://api.weatherapi.com/v1/forecast.json?key=ae28bb44103240b1884135919232010&q=${e}&days=8`),a=await t.json(),c=function(e){const t=e.current.last_updated,a=e.current.temp_c,c=e.current.temp_f,n=e.current.feelslike_c,o=e.current.feelslike_f,r=e.current.condition.text,i=e.current.condition.icon,d=e.current.wind_mph,s=e.current.wind_kph,f=e.current.humidity,y=e.forecast.forecastday[0].day.daily_chance_of_rain,m=e.location.name,u=e.location.localtime,l=[];for(let t=1;t<8;t++){const a={date:e.forecast.forecastday[t].date,dayOfWeek:(_=e.forecast.forecastday[t].date,["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][new Date(_).getUTCDay()]),maxtemp_c:e.forecast.forecastday[t].day.maxtemp_c,maxtemp_f:e.forecast.forecastday[t].day.maxtemp_f,mintemp_c:e.forecast.forecastday[t].day.mintemp_c,mintemp_f:e.forecast.forecastday[t].day.mintemp_f,chanceOfRain:e.forecast.forecastday[t].day.daily_chance_of_rain,conditionIcon:e.forecast.forecastday[t].day.condition.icon};l.push(a)}var _;return{last_updated:t,temp_c:a,temp_f:c,feelslike_c:n,feelslike_f:o,condition:r,conditionIcon:i,wind_mph:d,wind_kph:s,humidity:f,chanceOfRain:y,location:m,localtime:u,forecast:l}}(a);if(t.ok)return c;console.log(a.error.message)}catch(e){console.log(e)}}(e);console.log(t)}(document.getElementById("query").value),e.reset()}))})();