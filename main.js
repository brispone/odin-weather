(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(81),o=t.n(r),a=t(645),c=t.n(a)()(o());c.push([e.id,"body {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    margin: 0;\n}\n\n#header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n#header button {\n    border-radius: 5px;\n}\n\n#footer {\n    display: flex;\n    justify-content: space-evenly;\n    margin-top: auto;\n    font-family: monospace;\n}\n\n#content {\n    display: flex;\n    margin-left: 15%;\n    margin-right: 15%;\n}\n\n#daily, #weekly {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    flex-basis: 50%;\n}\n\n#city-name {\n    margin-bottom: 0;\n}\n\n#region-country-name {\n    margin-top: 0;\n}\n\n#current-day {\n    margin-bottom: 0;\n}\n\n#current-date {\n    margin-top: 0;\n}\n\n#temp-and-condition {\n    display: flex;\n    justify-content: center;\n}\n\n#condition, #temperature {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    justify-items: center;\n    align-content: center;\n    align-items: center;\n    margin-right: 40px;\n    margin-left: 40px;\n}\n\n#real-temp {\n    font-weight: bold;\n    font-size: 3em;\n}\n\n#feels-like {\n    color: slategray;\n}\n\n#condition-text {\n    margin-top: 0;\n}\n\n#extra-info {\n    display: flex;\n    justify-content: center;\n}\n\nul {\n    list-style-type: none;\n}\n\nli {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.forecast-high-low {\n    display: flex;\n    flex-direction: column;\n}\n\n.forecast-high-temp {\n    margin-bottom: 0;\n}\n\n.forecast-low-temp {\n    margin-top: 0;\n}",""]);const i=c},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],d=r.base?s[0]+r.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var f=t(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)n[f].references++,n[f].updater(m);else{var p=o(m,r);r.byIndex=i,n.splice(i,0,{identifier:u,updater:p,references:1})}c.push(u)}return c}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=t(a[c]);n[i].references--}for(var s=r(e,o),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),c=t.n(a),i=t(565),s=t.n(i),d=t(216),l=t.n(d),u=t(589),f=t.n(u),m=t(426),p={};function y(e){return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][new Date(e).getUTCDay()]}function h(e,n){const t=document.getElementById("city-name"),r=document.getElementById("region-country-name"),o=document.getElementById("current-day"),a=document.getElementById("current-date"),c=document.getElementById("real-temp"),i=document.getElementById("feels-like"),s=document.getElementById("condition-icon"),d=document.getElementById("condition-text"),l=document.getElementById("current-humidity"),u=document.getElementById("current-chance-of-rain"),f=document.getElementById("current-wind");t.innerText=e.city,r.innerText=e.region+", "+e.country,o.innerText=e.currentDayOfWeek,a.innerText=e.currentDate,n?(c.innerText=e.temp_c+"°C",i.innerText="Feels like "+e.feelslike_c+"°C",f.innerText=e.wind_kph+" km/h"):(c.innerText=e.temp_f+"°F",i.innerText="Feels like "+e.feelslike_f+"°F",f.innerText=e.wind_mph+" mph"),s.src=e.conditionIcon,d.innerText=e.condition,l.innerText=e.humidity+"%",u.innerText=e.chanceOfRain+"%";const m=document.getElementById("forecast-content");m.innerText="",e.forecast.forEach((e=>{const t=document.createElement("li"),r=document.createElement("div");r.classList.add("forecast-day");const o=document.createElement("p"),a=document.createElement("p"),c=document.createElement("img");c.classList.add("forecast-condition-icon");const i=document.createElement("div");i.classList.add("forecast-high-low");const s=document.createElement("p");s.classList.add("forecast-high-temp");const d=document.createElement("p");d.classList.add("forecast-low-temp");const l=document.createElement("div");l.classList.add("forecast-chance-of-rain"),o.innerText=e.dayOfWeek,a.innerText=e.date,c.src="https:"+e.conditionIcon,l.innerText=`Chance of rain: ${e.chanceOfRain}%`,n?(s.innerText=`${e.maxtemp_c}°C`,d.innerText=`${e.mintemp_c}°C`):(s.innerText=`${e.maxtemp_f}°F`,d.innerText=`${e.mintemp_f}°F`),r.append(o,a),i.append(s,d),t.append(r,c,i,l),m.append(t)}))}p.styleTagTransform=f(),p.setAttributes=s(),p.insert=c().bind(null,"head"),p.domAPI=o(),p.insertStyleElement=l(),n()(m.Z,p),m.Z&&m.Z.locals&&m.Z.locals;let g=!0,x={};async function v(e){const n=await async function(e){try{const n=await fetch(`http://api.weatherapi.com/v1/forecast.json?key=ae28bb44103240b1884135919232010&q=${e}&days=8`),t=await n.json(),r=function(e){const n=e.current.last_updated,t=e.current.temp_c,r=e.current.temp_f,o=e.current.feelslike_c,a=e.current.feelslike_f,c=e.current.condition.text,i="https:"+e.current.condition.icon,s=e.current.wind_mph,d=e.current.wind_kph,l=e.current.humidity,u=e.forecast.forecastday[0].day.daily_chance_of_rain,f=e.location.name,m=e.location.region,p=e.location.country,h=e.forecast.forecastday[0].date,g=y(h),x=e.location.localtime,v=[];for(let n=1;n<8;n++){const t={date:e.forecast.forecastday[n].date,dayOfWeek:y(e.forecast.forecastday[n].date),maxtemp_c:e.forecast.forecastday[n].day.maxtemp_c,maxtemp_f:e.forecast.forecastday[n].day.maxtemp_f,mintemp_c:e.forecast.forecastday[n].day.mintemp_c,mintemp_f:e.forecast.forecastday[n].day.mintemp_f,chanceOfRain:e.forecast.forecastday[n].day.daily_chance_of_rain,conditionIcon:e.forecast.forecastday[n].day.condition.icon};v.push(t)}return{last_updated:n,temp_c:t,temp_f:r,feelslike_c:o,feelslike_f:a,condition:c,conditionIcon:i,wind_mph:s,wind_kph:d,humidity:l,chanceOfRain:u,city:f,region:m,country:p,localtime:x,currentDate:h,currentDayOfWeek:g,forecast:v}}(t);if(n.ok)return r;console.log(t.error.message)}catch(e){console.log(e)}}(e);x=n,h(n,g)}v("new york");const _=document.getElementById("display-units-button"),T=document.getElementById("search-bar");T.addEventListener("submit",(e=>{e.preventDefault(),v(document.getElementById("query").value),T.reset()})),_.addEventListener("click",(()=>{g?(g=!1,_.innerText="Show °C"):(g=!0,_.innerText="Show °F"),h(x,g)}))})()})();