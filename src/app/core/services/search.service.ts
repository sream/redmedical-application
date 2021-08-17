import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { PageInfo } from '../models/page-info.model';

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

    private static readonly apiUrl = 'https://api.stackexchange.com/2.2/search';

    constructor(private httpClient: HttpClient) {}

    search(pageInfo: PageInfo): Observable<any> {
        const params = this.prepareParams(pageInfo);

        return this.httpClient.get(SearchService.apiUrl, { params }).pipe(
            map((response: any) => {
                console.log('API USAGE: ' + response.quota_remaining + ' of ' + response.quota_max + ' requests available');
                return response;
            }),
            catchError((error: HttpErrorResponse) => throwError(error))
        );
    }

    private prepareParams(pageInfo: PageInfo): HttpParams {
        const obj = {};
        
        if (typeof pageInfo.pageSize !== 'undefined') {
            obj['pageSize'] = pageInfo.pageSize
        }

        if (typeof pageInfo.order !== 'undefined') {
            obj['order'] = pageInfo.order
        }

        if (typeof pageInfo.sort !== 'undefined') {
            obj['sort'] = pageInfo.sort
        }

        if (typeof pageInfo.site !== 'undefined') {
            obj['site'] = pageInfo.site
        }

        if (typeof pageInfo.intitle !== 'undefined') {
            obj['intitle'] = pageInfo.intitle
        }
        
        return new HttpParams({ fromObject: obj })
    }

}
