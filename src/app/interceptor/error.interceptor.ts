import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((err) => {
      console.log('Some error happens in interceptor:', err)
      if (err instanceof HttpErrorResponse) {
        let status = err.status;
        switch(status) {
          case 400: 
            console.error('400 error code');
            break;
          default:
            console.error("Some other error");
            break;
        }
      }
      throw err;
    })
  );
};
