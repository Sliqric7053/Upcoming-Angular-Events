import { Injectable } from '@angular/core';
import { IUser } from './user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  currentUser: IUser;

  loginUser(username: string, password: string): Observable<IUser | boolean> {
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http
      .post<IUser>(
        '/api/login',
        { username: username, password: password },
        options
      )
      .pipe(
        tap(data => {
          this.currentUser = <IUser>data['user'];
        })
      )
      .pipe(
        catchError(error => {
          return of(false);
        })
      );
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  checkAuthStatus() {
    this.http
      .get('/api/currentIdentity')
      .pipe(
        tap(data => {
          if (data instanceof Object) {
            this.currentUser = <IUser>data;
          }
        })
      )
      .subscribe();
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;

    const options = {
      headers: { 'Content-Type': 'application/json' },
    };
    return this.http.put(
      `/api/users/${this.currentUser.id}`,
      this.currentUser,
      options
    );
  }
}
