import { User } from './invite.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MatSnackBar } from "@angular/material/snack-bar";
import { map } from 'rxjs/operators';
import * as _ from 'lodash';


export interface User {
  id?: number;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class InviteService {
  private readonly url = 'http://localhost:3000/users';
  public loading: boolean;

  constructor(private http: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar) {}

  /**
   * getting the list of invited users
   *
   * @returns {Observable<User[]>}
   * @memberof InviteService
   */
  get(): Observable<User[]> {
    this.loading = true;
    return this.http.get<User[]>(this.url).pipe(
      map((response) => {
      console.log(response);
      this.loading = false;
      return _.uniqBy(response, 'email');;
      } )
    );
  }

  /**
   * this function is forposting the invited user the server and showing the messages to the user
   *
   * @param {User} user
   * @memberof InviteService
   */
  invite(user: User) {
    this.router.navigateByUrl("/list");
    this.loading = true;
    this.http.post<User>(this.url, user).subscribe(
      (response: User) => {
        console.log(response);
      if(response )
      this.snackBar.open("success", "", {
        duration: 1000,
        panelClass: ['green-snackbar'],
        verticalPosition: 'top'
      });
      this.loading = false;

    },(error) =>{
      console.log(error)
      this.snackBar.open( user.email + " already exists", "", {
        duration: 5000,
        panelClass: ['red-snackbar'],
        verticalPosition: 'bottom'
      });
      this.loading = false;

    }
    );
  }
}
