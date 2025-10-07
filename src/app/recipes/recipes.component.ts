import { Component, inject, OnInit } from '@angular/core';
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

  recipes$!: Observable<IRecipesState[]>;
  loading$!: Observable<Boolean>;

  constructor() {
    this.recipes$ = this.recipeStore.select(recipeSelect);
    this.loading$ = this.recipeStore.select(recipeLoading);
  }


  ngOnInit(): void {
    this.recipeStore.dispatch(getRecipesData());
  }

}
