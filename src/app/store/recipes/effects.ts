import { Actions, createEffect, ofType } from "@ngrx/effects";
import { pipe, mergeMap, map } from 'rxjs';
import { CommonServiceService } from "../../common-service.service";
import { Injectable, inject } from '@angular/core';
import { getRecipesData, loadRecipesDataSuccess } from "./actions";

@Injectable()
export class RecipesEffects {

    commonService = inject(CommonServiceService);

    actions$ = inject(Actions);

    loadRecipesData$ = createEffect(() => (
        this.actions$.pipe(
            ofType(getRecipesData),
            mergeMap(() => 
                this.commonService.getRecipesData().pipe(
                    map((data: any) => {
                        let recipes = data.recipes.slice(0, 5);
                        return loadRecipesDataSuccess({recipes});
                    })
                )
            )
        )
    ))

}

