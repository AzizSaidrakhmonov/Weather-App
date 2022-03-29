
const searchBtn = document.querySelector(".searching");
const input = document.querySelector(".input input")

const getData = async () => {
    const myKey =  "a226a7abcbfa5f451e48b1b02c1b091a";

    try{
        const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${input.value}&units=metric&appid=${myKey}`)
        consoleData(await res.json())
    } catch (error) {
        console.error(error)
    }
    
    input.value = '';
}

function consoleData(data) {
    const { name, country, sunrise, sunset } = data.city;
    const { icon, description } = data.list[2].weather[0];
    const { temp, humidity, pressure } = data.list[2].main;
    const { pop, dt_txt } = data.list[2];
    const { speed } = data.list[2].wind;


    let sunriseTime = sunrise;
    let sunriseDate = new Date(sunriseTime * 1000);
    let sunriseTimeStr = sunriseDate.toLocaleTimeString();

    let sunsetTime = sunset;
    let sunsetDate = new Date(sunsetTime * 1000);
    let sunsetTimeStr = sunsetDate.toLocaleTimeString();

    console.log(name, country, sunrise, sunset, icon, description, temp, pop, humidity, pressure, speed, dt_txt);

    document.querySelector(".city-name").innerHTML = `${name}, ${country}`;
    document.querySelector(".date-info").innerHTML = `Date and Time: ${dt_txt}`; 
    document.querySelector(".weather-icon").src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    document.querySelector(".weather-degree").innerHTML = `${Math.round(temp)} °C`;
    document.querySelector(".weather-condition").innerHTML = description;
    document.querySelector(".humidity").innerHTML = `Humidity: ${humidity} %`;
    document.querySelector(".precipitation").innerHTML = `Precipitation: ${Math.round(pop*100)} %`;
    document.querySelector(".wind").innerHTML = `Wind: NNW, ${speed} m/s`;
    document.querySelector(".sunrise").innerHTML = `Sunrise: ${sunriseTimeStr}`;
    document.querySelector(".pressure").innerHTML = `Pressure: ${pressure} hPa (on the ground level)`;
    document.querySelector(".sunset").innerHTML = `Sunset: ${sunsetTimeStr}`;

    // EXPECTED INFORMATIONS

    document.querySelector(".date-1").innerHTML = data.list[10].dt_txt;
    document.querySelector(".temp-1").innerHTML = `${Math.round(data.list[10].main.temp)} °C`;
    document.querySelector(".icon-1").src = `http://openweathermap.org/img/wn/${data.list[10].weather[0].icon}@2x.png`;
    document.querySelector(".condition-1").innerHTML = data.list[10].weather[0].description;
    document.querySelector(".pop-1").innerHTML = `${Math.round(data.list[10].pop*100)}%`;

    document.querySelector(".date-2").innerHTML = data.list[18].dt_txt;
    document.querySelector(".temp-2").innerHTML = `${Math.round(data.list[18].main.temp)} °C`;
    document.querySelector(".icon-2").src = `http://openweathermap.org/img/wn/${data.list[18].weather[0].icon}@2x.png`;
    document.querySelector(".condition-2").innerHTML = data.list[18].weather[0].description;
    document.querySelector(".pop-2").innerHTML = `${Math.round(data.list[18].pop*100)}%`;

    document.querySelector(".date-3").innerHTML = data.list[26].dt_txt;
    document.querySelector(".temp-3").innerHTML = `${Math.round(data.list[26].main.temp)} °C`;
    document.querySelector(".icon-3").src = `http://openweathermap.org/img/wn/${data.list[26].weather[0].icon}@2x.png`;
    document.querySelector(".condition-3").innerHTML = data.list[26].weather[0].description;
    document.querySelector(".pop-3").innerHTML = `${Math.round(data.list[26].pop*100)}%`;

    document.querySelector(".date-4").innerHTML = data.list[34].dt_txt;
    document.querySelector(".temp-4").innerHTML = `${Math.round(data.list[34].main.temp)} °C`;
    document.querySelector(".icon-4").src = `http://openweathermap.org/img/wn/${data.list[33].weather[0].icon}@2x.png`;
    document.querySelector(".condition-4").innerHTML = data.list[34].weather[0].description;
    document.querySelector(".pop-4").innerHTML = `${Math.round(data.list[34].pop*100)}%`;

}


searchBtn.addEventListener('click', ()=> {
    getData();
    setTimeout(() => { 
        document.querySelector(".weather-body").classList.add("active");
    }, 1000)    
})

input.addEventListener('keypress', (e) => {
   if(e.key === "Enter"){
    getData();
        setTimeout(() => {
            document.querySelector(".weather-body").classList.add("active");
        }, 1000);
    }
})



