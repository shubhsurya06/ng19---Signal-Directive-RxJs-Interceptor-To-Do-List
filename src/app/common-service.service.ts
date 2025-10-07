import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, shareReplay, tap, } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  http = inject(HttpClient);
  url = 'https://jsonplaceholder.typicode.com/users';

  userDetailsMap = new Map<number, Observable<any>>();

  constructor() {
  }

  getAllUsers() {
    return this.http.get(this.url).pipe(
      map((userList: any) => userList.map((user: any) => {
        return {
          id: user.id,
          name: user.name,
          email: user.email
        }
      }))
    );
  }

  getSingleUser() {
    return this.http.get(this.url + '/2').pipe(
      tap((originalUser: any) => {
        console.log('original user:', originalUser)
      }),
      map((userData: any) => userData.company)
    )
  }

  getOneUser(id: number) : any | undefined {
    if (!this.userDetailsMap.has(id)) {
      const userDataObs$ = this.http.get(this.url + '/' + id).pipe(
        shareReplay(1)
      );
      this.userDetailsMap.set(id, userDataObs$);
    }
    return this.userDetailsMap.get(id);
  }
}
