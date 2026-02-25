// Class to create a Weather Object
import convertFahToCelcius from "../utils/convertTemperature.js";
export class Weather {
  constructor(data) {
    this.local = data.address;
    this.precipitation = data.currentConditions.precip;
    this.humidity = data.currentConditions.humidity;
    this.temp = convertFahToCelcius(data.currentConditions.temp);
  }
}
