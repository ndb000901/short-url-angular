import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserNameUpdateBody } from '../common/UserNameUpdateBody';

@Injectable({
  providedIn: 'root'
})
export class UserNameUpdateService {

  url = '/api//user/name/update';
  constructor(
    private http: HttpClient
  ) { }

  userNameUpdate(userNameUpdateBody: UserNameUpdateBody): Observable<UserNameUpdateBody> {
    return this.http.post<UserNameUpdateBody>(this.url, userNameUpdateBody);
  }
}
