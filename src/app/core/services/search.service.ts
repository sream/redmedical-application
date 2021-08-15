import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export interface ISearchResultItem  {
    answer_count: number;
    closed_date: number;
    closed_reason: string;
    creation_date: number;
    is_answered: boolean;
    last_activity_date: number;
    link: string;
    score: number;
    tags: Array<string>;
    title: string;
    view_count: number;
}

@Injectable()
export class SearchService {

    private static readonly apiUrl =
        'https://api.stackexchange.com/2.2/search?pagesize=20&order=desc&sort=activity&site=stackoverflow&intitle=';

    constructor(private httpClient: HttpClient) {}

    search(keyword: string): Observable<JSON> {
        return this.httpClient.get(SearchService.apiUrl + keyword).pipe(
            map((response: any) => {
                console.log('API USAGE: ' + response.quota_remaining + ' of ' + response.quota_max + ' requests available');
                return response;
            }),
            catchError((error: HttpErrorResponse) => throwError(error))
        );
    }

}
