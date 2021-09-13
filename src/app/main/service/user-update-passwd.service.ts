import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserUpdatePasswdBody } from '../common/UserUpdatePasswdBody';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserUpdatePasswdService {

  url = '/api/user/passwd/update';
  constructor(
    private http: HttpClient
  ) { }

  userUpdatePasswd(userUpdatePasswdBody: UserUpdatePasswdBody): Observable<UserUpdatePasswdBody> {
    return this.http.post<UserUpdatePasswdBody>(this.url, userUpdatePasswdBody);
  }
}
