import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterBody } from '../common/RegisterBody';
import { Observable } from 'rxjs';
import { RegisterResponseBody } from '../common/RegisterResponseBody';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  url = '/api/user/register';
  getCaptchaUrl = '/api/captcha/user/register?email=';
  constructor(private http: HttpClient) { }

  register(registerBody: RegisterBody): Observable<RegisterResponseBody>{
    return this.http.post<RegisterResponseBody>(this.url, registerBody);
  }

  getCaptcha(email: string): Observable<RegisterResponseBody> {
    return this.http.get<RegisterResponseBody>(this.getCaptchaUrl + email);
  }
}
