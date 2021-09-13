import { Injectable } from '@angular/core';
import { UrlAddBody } from '../common/UrlAddBody';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlAddService {

  url = '/api/url/add';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  addUrls(urlAddBody: UrlAddBody): Observable<UrlAddBody>{
    return this.http.post<UrlAddBody>(this.url, urlAddBody, this.httpOptions);
  }
}
