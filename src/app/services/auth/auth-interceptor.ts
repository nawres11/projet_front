import {Injectable} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthenticationService} from './authentication.service';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthenticationService) {}


  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log( 'login1== ', req);

    let authReq = req;
    console.log(req.url);

    if (req.url === 'http://localhost:80/login' ||
      req.url === 'http://localhost:80/rest/register' ||
      req.url.substring(0, 33) === 'http://127.0.0.1:80/rest/servers' ||
      req.url === 'http://127.0.0.1:80/rest/flux'  ) {return next.handle(req); } else {
    const token = this.auth.getToken() ;

    if (token != null) { authReq = req.clone({ headers: req.headers.set('Authorization', token) }); }
    console.log('login2== ', authReq );
    console.log('token ==', token);
    return next.handle(authReq);
  }}

}


export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];
