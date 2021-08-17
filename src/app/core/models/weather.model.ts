export class IWeather {
   date: string;
   time: string;
   temperatureA: number;
   temperature3: number;
   humidityA: number;
   rain: number;
   wind: number;
   direction: number;
   brightness: number;
   order: number;

   constructor(item: IWeatherJson) {
       this.date = item.Datum;
       this.time = item.Zeit;
       this.temperatureA = item['Temp. 3'];
       this.temperature3 = item['Temp. A.'];
       this.humidityA = item['Feuchte A.'];
       this.rain = item.Regen;
       this.wind = item.Wind;
       this.direction = item.Richtung;
       this.brightness = item.Helligkeit;
   }
}

export interface IWeatherJson {
    Datum: string;
    Zeit: string;
    'Temp. A.': number;
    'Temp. 3': number;
    'Feuchte A.': number;
    Luftdruck: number;
    Regen: number;
    Wind: number;
    Richtung: number;
    Helligkeit: number;
}
