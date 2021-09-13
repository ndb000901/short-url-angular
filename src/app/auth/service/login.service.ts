import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginBody } from '../common/LoginBody';
import { Observable } from 'rxjs';
import { Token } from '../common/Token';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = '/api/user/login';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  login(loginBody: LoginBody): Observable<Token>{
    return this.http.post<Token>(this.url, loginBody);
  }
}
