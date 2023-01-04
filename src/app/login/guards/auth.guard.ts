import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
  }
  canLoad(route: Route): boolean | Promise<boolean> | Observable<boolean> {
    const currentUser = this.authenticationService.getCurrentUser();
    if (currentUser) return true;
    this.router.navigate(['login']);
    return false;
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const currentUser = this.authenticationService.getCurrentUser();
    if (currentUser) return true;
    this.router.navigate(['login']);
    return false;
  }

}
