import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, switchMap, throwError } from 'rxjs';
import { StorageHelper } from 'src/app/libs/helpers/storage.helper';
import { AuthService } from '../auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(request.url.includes("/mirror/")){
      let originalRequest = request
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + StorageHelper.getItem('session').token
        }
      })
      return next.handle(request).pipe(
        catchError((error: any) => {
          console.log("Error",error);
          if(error instanceof HttpErrorResponse && error.status === 401){
            console.log("HttpErrorResponse 401");
            return this.expiredHandler(originalRequest, next)
          }
          return throwError(() => error)
        })
      )
    }
    return next.handle(request)
  }

  private expiredHandler(originalRequest: HttpRequest<unknown>, next: HttpHandler){
    return this.authService.refreshToken().pipe(
      switchMap((response: any) => {
        StorageHelper.setItem('session', response)

        originalRequest = originalRequest?.clone({
          setHeaders: {
            Authorization: 'Bearer ' + StorageHelper.getItem('session').token
          }
        })

        return next.handle(originalRequest!)
      })
    )
  }
}
