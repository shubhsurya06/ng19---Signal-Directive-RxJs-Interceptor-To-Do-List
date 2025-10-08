import { Component, inject, OnInit, signal } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { IRecipesState } from '../store/recipes/model';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { recipeSelect, recipeLoading } from '../store/recipes/selector';
import { getRecipesData } from '../store/recipes/actions';

@Component({
  selector: 'app-recipes',
  imports: [AsyncPipe],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss'
})
export class RecipesComponent implements OnInit {

  // recipes store
  recipeStore = inject(Store<IRecipesState>);

  // recipe Observable, which we will used to show on VIEW/UI
  // recipes$!: Observable<IRecipesState[]>;

  // loader observable, which we will show when recipe data will load
  // loading$!: Observable<Boolean>;

  // store recipe data using signal API
  recipeSignal = signal<IRecipesState[]>([]);

  // store loading data using signal API
  loadingSignal = signal<Boolean>(false);

  constructor() {
    // set selector in respective observable, selector came from selector.ts
    // this.recipes$ = this.recipeStore.select(recipeSelect);
    // this.loading$ = this.recipeStore.select(recipeLoading);

    // get recipe data here in selector, its observable, so set data in recipeSignal
    let recipe$ = this.recipeStore.select(recipeSelect);
    recipe$.subscribe(data => this.recipeSignal.set(data));
  
    // show selector of loading, which is observable & convert it to signal
    let loader$ = this.recipeStore.select(recipeLoading);
    loader$.subscribe(flag => this.loadingSignal.set(flag));

  }

  ngOnInit(): void {
    // on page load, dispatch/call method to get recipeData from API
    this.recipeStore.dispatch(getRecipesData());
  }

}
