import getWeather from "../services/weatherApi.js";
import renderWeather from "../views/weatherView.js";
import { Weather } from "../models/Weather.js";
import { resetContainer } from "../views/weatherView.js";

export default async function searchWeather() {
  const input = document.querySelector("input");
  if (!input.value) return;

  try {
    resetContainer();
    const weather = await getWeather(input.value);
    const weatherObject = new Weather(weather);
    setTimeout(function () {
      renderWeather(weatherObject);
    }, 5000);
  } catch (error) {
    console.log("Erro:", error);
  }
}
