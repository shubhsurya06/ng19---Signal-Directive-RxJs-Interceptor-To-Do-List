import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RxjsBasicComponent } from './rxjs-basic/rxjs-basic.component';
import { RxjsCombineComponent } from './rx-js/rxjs-combine/rxjs-combine.component';
import { SignalComponent } from './signal/signal.component';
import { TodoComponent } from './todo/todo.component';
import { TaskComponent } from './task/task/task.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent, title: 'Home'},
    { path: 'crisis-list', component: CrisisListComponent, title: 'Crisis List'},
    { path: 'heroes-list', component: HeroesListComponent, title: 'Heroes List'},

    { path: 'heroes', redirectTo: '/heroes-list', pathMatch: 'full'},
    { path: 'crisis', redirectTo: '/crisis-list', pathMatch: 'full'},
    { path: 'rxjs-basic', component: RxjsBasicComponent, pathMatch: 'full'},
    { path: 'combine-rxjs', component: RxjsCombineComponent, pathMatch:'full'},
    { path: 'signal', component: SignalComponent, pathMatch:'full'},
    { path: 'task', component: TodoComponent, title: 'ToDo Task' },
    { path: 'newTask', component: TaskComponent, title: 'Task To Do' },
    // { path: '**', component: PageNotFoundComponent }

];
