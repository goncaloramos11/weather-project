// function receives the data from the API, and render to the screen
export default function renderWeather(weatherObject) {
  const container = document.querySelector(".weather");
  const local = document.createElement("div");
  const precipitation = document.createElement("div");
  const humidity = document.createElement("div");
  const temp = document.createElement("div");

  container.innerHTML = "";

  local.textContent = weatherObject.local;
  precipitation.textContent = weatherObject.precipitation;
  humidity.textContent = weatherObject.humidity;
  temp.textContent = weatherObject.temp;

  container.appendChild(local);
  container.appendChild(precipitation);
  container.appendChild(humidity);
  container.appendChild(temp);
}

export function resetContainer() {
  const container = document.querySelector(".weather");
  const loader = document.createElement("div");
  loader.setAttribute("class", "loader");
  container.innerHTML = "";
  container.appendChild(loader);
}
