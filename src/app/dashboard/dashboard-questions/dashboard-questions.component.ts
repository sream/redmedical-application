import { Component, Input, OnInit } from '@angular/core';
import { ISearchItem } from 'app/core/models/search-item.model';

@Component({
  selector: 'app-dashboard-questions',
  templateUrl: './dashboard-questions.component.html',
  styleUrls: ['./dashboard-questions.component.scss']
})
export class DashboardQuestionsComponent implements OnInit {

  @Input() items: ISearchItem[];

  constructor() { }

  ngOnInit(): void {
  }

}
