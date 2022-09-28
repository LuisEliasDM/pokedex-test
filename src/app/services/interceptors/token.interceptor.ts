import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Buffer } from 'Buffer'
import { ProfileService } from '../profile.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private profileService: ProfileService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let user = this.profileService.getUser()
    const TOKEN: string = Buffer.from(`${user.username}:${user.password}`).toString("base64");

    const HEADER_REQUEST: HttpRequest<any> = request.clone({
      headers: request.headers.set('Authorization', `Basic ${TOKEN}`)
    })

    return next.handle(HEADER_REQUEST);
  }
}
