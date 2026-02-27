// Class to create a Weather Object
import convertFahToCelcius from "../utils/convertTemperature.js";
export class Weather {
  constructor(data) {
    this.icon = data.icon;
    this.datetime = data.datetime;
    this.temp = convertFahToCelcius(data.temp);
    this.description = data.conditions;
  }
}
