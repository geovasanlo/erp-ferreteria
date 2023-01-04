import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { of as ObservableOf } from 'rxjs';
import { map } from 'rxjs/operators';
import * as jwt_decode from 'jwt-decode';

import { User } from '../../core/modelos/user';
import { environment } from '../../../environments/environment';
import { Respuesta } from 'src/app/core/modelos/respuesta';
import { ElementoMenu } from 'src/app/core/modelos/elemento-menu';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
  }

  /*
  public getCurrentUser(): User {
    return JSON.parse(localStorage.getItem('user')) as User;
  }

  public login(email: string, password: string) {
    return this.http.post<Respuesta>(`${environment.apiURL}/login`, { email, password })
      .pipe(
        map( (respuesta: Respuesta) => {
          const decoded = jwt_decode(respuesta.data.usuario.token);
          // FIXME: Obtener el usuario del token
          // const user = decoded['sub'] as User;
          const user  = {nombre: 'Eduardo', apellidoMaterno: 'Sanchez'} as User;
          if ( user && respuesta.data.usuario.token ) {
            localStorage.setItem('token', respuesta.data.usuario.token);
            localStorage.setItem('user', JSON.stringify(user));
          }
          return user;
        })
      );
  }

  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }*/

  public getMenuElements(): Observable<ElementoMenu[]> {
    // FIXME: Este método debe pedir al back los menús que tiene permitido ver
    return ObservableOf([
      {nombre: 'Productos', enlace: 'productos', icono: 'shopping_cart'},
      {nombre: 'Proveedores', enlace: 'proveedores', icono: 'groups'}
    ]);
  }
  

}
