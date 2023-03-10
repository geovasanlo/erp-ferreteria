import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(
    private router: Router
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    let request = req;
    request = req.clone({
      setHeaders: {
        'Access-Control-Allow-Origin': '*'
      }
    });
    if (token)
      request = req.clone({
        setHeaders: {
          authorization: `Bearer ${ token }`
        }
      });
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401) {
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          this.router.navigateByUrl('/login');
          alert('La sesión ha expirado, inicie sesión nuevamente.');
        }
        return throwError( err );
      })
    );
  }

}
