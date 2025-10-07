import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Outgoing request:', req);

    return next.handle(req).pipe(
      tap({
        next: event => console.log('Incoming response:', event),
        error: err => console.error('Request error:', err)
      })
    );
  }

  // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

  //   console.log('Request sent:', req);

  //   // return next(req).pipe(
  //   //   tap({
  //   //     next: event => console.log('Response received:', event),
  //   //     error: err => console.error('Request error:', err)
  //   //   })
  //   // );



  //   // const token = '424342112313232136798+';  // Retrieve the JWT token (from localStorage or AuthService)

  //   // // Skip token addition for specific URLs like login/register
  //   // const skipTokenUrls = ['/auth/login', '/auth/register', '/auth/refresh'];
  //   // const shouldSkipToken = skipTokenUrls.some(url => req.url.includes(url));

  //   // if (token && !shouldSkipToken) {
  //   //   // Clone the request and attach the Authorization header
  //   //   const authReq = req.clone({
  //   //     setHeaders: {
  //   //       'Authorization': `Bearer ${token}`,
  //   //       'Content-Type': 'application/json',
  //   //       'Accept': 'application/json'
  //   //     }
  //   //   });

  //   //   // Pass the cloned request to the next handler
  //   //   return next.handle(authReq);
  //   // }

  //   // // If no token or should skip token for certain routes, pass the original request
  //   // return next.handle(req);

  // }
}
