import "./style/loader.css";

import searchWeather from "./controllers/weatherController.js";

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  searchWeather();
});
