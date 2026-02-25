// function to get the data from Visual Crossing API to get the weather
export default async function getWeather(city) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=ZSBRLAC3NEG4QQGL9T2L668S8&contentType=json`,
    );
    const weatherData = response.json();
    return weatherData;
  } catch (e) {
    console.log(e);
  }
}
