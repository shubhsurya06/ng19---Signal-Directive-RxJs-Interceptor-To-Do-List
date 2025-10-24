import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from '@angular/common/http';
import { JwtInterceptor } from './interceptor/http.interceptor';

import { routes } from './app.routes';
import { TaskDirective } from './task/task.directive';
import { HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { provideStore } from '@ngrx/store';
import { counterReducer } from './store/counter.reducer';
import { provideEffects } from '@ngrx/effects';
import { UserEffects } from './store/user/effect';
import { userReducer } from './store/user/reducer';
import { NewCounterReducer } from './store/counter/reducer';
import { RecipesEffects } from './store/recipes/effects';
import { recipesReducer } from './store/recipes/reducer';
import { TodoEffects } from './todo/store/effects';
import { todoReducer } from './todo/store/reducer';
import { errorInterceptor } from './interceptor/error.interceptor';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        provideHttpClient(withInterceptors([
            (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> => {
                console.log('Interceptor - Request sent:', req);
                return next(req).pipe(tap({
                    next: (event) => console.log('Interceptor - Response:', event),
                    error: (err) => console.error('Interceptor - Error:', err)
                }));
            }, errorInterceptor
        ])),
        TaskDirective,
        provideStore({ 
            count: counterReducer, 
            user: userReducer, 
            counter: NewCounterReducer, 
            recipes: recipesReducer, 
            todoList: todoReducer 
        }),
        provideEffects([UserEffects, RecipesEffects, TodoEffects])
    ]
};
