import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Url } from '../common/Url';

@Injectable({
  providedIn: 'root'
})
export class UrlGetService {

  url = '/api/url/get?token=';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  getUrls(token: string): Observable<Url[]> {
    return this.http.get<Url[]>(this.url + token, this.httpOptions);
  }
}
