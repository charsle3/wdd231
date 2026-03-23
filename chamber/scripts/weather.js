const currentWeather = document.querySelector("#currentWeather");
const forecast = document.querySelector("#forecast");

const currentWeatherurl = "https://api.openweathermap.org/data/2.5/weather?lat=47.81&lon=-117.57&units=imperial&appid=3131a49eee271c951273265079466644";

const forecasturl = "https://api.openweathermap.org/data/2.5/forecast?lat=47.81&lon=-117.57&units=imperial&appid=3131a49eee271c951273265079466644";

async function currentWeatherApiFetch() {
  try {
    const response = await fetch(currentWeatherurl);
    if (response.ok) {
      const data = await response.json();
      displayCurrentWeather(data); 
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

function displayCurrentWeather(data) {
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

  const weatherIcon = document.createElement("img");
  weatherIcon.setAttribute('alt', data.weather[0].description)
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('loading', "lazy");

  const description = document.createElement("p");
  description.innerHTML = data.weather[0].description;

  const temp = document.createElement("p");
  temp.innerHTML = `${data.main.temp}&deg;F`;

  currentWeather.appendChild(weatherIcon);
  currentWeather.appendChild(description);
  currentWeather.appendChild(temp);
}

async function forecastApiFetch() {
    try {
    const response = await fetch(forecasturl);
    if (response.ok) {
      const data = await response.json();
      displayForecast(data); 
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

function displayForecast(data) {
    let noon = [];
    data.list.forEach(timeperiod => {
        if (timeperiod.dt % 86400 == 43200) {
            noon.push(timeperiod);
        }
    });

    noon.forEach(day => {
        const particularDay = new Date(day.dt * 1000);

        const dayOfWeek = document.createElement('p');
        dayOfWeek.innerHTML = `${particularDay.toDateString()}: ${day.main.temp}°F`;

        forecast.appendChild(dayOfWeek);
    });
}

currentWeatherApiFetch();
forecastApiFetch();