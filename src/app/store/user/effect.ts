import { createEffect, Actions, ofType } from "@ngrx/effects";
import { Injectable, inject } from "@angular/core";
import { UserService } from "../../service/user.service";
import { getUserData, loadUserDataSuccess } from "./action";
import { delay, map, mergeMap } from "rxjs";

@Injectable()
export class UserEffects {

    actions$ = inject(Actions);
    userService = inject(UserService);

    loadUsers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getUserData),
            mergeMap(() =>
                this.userService.getUserData().pipe(
                    delay(1000),
                    map((user: any) => {
                        return loadUserDataSuccess({user});
                    })
                )
            )
        )
    )

}

