import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInfo } from '../common/UserInfo';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  url = '/api/user/info?token=';

  constructor(private http: HttpClient) { }

  getUserInfo(token: string): Observable<UserInfo[]>{
    return this.http.get<UserInfo[]>(this.url + token);
  }
}
