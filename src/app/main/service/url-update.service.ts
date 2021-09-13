import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlUpdateBody } from '../common/UrlUpdateBody';



@Injectable({
  providedIn: 'root'
})
export class UrlUpdateService {

  url = '/api/url/update';
  constructor(
    private http: HttpClient,
    ) { }

  updateUrl(urlUpdateBody: UrlUpdateBody): void {
    this.http.post<UrlUpdateBody>(this.url, urlUpdateBody).subscribe();
  }
}
