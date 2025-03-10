// script.js
const API_KEY = "";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const cityInput = document.getElementById("city-input");
const searchBtn = document.getElementById("search-btn");
const weatherCard = document.querySelector(".weather-card");
const errorMessage = document.getElementById("error-message");

async function fetchWeather(city) {
  try {
    const response = await fetch(
      `${BASE_URL}?q=${city}&units=metric&appid=${API_KEY}`
    );

    if (!response.ok) throw new Error("City not found");

    const data = await response.json();
    updateWeatherUI(data);
    errorMessage.classList.add("hidden");
  } catch (error) {
    errorMessage.textContent = "Error: Please enter a valid city name";
    errorMessage.classList.remove("hidden");
    weatherCard.classList.add("hidden");
  }
}

function updateWeatherUI(data) {
  document.getElementById(
    "location"
  ).textContent = `${data.name}, ${data.sys.country}`;

  document.getElementById(
    "temperature"
  ).textContent = `Temperature: ${Math.round(data.main.temp)}°C`;

  document.getElementById(
    "description"
  ).textContent = `Weather: ${data.weather[0].description}`;

  document.getElementById(
    "humidity"
  ).textContent = `Humidity: ${data.main.humidity}%`;

  const icon = document.getElementById("weather-icon");
  icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  icon.alt = data.weather[0].description;

  weatherCard.classList.remove("hidden");
}

searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city) fetchWeather(city);
});

cityInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const city = cityInput.value.trim();
    if (city) fetchWeather(city);
  }
});
