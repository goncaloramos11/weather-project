import "../style/cards.css";
import { format } from "date-fns";
import { icons } from "../utils/iconMapper.js";
// function receives the API directly, and render to the screen only the local
export function renderLocation(weatherDate) {
  const loader = document.querySelector(".loader");
  loader.remove();
  const container = document.querySelector(".weather-container");

  const local = document.querySelector(".local");
  local.textContent = weatherDate.address;

  container.appendChild(local);
}

// function receives the object and render the card
export default function renderCard(weatherObject) {
  const containerWeather = document.querySelector(".weather-container");
  const cards = document.querySelector(".cards");
  console.log(weatherObject);
  const card = document.createElement("li");
  card.setAttribute("class", "card");

  const day = document.createElement("div");
  day.setAttribute("class", "day");
  day.textContent = format(weatherObject.datetime, "EEEE");

  const content = document.createElement("div");
  content.setAttribute("class", "content");

  const logo = document.createElement("div");
  const img = document.createElement("img");
  const description = document.createElement("div");

  description.setAttribute("class", "description");
  description.textContent = weatherObject.description;
  const iconSrc = icons[weatherObject.icon];
  img.src = iconSrc;

  logo.setAttribute("class", "logo");

  logo.appendChild(img);
  logo.appendChild(description);

  const temp = document.createElement("div");
  temp.setAttribute("class", "temp");

  const celcius = document.createElement("div");
  celcius.setAttribute("class", "celcius");
  celcius.textContent = weatherObject.temp + "º";

  const date = document.createElement("div");
  date.setAttribute("class", "date");
  date.textContent = format(weatherObject.datetime, "d LLLL");

  temp.appendChild(celcius);
  temp.appendChild(date);

  content.appendChild(logo);
  content.appendChild(temp);

  card.appendChild(day);
  card.appendChild(content);

  cards.appendChild(card);
  containerWeather.appendChild(cards);
}

export function resetContainer() {
  const container = document.querySelector(".weather-container");
  container.innerHTML = "";

  const span = document.createElement("span");
  span.textContent = "Location:";
  const local = document.createElement("div");
  local.setAttribute("class", "local");
  const cards = document.createElement("ul");
  cards.setAttribute("class", "cards");
  const loader = document.createElement("div");
  loader.setAttribute("class", "loader");

  container.appendChild(span);
  container.append(local);
  container.append(cards);
  container.appendChild(loader);
}
