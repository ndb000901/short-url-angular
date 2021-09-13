import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlDeleteBody } from '../common/UrlDeleteBody';

@Injectable({
  providedIn: 'root'
})
export class UrlDeleteService {

  url = '/api/url/delete';
  constructor(private http: HttpClient) { }

  deleteUrl(urlDeleteBody: UrlDeleteBody): void {
    this.http.post<UrlDeleteBody>(this.url, urlDeleteBody).subscribe();
  }
}
