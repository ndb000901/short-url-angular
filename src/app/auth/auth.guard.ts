import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';
import { TokenStatus } from './common/TokenStatus';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  // isLogin = false;
  constructor(
    private router: Router,
    private authService: AuthService
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // let isLogin = false;
    const currentPath = route.routeConfig.path;

    this.authService.checkToken().subscribe(
      result => {
        if (result.code !== 2000)
        {
          if (currentPath !== 'login' && currentPath !== 'register' && currentPath !== 'forget/passwd')
          {
            this.router.navigate(['login']);
            return false;
          }
        }
        else
        {
          if (currentPath === 'login' || currentPath === 'register' || currentPath === 'forget/passwd')
          {
            this.router.navigate(['main']);
            return false;
          }
        }
      },
      error => {
        if (currentPath !== 'login' && currentPath !== 'register' && currentPath !== 'forget/passwd')
        {
          this.router.navigate(['login']);
          return false;
        }
        console.log('aa');
      }
    );
    return true;
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const currentPath = childRoute.routeConfig.path;
    this.authService.checkToken().subscribe(
      result => {
        if (result.code !== 2000)
        {
          if (currentPath !== 'login' && currentPath !== 'register' && currentPath !== 'forget/passwd')
          {
            this.router.navigate(['login']);
            return false;
          }
        }
      },
      error => {
        if (currentPath === 'login' || currentPath === 'register' || currentPath === 'forget/passwd')
        {
          return false;
        } else {
          this.router.navigate(['login']);
          return false;
        }
      }
    );

    return true;
  }



}
