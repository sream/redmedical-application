import { Component, Input, OnInit } from '@angular/core';
import { faClock, faThermometerFull, faThermometerHalf } from '@fortawesome/free-solid-svg-icons';
import { IWeather } from 'app/core/models/weather.model';

@Component({
  selector: 'app-dashboard-weather',
  templateUrl: './dashboard-weather.component.html',
  styleUrls: ['./dashboard-weather.component.scss']
})
export class DashboardWeatherComponent implements OnInit {

  @Input() items: IWeather[];

  faThermometerHalf = faThermometerHalf;
  faThermometerFull = faThermometerFull;
  faClock = faClock;

  constructor() { }

  ngOnInit(): void {
  }

}
