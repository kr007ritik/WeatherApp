const apiKey = "1e0378053d34be50972ee536d1717395";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  let data = await response.json();
  if (response.status === 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
    document.querySelector(".weatherInfo").style.display = "none";
  } else {
    // console.log(data);
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + `°C`;
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + `%`;
    document.querySelector(".wind").innerHTML = data.wind.speed + ` km/h`;
    const weathertype = (document.querySelector(".weatherType").innerHTML =
      data.weather[0].main);
    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".weatherInfo").style.display = "flex";

    if (weathertype === "Clear") {
      document.querySelector(".weatherIcon").src = "img/Clear.png";
    } else if (weathertype === "Clouds") {
      document.querySelector(".weatherIcon").src = "img/Clouds.png";
    } else if (weathertype === "Drizzle") {
      document.querySelector(".weatherIcon").src = "img/Drizzle.png";
    } else if (weathertype === "Mist") {
      document.querySelector(".weatherIcon").src = "img/Mist.png";
    } else if (weathertype === "Rain") {
      document.querySelector(".weatherIcon").src = "img/Rain.png";
    } else if (weathertype === "Snow") {
      document.querySelector(".weatherIcon").src = "img/Snow.png";
    } else if (weathertype === "Fog") {
      document.querySelector(".weatherIcon").src = "img/fog.png";
    } else if (weathertype === "Haze") {
      document.querySelector(".weatherIcon").src = "img/haze.png";
    } else {
      document.querySelector(".weatherIcon").src = "";
    }

    setTimeout(() => {
      searchCity.value = "";
    }, 3000);
  }
}

const searchCity = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

searchBtn.addEventListener("click", () => {
  const city = searchCity.value;
  checkWeather(city);
});
