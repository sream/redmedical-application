import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageInfo } from 'app/core/models/page-info.model';
import { SearchService } from 'app/core/services/search.service';
import { WeatherService } from 'app/core/services/weather.service';
import { combineLatest, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  public typeScriptQuestions: any;
  public angular2Questions: any;
  public weatherQuestions: any;
  public weatherSearchitems: any;

  private subscriptions$: Subscription[] = [];

  private typeScriptPageInfo: PageInfo = {
    pageSize: 10,
    order: 'desc',
    sort: 'creation',
    site: 'stackoverflow',
    intitle: 'Typescript'
  }

  private angular2PageInfo: PageInfo = {
    pageSize: 10,
    order: 'desc',
    sort: 'creation',
    site: 'stackoverflow',
    intitle: 'Angular2'
  }

  constructor(
    private searchService: SearchService,
    private weatherService: WeatherService
  ) { }

  ngOnInit() {

    this.subscriptions$.push(
      this.searchService.search(this.typeScriptPageInfo).subscribe((response) =>
        this.typeScriptQuestions = response.items
      )
    )

    this.subscriptions$.push(
      this.searchService.search(this.angular2PageInfo).subscribe((response) =>
        this.angular2Questions = response.items
      )
    )

    this.subscriptions$.push(
      combineLatest([
        this.weatherService.getWeatherQuestions(),
        this.weatherService.getWeather()
      ]).pipe(
        map(([searchItems, weatherItems]) =>
          [this.randomize(searchItems), this.randomize(weatherItems)]
        ),
        map(([searchItems, weatherItems]) =>
          [this.assignOrder(searchItems, true), this.assignOrder(weatherItems, false)]
        )
      ).subscribe((result) => (
        this.weatherQuestions = result[0],
        this.weatherSearchitems = result[1]
      ))
    )


  }

  ngOnDestroy(): void {
    while (this.subscriptions$.length > 0) {
      this.subscriptions$.pop().unsubscribe();
    }
  }

  randomize(data: any[]): any[] {
    return data
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)
      .slice(0, 5)
  }

  assignOrder(data: any[], isOdd: boolean): any[] {
    const odd = [1, 3, 5, 7, 9];
    const even = [2, 4, 6, 8, 10];

    data.map((item, index) =>
      item.order = isOdd ? odd[index] : even[index]
    )

    return data;
  }
}
