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
import { UserComponent } from './user/user.component';
import { RecipesComponent } from './recipes/recipes.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent, title: 'Home'},
    { path: 'user', component: UserComponent, title: 'User NgRx Store' },
    { path: 'recipes', component: RecipesComponent, title: 'Recipes NgRx Store' },
    // { path: 'crisis-list', component: CrisisListComponent, title: 'Crisis List'},
    // { path: 'heroes-list', component: HeroesListComponent, title: 'Heroes List'},

    { path: 'heroes', component: CrisisListComponent, pathMatch: 'full'},
    { path: 'crisis', component: HeroesListComponent, pathMatch: 'full'},
    // { path: 'rxjs-basic', component: RxjsBasicComponent, pathMatch: 'full'},
    // { path: 'combine-rxjs', component: RxjsCombineComponent, pathMatch:'full'},
    { path: 'signal', component: SignalComponent, pathMatch:'full'},
    { path: 'task', component: TodoComponent, title: 'ToDo Task' },
    { path: 'newTask', component: TaskComponent, title: 'Task To Do' },
    { path: '', redirectTo: 'home', pathMatch: 'full'}
    // { path: '**', component: PageNotFoundComponent }

];
