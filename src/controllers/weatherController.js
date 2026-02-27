import getWeather from "../services/weatherApi.js";
import { renderLocation } from "../views/weatherView.js";
import { Weather } from "../models/Weather.js";
import renderCard from "../views/weatherView.js";
import { resetContainer } from "../views/weatherView.js";
// function to manage the weather
export default async function searchWeather() {
  const input = document.querySelector("input");
  if (!input.value) return;

  try {
    resetContainer();
    const weather = await getWeather(input.value);
    console.log(weather);
    renderLocation(weather);
    weatherManagement(weather);
  } catch (error) {
    console.log("Erro:", error);
  }
}

//function to get the 5 days of the week
function weatherManagement(data) {
  const week_days = 7;
  const days = [...data.days];
  console.log(days[0]);
  days.slice(0, week_days).forEach((day) => {
    const weatherCard = new Weather(day);
    renderCard(weatherCard);
  });
}
