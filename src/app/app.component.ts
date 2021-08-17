import { Component } from '@angular/core';
import { PageInfo } from './core/models/page-info.model';
import { SearchService } from './core/services/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';

  constructor(private _searchService: SearchService) {

  }

  triggerService() {
    const pageInfo = <PageInfo>{
      site: 'stackoverflow',
      intitle: 'angular2'
    };

    this._searchService.search(pageInfo).subscribe((res) => {
      console.log('API RESULT', res);
    });
  }

}
