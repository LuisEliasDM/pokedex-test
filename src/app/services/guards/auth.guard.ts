import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanLoad, CanActivate{
  constructor(public authService: AuthService, private router: Router){
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const ACCESS: boolean = this.authService.isAuthenticated()
      if(!ACCESS){
        this.router.navigate(["auth/login"])
      }
      return ACCESS;
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
      const ACCESS: boolean = this.authService.isAuthenticated()
      if(!ACCESS){
        this.router.navigate(["auth/login"])
      }
      return ACCESS;
  }
}
