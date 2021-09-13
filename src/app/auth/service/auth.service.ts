import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { TokenStatus } from '../common/TokenStatus';

import { HttpClient, HttpResponse, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  checkTokenUrl = '/api/session/test?token=';
  constructor(private http: HttpClient) { }

  setToken(token: string): void {
    window.localStorage.setItem('token', token);
  }

  getToken(): string {
    return window.localStorage.getItem('token');
  }

  checkToken(): Observable<TokenStatus> {
    const token = this.getToken();
    return this.http.get<TokenStatus>(this.checkTokenUrl + token);
  }

  //   /**
  //  * 错误信息捕获处理
  //  * @param error 错误信息
  //  */
  //    private handleError(error: HttpErrorResponse) {

  //     if (error.error instanceof ErrorEvent) {
  //       // 客户端本身引起的错误信息
  //       console.error(`客户端错误：${error.error.message}`);
  //     } else {
  //       // 服务端返回的错误信息
  //       console.error(`服务端错误：HTTP 状态码：${error.status} \n\r 错误信息：${JSON.stringify(error.error)}`);
  //     }
  
  //     console.log('ssss');
  //     // 反馈给用户的错误信息（用于组件中使用 error 回调时的错误提示）
  //     return throwError('不好的事情发生了，毕竟我们都有不顺利的时候。。。');
  //   }
}

