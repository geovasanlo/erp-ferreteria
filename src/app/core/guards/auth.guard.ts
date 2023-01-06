import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
  ){
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.authService.usuarioEstaLogeado()) return this.router.navigate(['login']).then(() => false);
    return true;
    /*return this.authService.usuarioActual$.pipe(map(usuario => {
      if (!usuario) {
        this.router.navigate(['login']);
        return false;
      }
      return true;
    }));*/
  }
  
}
