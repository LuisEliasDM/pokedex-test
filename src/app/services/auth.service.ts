import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { StorageHelper } from '../libs/helpers/storage.helper';
import { Endpoints } from '../utils/endpoints';

@Injectable({
  providedIn: 'root'
})
export class AuthService{

  constructor(private http: HttpClient) {
  }

  isAuthenticated(): boolean{
    return StorageHelper.getSessionStatus()
  }

  login(username: string, password: string): Observable<any>{
    return this.http.post(Endpoints.GENERAL_URL + Endpoints.LOGIN_URL, {
      username: username,
      password: password
    }).pipe(
      catchError((error: any) => {
        return of(false)
      })
    )
  }

  logout(){
    let isAuthenticated = false
    StorageHelper.setSessionStatus(isAuthenticated);
    StorageHelper.removeItem("session");
  }

  register(username: string, password: string, email: string): Observable<any>{
    return this.http.post(Endpoints.GENERAL_URL + Endpoints.REGISTER_URL, {
      username: username,
      password: password,
      email: email
    }).pipe(
      map((response: any)=>{
        return response.success
      }),
      catchError((error: any) => {
        return of(false)
      })
    )
  }

  refreshToken(): Observable<any>{
    return this.http.post(Endpoints.GENERAL_URL + Endpoints.REFRESH_TOKEN_URL, {
      session: StorageHelper.getItem("session")
    })
  }

}
