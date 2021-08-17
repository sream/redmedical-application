import { Injectable } from '@angular/core';
import weatherJsonData from 'assets/weather-data.json';
import weatherQuestionsJsonData from 'assets/weather-question-data.json';
import { Observable, of } from 'rxjs';
import { ISearchItem } from '../models/search-item.model';
import { IWeather, IWeatherJson } from '../models/weather.model';

@Injectable()
export class WeatherService {

  private weatherJsonData: IWeatherJson[] = weatherJsonData;
  private weatherQuestionsJsonData: ISearchItem[] = weatherQuestionsJsonData['items'];

  constructor() { }

  getWeather(): Observable<IWeather[]> {
    return of(this.weatherJsonData.map(item => new IWeather(item)));
  }

  getWeatherQuestions() {
    return of(this.weatherQuestionsJsonData);
  }
}
