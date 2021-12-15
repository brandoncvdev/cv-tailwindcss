import { Injectable, SkipSelf } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class GithubService {
    private url = 'https://api.github.com/users/brandoncvdev/repos';

    constructor(@SkipSelf() private httpClient: HttpClient) {}

    public getRepositories(): Observable<any> {
        return this.httpClient.get(this.url);
    }
}
